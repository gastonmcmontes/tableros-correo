
const officialReportMetrics = {
  PBA: {
    mes: { totalVolume: 169895, vencidos: 169895, backlog: 1224, a_vencer: 150002, guarda_vencida: 1292, sla_paqar: 97.41, sla_paqar_encam: 97.38, sla_clasico: 98.46, sla_expreso: 78.99, fv_paqar: 89.14, sla_pas: 88.69, fv_pas: 63.94, fv_pas_final: 68.27 },
    dia: { totalVolume: 24295, vencidos: 24295, backlog: 1224, a_vencer: 150002, guarda_vencida: 1292, sla_paqar: 97.28, sla_paqar_encam: 97.26, sla_clasico: 98.50, sla_expreso: 75.70, fv_paqar: 88.45, sla_pas: 79.92, fv_pas: 64.08, fv_pas_final: 50.69 }
  },
  METROPOLITANA: {
    mes: { totalVolume: 255037, vencidos: 255037, backlog: 2452, a_vencer: 176860, guarda_vencida: 1978, sla_paqar: 96.27, sla_paqar_encam: 96.27, sla_clasico: 98.81, sla_expreso: 66.90, fv_paqar: 88.17, sla_pas: 95.08, fv_pas: 62.28, fv_pas_final: 66.70 },
    dia: { totalVolume: 36688, vencidos: 36688, backlog: 2452, a_vencer: 176860, guarda_vencida: 1978, sla_paqar: 95.20, sla_paqar_encam: 95.20, sla_clasico: 98.60, sla_expreso: 66.27, fv_paqar: 89.42, sla_pas: 90.43, fv_pas: 61.72, fv_pas_final: 51.16 }
  },
  CENTRO_NEA: {
    mes: { totalVolume: 255607, vencidos: 255607, backlog: 2346, a_vencer: 187302, guarda_vencida: 1434, sla_paqar: 96.94, sla_paqar_encam: 96.94, sla_clasico: 98.37, sla_expreso: 64.19, fv_paqar: 87.27, sla_pas: 89.96, fv_pas: 62.30, fv_pas_final: 67.30 },
    dia: { totalVolume: 33471, vencidos: 33471, backlog: 2346, a_vencer: 187302, guarda_vencida: 1434, sla_paqar: 96.25, sla_paqar_encam: 96.25, sla_clasico: 97.91, sla_expreso: 61.06, fv_paqar: 85.47, sla_pas: 91.98, fv_pas: 67.41, fv_pas_final: 55.01 }
  },
  CUYO_NOA: {
    mes: { totalVolume: 117170, vencidos: 117170, backlog: 1176, a_vencer: 80622, guarda_vencida: 1153, sla_paqar: 96.76, sla_paqar_encam: 96.76, sla_clasico: 97.59, sla_expreso: 60.58, fv_paqar: 88.94, sla_pas: 93.72, fv_pas: 58.37, fv_pas_final: 63.36 },
    dia: { totalVolume: 14591, vencidos: 14591, backlog: 1176, a_vencer: 80622, guarda_vencida: 1153, sla_paqar: 94.39, sla_paqar_encam: 94.39, sla_clasico: 95.51, sla_expreso: 54.06, fv_paqar: 88.60, sla_pas: 92.55, fv_pas: 60.34, fv_pas_final: 55.23 }
  },
  SUR: {
    mes: { totalVolume: 114809, vencidos: 114809, backlog: 1643, a_vencer: 87654, guarda_vencida: 870, sla_paqar: 93.98, sla_paqar_encam: 94.16, sla_clasico: 94.92, sla_expreso: 48.17, fv_paqar: 83.89, sla_pas: 85.98, fv_pas: 59.17, fv_pas_final: 69.17 },
    dia: { totalVolume: 14399, vencidos: 14399, backlog: 1643, a_vencer: 87654, guarda_vencida: 870, sla_paqar: 94.14, sla_paqar_encam: 94.28, sla_clasico: 95.43, sla_expreso: 48.51, fv_paqar: 81.28, sla_pas: 80.94, fv_pas: 62.47, fv_pas_final: 50.03 }
  },
  NACIONAL: {
    mes: { totalVolume: 912532, vencidos: 912532, backlog: 8842, a_vencer: 682450, guarda_vencida: 6743, sla_paqar: 96.45, sla_paqar_encam: 96.45, sla_clasico: 97.95, sla_expreso: 67.38, fv_paqar: 87.71, sla_pas: 91.89, fv_pas: 62.37, fv_pas_final: 67.28 },
    dia: { totalVolume: 123446, vencidos: 123446, backlog: 8842, a_vencer: 682450, guarda_vencida: 6743, sla_paqar: 95.67, sla_paqar_encam: 95.67, sla_clasico: 97.63, sla_expreso: 65.28, fv_paqar: 87.18, sla_pas: 86.98, fv_pas: 62.71, fv_pas_final: 51.35 }
  }
};

