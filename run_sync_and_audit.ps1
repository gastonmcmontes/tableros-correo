$nodePath = "$env:LOCALAPPDATA\nodejs-portable\node-v20.18.0-win-x64\node.exe"
$nacDir = "c:\Users\gmontes\OneDrive - Correo Argentino\Escritorio\app celu nacional"
$pbaDir = "c:\Users\gmontes\OneDrive - Correo Argentino\Escritorio\app celu pba"

Write-Host "== 1. Copiando live_maestro_summary y meta a carpeta Nacional =="
Copy-Item "$pbaDir\live_maestro_summary.json" "$nacDir\live_maestro_summary.json" -Force
Copy-Item "$pbaDir\maestro_meta.json" "$nacDir\maestro_meta.json" -Force

Write-Host "== 2. Ejecutando build_data.js en carpeta Nacional =="
Set-Location $nacDir
& $nodePath "build_data.js"

Write-Host "== 3. Copiando salidas de Nacional hacia PBA y subcarpeta nacional =="
Copy-Item "$nacDir\Tablero_Nacional.html" "$pbaDir\Tablero_Nacional.html" -Force
Copy-Item "$nacDir\data.json" "$pbaDir\data_nacional.json" -Force
if (Test-Path "$pbaDir\nacional") {
    Copy-Item "$nacDir\Tablero_Nacional.html" "$pbaDir\nacional\Tablero_Nacional.html" -Force
    Copy-Item "$nacDir\data.json" "$pbaDir\nacional\data.json" -Force
    Copy-Item "$nacDir\data.js" "$pbaDir\nacional\data.js" -Force
    Copy-Item "$nacDir\index.html" "$pbaDir\nacional\index.html" -Force
}

Write-Host "== 4. Ejecutando Auditoria Completa de ambos tableros =="
Set-Location $pbaDir
& $nodePath "audit_both_tableros.js"
