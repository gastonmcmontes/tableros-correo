@echo off
chcp 65001 >nul
echo ============================================================================
echo   TABLERO MOVIL PBA - ACTUALIZACION EN VIVO DESDE SHAREPOINT
echo   Conexion Directa al Maestro Oficial (Sin depender del disco local)
echo ============================================================================
echo.
cd /d "%~dp0"

powershell -NoProfile -ExecutionPolicy Bypass -File "sync_maestro_sharepoint.ps1"

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ============================================================================
    echo [OK] Tablero PBA sincronizado con exito directamente desde SharePoint!
    echo [OK] Generado 'Tablero_PBA.html' con el ultimo corte del Maestro.
    echo ============================================================================
) else (
    echo.
    echo [!] Hubo un detalle al conectar con SharePoint.
)

echo.
pause