const fs = require('fs');
const path = require('path');

const srcNodesPath = 'C:/Users/gmontes/OneDrive - Correo Argentino/Escritorio/trabajos antigravity/app tablero/src/data/realMaestroNodes.json';
const srcRegPath = 'C:/Users/gmontes/OneDrive - Correo Argentino/Escritorio/trabajos antigravity/app tablero/src/data/realRegionalSeries.json';
const maestroPath = 'C:/Users/gmontes/OneDrive - Correo Argentino/Documentos/Copilot/Creado/Maestro_Base 180.xlsx';

const nodesRaw = JSON.parse(fs.readFileSync(srcNodesPath, 'utf8'));
const regRaw = JSON.parse(fs.readFileSync(srcRegPath, 'utf8'));

// Format timestamps dinámicos desde SharePoint
let maestroFileDate = '24/11/2026 15:37 hs';
const metaPath = path.join(__dirname, 'maestro_meta.json');
const spPagePath = path.join(__dirname, 'sp_page.html');

if (fs.existsSync(metaPath)) {
  try {
    const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8').replace(/^\uFEFF/, ''));
    if (meta.lastModified) maestroFileDate = meta.lastModified;
  } catch(e) {}
} else if (fs.existsSync(spPagePath)) {
  try {
    const content = fs.readFileSync(spPagePath, 'utf8');
    const m = content.match(/var _wopiContextJson\s*=\s*({[\s\S]*?});/);
    if (m) {
      const json = JSON.parse(m[1]);
      if (json.LastModified) {
        const d = new Date(Number(json.LastModified));
        const pad = n => String(n).padStart(2, '0');
        maestroFileDate = `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())} hs`;
      }
    }
  } catch(e) {}
}

const now = new Date();
const pad = n => String(n).padStart(2, '0');
const syncMomentDate = `${pad(now.getDate())}/${pad(now.getMonth() + 1)}/${now.getFullYear()} ${pad(now.getHours())}:${pad(now.getMinutes())} hs`;

const cleanNodeNames = {
  COR: 'Córdoba',
  CNQ: 'Corrientes',
  PRA: 'Paraná',
  PSS: 'Posadas',
  RES: 'Resistencia',
  RCU: 'Río Cuarto',
  ROS: 'Rosario',
  SFN: 'Santa Fe',
  VMR: 'Villa María',
  CTC: 'Catamarca',
  JUJ: 'Jujuy',
  IRJ: 'La Rioja',
  MDZ: 'Mendoza',
  SLA: 'Salta',
  UAQ: 'San Juan',
  LUQ: 'San Luis',
  TUC: 'San Miguel de Tucumán',
  SDE: 'Santiago del Estero',
  DP2: 'Nodo Barracas (CABA Sur)',
  DP3: 'Nodo Mercado Central (Lomas)',
  DP4: 'Nodo Moreno (Morón)',
  DP5: 'Nodo Quilmes',
  DP6: 'Nodo Vicente López',
  BHI: 'Bahía Blanca',
  LPG: 'La Plata',
  MDQ: 'Mar del Plata',
  MER: 'Mercedes',
  PER: 'Pergamino',
  RSA: 'Santa Rosa',
  BRC: 'Bariloche',
  CRD: 'Comodoro Rivadavia',
  NQN: 'Neuquén',
  RGL: 'Río Gallegos',
  REL: 'Trelew',
  USH: 'Ushuaia'
};

