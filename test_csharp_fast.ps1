Add-Type -ReferencedAssemblies "System.Xml","System.IO.Compression","System.IO.Compression.FileSystem" -TypeDefinition @"
using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Xml;

public static class FastMaestroReader {
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

    public static List<Dictionary<string, string>> ReadRowsWithFilter(ZipArchive zip, string sheetPath, List<string> sst, string filterCol, string filterVal, string prodCol, string prodVal) {
        var rows = new List<Dictionary<string, string>>();
        var entry = zip.GetEntry(sheetPath);
        if (entry == null) return rows;
        using (var st = entry.Open())
        using (var rd = XmlReader.Create(st)) {
            int r = 0;
            while (rd.Read()) {
                if (rd.NodeType == XmlNodeType.Element && rd.LocalName == "row") {
                    r++;
                    if (r < 4) continue;
                    var cells = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);
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
                                    if (col.Length > 0 && val.Length > 0) cells[col] = val;
                                }
                            }
                        }
                    }
                    if (cells.Count > 0) {
                        if (filterCol != null && filterVal != null) {
                            string fv;
                            if (!cells.TryGetValue(filterCol, out fv) || fv != filterVal) continue;
                        }
                        if (prodCol != null && prodVal != null) {
                            string pv;
                            if (!cells.TryGetValue(prodCol, out pv) || !pv.Equals(prodVal, StringComparison.OrdinalIgnoreCase)) continue;
                        }
                        rows.Add(cells);
                    }
                }
            }
        }
        return rows;
    }
}
"@

$excelPath = "c:\Users\gmontes\OneDrive - Correo Argentino\Escritorio\app celu pba\downloaded_maestro.xlsx"
$zip = [System.IO.Compression.ZipFile]::OpenRead($excelPath)

$sw = [System.Diagnostics.Stopwatch]::StartNew()
$sst = [FastMaestroReader]::LoadSst($zip)
Write-Host "SST loaded in $($sw.ElapsedMilliseconds) ms ($($sst.Count) strings)"

$sw.Restart()
$pbaAcum = [FastMaestroReader]::ReadRowsWithFilter($zip, "xl/worksheets/sheet9.xml", $sst, "C", "46327", "A", "PAQ.AR")
Write-Host "Filtered sheet9 in $($sw.ElapsedMilliseconds) ms. Found $($pbaAcum.Count) rows."
foreach ($row in $pbaAcum) {
    if ($row['B'] -eq 'PBA / La Pampa' -or $row['B'] -eq 'NACIONAL') {
        Write-Host "$($row['B']): Vol=$($row['D']), SLA=$($row['E']), FV=$($row['G'])"
    }
}

$sw.Restart()
$pbaDia = [FastMaestroReader]::ReadRowsWithFilter($zip, "xl/worksheets/sheet10.xml", $sst, "C", "46339", "A", "PAQ.AR")
Write-Host "Filtered sheet10 in $($sw.ElapsedMilliseconds) ms. Found $($pbaDia.Count) rows."
foreach ($row in $pbaDia) {
    if ($row['B'] -eq 'PBA / La Pampa' -or $row['B'] -eq 'NACIONAL') {
        Write-Host "$($row['B']): Vol=$($row['D']), SLA=$($row['E']), FV=$($row['G'])"
    }
}

$zip.Dispose()
