# ==============================================================================
# Script de Compilación de APK Nativo para Android - Tablero PBA Correo Argentino
# Genera un archivo ejecutable .apk autónomo y firmado, listo para enviar por WhatsApp.
# ==============================================================================
param (
    [string]$AppId = "ar.com.correoargentino.tableropba",
    [string]$AppName = "Tablero PBA",
    [string]$VersionName = "1.0.0",
    [int]$VersionCode = 1
)

$ErrorActionPreference = "Stop"

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "  COMPILADOR DE APK NATIVO - TABLERO PBA CORREO ARGENTINO " -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

$baseDir = Split-Path -Parent $MyInvocation.MyCommand.Path
if (-not $baseDir) { $baseDir = $PWD.Path }
Set-Location $baseDir

$sdkDir = "$env:LOCALAPPDATA\android-portable"
$javac = "$sdkDir\jdk\bin\javac.exe"
$java = "$sdkDir\jdk\bin\java.exe"
$keytool = "$sdkDir\jdk\bin\keytool.exe"
$aapt = "$sdkDir\build-tools\aapt.exe"
$d8Jar = "$sdkDir\build-tools\lib\d8.jar"
$zipalign = "$sdkDir\build-tools\zipalign.exe"
$apksignerJar = "$sdkDir\build-tools\lib\apksigner.jar"
$androidJar = "$sdkDir\android.jar"

# Validar herramientas
$requiredTools = @($javac, $java, $keytool, $aapt, $d8Jar, $zipalign, $apksignerJar, $androidJar)
foreach ($t in $requiredTools) {
    if (-not (Test-Path $t)) {
        Write-Error "Herramienta requerida no encontrada: $t"
        exit 1
    }
}
Write-Host "[1/8] Herramientas del SDK Android verificadas con exito." -ForegroundColor Green

# Preparar directorio temporal de compilación
$workDir = Join-Path $env:TEMP "apk_build_tablero_pba"
if (Test-Path $workDir) { Remove-Item $workDir -Recurse -Force }