const regionMapping = {
  'NACIONAL': { code: 'NACIONAL', name: 'Total Nacional', fullName: 'República Argentina (Consolidado)' },
  'METROPOLITANA': { code: 'METROPOLITANA', name: 'Metropolitana', fullName: 'Región Metropolitana (AMBA / CABA)' },
  'PBA / La Pampa': { code: 'PBA', name: 'PBA / La Pampa', fullName: 'Provincia de Buenos Aires / La Pampa' },
  'Centro - NEA': { code: 'CENTRO_NEA', name: 'Centro - NEA', fullName: 'Región Centro y Litoral (NEA)' },
  'Cuyo - NOA': { code: 'CUYO_NOA', name: 'Cuyo - NOA', fullName: 'Región Cuyo y Noroeste Argentino (NOA)' },
  'SUR': { code: 'SUR', name: 'Sur / Patagonia', fullName: 'Región Sur (Patagonia)' }
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

  return { total, paq_ar, pas, expreso };
};

// Process Nodes
const allNodes = nodesRaw.map(n => {
  const ma = n.kpisByPeriod.mes_anterior || {};
  const ay = n.kpisByPeriod.ayer || {};
  const anio = n.kpisByPeriod.anio || {};
  const qMes = computeNodeQ(n, 'mes_anterior');
  const qAyer = computeNodeQ(n, 'ayer');

  // Normalize regionKey
  let regionCode = 'PBA';
  if (n.regionId === 'METROPOLITANA') regionCode = 'METROPOLITANA';
  else if (n.regionId === 'Centro - NEA') regionCode = 'CENTRO_NEA';
  else if (n.regionId === 'Cuyo - NOA') regionCode = 'CUYO_NOA';
  else if (n.regionId === 'SUR') regionCode = 'SUR';
  else if (n.regionId && n.regionId.includes('PBA')) regionCode = 'PBA';

  return {
    id: n.id,
    code: n.code,
    name: cleanNodeNames[n.code] || n.name,
    city: n.city,
    regionKey: regionCode,
    regionName: n.regionName || n.regionId,
    tipoNodo: n.tipoNodo || 'Planta Operativa',
    kpis: {
      mes_anterior: {
        totalVolume: qMes.total,
        q: qMes,
        sla_paqar: mapMetric(ma.sla_paqar, targets.sla_paqar, anio.sla_paqar),
        fv_paqar: mapMetric(ma.fv_paqar, targets.fv_paqar, anio.fv_paqar),
        sla_pas: mapMetric(ma.sla_pas, targets.sla_pas, anio.sla_pas),
        fv_pas: mapMetric(ma.fv_pas, targets.fv_pas, anio.fv_pas),
        sla_expreso: mapMetric(ma.sla_expreso, targets.sla_expreso, anio.sla_expreso),
        fv_expreso: mapMetric(ma.otif_expreso || ma.fv_expreso, targets.fv_expreso, anio.otif_expreso || anio.fv_expreso)
      },
      dia_puro: {
        totalVolume: qAyer.total,
        q: qAyer,
        sla_paqar: mapMetric(ay.sla_paqar, targets.sla_paqar),
        fv_paqar: mapMetric(ay.fv_paqar, targets.fv_paqar),
        sla_pas: mapMetric(ay.sla_pas, targets.sla_pas),
        fv_pas: mapMetric(ay.fv_pas, targets.fv_pas),
        sla_expreso: mapMetric(ay.sla_expreso, targets.sla_expreso),
        fv_expreso: mapMetric(ay.otif_expreso || ay.fv_expreso, targets.fv_expreso)
      }
    }
  };
});

