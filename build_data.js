const fs = require('fs');
const path = require('path');

const srcNodesPath = 'C:/Users/gmontes/OneDrive - Correo Argentino/Escritorio/trabajos antigravity/app tablero/src/data/realMaestroNodes.json';
const srcRegPath = 'C:/Users/gmontes/OneDrive - Correo Argentino/Escritorio/trabajos antigravity/app tablero/src/data/realRegionalSeries.json';
const maestroPath = 'C:/Users/gmontes/OneDrive - Correo Argentino/Documentos/Copilot/Creado/Maestro_Base 180.xlsx';

const nodesRaw = JSON.parse(fs.readFileSync(srcNodesPath, 'utf8'));
const regRaw = JSON.parse(fs.readFileSync(srcRegPath, 'utf8'));

// Format timestamps
let maestroFileDate = '16/11/2026 12:56 hs';
const onlineMaestro = path.join(__dirname, 'downloaded_maestro.xlsx');
if (fs.existsSync(onlineMaestro)) {
  maestroFileDate = '16/11/2026 12:56 hs';
} else if (fs.existsSync(maestroPath)) {
  const stat = fs.statSync(maestroPath);
  const d = stat.mtime;
  const pad = n => String(n).padStart(2, '0');
  maestroFileDate = `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())} hs`;
}

const now = new Date();
const pad = n => String(n).padStart(2, '0');
const syncMomentDate = `${pad(now.getDate())}/${pad(now.getMonth() + 1)}/${now.getFullYear()} ${pad(now.getHours())}:${pad(now.getMinutes())} hs`;

const pbaNodes = nodesRaw.filter(n => n.regionId && n.regionId.includes('PBA'));
const pbaSeries = regRaw['PBA / La Pampa'] || {};

const cleanNames = {
  BHI: 'Bahía Blanca',
  LPG: 'La Plata',
  MDQ: 'Mar del Plata',
  MER: 'Mercedes',
  PER: 'Pergamino',
  RSA: 'Santa Rosa'
};

const targets = {
  sla_paqar: 95.0,
  fv_paqar: 90.0,
  sla_pas: 95.0,
  fv_pas: 90.0,
  sla_expreso: 95.0,
  fv_expreso: 90.0
};

const getStatus = (val, target) => {
  if (val === null || val === undefined) return 'neutral';
  const diff = val - target;
  if (diff >= 0) return 'ok';
  if (diff >= -3.0) return 'warning';
  return 'danger';
};

const mapMetric = (mObj, targetDef, seriesOverrideObj) => {
  if (!mObj) return { value: 0, target: targetDef, delta: 0, status: 'neutral', series: [] };
  const val = Number(mObj.actual || 0);
  const tgt = Number(mObj.target || targetDef);

  // En Mes Consolidado, si se pasa la serie anual (anio), se muestra la evolución desde Enero 2026
  let series = mObj.series || [];
  if (seriesOverrideObj && seriesOverrideObj.series && seriesOverrideObj.series.length > 0) {
    series = seriesOverrideObj.series;
  }

  return {
    value: val,
    target: tgt,
    delta: +(val - tgt).toFixed(2),
    status: getStatus(val, tgt),
    series: series
  };
};

const computeNodeQ = (n, periodKey) => {
  const total = (n.volumeByPeriod && n.volumeByPeriod[periodKey]) ? n.volumeByPeriod[periodKey] : 0;
  const paqShare = (n.productShare && n.productShare.PAQ_AR) ? n.productShare.PAQ_AR : 0.78;
  const pasShare = (n.productShare && n.productShare.PAS) ? n.productShare.PAS : 0.17;
  const expShare = (n.productShare && n.productShare.EXPRESO) ? n.productShare.EXPRESO : 0.05;

  const paq_ar = Math.round(total * paqShare);
  const pas = Math.round(total * pasShare);
  const expreso = Math.round(total * expShare);

  return {
    total,
    paq_ar,
    pas,
    expreso
  };
};

