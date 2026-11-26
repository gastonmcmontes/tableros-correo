param(
    [string]$excelPath = "$PSScriptRoot\downloaded_maestro.xlsx",
    [string]$outJsonPath = "$PSScriptRoot\live_maestro_summary.json"
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
$sheetPasPath = "xl/worksheets/sheet16.xml"

foreach ($s in $sheetsXml.workbook.sheets.sheet) {
    if ($s.name -eq "SLA FV Acumulado") { $sheetAcumPath = $mapRel[$s.id] }
    elseif ($s.name -eq "SLA FV Diario") { $sheetDiaPath = $mapRel[$s.id] }
    elseif ($s.name -eq "expreso_acum") { $sheetExpAcumPath = $mapRel[$s.id] }
    elseif ($s.name -eq "expreso_diario") { $sheetExpDiaPath = $mapRel[$s.id] }
    elseif ($s.name -eq "pas_sla_fv") { $sheetPasPath = $mapRel[$s.id] }
}

Write-Host "   -> Hojas detectadas dinámicamente:"
Write-Host "      * SLA FV Acumulado: $sheetAcumPath"
Write-Host "      * SLA FV Diario:    $sheetDiaPath"
Write-Host "      * Expreso Acum:     $sheetExpAcumPath"
Write-Host "      * Expreso Diario:   $sheetExpDiaPath"
Write-Host "      * PAS SLA FV:       $sheetPasPath"

# 1. Paq.AR & Clásico - Acumulado Mes
$acumAll = [FastMaestroExtractor4]::ReadAllMetricRows($zip, $sheetAcumPath, $sst)
$maxAcumDate = ($acumAll | Measure-Object -Property FechaSerial -Maximum).Maximum
$acumLatest = $acumAll | Where-Object { $_.FechaSerial -eq $maxAcumDate }

# 2. Paq.AR & Clásico - Diario Dia
$diaAll = [FastMaestroExtractor4]::ReadAllMetricRows($zip, $sheetDiaPath, $sst)
$maxDiaDate = ($diaAll | Measure-Object -Property FechaSerial -Maximum).Maximum
$diaLatest = $diaAll | Where-Object { $_.FechaSerial -eq $maxDiaDate }

# 3. Expreso - Acumulado Mes
$expAcumAll = [FastMaestroExtractor4]::ReadAllExpresoRows($zip, $sheetExpAcumPath, $sst)
$maxExpAcumDate = ($expAcumAll | Measure-Object -Property FechaSerial -Maximum).Maximum
$expAcumLatest = $expAcumAll | Where-Object { $_.FechaSerial -eq $maxExpAcumDate }

# 4. Expreso - Diario Dia
$expDiaAll = [FastMaestroExtractor4]::ReadAllExpresoRows($zip, $sheetExpDiaPath, $sst)
$maxExpDiaDate = ($expDiaAll | Measure-Object -Property FechaSerial -Maximum).Maximum
$expDiaLatest = $expDiaAll | Where-Object { $_.FechaSerial -eq $maxExpDiaDate }

# 5. PAS (Cartas)
$pasAll = [FastMaestroExtractor4]::ReadAllPasRows($zip, $sheetPasPath, $sst)
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

# 6. Generación de series diarias de los últimos 10 días operativos (para Regiones y Nodos)
$last10Serials = $diaAll | Select-Object -ExpandProperty FechaSerial -Unique | Sort-Object -Descending | Select-Object -First 10 | Sort-Object
$monthsEs = @{ 1="Ene"; 2="Feb"; 3="Mar"; 4="Abr"; 5="May"; 6="Jun"; 7="Jul"; 8="Ago"; 9="Sep"; 10="Oct"; 11="Nov"; 12="Dic" }

$diaLookup = @{}
foreach ($r in $diaAll) {
    $diaLookup["$($r.Denominacion)_$($r.FechaSerial)_$($r.Producto)"] = $r
}
$expLookup = @{}
foreach ($r in $expDiaAll) {
    $expLookup["$($r.Denominacion)_$($r.FechaSerial)"] = $r
}
$pasRegLookup = @{}
$pasNodoLookup = @{}
foreach ($r in $pasAll) {
    $kReg = "$($r.Region)_$($r.FechaSerial)"
    if (-not $pasRegLookup.ContainsKey($kReg)) { $pasRegLookup[$kReg] = [System.Collections.Generic.List[object]]::new() }
    $pasRegLookup[$kReg].Add($r)

    $kNodo = "$($r.Nodo)_$($r.FechaSerial)"
    if (-not $pasNodoLookup.ContainsKey($kNodo)) { $pasNodoLookup[$kNodo] = [System.Collections.Generic.List[object]]::new() }
    $pasNodoLookup[$kNodo].Add($r)
}

$regionMap10 = @{
    "NACIONAL"     = "NACIONAL";
    "METRO"        = "METROPOLITANA";
    "METROPOLITANA"= "METROPOLITANA";
    "PBA"          = "PBA / La Pampa";
    "CENTRO_NEA"   = "Centro - NEA";
    "CUYO_NOA"     = "Cuyo - NOA";
    "SUR"          = "SUR";
}

$nodeCodeToDenomAll = @{
    "BHI" = "BAHIA BLANCA"; "LPG" = "LA PLATA"; "MDQ" = "MAR DEL PLATA"; "MER" = "MERCEDES";
    "PER" = "PERGAMINO"; "RSA" = "SANTA ROSA"; "DP2" = "CENTRO PAQUETERIA CABA SUR";
    "DP3" = "CENTRO PAQUETERIA LOMAS"; "DP4" = "CENTRO PAQUETERIA MORON"; "DP5" = "CENTRO PAQUETERIA QUILMES";
    "DP6" = "PAQUETERIA VICENTE LOPEZ"; "COR" = "CORDOBA"; "CNQ" = "CORRIENTES"; "PRA" = "PARANA";
    "PSS" = "POSADAS"; "RES" = "RESISTENCIA"; "RCU" = "RIO CUARTO"; "ROS" = "ROSARIO"; "SFN" = "SANTA FE";
    "VMR" = "VILLA MARIA"; "CTC" = "CATAMARCA"; "JUJ" = "JUJUY"; "IRJ" = "LA RIOJA"; "MDZ" = "MENDOZA";
    "SLA" = "SALTA"; "UAQ" = "SAN JUAN"; "LUQ" = "SAN LUIS"; "TUC" = "SAN MIGUEL DE TUCUMAN";
    "SDE" = "SANTIAGO DEL ESTERO"; "BRC" = "BARILOCHE"; "CRD" = "COMODORO RIVADAVIA"; "NQN" = "NEUQUEN";
    "RGL" = "RIO GALLEGOS"; "REL" = "TRELEW"; "USH" = "USHUAIA";
}

$dailySeriesRegions = [ordered]@{}
foreach ($regKey in $regionMap10.Keys) {
    $denom = $regionMap10[$regKey]
    $slaPaqArr = @(); $fvPaqArr = @(); $slaPasArr = @(); $fvPasArr = @(); $slaExpArr = @(); $fvExpArr = @()

    foreach ($s in $last10Serials) {
        $dt = [DateTime]::FromOADate($s)
        $dateLabel = "$($dt.Day) $($monthsEs[$dt.Month])"

        $p = $diaLookup["${denom}_${s}_PAQ.AR"]
        $paqSla = if ($p) { [math]::Round($p.Sla * 100, 2) } else { $null }
        $paqFv  = if ($p) { [math]::Round($p.Fv * 100, 2) } else { $null }
        $paqVol = if ($p) { [int]$p.Volumen } else { 0 }

        $pPas = $pasRegLookup["${denom}_${s}"]
        $pasVol = 0; $pasSla = $null; $pasFv = $null
        if ($pPas) {
            foreach ($it in $pPas) { $pasVol += $it.Envios }
            if ($pasVol -gt 0) {
                $sumSla = 0; $sumFv = 0
                foreach ($it in $pPas) { $sumSla += $it.Sla; $sumFv += $it.Fv }
                $pasSla = [math]::Round(($sumSla / $pPas.Count) * 100, 2)
                $pasFv  = [math]::Round(($sumFv / $pPas.Count) * 100, 2)
            }
        }

        $exp = $expLookup["${denom}_${s}"]
        $expSla = if ($exp) { [math]::Round($exp.Sla * 100, 2) } else { $null }
        $expFv  = if ($exp) { [math]::Round($exp.Fv * 100, 2) } else { $null }
        $expVol = if ($exp) { [int]$exp.Q } else { 0 }

        $slaPaqArr += ,@($dateLabel, $paqSla, $paqVol)
        $fvPaqArr  += ,@($dateLabel, $paqFv, $paqVol)
        $slaPasArr += ,@($dateLabel, $pasSla, $pasVol)
        $fvPasArr  += ,@($dateLabel, $pasFv, $pasVol)
        $slaExpArr += ,@($dateLabel, $expSla, $expVol)
        $fvExpArr  += ,@($dateLabel, $expFv, $expVol)
    }

    $dailySeriesRegions[$regKey] = [ordered]@{
        sla_paqar   = $slaPaqArr; fv_paqar    = $fvPaqArr;
        sla_pas     = $slaPasArr; fv_pas      = $fvPasArr;
        sla_expreso = $slaExpArr; fv_expreso  = $fvExpArr;
    }
}

$dailySeriesNodes = [ordered]@{}
foreach ($code in $nodeCodeToDenomAll.Keys) {
    $denom = $nodeCodeToDenomAll[$code]
    $slaPaqArr = @(); $fvPaqArr = @(); $slaPasArr = @(); $fvPasArr = @(); $slaExpArr = @(); $fvExpArr = @()

    foreach ($s in $last10Serials) {
        $dt = [DateTime]::FromOADate($s)
        $dateLabel = "$($dt.Day) $($monthsEs[$dt.Month])"
        $isoDate = $dt.ToString("yyyy-MM-dd")

        $p = $diaLookup["${denom}_${s}_PAQ.AR"]
        $paqSla = if ($p) { [math]::Round($p.Sla * 100, 2) } else { $null }
        $paqFv  = if ($p) { [math]::Round($p.Fv * 100, 2) } else { $null }
        $paqVol = if ($p) { [int]$p.Volumen } else { 0 }

        $pPas = $pasNodoLookup["${denom}_${s}"]
        $pasVol = 0; $pasSla = $null; $pasFv = $null
        if ($pPas) {
            foreach ($it in $pPas) { $pasVol += $it.Envios }
            if ($pasVol -gt 0) {
                $sumSla = 0; $sumFv = 0
                foreach ($it in $pPas) { $sumSla += $it.Sla; $sumFv += $it.Fv }
                $pasSla = [math]::Round(($sumSla / $pPas.Count) * 100, 2)
                $pasFv  = [math]::Round(($sumFv / $pPas.Count) * 100, 2)
            }
        }

        $exp = $expLookup["${denom}_${s}"]
        $expSla = if ($exp) { [math]::Round($exp.Sla * 100, 2) } else { $null }
        $expFv  = if ($exp) { [math]::Round($exp.Fv * 100, 2) } else { $null }
        $expVol = if ($exp) { [int]$exp.Q } else { 0 }

        $slaPaqArr += [ordered]@{ dateLabel = $dateLabel; isoDate = $isoDate; value = $paqSla; target = 95.0; volume = $paqVol }
        $fvPaqArr  += [ordered]@{ dateLabel = $dateLabel; isoDate = $isoDate; value = $paqFv;  target = 90.0; volume = $paqVol }
        $slaPasArr += [ordered]@{ dateLabel = $dateLabel; isoDate = $isoDate; value = $pasSla; target = 95.0; volume = $pasVol }
        $fvPasArr  += [ordered]@{ dateLabel = $dateLabel; isoDate = $isoDate; value = $pasFv;  target = 90.0; volume = $pasVol }
        $slaExpArr += [ordered]@{ dateLabel = $dateLabel; isoDate = $isoDate; value = $expSla; target = 95.0; volume = $expVol }
        $fvExpArr  += [ordered]@{ dateLabel = $dateLabel; isoDate = $isoDate; value = $expFv;  target = 90.0; volume = $expVol }
    }

    $dailySeriesNodes[$code] = [ordered]@{
        sla_paqar   = $slaPaqArr; fv_paqar    = $fvPaqArr;
        sla_pas     = $slaPasArr; fv_pas      = $fvPasArr;
        sla_expreso = $slaExpArr; fv_expreso  = $fvExpArr;
    }
}

$payload = [ordered]@{
    maxAcumDateSerial    = $maxAcumDate;
    maxAcumDateIso       = [DateTime]::FromOADate($maxAcumDate).ToString("yyyy-MM-dd");
    maxDiaDateSerial     = $maxDiaDate;
    maxDiaDateIso        = [DateTime]::FromOADate($maxDiaDate).ToString("yyyy-MM-dd");
    mes                  = $sumMes;
    dia                  = $sumDia;
    nodes_mes            = $nodesMes;
    nodes_dia            = $nodesDia;
    daily_series_regions = $dailySeriesRegions;
    daily_series_nodes   = $dailySeriesNodes;
}

$json = $payload | ConvertTo-Json -Depth 6
[System.IO.File]::WriteAllText($outJsonPath, $json, (New-Object System.Text.UTF8Encoding($false)))

Write-Host "[OK] Metricas consolidadas con premisas oficiales guardadas exitosamente en $outJsonPath"
