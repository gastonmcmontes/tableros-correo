Add-Type -ReferencedAssemblies "System.Xml","System.IO.Compression","System.IO.Compression.FileSystem" -TypeDefinition @"
using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Xml;

public class MetricRow {
    public string Producto;
    public string Denominacion;
    public double FechaSerial;
    public double Volumen;
    public double Sla;
    public double Fv;
}

public static class FastMaestroExtractor {
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

    public static List<MetricRow> ReadAllMetricRows(ZipArchive zip, string sheetPath, List<string> sst) {
        var list = new List<MetricRow>(4000);
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
                            list.Add(new MetricRow {
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
}
"@

$excelPath = "c:\Users\gmontes\OneDrive - Correo Argentino\Escritorio\app celu pba\downloaded_maestro.xlsx"
$zip = [System.IO.Compression.ZipFile]::OpenRead($excelPath)

$sst = [FastMaestroExtractor]::LoadSst($zip)

# Read Acumulado (Mes)
$acumAll = [FastMaestroExtractor]::ReadAllMetricRows($zip, "xl/worksheets/sheet9.xml", $sst)
$maxAcumDate = ($acumAll | Measure-Object -Property FechaSerial -Maximum).Maximum
$acumLatest = $acumAll | Where-Object { $_.FechaSerial -eq $maxAcumDate }

# Read Diario (Dia)
$diaAll = [FastMaestroExtractor]::ReadAllMetricRows($zip, "xl/worksheets/sheet10.xml", $sst)
$maxDiaDate = ($diaAll | Measure-Object -Property FechaSerial -Maximum).Maximum
$diaLatest = $diaAll | Where-Object { $_.FechaSerial -eq $maxDiaDate }

$zip.Dispose()

$dateAcumObj = [DateTime]::FromOADate($maxAcumDate)
$dateDiaObj = [DateTime]::FromOADate($maxDiaDate)

Write-Host "Última fecha detectada Mes: $($dateAcumObj.ToString('yyyy-MM-dd'))"
Write-Host "Última fecha detectada Día: $($dateDiaObj.ToString('yyyy-MM-dd'))"

# Show PBA and NACIONAL
$pbaAcum = $acumLatest | Where-Object { $_.Producto -eq 'PAQ.AR' -and $_.Denominacion -eq 'PBA / La Pampa' }
$pbaDia = $diaLatest | Where-Object { $_.Producto -eq 'PAQ.AR' -and $_.Denominacion -eq 'PBA / La Pampa' }

Write-Host "PBA Mes: Vol=$($pbaAcum.Volumen) | SLA=$([math]::Round($pbaAcum.Sla*100,2))% | FV=$([math]::Round($pbaAcum.Fv*100,2))%"
Write-Host "PBA Dia: Vol=$($pbaDia.Volumen) | SLA=$([math]::Round($pbaDia.Sla*100,2))% | FV=$([math]::Round($pbaDia.Fv*100,2))%"
