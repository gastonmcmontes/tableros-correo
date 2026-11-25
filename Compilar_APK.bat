@echo off
chcp 65001 >nul
title Compilar APK - Tablero PBA Correo Argentino
echo ==========================================================
echo   COMPILANDO APK AUTONOMO PARA MOVIL (ANDROID)
echo ==========================================================
echo.
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0build_apk.ps1"
echo.
echo ==========================================================
echo   Proceso finalizado. El APK está listo en esta carpeta.
echo ==========================================================
pause