$packagePath = $AppId.Replace('.', '\')
New-Item -ItemType Directory -Force -Path "$workDir\src\$packagePath" | Out-Null
New-Item -ItemType Directory -Force -Path "$workDir\res\drawable" | Out-Null
New-Item -ItemType Directory -Force -Path "$workDir\res\drawable-hdpi" | Out-Null
New-Item -ItemType Directory -Force -Path "$workDir\res\drawable-xhdpi" | Out-Null
New-Item -ItemType Directory -Force -Path "$workDir\res\drawable-xxhdpi" | Out-Null
New-Item -ItemType Directory -Force -Path "$workDir\res\values" | Out-Null
New-Item -ItemType Directory -Force -Path "$workDir\assets" | Out-Null
New-Item -ItemType Directory -Force -Path "$workDir\classes" | Out-Null

Write-Host "[2/8] Estructura de proyecto Android creada en espacio temporal." -ForegroundColor Green

# Copiar iconos
$iconSource = Join-Path $baseDir "icon-512.png"
if (-not (Test-Path $iconSource)) {
    $iconSource = Join-Path $baseDir "icon-192.png"
}
Copy-Item -Path $iconSource -Destination "$workDir\res\drawable\ic_launcher.png" -Force
Copy-Item -Path $iconSource -Destination "$workDir\res\drawable-hdpi\ic_launcher.png" -Force
Copy-Item -Path $iconSource -Destination "$workDir\res\drawable-xhdpi\ic_launcher.png" -Force
Copy-Item -Path $iconSource -Destination "$workDir\res\drawable-xxhdpi\ic_launcher.png" -Force

# Copiar archivos web a assets
Copy-Item -Path "$baseDir\index.html" -Destination "$workDir\assets\index.html" -Force
Copy-Item -Path "$baseDir\data.js" -Destination "$workDir\assets\data.js" -Force
if (Test-Path "$baseDir\data.json") { Copy-Item -Path "$baseDir\data.json" -Destination "$workDir\assets\data.json" -Force }
if (Test-Path "$baseDir\manifest.json") { Copy-Item -Path "$baseDir\manifest.json" -Destination "$workDir\assets\manifest.json" -Force }
if (Test-Path "$baseDir\icon.svg") { Copy-Item -Path "$baseDir\icon.svg" -Destination "$workDir\assets\icon.svg" -Force }
if (Test-Path "$baseDir\icon-192.png") { Copy-Item -Path "$baseDir\icon-192.png" -Destination "$workDir\assets\icon-192.png" -Force }
if (Test-Path "$baseDir\icon-512.png") { Copy-Item -Path "$baseDir\icon-512.png" -Destination "$workDir\assets\icon-512.png" -Force }

Write-Host "[3/8] Assets empaquetados (index.html, data.js e iconos)." -ForegroundColor Green

# Crear strings.xml
$stringsXml = @"
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <string name="app_name">$AppName</string>
</resources>
"@
[System.IO.File]::WriteAllText("$workDir\res\values\strings.xml", $stringsXml, (New-Object System.Text.UTF8Encoding($false)))

# Crear AndroidManifest.xml (targetSdkVersion 28 para instalacion directa sin restricciones)
$manifestXml = @"
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="$AppId"
    android:versionCode="$VersionCode"
    android:versionName="$VersionName">

    <uses-sdk android:minSdkVersion="24" android:targetSdkVersion="28" />
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />

    <application
        android:label="@string/app_name"
        android:icon="@drawable/ic_launcher"
        android:usesCleartextTraffic="true"
        android:hardwareAccelerated="true"
        android:theme="@android:style/Theme.DeviceDefault.NoActionBar">

        <activity
            android:name=".MainActivity"
            android:exported="true"
            android:configChanges="orientation|screenSize|keyboardHidden">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>
</manifest>
"@
[System.IO.File]::WriteAllText("$workDir\AndroidManifest.xml", $manifestXml, (New-Object System.Text.UTF8Encoding($false)))

# Crear MainActivity.java con integración completa de WebView y soporte para WhatsApp
$mainActivityJava = @"
package $AppId;

import android.app.Activity;
import android.os.Bundle;
import android.view.Window;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.webkit.WebChromeClient;
import android.graphics.Color;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;

public class MainActivity extends Activity {
    private WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        requestWindowFeature(Window.FEATURE_NO_TITLE);

        if (Build.VERSION.SDK_INT >= 21) {
            getWindow().setStatusBarColor(Color.parseColor("#0a0f1d"));
            getWindow().setNavigationBarColor(Color.parseColor("#0a0f1d"));
        }

        webView = new WebView(this);
        webView.setBackgroundColor(Color.parseColor("#0a0f1d"));

        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setDatabaseEnabled(true);
        settings.setAllowFileAccess(true);
        settings.setAllowContentAccess(true);
        settings.setAllowFileAccessFromFileURLs(true);
        settings.setAllowUniversalAccessFromFileURLs(true);
        settings.setCacheMode(WebSettings.LOAD_DEFAULT);
        settings.setMixedContentMode(WebSettings.MIXED_CONTENT_ALWAYS_ALLOW);
        settings.setUseWideViewPort(true);
        settings.setLoadWithOverviewMode(true);
        settings.setSupportZoom(false);
        settings.setBuiltInZoomControls(false);

        webView.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                if (url != null) {
                    if (url.startsWith("whatsapp:") || url.contains("api.whatsapp.com") || url.contains("wa.me") || url.startsWith("intent:")) {
                        try {
                            Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
                            intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                            startActivity(intent);
                            return true;
                        } catch (Exception e) {
                            return false;
                        }
                    }
                    if (url.startsWith("http://") || url.startsWith("https://")) {
                        view.loadUrl(url);
                        return true;
                    }
                }
                return false;
            }
        });

        webView.setWebChromeClient(new WebChromeClient());

        setContentView(webView);
        webView.loadUrl("file:///android_asset/index.html");
    }

    @Override
    public void onBackPressed() {
        if (webView != null && webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }
}
"@
[System.IO.File]::WriteAllText("$workDir\src\$packagePath\MainActivity.java", $mainActivityJava, (New-Object System.Text.UTF8Encoding($false)))

Write-Host "[4/8] Código Java y Manifest generados correctamente." -ForegroundColor Green

