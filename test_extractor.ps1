param(
    [string]$excelPath = "downloaded_maestro.xlsx"
)

[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
Add-Type -AssemblyName System.IO.Compression.FileSystem
Add-Type -AssemblyName System.Xml.Linq

if (-not (Test-Path $excelPath)) {
    Write-Error "No se encontró el archivo $excelPath"
    exit 1
}

$zip = [System.IO.Compression.ZipFile]::OpenRead($excelPath)

# 1. Map workbook sheets to zip entries
$relDoc = [System.Xml.Linq.XDocument]::Load($zip.GetEntry('xl/_rels/workbook.xml.rels').Open())
$relMap = @{}
foreach ($rel in $relDoc.Root.Elements()) {
    $relMap[$rel.Attribute('Id').Value] = $rel.Attribute('Target').Value
}

$wbDoc = [System.Xml.Linq.XDocument]::Load($zip.GetEntry('xl/workbook.xml').Open())
$ns = $wbDoc.Root.Name.Namespace
$sheetTargets = @{}
foreach ($sh in $wbDoc.Root.Element($ns + 'sheets').Elements($ns + 'sheet')) {
    $sheetTargets[$sh.Attribute('name').Value] = $relMap[$sh.Attribute([System.Xml.Linq.XName]::Get('id', 'http://schemas.openxmlformats.org/officeDocument/2006/relationships')).Value]
}

# 2. Shared strings
$sst = New-Object System.Collections.Generic.List[string](15000)
$sstEntry = $zip.GetEntry('xl/sharedStrings.xml')
if ($sstEntry) {
    $xDoc = [System.Xml.Linq.XDocument]::Load($sstEntry.Open())
    $sns = $xDoc.Root.Name.Namespace
    foreach ($si in $xDoc.Root.Elements($sns + 'si')) {
        $t = ""
        foreach ($el in $si.Descendants($sns + 't')) { $t += $el.Value }
        $sst.Add($t)
    }
}

Write-Host "[OK] Shared strings cargados: $($sst.Count)"

# Helper to read table rows
function Read-SimpleTable($sheetName, $minRow = 2) {
    $target = $sheetTargets[$sheetName]
    if (-not $target) { return @() }
    $entry = $zip.GetEntry("xl/" + $target.TrimStart('/'))
    if (-not $entry) { return @() }
    
    $rows = @()
    $st = $entry.Open()
    $rd = [System.Xml.XmlReader]::Create($st)
    $r = 0
    $idx = 0
    try {
        while ($rd.Read()) {
            if ($rd.NodeType -eq [System.Xml.XmlNodeType]::Element -and $rd.LocalName -eq 'row') {
                $r++
                if ($r -lt $minRow) { continue }
                $cells = @{}
                if (-not $rd.IsEmptyElement) {
                    $rowDepth = $rd.Depth
                    while ($rd.Read() -and -not ($rd.NodeType -eq [System.Xml.XmlNodeType]::EndElement -and $rd.LocalName -eq 'row' -and $rd.Depth -eq $rowDepth)) {
                        if ($rd.NodeType -eq [System.Xml.XmlNodeType]::Element -and $rd.LocalName -eq 'c') {
                            $cellRef = $rd.GetAttribute('r')
                            $col = $cellRef -replace '\d+', ''
                            $t = $rd.GetAttribute('t')
                            if (-not $rd.IsEmptyElement) {
                                $cDepth = $rd.Depth
                                $val = ""
                                while ($rd.Read() -and -not ($rd.NodeType -eq [System.Xml.XmlNodeType]::EndElement -and $rd.LocalName -eq 'c' -and $rd.Depth -eq $cDepth)) {
                                    if ($rd.NodeType -eq [System.Xml.XmlNodeType]::Element -and $rd.LocalName -eq 'v') {
                                        if ($rd.Read() -and ($rd.NodeType -eq [System.Xml.XmlNodeType]::Text -or $rd.NodeType -eq [System.Xml.XmlNodeType]::SignificantWhitespace)) {
                                            $raw = $rd.Value
                                            if ($t -eq 's' -and [int]::TryParse($raw, [ref]$idx) -and $idx -ge 0 -and $idx -lt $sst.Count) {
                                                $val = $sst[$idx]
                                            } else {
                                                $val = $raw
                                            }
                                        }
                                    }
                                }
                                if ($col.Length -gt 0 -and $val.Length -gt 0) {
                                    $cells[$col] = $val
                                }
                            }
                        }
                    }
                }
                if ($cells.Count -gt 0) {
                    $rows += ,$cells
                }
            }
        }
    } finally {
        $rd.Dispose()
        $st.Dispose()
    }
    return $rows
}

Write-Host "Leyendo SLA FV Acumulado..."
$acumRows = Read-SimpleTable "SLA FV Acumulado" 6
Write-Host "Leídas $($acumRows.Count) filas."

Write-Host "Leyendo SLA FV Diario..."
$diaRows = Read-SimpleTable "SLA FV Diario" 5
Write-Host "Leídas $($diaRows.Count) filas."

# Find max date in Acumulado and Diario
$maxAcumDate = 0
foreach ($rw in $acumRows) {
    if ([double]::TryParse($rw['C'], [ref]$dv) -and $dv -gt $maxAcumDate) { $maxAcumDate = $dv }
}
$maxDiaDate = 0
foreach ($rw in $diaRows) {
    if ([double]::TryParse($rw['C'], [ref]$dv) -and $dv -gt $maxDiaDate) { $maxDiaDate = $dv }
}

Write-Host "Max Fecha Acumulado: $maxAcumDate ($([DateTime]::FromOADate($maxAcumDate).ToString('yyyy-MM-dd')))"
Write-Host "Max Fecha Diario:    $maxDiaDate ($([DateTime]::FromOADate($maxDiaDate).ToString('yyyy-MM-dd')))"

# Test extract PBA for maxAcumDate
$pbaAcum = $acumRows | Where-Object { $_['A'] -eq 'PAQ.AR' -and $_['B'] -eq 'PBA / La Pampa' -and $_['C'] -eq "$maxAcumDate" } | Select-Object -First 1
$pbaDia = $diaRows | Where-Object { $_['A'] -eq 'PAQ.AR' -and $_['B'] -eq 'PBA / La Pampa' -and $_['C'] -eq "$maxDiaDate" } | Select-Object -First 1

Write-Host "PBA Acum: Vol=$($pbaAcum['D']) | SLA=$($pbaAcum['E']) | FV=$($pbaAcum['G'])"
Write-Host "PBA Dia:  Vol=$($pbaDia['D']) | SLA=$($pbaDia['E']) | FV=$($pbaDia['G'])"

$zip.Dispose()