// Process Regional Aggregates
const regionalSeriesKeys = ['slaPaq', 'fvPaq', 'slaPas', 'fvPas', 'slaExpreso', 'fvExpreso'];
const metricKeyMap = {
  slaPaq: 'sla_paqar',
  fvPaq: 'fv_paqar',
  slaPas: 'sla_pas',
  fvPas: 'fv_pas',
  slaExpreso: 'sla_expreso',
  fvExpreso: 'fv_expreso'
};

const regionsData = {};

// Helper to extract series and last values from regRaw
['METROPOLITANA', 'PBA / La Pampa', 'Centro - NEA', 'Cuyo - NOA', 'SUR'].forEach(regName => {
  const regCode = regionMapping[regName].code;
  const rawObj = regRaw[regName] || {};

  const regionNodes = allNodes.filter(n => n.regionKey === regCode);
  const volMes = regionNodes.reduce((acc, n) => acc + (n.kpis.mes_anterior.totalVolume || 0), 0);
  const volDia = regionNodes.reduce((acc, n) => acc + (n.kpis.dia_puro.totalVolume || 0), 0);

  const qMes = {
    total: volMes,
    paq_ar: regionNodes.reduce((acc, n) => acc + n.kpis.mes_anterior.q.paq_ar, 0),
    pas: regionNodes.reduce((acc, n) => acc + n.kpis.mes_anterior.q.pas, 0),
    expreso: regionNodes.reduce((acc, n) => acc + n.kpis.mes_anterior.q.expreso, 0)
  };

  const qDia = {
    total: volDia,
    paq_ar: regionNodes.reduce((acc, n) => acc + n.kpis.dia_puro.q.paq_ar, 0),
    pas: regionNodes.reduce((acc, n) => acc + n.kpis.dia_puro.q.pas, 0),
    expreso: regionNodes.reduce((acc, n) => acc + n.kpis.dia_puro.q.expreso, 0)
  };

  // Build KPIs for mes_anterior and dia_puro
  const kpisMes = {};
  const kpisDia = {};

  regionalSeriesKeys.forEach(k => {
    const kpiKey = metricKeyMap[k];
    const target = targets[kpiKey];
    const metricSeries = rawObj[k] || {};

    const monthArr = metricSeries['Mes en curso'] || [];
    const lastMonthPoint = monthArr.length > 0 ? monthArr[monthArr.length - 2] || monthArr[monthArr.length - 1] : null;
    const valMes = lastMonthPoint ? Number(lastMonthPoint[1]) : 90;

    const dayArr = metricSeries['Último día operativo'] || [];
    const lastDayPoint = dayArr.length > 0 ? dayArr[dayArr.length - 1] : null;
    const valDia = lastDayPoint ? Number(lastDayPoint[1]) : 90;

    kpisMes[kpiKey] = {
      value: valMes,
      target,
      delta: +(valMes - target).toFixed(2),
      status: getStatus(valMes, target),
      series: monthArr
    };

    kpisDia[kpiKey] = {
      value: valDia,
      target,
      delta: +(valDia - target).toFixed(2),
      status: getStatus(valDia, target),
      series: dayArr
    };
  });

  regionsData[regCode] = {
    code: regCode,
    name: regionMapping[regName].name,
    fullName: regionMapping[regName].fullName,
    nodesCount: regionNodes.length,
    kpis: {
      mes_anterior: {
        periodName: 'Consolidado Último Mes',
        periodCode: 'mes_anterior',
        periodDetail: 'Cierre mensual consolidado Octubre 2026',
        totalVolume: volMes,
        q: qMes,
        ...kpisMes
      },
      dia_puro: {
        periodName: 'Día Puro Anterior',
        periodCode: 'dia_puro',
        periodDetail: 'Última jornada operativa hábil cerrada',
        totalVolume: volDia,
        q: qDia,
        ...kpisDia
      }
    }
  };
});

// Build NACIONAL Consolidado
const totalVolMes = allNodes.reduce((acc, n) => acc + (n.kpis.mes_anterior.totalVolume || 0), 0);
const totalVolDia = allNodes.reduce((acc, n) => acc + (n.kpis.dia_puro.totalVolume || 0), 0);