const pbaData = {
  region: 'Región PBA',
  regionFull: 'Provincia de Buenos Aires / La Pampa',
  maestroLastUpload: maestroFileDate,
  lastSyncMoment: syncMomentDate,
  lastUpdate: maestroFileDate,
  pureDayLabel: 'Día Hábil Anterior (13 Nov 2026)',
  monthLabel: 'Mes en Curso Acumulado (Noviembre 2026)',
  targets,
  regionalKpis: {
    mes_anterior: {
      periodName: 'Mes en Curso',
      periodCode: 'mes_anterior',
      periodDetail: 'Acumulado Noviembre 2026',
      totalVolume: 169895,
      vencidos: 169895,
      backlog: 1224,
      a_vencer: 150002,
      guarda_vencida: 1292,
      q: {
        total: 169895,
        paq_ar: 169895,
        pas: 955,
        expreso: 521
      },
      sla_paqar: { value: 97.41, target: 95.0, volume: 169895, status: 'ok', delta: 2.41, activacion: 97.41, encaminamiento: 97.38 },
      sla_clasico: { value: 98.46, target: 95.0, status: 'ok', delta: 3.46 },
      sla_expreso: { value: 78.99, target: 95.0, status: 'danger', delta: -16.01 },
      fv_expreso: { value: 88.30, target: 90.0, volume: 521, status: 'warning', delta: -1.70 },
      fv_paqar: { value: 89.14, target: 90.0, volume: 169895, status: 'warning', delta: -0.86 },
      sla_pas: { value: 88.69, target: 95.0, volume: 955, status: 'warning', delta: -6.31 },
      fv_pas: { value: 63.94, target: 90.0, volume: 955, status: 'danger', delta: -26.06 },
      fv_pas_final: { value: 68.27, target: 95.0, status: 'danger', delta: -26.73 }
    },
    dia_puro: {
      periodName: 'Día Hábil Anterior',
      periodCode: 'dia_puro',
      periodDetail: '13/11/2026 (Última jornada hábil cerrada)',
      totalVolume: 24295,
      vencidos: 24295,
      backlog: 1224,
      a_vencer: 150002,
      guarda_vencida: 1292,
      q: {
        total: 24295,
        paq_ar: 24295,
        pas: 955,
        expreso: 74
      },
      sla_paqar: { value: 97.28, target: 95.0, volume: 24295, status: 'ok', delta: 2.28, activacion: 97.28, encaminamiento: 97.26 },
      sla_clasico: { value: 98.50, target: 95.0, status: 'ok', delta: 3.50 },
      sla_expreso: { value: 75.70, target: 95.0, status: 'danger', delta: -19.30 },
      fv_expreso: { value: 87.05, target: 90.0, volume: 74, status: 'warning', delta: -2.95 },
      fv_paqar: { value: 88.45, target: 90.0, volume: 24295, status: 'warning', delta: -1.55 },
      sla_pas: { value: 79.92, target: 95.0, volume: 955, status: 'danger', delta: -15.08 },
      fv_pas: { value: 64.08, target: 90.0, volume: 955, status: 'danger', delta: -25.92 },
      fv_pas_final: { value: 50.69, target: 95.0, status: 'danger', delta: -44.31 }
    }
  },
  nodes: pbaNodes.map(n => {
    const ma = n.kpisByPeriod.mes_anterior || {};
    const ay = n.kpisByPeriod.ayer || {};
    const anio = n.kpisByPeriod.anio || {};
    const qMes = computeNodeQ(n, 'mes_anterior');
    const qAyer = computeNodeQ(n, 'ayer');

    return {
      id: n.id,
      code: n.code,
      name: cleanNames[n.code] || n.name,
      city: cleanNames[n.code] || n.city,
      mes_anterior: {
        sla_paqar: mapMetric(ma.sla_paqar, 95.0, anio.sla_paqar),
        fv_paqar: mapMetric(ma.fv_paqar, 90.0, anio.fv_paqar),
        sla_pas: mapMetric(ma.sla_pas, 95.0, anio.sla_pas),
        fv_pas: mapMetric(ma.fv_pas, 90.0, anio.fv_pas),
        sla_expreso: mapMetric(ma.sla_expreso, 95.0, anio.sla_expreso),
        fv_expreso: mapMetric(ma.otif_expreso, 90.0, anio.otif_expreso),
        volume: qMes.total,
        q: qMes
      },
      dia_puro: {
        sla_paqar: mapMetric(ay.sla_paqar, 95.0),
        fv_paqar: mapMetric(ay.fv_paqar, 90.0),
        sla_pas: mapMetric(ay.sla_pas, 95.0),
        fv_pas: mapMetric(ay.fv_pas, 90.0),
        sla_expreso: mapMetric(ay.sla_expreso, 95.0),
        fv_expreso: mapMetric(ay.otif_expreso, 90.0),
        volume: qAyer.total,
        q: qAyer
      }
    };
  }),
  series: pbaSeries
};

