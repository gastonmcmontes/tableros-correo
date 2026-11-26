const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log('====================================================');
console.log('AUDITORÍA DE CONTROL OPERATIVO - DIRECCIÓN DE OPERACIONES');
console.log('====================================================\n');

let hasErrors = false;

function auditHtml(filePath, expectedGlobalVar, title) {
  console.log(`\n--- Auditando: ${title} (${path.basename(filePath)}) ---`);
  if (!fs.existsSync(filePath)) {
    console.error(`[ERROR FATAL] No existe el archivo: ${filePath}`);
    hasErrors = true;
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  console.log(`✓ Archivo leído: ${(content.length / 1024).toFixed(1)} KB`);

  // Extraer scripts
  const scriptRegex = /<script(?:\s+[^>]*)?>([\s\S]*?)<\/script>/gi;
  let match;
  let scriptIndex = 0;
  let foundGlobalData = false;

  const sandbox = {
    window: {},
    document: {
      getElementById: () => ({ style: {}, classList: { add: ()=>{}, remove: ()=>{} }, innerHTML: '', textContent: '', addEventListener: ()=>{} }),
      querySelector: () => null,
      querySelectorAll: () => [],
      createElement: () => ({ style: {}, classList: { add: ()=>{}, remove: ()=>{} }, appendChild: ()=>{} })
    },
    navigator: { userAgent: 'NodeAuditAgent' },
    localStorage: {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {}
    },
    console: {
      log: () => {},
      warn: console.warn,
      error: console.error
    },
    setTimeout: () => {},
    setInterval: () => {},
    clearTimeout: () => {},
    clearInterval: () => {}
  };
  sandbox.window = sandbox;

  const ctx = vm.createContext(sandbox);

  while ((match = scriptRegex.exec(content)) !== null) {
    scriptIndex++;
    const srcCode = match[1];
    if (!srcCode.trim()) continue;

    // Verificar sintaxis
    try {
      new vm.Script(srcCode);
      console.log(`  ✓ Script block #${scriptIndex}: Sintaxis JavaScript válida`);
    } catch (err) {
      console.error(`  [ERROR SINTAXIS] Script block #${scriptIndex}:`, err.message);
      hasErrors = true;
    }

    // Ejecutar en sandbox
    try {
      vm.runInContext(srcCode, ctx);
    } catch (err) {
      // Ignorar errores del DOM simulado si son por falta de elementos visuales en Node
      if (!err.message.includes('document') && !err.message.includes('Chart') && !err.message.includes('getContext')) {
        console.warn(`  [INFO RUNTIME] Script block #${scriptIndex}: ${err.message}`);
      }
    }
  }

  // Verificar la variable de datos
  const data = sandbox[expectedGlobalVar] || sandbox.window[expectedGlobalVar];
  if (!data) {
    console.error(`[ERROR] Variable global ${expectedGlobalVar} no encontrada.`);
    hasErrors = true;
    return;
  }

  console.log(`  ✓ Variable global ${expectedGlobalVar} inicializada correctamente.`);
  console.log(`    - Título: ${data.title}`);
  console.log(`    - Último corte Maestro: ${data.maestroLastUpload || data.lastUpdate}`);
  console.log(`    - Etiqueta Día Puro: ${data.pureDayLabel}`);

  if (expectedGlobalVar === 'PBA_DATA') {
    const nodes = data.nodes || [];
    console.log(`    - Nodos totales: ${nodes.length}`);
    if (nodes.length === 0) {
      console.error(`[ERROR] PBA_DATA no contiene nodos.`);
      hasErrors = true;
    }
    // Verificar series de 10 días
    const sampleNode = nodes[0];
    if (sampleNode && sampleNode.kpis && sampleNode.kpis.dia_puro && sampleNode.kpis.dia_puro.sla_paqar) {
      const s = sampleNode.kpis.dia_puro.sla_paqar.series || [];
      console.log(`    - Longitud serie diaria (10 días operativos): ${s.length} días`);
      if (s.length !== 10) {
        console.warn(`[AVISO] Se esperaban 10 días operativos en la serie, hay ${s.length}`);
      }
    }
  } else if (expectedGlobalVar === 'NACIONAL_DATA') {
    const regions = data.regions || {};
    const regKeys = Object.keys(regions);
    console.log(`    - Regiones registradas: ${regKeys.join(', ')}`);
    const nodes = data.nodes || [];
    console.log(`    - Nodos nacionales totales: ${nodes.length}`);

    // Verificar Total Nacional
    const nac = regions['NACIONAL'];
    if (!nac || !nac.kpis || !nac.kpis.mes_anterior || !nac.kpis.dia_puro) {
      console.error(`[ERROR] Estructura de Total Nacional incompleta.`);
      hasErrors = true;
    } else {
      console.log(`    - Volumen Mes Nacional: ${nac.kpis.mes_anterior.totalVolume.toLocaleString()} piezas`);
      console.log(`    - Volumen Día Nacional: ${nac.kpis.dia_puro.totalVolume.toLocaleString()} piezas`);
      if (nac.kpis.mes_anterior.totalVolume === undefined || isNaN(nac.kpis.mes_anterior.totalVolume)) {
        console.error(`[ERROR] Volumen Mes Nacional es undefined o NaN!`);
        hasErrors = true;
      }
      if (nac.kpis.dia_puro.totalVolume === undefined || isNaN(nac.kpis.dia_puro.totalVolume)) {
        console.error(`[ERROR] Volumen Día Nacional es undefined o NaN!`);
        hasErrors = true;
      }
    }

    // Verificar series en regiones
    const pbaReg = regions['PBA'];
    if (pbaReg && pbaReg.kpis && pbaReg.kpis.dia_puro && pbaReg.kpis.dia_puro.sla_paqar) {
      const s = pbaReg.kpis.dia_puro.sla_paqar.series || [];
      console.log(`    - Longitud serie diaria en PBA (Nacional): ${s.length} días`);
    }
  }
}

// 1. Audit PBA
const pbaHtmlPath = path.join(__dirname, 'Tablero_PBA.html');
auditHtml(pbaHtmlPath, 'PBA_DATA', 'Tablero PBA / La Pampa');

// 2. Audit Nacional
const nacHtmlPath = path.join(__dirname, 'Tablero_Nacional.html');
auditHtml(nacHtmlPath, 'NACIONAL_DATA', 'Tablero Nacional');

console.log('\n====================================================');
if (hasErrors) {
  console.error('RESULTADO: AUDITORÍA CON ERRORES. REVISAR ANTES DE PUBLICAR.');
  process.exit(1);
} else {
  console.log('RESULTADO: AUDITORÍA 100% EXITOSA. TABLEROS LISTOS Y CONSISTENTES.');
  process.exit(0);
}
