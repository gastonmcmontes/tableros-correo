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

public class FastPasRow {
    public string Region;
    public string Nodo;
    public double FechaSerial;
    public double Envios;
    public double Sla;
    public double Fv;
}

public static class FastMaestroExtractor4 {
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

    public static List<FastPasRow> ReadAllPasRows(ZipArchive zip, string sheetPath, List<string> sst) {
        var list = new List<FastPasRow>(35000);
        var entry = zip.GetEntry(sheetPath);
        if (entry == null) return list;
        using (var st = entry.Open())
        using (var rd = XmlReader.Create(st)) {
            int r = 0;
            while (rd.Read()) {
                if (rd.NodeType == XmlNodeType.Element && rd.LocalName == "row") {
                    r++;
                    if (r < 9) continue;
                    string reg = "", nodo = "", enviosStr = "", slaStr = "", fvStr = "", fechaStr = "";
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
                                    if (col == "C") reg = val;
                                    else if (col == "D") nodo = val;
                                    else if (col == "E") enviosStr = val;
                                    else if (col == "F") slaStr = val;
                                    else if (col == "L") fvStr = val;
                                    else if (col == "M") fechaStr = val;
                                }
                            }
                        }
                    }
                    if (reg.Length > 0 && fechaStr.Length > 0) {
                        double fSerial = 0, env = 0, sla = 0, fv = 0;
                        double.TryParse(fechaStr, System.Globalization.NumberStyles.Any, System.Globalization.CultureInfo.InvariantCulture, out fSerial);
                        double.TryParse(enviosStr, System.Globalization.NumberStyles.Any, System.Globalization.CultureInfo.InvariantCulture, out env);
                        double.TryParse(slaStr, System.Globalization.NumberStyles.Any, System.Globalization.CultureInfo.InvariantCulture, out sla);
                        double.TryParse(fvStr, System.Globalization.NumberStyles.Any, System.Globalization.CultureInfo.InvariantCulture, out fv);
                        if (fSerial > 40000) {
                            list.Add(new FastPasRow {
                                Region = reg,
                                Nodo = nodo,
                                FechaSerial = fSerial,
                                Envios = env,
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
}
"@

if (-not (Test-Path $excelPath)) {
    Write-Error "No se encontró $excelPath"
    exit 1
}

$zip = [System.IO.Compression.ZipFile]::OpenRead($excelPath)
$sst = [FastMaestroExtractor4]::LoadSst($zip)

# 1. Paq.AR & Clásico - Acumulado Mes (sheet9)
$acumAll = [FastMaestroExtractor4]::ReadAllMetricRows($zip, "xl/worksheets/sheet9.xml", $sst)
$maxAcumDate = ($acumAll | Measure-Object -Property FechaSerial -Maximum).Maximum
$acumLatest = $acumAll | Where-Object { $_.FechaSerial -eq $maxAcumDate }

# 2. Paq.AR & Clásico - Diario Dia (sheet10)
$diaAll = [FastMaestroExtractor4]::ReadAllMetricRows($zip, "xl/worksheets/sheet10.xml", $sst)
$maxDiaDate = ($diaAll | Measure-Object -Property FechaSerial -Maximum).Maximum
$diaLatest = $diaAll | Where-Object { $_.FechaSerial -eq $maxDiaDate }

# 3. Expreso - Acumulado Mes (sheet7)
$expAcumAll = [FastMaestroExtractor4]::ReadAllExpresoRows($zip, "xl/worksheets/sheet7.xml", $sst)
$maxExpAcumDate = ($expAcumAll | Measure-Object -Property FechaSerial -Maximum).Maximum
$expAcumLatest = $expAcumAll | Where-Object { $_.FechaSerial -eq $maxExpAcumDate }

# 4. Expreso - Diario Dia (sheet8)
$expDiaAll = [FastMaestroExtractor4]::ReadAllExpresoRows($zip, "xl/worksheets/sheet8.xml", $sst)
$maxExpDiaDate = ($expDiaAll | Measure-Object -Property FechaSerial -Maximum).Maximum
$expDiaLatest = $expDiaAll | Where-Object { $_.FechaSerial -eq $maxExpDiaDate }

# 5. PAS (Cartas) - sheet15
$pasAll = [FastMaestroExtractor4]::ReadAllPasRows($zip, "xl/worksheets/sheet15.xml", $sst)
$pasDia = $pasAll | Where-Object { $_.FechaSerial -eq $maxDiaDate }
$pasMes = $pasAll | Where-Object { $_.FechaSerial -ge $maxAcumDate }

$zip.Dispose()

function Build-SummaryObj($rows, $expRows, $pasRows) {
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
        
        $pItems = $pasRows | Where-Object { $_.Region -eq $regName }
        $totCartas = if ($pItems) { ($pItems | Measure-Object -Property Envios -Sum).Sum } else { 0 }
        $totPaq = if ($paq) { [int]$paq.Volumen } else { 0 }
        $totExp = if ($exp) { [int]$exp.Q } else { 0 }
        
        # PAS SLA y FV ponderados si existen
        $pasSla = 0; $pasFv = 0
        if ($pItems -and $totCartas -gt 0) {
            $pasSla = [math]::Round(($pItems | Measure-Object -Property Sla -Average).Average * 100, 2)
            $pasFv  = [math]::Round(($pItems | Measure-Object -Property Fv -Average).Average * 100, 2)
        }
        
        $out[$k] = [ordered]@{
            total_piezas = [int]($totPaq + $totCartas); # Total = Paquetes + Cartas
            paquetes     = $totPaq;                    # Paq.AR (incluye Expreso)
            cartas       = [int]$totCartas;            # PAS (Cartas)
            expreso      = $totExp;                    # Expreso
            sla_paqar    = if ($paq) { [math]::Round($paq.Sla * 100, 2) } else { 0 };
            fv_paqar     = if ($paq) { [math]::Round($paq.Fv * 100, 2) } else { 0 };
            sla_clasico  = if ($cla) { [math]::Round($cla.Sla * 100, 2) } else { 0 };
            sla_expreso  = if ($exp) { [math]::Round($exp.Sla * 100, 2) } else { 0 };
            fv_expreso   = if ($exp) { [math]::Round($exp.Fv * 100, 2) } else { 0 };
            sla_pas      = $pasSla;
            fv_pas       = $pasFv;
        }
    }
    return $out
}

function Build-NodeMetrics($paqRows, $expRows, $pasRows) {
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
        $paq = $paqRows | Where-Object { $_.Producto -eq 'PAQ.AR' -and $_.Denominacion -eq $denom } | Select-Object -First 1
        $cla = $paqRows | Where-Object { $_.Producto -eq 'Clásico' -and $_.Denominacion -eq $denom } | Select-Object -First 1
        $exp = $expRows | Where-Object { $_.Denominacion -eq $denom } | Select-Object -First 1
        
        $pItems = $pasRows | Where-Object { $_.Nodo -eq $denom }
        $totCartas = if ($pItems) { ($pItems | Measure-Object -Property Envios -Sum).Sum } else { 0 }
        $totPaq = if ($paq) { [int]$paq.Volumen } else { 0 }
        $totExp = if ($exp) { [int]$exp.Q } else { 0 }
        
        $pasSla = 0; $pasFv = 0
        if ($pItems -and $totCartas -gt 0) {
            $pasSla = [math]::Round(($pItems | Measure-Object -Property Sla -Average).Average * 100, 2)
            $pasFv  = [math]::Round(($pItems | Measure-Object -Property Fv -Average).Average * 100, 2)
        }
        
        $out[$code] = [ordered]@{
            total_piezas = [int]($totPaq + $totCartas);
            paquetes     = $totPaq;
            cartas       = [int]$totCartas;
            expreso      = $totExp;
            sla_paqar    = if ($paq) { [math]::Round($paq.Sla * 100, 2) } else { 0 };
            fv_paqar     = if ($paq) { [math]::Round($paq.Fv * 100, 2) } else { 0 };
            sla_clasico  = if ($cla) { [math]::Round($cla.Sla * 100, 2) } else { 0 };
            sla_expreso  = if ($exp) { [math]::Round($exp.Sla * 100, 2) } else { 0 };
            fv_expreso   = if ($exp) { [math]::Round($exp.Fv * 100, 2) } else { 0 };
            sla_pas      = $pasSla;
            fv_pas       = $pasFv;
        }
    }
    return $out
}

$sumMes = Build-SummaryObj $acumLatest $expAcumLatest $pasMes
$sumDia = Build-SummaryObj $diaLatest $expDiaLatest $pasDia
$nodesMes = Build-NodeMetrics $acumLatest $expAcumLatest $pasMes
$nodesDia = Build-NodeMetrics $diaLatest $expDiaLatest $pasDia

$payload = [ordered]@{
    maxAcumDateSerial = $maxAcumDate;
    maxAcumDateIso    = [DateTime]::FromOADate($maxAcumDate).ToString("yyyy-MM-dd");
    maxDiaDateSerial  = $maxDiaDate;
    maxDiaDateIso     = [DateTime]::FromOADate($maxDiaDate).ToString("yyyy-MM-dd");
    mes               = $sumMes;
    dia               = $sumDia;
    nodes_mes         = $nodesMes;
    nodes_dia         = $nodesDia;
}

$json = $payload | ConvertTo-Json -Depth 6
[System.IO.File]::WriteAllText($outJsonPath, $json, (New-Object System.Text.UTF8Encoding($false)))

Write-Host "[OK] Metricas consolidadas con premisas oficiales guardadas exitosamente en $outJsonPath"