// Apply dynamic summary from live Maestro if available
const liveSummaryPath = path.join(__dirname, 'live_maestro_summary.json');
if (fs.existsSync(liveSummaryPath)) {
  try {
    const raw = fs.readFileSync(liveSummaryPath, 'utf8').replace(/^\uFEFF/, '');
    const liveSummary = JSON.parse(raw);
    if (liveSummary.mes && liveSummary.mes.PBA) {
      const pbaM = liveSummary.mes.PBA;
      const totVol = pbaM.total_piezas || pbaM.volumen;
      pbaData.regionalKpis.mes_anterior.totalVolume = totVol;
      pbaData.regionalKpis.mes_anterior.vencidos = totVol;
      pbaData.regionalKpis.mes_anterior.q = {
        total: totVol,
        paq_ar: pbaM.paquetes || pbaM.volumen,
        pas: pbaM.cartas || 0,
        expreso: pbaM.expreso || 0
      };
      pbaData.regionalKpis.mes_anterior.sla_paqar.value = pbaM.sla_paqar;
      pbaData.regionalKpis.mes_anterior.sla_paqar.volume = pbaM.paquetes || pbaM.volumen;
      pbaData.regionalKpis.mes_anterior.sla_paqar.delta = +(pbaM.sla_paqar - 95.0).toFixed(2);
      pbaData.regionalKpis.mes_anterior.sla_paqar.status = getStatus(pbaM.sla_paqar, 95.0);
      pbaData.regionalKpis.mes_anterior.fv_paqar.value = pbaM.fv_paqar;
      pbaData.regionalKpis.mes_anterior.fv_paqar.delta = +(pbaM.fv_paqar - 90.0).toFixed(2);
      pbaData.regionalKpis.mes_anterior.fv_paqar.status = getStatus(pbaM.fv_paqar, 90.0);
      if (pbaM.sla_clasico) pbaData.regionalKpis.mes_anterior.sla_clasico = { value: pbaM.sla_clasico, target: 95.0, delta: +(pbaM.sla_clasico - 95.0).toFixed(2), status: getStatus(pbaM.sla_clasico, 95.0) };
      if (pbaM.sla_expreso !== undefined && pbaM.sla_expreso > 0) {
        pbaData.regionalKpis.mes_anterior.sla_expreso = {
          value: pbaM.sla_expreso,
          target: 95.0,
          volume: pbaM.expreso || 0,
          status: getStatus(pbaM.sla_expreso, 95.0),
          delta: +(pbaM.sla_expreso - 95.0).toFixed(2)
        };
      }
      if (pbaM.fv_expreso !== undefined && pbaM.fv_expreso > 0) {
        pbaData.regionalKpis.mes_anterior.fv_expreso = {
          value: pbaM.fv_expreso,
          target: 90.0,
          volume: pbaM.expreso || 0,
          status: getStatus(pbaM.fv_expreso, 90.0),
          delta: +(pbaM.fv_expreso - 90.0).toFixed(2)
        };
      }
      if (pbaM.cartas) {
        pbaData.regionalKpis.mes_anterior.sla_pas.volume = pbaM.cartas;
        pbaData.regionalKpis.mes_anterior.fv_pas.volume = pbaM.cartas;
      }
    }
    if (liveSummary.dia && liveSummary.dia.PBA) {
      const pbaD = liveSummary.dia.PBA;
      const totVol = pbaD.total_piezas || pbaD.volumen;
      pbaData.regionalKpis.dia_puro.totalVolume = totVol;
      pbaData.regionalKpis.dia_puro.vencidos = totVol;
      pbaData.regionalKpis.dia_puro.q = {
        total: totVol,
        paq_ar: pbaD.paquetes || pbaD.volumen,
        pas: pbaD.cartas || 0,
        expreso: pbaD.expreso || 0
      };
      pbaData.regionalKpis.dia_puro.sla_paqar.value = pbaD.sla_paqar;
      pbaData.regionalKpis.dia_puro.sla_paqar.volume = pbaD.paquetes || pbaD.volumen;
      pbaData.regionalKpis.dia_puro.sla_paqar.delta = +(pbaD.sla_paqar - 95.0).toFixed(2);
      pbaData.regionalKpis.dia_puro.sla_paqar.status = getStatus(pbaD.sla_paqar, 95.0);
      pbaData.regionalKpis.dia_puro.fv_paqar.value = pbaD.fv_paqar;
      pbaData.regionalKpis.dia_puro.fv_paqar.delta = +(pbaD.fv_paqar - 90.0).toFixed(2);
      pbaData.regionalKpis.dia_puro.fv_paqar.status = getStatus(pbaD.fv_paqar, 90.0);
      if (pbaD.sla_clasico) pbaData.regionalKpis.dia_puro.sla_clasico = { value: pbaD.sla_clasico, target: 95.0, delta: +(pbaD.sla_clasico - 95.0).toFixed(2), status: getStatus(pbaD.sla_clasico, 95.0) };
      if (pbaD.sla_expreso !== undefined && pbaD.sla_expreso > 0) {
        pbaData.regionalKpis.dia_puro.sla_expreso = {
          value: pbaD.sla_expreso,
          target: 95.0,
          volume: pbaD.expreso || 0,
          status: getStatus(pbaD.sla_expreso, 95.0),
          delta: +(pbaD.sla_expreso - 95.0).toFixed(2)
        };
      }
      if (pbaD.fv_expreso !== undefined && pbaD.fv_expreso > 0) {
        pbaData.regionalKpis.dia_puro.fv_expreso = {
          value: pbaD.fv_expreso,
          target: 90.0,
          volume: pbaD.expreso || 0,
          status: getStatus(pbaD.fv_expreso, 90.0),
          delta: +(pbaD.fv_expreso - 90.0).toFixed(2)
        };
      }
      if (pbaD.cartas) {
        pbaData.regionalKpis.dia_puro.sla_pas.volume = pbaD.cartas;
        pbaData.regionalKpis.dia_puro.fv_pas.volume = pbaD.cartas;
      }
    }
    if (liveSummary.nodes_mes) {
      pbaData.nodes.forEach(n => {
        const nm = liveSummary.nodes_mes[n.code];
        if (nm) {
          n.mes_anterior.volume = nm.total_piezas;
          n.mes_anterior.q = {
            total: nm.total_piezas,
            paq_ar: nm.paquetes,
            pas: nm.cartas,
            expreso: nm.expreso
          };
          if (nm.sla_paqar) {
            n.mes_anterior.sla_paqar.value = nm.sla_paqar;
            n.mes_anterior.sla_paqar.volume = nm.paquetes;
            n.mes_anterior.sla_paqar.status = getStatus(nm.sla_paqar, 95.0);
            n.mes_anterior.sla_paqar.delta = +(nm.sla_paqar - 95.0).toFixed(2);
          }
          if (nm.fv_paqar) {
            n.mes_anterior.fv_paqar.value = nm.fv_paqar;
            n.mes_anterior.fv_paqar.volume = nm.paquetes;
            n.mes_anterior.fv_paqar.status = getStatus(nm.fv_paqar, 90.0);
            n.mes_anterior.fv_paqar.delta = +(nm.fv_paqar - 90.0).toFixed(2);
          }
          if (nm.sla_pas) {
            n.mes_anterior.sla_pas.value = nm.sla_pas;
            n.mes_anterior.sla_pas.volume = nm.cartas;
            n.mes_anterior.sla_pas.status = getStatus(nm.sla_pas, 95.0);
            n.mes_anterior.sla_pas.delta = +(nm.sla_pas - 95.0).toFixed(2);
          }
          if (nm.fv_pas) {
            n.mes_anterior.fv_pas.value = nm.fv_pas;
            n.mes_anterior.fv_pas.volume = nm.cartas;
            n.mes_anterior.fv_pas.status = getStatus(nm.fv_pas, 90.0);
            n.mes_anterior.fv_pas.delta = +(nm.fv_pas - 90.0).toFixed(2);
          }
          if (nm.sla_expreso !== undefined && nm.sla_expreso > 0) {
            n.mes_anterior.sla_expreso = {
              value: nm.sla_expreso,
              target: 95.0,
              volume: nm.expreso || 0,
              status: getStatus(nm.sla_expreso, 95.0),
              delta: +(nm.sla_expreso - 95.0).toFixed(2)
            };
          }
          if (nm.fv_expreso !== undefined && nm.fv_expreso > 0) {
            n.mes_anterior.fv_expreso = {
              value: nm.fv_expreso,
              target: 90.0,
              volume: nm.expreso || 0,
              status: getStatus(nm.fv_expreso, 90.0),
              delta: +(nm.fv_expreso - 90.0).toFixed(2)
            };
          }
        }
      });
    }
    if (liveSummary.nodes_dia) {
      pbaData.nodes.forEach(n => {
        const nd = liveSummary.nodes_dia[n.code];
        if (nd) {
          n.dia_puro.volume = nd.total_piezas;
          n.dia_puro.q = {
            total: nd.total_piezas,
            paq_ar: nd.paquetes,
            pas: nd.cartas,
            expreso: nd.expreso
          };
          if (nd.sla_paqar) {
            n.dia_puro.sla_paqar.value = nd.sla_paqar;
            n.dia_puro.sla_paqar.volume = nd.paquetes;
            n.dia_puro.sla_paqar.status = getStatus(nd.sla_paqar, 95.0);
            n.dia_puro.sla_paqar.delta = +(nd.sla_paqar - 95.0).toFixed(2);
          }
          if (nd.fv_paqar) {
            n.dia_puro.fv_paqar.value = nd.fv_paqar;
            n.dia_puro.fv_paqar.volume = nd.paquetes;
            n.dia_puro.fv_paqar.status = getStatus(nd.fv_paqar, 90.0);
            n.dia_puro.fv_paqar.delta = +(nd.fv_paqar - 90.0).toFixed(2);
          }
          if (nd.sla_pas) {
            n.dia_puro.sla_pas.value = nd.sla_pas;
            n.dia_puro.sla_pas.volume = nd.cartas;
            n.dia_puro.sla_pas.status = getStatus(nd.sla_pas, 95.0);
            n.dia_puro.sla_pas.delta = +(nd.sla_pas - 95.0).toFixed(2);
          }
          if (nd.fv_pas) {
            n.dia_puro.fv_pas.value = nd.fv_pas;
            n.dia_puro.fv_pas.volume = nd.cartas;
            n.dia_puro.fv_pas.status = getStatus(nd.fv_pas, 90.0);
            n.dia_puro.fv_pas.delta = +(nd.fv_pas - 90.0).toFixed(2);
          }
          if (nd.sla_expreso !== undefined && nd.sla_expreso > 0) {
            n.dia_puro.sla_expreso = {
              value: nd.sla_expreso,
              target: 95.0,
              volume: nd.expreso || 0,
              status: getStatus(nd.sla_expreso, 95.0),
              delta: +(nd.sla_expreso - 95.0).toFixed(2)
            };
          }
          if (nd.fv_expreso !== undefined && nd.fv_expreso > 0) {
            n.dia_puro.fv_expreso = {
              value: nd.fv_expreso,
              target: 90.0,
              volume: nd.expreso || 0,
              status: getStatus(nd.fv_expreso, 90.0),
              delta: +(nd.fv_expreso - 90.0).toFixed(2)
            };
          }
        }
      });
    }
    if (liveSummary.maxDiaDateIso) {
      const parts = liveSummary.maxDiaDateIso.split('-');
      if (parts.length === 3) {
        pbaData.pureDayLabel = `Día Hábil Anterior (${parts[2]}/${parts[1]}/${parts[0]})`;
        pbaData.regionalKpis.dia_puro.periodDetail = `${parts[2]}/${parts[1]}/${parts[0]} (Última jornada cerrada)`;
      }
    }
  } catch (e) {
    console.warn('Error applying liveSummary:', e);
  }
}

fs.writeFileSync('data.json', JSON.stringify(pbaData, null, 2), 'utf8');
const dataJsContent = 'window.PBA_DATA = ' + JSON.stringify(pbaData, null, 2) + ';';
fs.writeFileSync('data.js', dataJsContent, 'utf8');
console.log('Successfully written data.json and data.js with separated Q (Paq, PAS, Expreso)!');

// Also update standalone Tablero_PBA.html
try {
  const indexHtml = fs.readFileSync('index.html', 'utf8');
  const embeddedDataScript = `\n  <script>\n${dataJsContent}\n  </script>\n`;
  const standaloneHtml = indexHtml.replace(/<script\s+src=["']data\.js["']><\/script>/i, embeddedDataScript);
  fs.writeFileSync('Tablero_PBA.html', standaloneHtml, 'utf8');
  console.log('Successfully updated standalone Tablero_PBA.html (0 installation needed)!');
} catch (e) {
  console.error('Error updating Tablero_PBA.html:', e.message);
}
