const fs = require('fs');
const path = require('path');

const pbaIndexPath = 'C:/Users/gmontes/OneDrive - Correo Argentino/Escritorio/app celu pba/index.html';
let html = fs.readFileSync(pbaIndexPath, 'utf8');

// 1. Títulos y Metadatos
html = html.replace(/<title>Tablero Móvil PBA \| Correo Argentino<\/title>/g, '<title>Tablero Control Nacional | Correo Argentino</title>');
html = html.replace(/content="Tablero PBA"/g, 'content="Tablero Nacional"');
html = html.replace(/Tablero de Control Móvil para Región PBA y Nodos/g, 'Tablero de Control Operativo Nacional - 35 Nodos y 5 Regiones');

// 2. Header Branding
html = html.replace(
  `            <h1>Tablero PBA <span class="badge-pba">OPERACIONES</span></h1>\n            <p>6 Nodos Operativos • Prov. Bs. As.</p>`,
  `            <h1>Tablero Nacional <span class="badge-pba" style="background:#facc15; color:#0f172a; font-weight:800; font-size:10px; padding:2px 7px; border-radius:6px;">ARGENTINA</span></h1>\n            <p>35 Nodos Operativos • 5 Regiones</p>`
);

// 3. Origen del Modal y Textos de Seguridad
html = html.replace(/Origen de Datos: Archivo Maestro PBA/g, 'Origen de Datos: Archivo Maestro Nacional');
html = html.replace(/Operaciones PBA/g, 'Operaciones Nacional');
html = html.replace(/PBA_DATA/g, 'NACIONAL_DATA');
html = html.replace(/PBA_SYNC_URL/g, 'NACIONAL_SYNC_URL');
html = html.replace(/PBA_DATA_CACHE/g, 'NACIONAL_DATA_CACHE');
html = html.replace(/PBA_LAST_SYNC_MOMENT/g, 'NACIONAL_LAST_SYNC_MOMENT');

// 4. Selector de Regiones en la cabecera (debajo de la tarjeta de auditoría o selector de período)
const regionSelectorHtml = `
    <!-- Selector Horizontal de Regiones Nacionales -->
    <div class="region-selector-wrapper" style="margin-bottom: 12px;">
      <div style="font-size: 11px; font-weight: 700; color: var(--text-muted); margin-bottom: 6px; display: flex; align-items: center; justify-content: space-between;">
        <span>ÁMBITO OPERATIVO:</span>
        <span id="regionScopeBadge" style="color: var(--brand-blue-light); font-weight: 800;">35 NODOS EN TOTAL</span>
      </div>
      <div class="node-selector-tabs" id="regionSelectorTabs" style="padding: 2px 0 6px 0;">
        <button class="node-tab-btn active" data-region="NACIONAL">
          <span style="font-size: 14px;">🇦🇷</span>
          <span>Nacional</span>
        </button>
        <button class="node-tab-btn" data-region="METROPOLITANA">
          <span style="font-size: 14px;">🏙️</span>
          <span>Metropolitana</span>
        </button>
        <button class="node-tab-btn" data-region="PBA">
          <span style="font-size: 14px;">🌾</span>
          <span>PBA / La Pampa</span>
        </button>
        <button class="node-tab-btn" data-region="CENTRO_NEA">
          <span style="font-size: 14px;">🌿</span>
          <span>Centro - NEA</span>
        </button>
        <button class="node-tab-btn" data-region="CUYO_NOA">
          <span style="font-size: 14px;">🌄</span>
          <span>Cuyo - NOA</span>
        </button>
        <button class="node-tab-btn" data-region="SUR">
          <span style="font-size: 14px;">❄️</span>
          <span>Sur / Patagonia</span>
        </button>
      </div>
    </div>
`;

// Insertar el selector de regiones antes del selector de período
html = html.replace('<div class="period-control">', regionSelectorHtml + '\n    <div class="period-control">');

// 5. Ajustar el primer zócalo: "Región" -> "Nacional"
html = html.replace(/<span class="nav-lbl">Región<\/span>/g, '<span class="nav-lbl">Nacional</span>');
html = html.replace(/<span>Seleccionar Nodo PBA<\/span>/g, '<span>Seleccionar Nodo Nacional</span>');
html = html.replace(/<span class="badge-count" id="activeNodeBadgeCount">6 Nodos<\/span>/g, '<span class="badge-count" id="activeNodeBadgeCount">35 Nodos</span>');

// 6. Escribir archivo preliminar para validar estructura
fs.writeFileSync(path.join(__dirname, 'index_base.html'), html, 'utf8');
console.log('✓ index_base.html generado exitosamente.');
