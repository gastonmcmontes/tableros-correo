[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
Write-Host "============================================================================"
Write-Host "  CONECTANDO DIRECTAMENTE A SHAREPOINT (SIN DEPENDER DEL DISCO RIGIDO)     "
Write-Host "  URL Oficial: Matías Peralta - Maestro_Base.xlsx                          "
Write-Host "============================================================================"
Write-Host ""

$spUrl = "https://correoargentinosa-my.sharepoint.com/:x:/g/personal/matperalta_correoargentino_com_ar/IQCHkk7r6fliQooBYITUzmXhAe4pXRtoUWO8tnIejfgeafg"
$cookiesFile = Join-Path $PSScriptRoot "cookies.txt"
$pageFile = Join-Path $PSScriptRoot "sp_page.html"
$excelFile = Join-Path $PSScriptRoot "downloaded_maestro.xlsx"

Write-Host "[1/4] Consultando metadatos en vivo desde SharePoint..."
curl.exe -s -c $cookiesFile -b $cookiesFile -L -o $pageFile $spUrl

if (Test-Path $pageFile) {
    $content = [System.IO.File]::ReadAllText($pageFile)
    $match = [regex]::Match($content, 'var _wopiContextJson\s*=\s*({[\s\S]*?});')
    if ($match.Success) {
        $json = $match.Groups[1].Value | ConvertFrom-Json
        $fileGetUrl = $json.FileGetUrl
        $lastModMs = [double]$json.LastModified
        $lastModDate = [DateTimeOffset]::FromUnixTimeMilliseconds($lastModMs).ToLocalTime()
        $modFormatted = $lastModDate.ToString("dd/MM/yyyy HH:mm") + " hs"
        Write-Host "      -> Archivo Maestro detectado: $($json.FileName) ($([Math]::Round($json.FileSize/1MB, 1)) MB)"
        Write-Host "      -> Último corte oficial en SharePoint: $modFormatted"
        
        $metaObj = @{
            lastModified = $modFormatted
            fileName = $json.FileName
            fileSize = $json.FileSize
            timestampMs = $lastModMs
        }
        $metaObj | ConvertTo-Json | Set-Content (Join-Path $PSScriptRoot "maestro_meta.json") -Encoding UTF8
        
        Write-Host "[2/4] Descargando corte en vivo de SharePoint..."
        curl.exe -s -b $cookiesFile -L -o $excelFile $fileGetUrl
        
        Write-Host "[3/4] Extrayendo métricas oficiales vivas del Maestro..."
        $extractor = Join-Path $PSScriptRoot "extract_maestro_live.ps1"
        if (Test-Path $extractor) {
            & powershell.exe -NoProfile -ExecutionPolicy Bypass -File $extractor -excelPath $excelFile -outJsonPath (Join-Path $PSScriptRoot "live_maestro_summary.json")
        }
    }
}

Write-Host "[4/4] Compilando Tablero_PBA.html autónomo..."
$nodeExe = "$env:LOCALAPPDATA\nodejs-portable\node-v20.18.0-win-x64\node.exe"
if (-not (Test-Path $nodeExe)) { $nodeExe = "node" }
& $nodeExe (Join-Path $PSScriptRoot "build_data.js")
& $nodeExe (Join-Path $PSScriptRoot "build_standalone_html.js")
