param(
    [string]$excelPath = "c:\Users\gmontes\OneDrive - Correo Argentino\Escritorio\app celu pba\downloaded_maestro.xlsx",
    [string]$outJsonPath = "c:\Users\gmontes\OneDrive - Correo Argentino\Escritorio\app celu pba\live_maestro_summary.json"
)

[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
Add-Type -ReferencedAssemblies "System.Xml","System.IO.Compression","System.IO.Compression.FileSystem" -TypeDefinition @"
using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Xml;

public class FastMetricRow {
    public string Producto;
    public string Denominacion;
    public double FechaSerial;
    public double Volumen;
    public double Sla;
    public double Fv;
}

public class FastExpresoRow {
    public string Denominacion;
    public double FechaSerial;
    public double Q;
    public double Sla;
    public double QGest;
    public double Fv;
}

public static class FastMaestroExtractor3 {
    public static List<string> LoadSst(ZipArchive zip) {
        var list = new List<string>(15000);
        var entry = zip.GetEntry("xl/sharedStrings.xml");
        if (entry == null) return list;
        using (var st = entry.Open())
        using (var rd = XmlReader.Create(st)) {
            while (rd.Read()) {
                if (rd.NodeType == XmlNodeType.Element && rd.LocalName == "si") {
                    using (var sub = rd.ReadSubtree()) {
                        string txt = "";
                        while (sub.Read()) {
                            if (sub.NodeType == XmlNodeType.Element && sub.LocalName == "t" && !sub.IsEmptyElement) {
                                if (sub.Read() && (sub.NodeType == XmlNodeType.Text || sub.NodeType == XmlNodeType.Whitespace || sub.NodeType == XmlNodeType.SignificantWhitespace)) {
                                    txt += sub.Value;
                                }
                            }
                        }
                        list.Add(txt);
                    }
                }
            }
        }
        return list;
    }

    public static List<FastMetricRow> ReadAllMetricRows(ZipArchive zip, string sheetPath, List<string> sst) {
        var list = new List<FastMetricRow>(60000);
        var entry = zip.GetEntry(sheetPath);
        if (entry == null) return list;
        using (var st = entry.Open())
        using (var rd = XmlReader.Create(st)) {
            int r = 0;
            while (rd.Read()) {
                if (rd.NodeType == XmlNodeType.Element && rd.LocalName == "row") {
                    r++;
                    if (r < 5) continue;
                    string prod = "", denom = "", fechaStr = "", volStr = "", slaStr = "", fvStr = "";
                    if (!rd.IsEmptyElement) {
                        int rowDepth = rd.Depth;
                        while (rd.Read() && !(rd.NodeType == XmlNodeType.EndElement && rd.LocalName == "row" && rd.Depth == rowDepth)) {
                            if (rd.NodeType == XmlNodeType.Element && rd.LocalName == "c") {
                                string cellRef = rd.GetAttribute("r") ?? "";
                                string col = "";
                                for (int i = 0; i < cellRef.Length; i++) {
                                    if (!char.IsDigit(cellRef[i])) col += cellRef[i];
                                }
                                string t = rd.GetAttribute("t") ?? "";
                                if (!rd.IsEmptyElement) {
                                    int cDepth = rd.Depth;
                                    string val = "";
                                    while (rd.Read() && !(rd.NodeType == XmlNodeType.EndElement && rd.LocalName == "c" && rd.Depth == cDepth)) {
                                        if (rd.NodeType == XmlNodeType.Element && rd.LocalName == "v") {
                                            if (rd.Read() && (rd.NodeType == XmlNodeType.Text || rd.NodeType == XmlNodeType.Whitespace || rd.NodeType == XmlNodeType.SignificantWhitespace)) {
                                                string raw = rd.Value;
                                                int idx;
                                                if (t == "s" && int.TryParse(raw, out idx) && idx >= 0 && idx < sst.Count) {
                                                    val = sst[idx];
                                                } else {
                                                    val = raw;
                                                }
                                            }
                                        }
                                    }
                                    if (col == "A") prod = val;
                                    else if (col == "B") denom = val;
                                    else if (col == "C") fechaStr = val;
                                    else if (col == "D") volStr = val;
                                    else if (col == "E") slaStr = val;
                                    else if (col == "G") fvStr = val;
                                }
                            }
                        }
                    }
                    if (prod.Length > 0 && denom.Length > 0 && fechaStr.Length > 0) {
                        double fSerial = 0, vol = 0, sla = 0, fv = 0;
                        double.TryParse(fechaStr, System.Globalization.NumberStyles.Any, System.Globalization.CultureInfo.InvariantCulture, out fSerial);
                        double.TryParse(volStr, System.Globalization.NumberStyles.Any, System.Globalization.CultureInfo.InvariantCulture, out vol);
                        double.TryParse(slaStr, System.Globalization.NumberStyles.Any, System.Globalization.CultureInfo.InvariantCulture, out sla);
                        double.TryParse(fvStr, System.Globalization.NumberStyles.Any, System.Globalization.CultureInfo.InvariantCulture, out fv);
                        if (fSerial > 40000) {
                            list.Add(new FastMetricRow {
                                Producto = prod,
                                Denominacion = denom,
                                FechaSerial = fSerial,
                                Volumen = vol,
                                Sla = sla,
                                Fv = fv
                            });
                        }
                    }
                }
            }
        }
        return list;
    }

    public static List<FastExpresoRow> ReadAllExpresoRows(ZipArchive zip, string sheetPath, List<string> sst) {
        var list = new List<FastExpresoRow>(30000);
        var entry = zip.GetEntry(sheetPath);
        if (entry == null) return list;
        using (var st = entry.Open())
        using (var rd = XmlReader.Create(st)) {
            int r = 0;
            while (rd.Read()) {
                if (rd.NodeType == XmlNodeType.Element && rd.LocalName == "row") {
                    r++;
                    if (r < 6) continue;
                    string denom = "", fechaStr = "", qStr = "", slaStr = "", qGestStr = "", fvStr = "";
                    if (!rd.IsEmptyElement) {
                        int rowDepth = rd.Depth;
                        while (rd.Read() && !(rd.NodeType == XmlNodeType.EndElement && rd.LocalName == "row" && rd.Depth == rowDepth)) {
                            if (rd.NodeType == XmlNodeType.Element && rd.LocalName == "c") {
                                string cellRef = rd.GetAttribute("r") ?? "";
                                string col = "";
                                for (int i = 0; i < cellRef.Length; i++) {
                                    if (!char.IsDigit(cellRef[i])) col += cellRef[i];
                                }
                                string t = rd.GetAttribute("t") ?? "";
                                if (!rd.IsEmptyElement) {
                                    int cDepth = rd.Depth;
                                    string val = "";
                                    while (rd.Read() && !(rd.NodeType == XmlNodeType.EndElement && rd.LocalName == "c" && rd.Depth == cDepth)) {
                                        if (rd.NodeType == XmlNodeType.Element && rd.LocalName == "v") {
                                            if (rd.Read() && (rd.NodeType == XmlNodeType.Text || rd.NodeType == XmlNodeType.Whitespace || rd.NodeType == XmlNodeType.SignificantWhitespace)) {
                                                string raw = rd.Value;
                                                int idx;
                                                if (t == "s" && int.TryParse(raw, out idx) && idx >= 0 && idx < sst.Count) {
                                                    val = sst[idx];
                                                } else {
                                                    val = raw;
                                                }
                                            }
                                        }
                                    }
                                    if (col == "A") denom = val;
                                    else if (col == "B") fechaStr = val;
                                    else if (col == "C") qStr = val;
                                    else if (col == "D") slaStr = val;
                                    else if (col == "E") qGestStr = val;
                                    else if (col == "F") fvStr = val;
                                }
                            }
                        }
                    }
                    if (denom.Length > 0 && fechaStr.Length > 0) {
                        double fSerial = 0, q = 0, sla = 0, qGest = 0, fv = 0;
                        double.TryParse(fechaStr, System.Globalization.NumberStyles.Any, System.Globalization.CultureInfo.InvariantCulture, out fSerial);
                        double.TryParse(qStr, System.Globalization.NumberStyles.Any, System.Globalization.CultureInfo.InvariantCulture, out q);
                        double.TryParse(slaStr, System.Globalization.NumberStyles.Any, System.Globalization.CultureInfo.InvariantCulture, out sla);
                        double.TryParse(qGestStr, System.Globalization.NumberStyles.Any, System.Globalization.CultureInfo.InvariantCulture, out qGest);
                        double.TryParse(fvStr, System.Globalization.NumberStyles.Any, System.Globalization.CultureInfo.InvariantCulture, out fv);
                        if (fSerial > 40000) {
                            list.Add(new FastExpresoRow {
                                Denominacion = denom,
                                FechaSerial = fSerial,
                                Q = q,
                                Sla = sla,
                                QGest = qGest,
                                Fv = fv
                            });
                        }
                    }
                }
            }
        }
        return list;
    }
}
"@

if (-not (Test-Path $excelPath)) {
    Write-Error "No se encontró $excelPath"
    exit 1
}

$zip = [System.IO.Compression.ZipFile]::OpenRead($excelPath)
$sst = [FastMaestroExtractor3]::LoadSst($zip)

# Resolución dinámica de hojas por nombre (a prueba de reordenamientos del Maestro de Matías)
$sheetsXml = [xml](New-Object IO.StreamReader($zip.GetEntry('xl/workbook.xml').Open())).ReadToEnd()
$relsXml = [xml](New-Object IO.StreamReader($zip.GetEntry('xl/_rels/workbook.xml.rels').Open())).ReadToEnd()
$mapRel = @{}
foreach ($r in $relsXml.Relationships.Relationship) {
    $mapRel[$r.Id] = "xl/" + $r.Target.Replace("\", "/")
}
$sheetAcumPath = "xl/worksheets/sheet10.xml"
$sheetDiaPath = "xl/worksheets/sheet11.xml"
$sheetExpAcumPath = "xl/worksheets/sheet8.xml"
$sheetExpDiaPath = "xl/worksheets/sheet9.xml"

foreach ($s in $sheetsXml.workbook.sheets.sheet) {
    if ($s.name -eq "SLA FV Acumulado") { $sheetAcumPath = $mapRel[$s.id] }
    elseif ($s.name -eq "SLA FV Diario") { $sheetDiaPath = $mapRel[$s.id] }
    elseif ($s.name -eq "expreso_acum") { $sheetExpAcumPath = $mapRel[$s.id] }
    elseif ($s.name -eq "expreso_diario") { $sheetExpDiaPath = $mapRel[$s.id] }
}

Write-Host "   -> Hojas detectadas dinámicamente:"
Write-Host "      * SLA FV Acumulado: $sheetAcumPath"
Write-Host "      * SLA FV Diario:    $sheetDiaPath"
Write-Host "      * Expreso Acum:     $sheetExpAcumPath"
Write-Host "      * Expreso Diario:   $sheetExpDiaPath"

# 1. Paq.AR & Clásico - Acumulado Mes
$acumAll = [FastMaestroExtractor3]::ReadAllMetricRows($zip, $sheetAcumPath, $sst)
$maxAcumDate = ($acumAll | Measure-Object -Property FechaSerial -Maximum).Maximum
$acumLatest = $acumAll | Where-Object { $_.FechaSerial -eq $maxAcumDate }

# 2. Paq.AR & Clásico - Diario Dia
$diaAll = [FastMaestroExtractor3]::ReadAllMetricRows($zip, $sheetDiaPath, $sst)
$maxDiaDate = ($diaAll | Measure-Object -Property FechaSerial -Maximum).Maximum
$diaLatest = $diaAll | Where-Object { $_.FechaSerial -eq $maxDiaDate }

# 3. Expreso - Acumulado Mes
$expAcumAll = [FastMaestroExtractor3]::ReadAllExpresoRows($zip, $sheetExpAcumPath, $sst)
$maxExpAcumDate = ($expAcumAll | Measure-Object -Property FechaSerial -Maximum).Maximum
$expAcumLatest = $expAcumAll | Where-Object { $_.FechaSerial -eq $maxExpAcumDate }

# 4. Expreso - Diario Dia
$expDiaAll = [FastMaestroExtractor3]::ReadAllExpresoRows($zip, $sheetExpDiaPath, $sst)
$maxExpDiaDate = ($expDiaAll | Measure-Object -Property FechaSerial -Maximum).Maximum
$expDiaLatest = $expDiaAll | Where-Object { $_.FechaSerial -eq $maxExpDiaDate }

$zip.Dispose()

function Build-SummaryObj($rows, $expRows) {
    $map = @{
        "PBA"          = "PBA / La Pampa";
        "NACIONAL"     = "NACIONAL";
        "METRO"        = "METROPOLITANA";
        "CENTRO_NEA"   = "Centro - NEA";
        "CUYO_NOA"     = "Cuyo - NOA";
        "SUR"          = "SUR";
    }
    
    $out = [ordered]@{}
    foreach ($k in $map.Keys) {
        $regName = $map[$k]
        $paq = $rows | Where-Object { $_.Producto -eq 'PAQ.AR' -and $_.Denominacion -eq $regName } | Select-Object -First 1
        $cla = $rows | Where-Object { $_.Producto -eq 'Clásico' -and $_.Denominacion -eq $regName } | Select-Object -First 1
        $exp = $expRows | Where-Object { $_.Denominacion -eq $regName } | Select-Object -First 1
        
        $out[$k] = [ordered]@{
            volumen      = if ($paq) { [int]$paq.Volumen } else { 0 };
            sla_paqar    = if ($paq) { [math]::Round($paq.Sla * 100, 2) } else { 0 };
            fv_paqar     = if ($paq) { [math]::Round($paq.Fv * 100, 2) } else { 0 };
            sla_clasico  = if ($cla) { [math]::Round($cla.Sla * 100, 2) } else { 0 };
            sla_expreso  = if ($exp) { [math]::Round($exp.Sla * 100, 2) } else { 0 };
            fv_expreso   = if ($exp) { [math]::Round($exp.Fv * 100, 2) } else { 0 };
            q_expreso    = if ($exp) { [int]$exp.Q } else { 0 };
            qgest_expreso= if ($exp) { [int]$exp.QGest } else { 0 };
        }
    }
    return $out
}

function Build-NodeExpreso($expRows) {
    $nodeMap = @{
        "BHI" = "BAHIA BLANCA";
        "LPG" = "LA PLATA";
        "MDQ" = "MAR DEL PLATA";
        "MER" = "MERCEDES";
        "PER" = "PERGAMINO";
        "RSA" = "SANTA ROSA";
    }
    $out = [ordered]@{}
    foreach ($code in $nodeMap.Keys) {
        $denom = $nodeMap[$code]
        $item = $expRows | Where-Object { $_.Denominacion -eq $denom } | Select-Object -First 1
        $out[$code] = [ordered]@{
            sla_expreso = if ($item) { [math]::Round($item.Sla * 100, 2) } else { 0 };
            fv_expreso  = if ($item) { [math]::Round($item.Fv * 100, 2) } else { 0 };
            q           = if ($item) { [int]$item.Q } else { 0 };
            qgest       = if ($item) { [int]$item.QGest } else { 0 };
        }
    }
    return $out
}

$sumMes = Build-SummaryObj $acumLatest $expAcumLatest
$sumDia = Build-SummaryObj $diaLatest $expDiaLatest
$nodesExpMes = Build-NodeExpreso $expAcumLatest
$nodesExpDia = Build-NodeExpreso $expDiaLatest

$payload = [ordered]@{
    maxAcumDateSerial = $maxAcumDate;
    maxAcumDateIso    = [DateTime]::FromOADate($maxAcumDate).ToString("yyyy-MM-dd");
    maxDiaDateSerial  = $maxDiaDate;
    maxDiaDateIso     = [DateTime]::FromOADate($maxDiaDate).ToString("yyyy-MM-dd");
    mes               = $sumMes;
    dia               = $sumDia;
    nodes_expreso_mes = $nodesExpMes;
    nodes_expreso_dia = $nodesExpDia;
}

$json = $payload | ConvertTo-Json -Depth 5
[System.IO.File]::WriteAllText($outJsonPath, $json, (New-Object System.Text.UTF8Encoding($false)))

Write-Host "[OK] Metricas completas extraidas del Maestro:"
Write-Host "     Mes ($($payload.maxAcumDateIso)): PBA SLA Paq=$($sumMes['PBA'].sla_paqar)%, SLA Exp=$($sumMes['PBA'].sla_expreso)%, FV Exp=$($sumMes['PBA'].fv_expreso)%"
Write-Host "     Dia ($($payload.maxDiaDateIso)): PBA SLA Paq=$($sumDia['PBA'].sla_paqar)%, SLA Exp=$($sumDia['PBA'].sla_expreso)%, FV Exp=$($sumDia['PBA'].fv_expreso)%"
