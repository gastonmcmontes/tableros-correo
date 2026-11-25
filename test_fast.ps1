[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
Add-Type -AssemblyName System.IO.Compression.FileSystem
Add-Type -AssemblyName System.Xml.Linq

$excelPath = Join-Path $PSScriptRoot "downloaded_maestro.xlsx"
if (-not (Test-Path $excelPath)) {
    Write-Error "No se encontró downloaded_maestro.xlsx"
    exit 1
}

$zip = [System.IO.Compression.ZipFile]::OpenRead($excelPath)

# 1. Map sheet targets
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
$sst = New-Object System.Collections.Generic.List[string]
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

function Get-SheetRows($sheetName) {
    $target = $sheetTargets[$sheetName]
    if (-not $target) { return @() }
    $entry = $zip.GetEntry("xl/" + $target.TrimStart('/'))
    $xDoc = [System.Xml.Linq.XDocument]::Load($entry.Open())
    $sns = $xDoc.Root.Name.Namespace
    return $xDoc.Root.Element($sns + 'sheetData').Elements($sns + 'row')
}

Write-Host "Procesando Maestro oficial directamente..."
$zip.Dispose()
Write-Host "Listo."
