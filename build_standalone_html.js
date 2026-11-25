const fs = require('fs');
const path = require('path');

const baseDir = __dirname;
const indexHtmlPath = path.join(baseDir, 'index.html');
const dataJsPath = path.join(baseDir, 'data.js');
const outputHtmlPath = path.join(baseDir, 'Tablero_PBA.html');

console.log('Generando Tablero_PBA.html autónomo y 100% independiente...');

let html = fs.readFileSync(indexHtmlPath, 'utf8');
const dataJs = fs.readFileSync(dataJsPath, 'utf8');

// 1. Reemplazar la referencia externa <script src="data.js"></script> con el contenido completo incrustado
const scriptRegex = /<script\s+src=["']data\.js["']><\/script>/i;
if (!scriptRegex.test(html)) {
  console.error('No se encontró <script src="data.js"></script> en index.html');
  process.exit(1);
}

const embeddedDataScript = `
  <!-- DATOS OPERATIVOS INCUSTADOS 100% AUTÓNOMOS (SIN DEPENDENCIAS EXTERNAS) -->
  <script>
${dataJs}
  </script>
`;

html = html.replace(scriptRegex, embeddedDataScript);

// 2. Agregar barra de ayuda para convertir en App (Agregar a pantalla principal) sin instalar APK
const helperBanner = `
    <!-- Banner de sugerencia para fijar como App en Celular (Sin APK) -->
    <div id="pwaInstallHelperBanner" style="display:none; background: linear-gradient(135deg, rgba(37,99,235,0.15), rgba(30,58,138,0.3)); border: 1px solid var(--brand-blue-light); border-radius: 12px; padding: 10px 12px; margin-bottom: 12px; font-size: 11px; align-items: center; justify-content: space-between; gap: 8px;">
      <div style="display:flex; align-items:center; gap:8px;">
        <span style="font-size:16px;">📲</span>
        <span style="color:var(--text-main); font-weight:600; line-height:1.35;">
          <strong>Tip Celular:</strong> Tocá los <strong>3 puntos (⋮)</strong> de tu navegador y elegí <em>"Agregar a la pantalla principal"</em> para usarla como app con ícono propio.
        </span>
      </div>
      <button onclick="document.getElementById('pwaInstallHelperBanner').style.display='none'; localStorage.setItem('pwaTipDismissed','true');" style="background:transparent; border:none; color:var(--text-faint); font-size:16px; cursor:pointer; padding:2px 6px;">✕</button>
    </div>
`;

// Insertar justo al inicio del container principal
html = html.replace('<main class="container">', '<main class="container">\n' + helperBanner);

// Agregar script para mostrar el banner en celulares si no fue cerrado
const helperScript = `
    // Detectar móvil y mostrar tip de Agregar a Pantalla Principal
    if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent) && !localStorage.getItem('pwaTipDismissed')) {
      const banner = document.getElementById('pwaInstallHelperBanner');
      if (banner) banner.style.display = 'flex';
    }
`;

html = html.replace('renderSyncTimestamps();', helperScript + '\n    renderSyncTimestamps();');

// 3. Escribir archivo de salida autónomo
fs.writeFileSync(outputHtmlPath, html, 'utf8');

const stats = fs.statSync(outputHtmlPath);
const sizeKB = (stats.size / 1024).toFixed(1);

console.log(`[OK] Archivo generado exitosamente:`);
console.log(`- Ruta: ${outputHtmlPath}`);
console.log(`- Tamaño: ${sizeKB} KB`);
console.log(`- Características: 100% autónomo, 0 instalación, listo para enviar por WhatsApp.`);