const qNacMes = {
  total: totalVolMes,
  paq_ar: allNodes.reduce((acc, n) => acc + n.kpis.mes_anterior.q.paq_ar, 0),
  pas: allNodes.reduce((acc, n) => acc + n.kpis.mes_anterior.q.pas, 0),
  expreso: allNodes.reduce((acc, n) => acc + n.kpis.mes_anterior.q.expreso, 0)
};

const qNacDia = {
  total: totalVolDia,
  paq_ar: allNodes.reduce((acc, n) => acc + n.kpis.dia_puro.q.paq_ar, 0),
  pas: allNodes.reduce((acc, n) => acc + n.kpis.dia_puro.q.pas, 0),
  expreso: allNodes.reduce((acc, n) => acc + n.kpis.dia_puro.q.expreso, 0)
};

const kpisNacMes = {};
const kpisNacDia = {};

const regCodes = ['METROPOLITANA', 'PBA', 'CENTRO_NEA', 'CUYO_NOA', 'SUR'];

regionalSeriesKeys.forEach(k => {
  const kpiKey = metricKeyMap[k];
  const target = targets[kpiKey];

  // Weighted average by region volume
  let sumMes = 0;
  let sumDia = 0;
  regCodes.forEach(rc => {
    const r = regionsData[rc];
    const wMes = r.kpis.mes_anterior.totalVolume;
    const wDia = r.kpis.dia_puro.totalVolume;
    sumMes += r.kpis.mes_anterior[kpiKey].value * wMes;
    sumDia += r.kpis.dia_puro[kpiKey].value * wDia;
  });

  const valMes = +(sumMes / totalVolMes).toFixed(2);
  const valDia = +(sumDia / totalVolDia).toFixed(2);

  // Blend series from first region structure
  const sampleMonthSeries = regionsData['METROPOLITANA'].kpis.mes_anterior[kpiKey].series || [];
  const sampleDaySeries = regionsData['METROPOLITANA'].kpis.dia_puro[kpiKey].series || [];

  kpisNacMes[kpiKey] = {
    value: valMes,
    target,
    delta: +(valMes - target).toFixed(2),
    status: getStatus(valMes, target),
    series: sampleMonthSeries
  };

  kpisNacDia[kpiKey] = {
    value: valDia,
    target,
    delta: +(valDia - target).toFixed(2),
    status: getStatus(valDia, target),
    series: sampleDaySeries
  };
});

  const offNac = officialReportMetrics['NACIONAL'];
  if (offNac) {
    if (offNac.mes) {
      if (offNac.mes.sla_paqar) kpisNacMes.sla_paqar = { value: offNac.mes.sla_paqar, target: 95.0, delta: +(offNac.mes.sla_paqar - 95.0).toFixed(2), status: getStatus(offNac.mes.sla_paqar, 95.0), series: kpisNacMes.sla_paqar.series };
      if (offNac.mes.fv_paqar) kpisNacMes.fv_paqar = { value: offNac.mes.fv_paqar, target: 90.0, delta: +(offNac.mes.fv_paqar - 90.0).toFixed(2), status: getStatus(offNac.mes.fv_paqar, 90.0), series: kpisNacMes.fv_paqar.series };
      if (offNac.mes.sla_pas) kpisNacMes.sla_pas = { value: offNac.mes.sla_pas, target: 95.0, delta: +(offNac.mes.sla_pas - 95.0).toFixed(2), status: getStatus(offNac.mes.sla_pas, 95.0), series: kpisNacMes.sla_pas.series };
      if (offNac.mes.fv_pas) kpisNacMes.fv_pas = { value: offNac.mes.fv_pas, target: 90.0, delta: +(offNac.mes.fv_pas - 90.0).toFixed(2), status: getStatus(offNac.mes.fv_pas, 90.0), series: kpisNacMes.fv_pas.series };
      if (offNac.mes.sla_expreso) kpisNacMes.sla_expreso = { value: offNac.mes.sla_expreso, target: 95.0, delta: +(offNac.mes.sla_expreso - 95.0).toFixed(2), status: getStatus(offNac.mes.sla_expreso, 95.0), series: kpisNacMes.sla_expreso.series };
    }
    if (offNac.dia) {
      if (offNac.dia.sla_paqar) kpisNacDia.sla_paqar = { value: offNac.dia.sla_paqar, target: 95.0, delta: +(offNac.dia.sla_paqar - 95.0).toFixed(2), status: getStatus(offNac.dia.sla_paqar, 95.0), series: kpisNacDia.sla_paqar.series };
      if (offNac.dia.fv_paqar) kpisNacDia.fv_paqar = { value: offNac.dia.fv_paqar, target: 90.0, delta: +(offNac.dia.fv_paqar - 90.0).toFixed(2), status: getStatus(offNac.dia.fv_paqar, 90.0), series: kpisNacDia.fv_paqar.series };
      if (offNac.dia.sla_pas) kpisNacDia.sla_pas = { value: offNac.dia.sla_pas, target: 95.0, delta: +(offNac.dia.sla_pas - 95.0).toFixed(2), status: getStatus(offNac.dia.sla_pas, 95.0), series: kpisNacDia.sla_pas.series };
      if (offNac.dia.fv_pas) kpisNacDia.fv_pas = { value: offNac.dia.fv_pas, target: 90.0, delta: +(offNac.dia.fv_pas - 90.0).toFixed(2), status: getStatus(offNac.dia.fv_pas, 90.0), series: kpisNacDia.fv_pas.series };
      if (offNac.dia.sla_expreso) kpisNacDia.sla_expreso = { value: offNac.dia.sla_expreso, target: 95.0, delta: +(offNac.dia.sla_expreso - 95.0).toFixed(2), status: getStatus(offNac.dia.sla_expreso, 95.0), series: kpisNacDia.sla_expreso.series };
    }
  }

  regionsData['NACIONAL'] = {
  code: 'NACIONAL',
  name: 'Total Nacional',
  fullName: 'República Argentina (Consolidado)',
  nodesCount: allNodes.length,
  kpis: {
    mes_anterior: {
      periodName: 'Mes en Curso',
      periodCode: 'mes_anterior',
      periodDetail: 'Acumulado Noviembre 2026',
      totalVolume: 912532,
      vencidos: 912532,
      backlog: 8842,
      a_vencer: 682450,
      guarda_vencida: 6743,
      q: { total: 912532, paq_ar: 912532, pas: 3023, expreso: 521 },
      ...kpisNacMes
    },
    dia_puro: {
      periodName: 'Día Hábil Anterior',
      periodCode: 'dia_puro',
      periodDetail: '13/11/2026 (Última jornada cerrada)',
      totalVolume: 123446,
      vencidos: 123446,
      backlog: 8842,
      a_vencer: 682450,
      guarda_vencida: 6743,
      q: { total: 123446, paq_ar: 123446, pas: 3023, expreso: 74 },
      ...kpisNacDia
    }
  }
};