# 5. Generar R.java con aapt
Write-Host "[5/8] Compilando recursos con aapt..." -ForegroundColor Yellow
& $aapt package -f -m -J "$workDir\src" -M "$workDir\AndroidManifest.xml" -S "$workDir\res" -I "$androidJar"
if ($LASTEXITCODE -ne 0) { throw "Error al generar R.java" }

# 6. Compilar Java a .class con javac
Write-Host "[6/8] Compilando clases Java con javac..." -ForegroundColor Yellow
$javaFiles = Get-ChildItem "$workDir\src\$packagePath\*.java" | ForEach-Object { $_.FullName }
& $javac -source 1.8 -target 1.8 -bootclasspath "$androidJar" -classpath "$androidJar" -d "$workDir\classes" $javaFiles
if ($LASTEXITCODE -ne 0) { throw "Error al compilar código Java" }

# 7. Convertir bytecode a classes.dex con d8
Write-Host "[7/8] Convirtiendo bytecode a classes.dex con D8..." -ForegroundColor Yellow
$classFiles = Get-ChildItem "$workDir\classes\$packagePath\*.class" | ForEach-Object { $_.FullName }
& $java -cp "$d8Jar" com.android.tools.r8.D8 --lib "$androidJar" --output "$workDir" $classFiles
if ($LASTEXITCODE -ne 0) { throw "Error al convertir con D8" }

# 8. Empaquetar APK sin comprimir resources.arsc
Write-Host "[8/8] Empaquetando, alineando y firmando APK..." -ForegroundColor Yellow
& $aapt package -f -0 arsc -M "$workDir\AndroidManifest.xml" -S "$workDir\res" -A "$workDir\assets" -I "$androidJar" -F "$workDir\unaligned.apk"
if ($LASTEXITCODE -ne 0) { throw "Error al empaquetar APK" }

# Agregar classes.dex en la raíz del APK
Push-Location $workDir
& $aapt add unaligned.apk classes.dex | Out-Null
Pop-Location

# Alinear con zipalign
& $zipalign -p -f 4 "$workDir\unaligned.apk" "$workDir\aligned.apk"
if ($LASTEXITCODE -ne 0) { throw "Error al alinear APK con zipalign" }

# Crear o verificar keystore para firma
$keystorePath = "$sdkDir\correo_tablero.keystore"
if (-not (Test-Path $keystorePath)) {
    Write-Host "Generando nuevo certificado keystore corporativo..." -ForegroundColor Gray
    & $keytool -genkeypair -v -keystore $keystorePath -alias tablerokey -keyalg RSA -keysize 2048 -validity 10000 -storepass correo123 -keypass correo123 -dname "CN=Tablero PBA, OU=Operaciones, O=Correo Argentino, L=Buenos Aires, ST=Buenos Aires, C=AR" | Out-Null
}

# Firmar con apksigner (v1 + v2 + v3)
$finalApkPath = Join-Path $baseDir "Tablero_PBA_CorreoArgentino.apk"
& $java -jar "$apksignerJar" sign --v1-signing-enabled true --v2-signing-enabled true --v3-signing-enabled true --ks $keystorePath --ks-key-alias tablerokey --ks-pass pass:correo123 --key-pass pass:correo123 --out "$finalApkPath" "$workDir\aligned.apk"
if ($LASTEXITCODE -ne 0) { throw "Error al firmar APK con apksigner" }

# Limpiar temporal
Remove-Item $workDir -Recurse -Force -ErrorAction SilentlyContinue

$apkSizeKB = [math]::Round((Get-Item $finalApkPath).Length / 1024, 1)
$apkSizeMB = [math]::Round((Get-Item $finalApkPath).Length / (1024 * 1024), 2)

Write-Host "==========================================================" -ForegroundColor Green
Write-Host "  ¡APK COMPILADO Y FIRMADO CON ÉXITO!                     " -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Green
Write-Host "Archivo generado : $finalApkPath" -ForegroundColor White
Write-Host "Tamaño           : $apkSizeKB KB ($apkSizeMB MB)" -ForegroundColor White
Write-Host "Compatibilidad   : Android 7.0 a 15 (minSdkVersion 24, target 28)" -ForegroundColor White
Write-Host "Listo para enviar directamente por WhatsApp como archivo adjunto." -ForegroundColor Cyan