const nationalData = {
  title: 'Tablero de Control Operativo Nacional',
  scope: 'República Argentina - Correo Argentino',
  maestroLastUpload: maestroFileDate,
  lastSyncMoment: syncMomentDate,
  lastUpdate: maestroFileDate,
  pureDayLabel: 'Día Hábil Anterior (13 Nov 2026)',
  monthLabel: 'Mes en Curso Acumulado (Noviembre 2026)',
  targets,
  regionsList: [
    { code: 'NACIONAL', label: '🇦🇷 Nacional (Total)' },
    { code: 'METROPOLITANA', label: 'Metropolitana' },
    { code: 'PBA', label: 'PBA / La Pampa' },
    { code: 'CENTRO_NEA', label: 'Centro - NEA' },
    { code: 'CUYO_NOA', label: 'Cuyo - NOA' },
    { code: 'SUR', label: 'Sur (Patagonia)' }
  ],
  regions: regionsData,
  nodes: allNodes
};

// Apply dynamic live Maestro summary if available
const liveSummaryPath = path.join(__dirname, 'live_maestro_summary.json');
if (fs.existsSync(liveSummaryPath)) {
  try {
    const raw = fs.readFileSync(liveSummaryPath, 'utf8').replace(/^\uFEFF/, '');
    const liveSummary = JSON.parse(raw);
    const regKeys = ['NACIONAL', 'METRO', 'PBA', 'CENTRO_NEA', 'CUYO_NOA', 'SUR'];
    regKeys.forEach(rk => {
      const targetCode = rk === 'METRO' ? 'METROPOLITANA' : rk;
      const rObj = regionsData[targetCode];
      if (!rObj) return;
      if (liveSummary.mes && liveSummary.mes[rk]) {
        const m = liveSummary.mes[rk];
        rObj.kpis.mes_anterior.totalVolume = m.volumen;
        rObj.kpis.mes_anterior.vencidos = m.volumen;
        if (rObj.kpis.mes_anterior.sla_paqar) {
          rObj.kpis.mes_anterior.sla_paqar.value = m.sla_paqar;
          rObj.kpis.mes_anterior.sla_paqar.delta = +(m.sla_paqar - 95.0).toFixed(2);
          rObj.kpis.mes_anterior.sla_paqar.status = getStatus(m.sla_paqar, 95.0);
        }
        if (rObj.kpis.mes_anterior.fv_paqar) {
          rObj.kpis.mes_anterior.fv_paqar.value = m.fv_paqar;
          rObj.kpis.mes_anterior.fv_paqar.delta = +(m.fv_paqar - 90.0).toFixed(2);
          rObj.kpis.mes_anterior.fv_paqar.status = getStatus(m.fv_paqar, 90.0);
        }
      }
      if (liveSummary.dia && liveSummary.dia[rk]) {
        const d = liveSummary.dia[rk];
        rObj.kpis.dia_puro.totalVolume = d.volumen;
        rObj.kpis.dia_puro.vencidos = d.volumen;
        if (rObj.kpis.dia_puro.sla_paqar) {
          rObj.kpis.dia_puro.sla_paqar.value = d.sla_paqar;
          rObj.kpis.dia_puro.sla_paqar.delta = +(d.sla_paqar - 95.0).toFixed(2);
          rObj.kpis.dia_puro.sla_paqar.status = getStatus(d.sla_paqar, 95.0);
        }
        if (rObj.kpis.dia_puro.fv_paqar) {
          rObj.kpis.dia_puro.fv_paqar.value = d.fv_paqar;
          rObj.kpis.dia_puro.fv_paqar.delta = +(d.fv_paqar - 90.0).toFixed(2);
          rObj.kpis.dia_puro.fv_paqar.status = getStatus(d.fv_paqar, 90.0);
        }
      }
    });
    if (liveSummary.maxDiaDateIso) {
      const parts = liveSummary.maxDiaDateIso.split('-');
      if (parts.length === 3) {
        nationalData.pureDayLabel = `Día Hábil Anterior (${parts[2]}/${parts[1]}/${parts[0]})`;
      }
    }
  } catch (e) {
    console.warn('Error applying liveSummary to national:', e);
  }
}

// Write output files
const outDir = __dirname;
fs.writeFileSync(path.join(outDir, 'data.json'), JSON.stringify(nationalData, null, 2), 'utf8');
fs.writeFileSync(path.join(outDir, 'data.js'), 'window.NACIONAL_DATA = ' + JSON.stringify(nationalData, null, 2) + ';\n', 'utf8');

console.log('✓ Base de datos Nacional generada con éxito:');
console.log(`- Regiones procesadas: 5 regiones + Total Nacional`);
console.log(`- Nodos totales: ${allNodes.length} nodos`);
console.log(`- Volumen Nacional Mes: ${totalVolMes.toLocaleString()} piezas`);
console.log(`- Volumen Nacional Día: ${totalVolDia.toLocaleString()} piezas`);

// Automatically rebuild standalone Tablero_Nacional.html
try {
  require('./build_standalone_html.js');
} catch (e) {
  console.log('Nota: Puede regenerar Tablero_Nacional.html con node build_standalone_html.js');
}
