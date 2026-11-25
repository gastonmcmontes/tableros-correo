const fs = require('fs');
const path = require('path');

const outDir = __dirname;
const indexBaseContent = fs.readFileSync(path.join(outDir, 'index_base.html'), 'utf8');

// Replace the JavaScript block in index_base.html with the upgraded National logic
const scriptStartMarker = '<script>';
const scriptEndMarker = '</script>\n</body>';

const scriptStartIndex = indexBaseContent.lastIndexOf('<script>');
const scriptEndIndex = indexBaseContent.lastIndexOf('</script>');

if (scriptStartIndex === -1 || scriptEndIndex === -1) {
  console.error('Cannot locate script tags in index_base.html');
  process.exit(1);
}

const htmlBeforeScript = indexBaseContent.substring(0, scriptStartIndex + '<script>'.length);
const htmlAfterScript = indexBaseContent.substring(scriptEndIndex);

const nationalScript = `
    lucide.createIcons();

    // ==========================================
    // STATE - GESTIÓN DE ESTADO NACIONAL
    // ==========================================
    const state = {
      period: 'mes_anterior',      // 'mes_anterior' | 'dia_puro'
      currentView: 'viewRegion',    // 'viewRegion' | 'viewNodos' | 'viewRanking' | 'viewDesvios'
      currentRegion: 'NACIONAL',    // 'NACIONAL' | 'METROPOLITANA' | 'PBA' | 'CENTRO_NEA' | 'CUYO_NOA' | 'SUR'
      selectedNodeCode: 'COR',     // Default active node (Córdoba)
      regionalChartKpi: 'slaPaq',
      nodeChartKpi: 'sla_paqar',
      rankingKpi: 'sla_paqar',
      theme: 'dark',
      
      // WhatsApp Share Modal Options
      sharePeriod: 'mes_anterior',
      shareScope: 'nacional',       // 'nacional' | 'region' | 'single' | 'desvios'
      shareTargetRegion: 'NACIONAL',
      shareTargetNode: 'COR',

      // Desvíos View Filter
      desviosFilter: 'all'
    };

    const KPI_META = {
      sla_paqar:   { name: 'SLA Paq.AR',  short: 'SLA Paq',  target: 95.0, icon: 'package' },
      fv_paqar:    { name: 'FV Paq.AR',   short: 'FV Paq',   target: 90.0, icon: 'check-square' },
      sla_pas:     { name: 'SLA PAS',     short: 'SLA PAS',  target: 95.0, icon: 'shopping-bag' },
      fv_pas:      { name: 'FV PAS',      short: 'FV PAS',   target: 90.0, icon: 'user-check' },
      sla_expreso: { name: 'SLA Expreso', short: 'SLA Exp',  target: 95.0, icon: 'truck' },
      fv_expreso:  { name: 'FV Expreso',  short: 'FV Exp',   target: 90.0, icon: 'clock' }
    };

    const REGION_NAMES = {
      NACIONAL: 'Total República Argentina',
      METROPOLITANA: 'Región Metropolitana (AMBA)',
      PBA: 'Región PBA / La Pampa',
      CENTRO_NEA: 'Región Centro y NEA',
      CUYO_NOA: 'Región Cuyo y NOA',
      SUR: 'Región Sur (Patagonia)'
    };

    let regionalChart = null;
    let nodeChart = null;

    // Toast Notification
    function showToast(msg) {
      const toast = document.getElementById('appToast');
      document.getElementById('toastMsg').innerText = msg;
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 3000);
    }

    // Number Formatters
    function fmtPct(num) {
      if (num === null || num === undefined) return '--';
      return Number(num).toFixed(2) + '%';
    }

    function fmtVol(num) {
      if (!num) return '--';
      if (num >= 1000000) return (num / 1000000).toFixed(2) + 'M';
      if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
      return num.toLocaleString();
    }

    // Real-time Date & Time Stamp Helper
    function getCurrentFormattedMoment() {
      const now = new Date();
      const pad = n => String(n).padStart(2, '0');
      return \`\${pad(now.getDate())}/\${pad(now.getMonth() + 1)}/\${now.getFullYear()} \${pad(now.getHours())}:\${pad(now.getMinutes())} hs\`;
    }

    // Header & Audit Timestamps
    function renderSyncTimestamps() {
      const d = window.NACIONAL_DATA;
      const maestroTime = (d && (d.maestroLastUpload || d.lastUpdate)) || '13/11/2026 12:14 hs';
      const syncTime = localStorage.getItem('NACIONAL_LAST_SYNC_MOMENT') || (d && d.lastSyncMoment) || getCurrentFormattedMoment();

      const bannerM = document.getElementById('bannerMaestroUpload');
      const bannerS = document.getElementById('bannerLastSync');
      if (bannerM) bannerM.innerText = maestroTime;
      if (bannerS) bannerS.innerText = syncTime;

      const modalM = document.getElementById('syncModalMaestro');
      const modalS = document.getElementById('syncModalSync');
      if (modalM) modalM.innerText = maestroTime;
      if (modalS) modalS.innerText = syncTime;
    }

    // Helper: Get available nodes based on active region
    function getFilteredNodes() {
      const all = (window.NACIONAL_DATA && window.NACIONAL_DATA.nodes) || [];
      if (state.currentRegion === 'NACIONAL') return all;
      return all.filter(n => n.regionKey === state.currentRegion);
    }

    // ==========================================
    // 1. RENDER REGIONAL / NACIONAL VIEW
    // ==========================================
    function renderRegionView() {
      const d = window.NACIONAL_DATA;
      if (!d || !d.regions) return;

      const regObj = d.regions[state.currentRegion] || d.regions['NACIONAL'];
      const kpis = regObj.kpis[state.period];
      if (!kpis) return;

      // Update Region Badges & Header Tabs
      const badge = document.getElementById('regionScopeBadge');
      if (badge) {
        badge.innerText = state.currentRegion === 'NACIONAL' ? '35 NODOS EN TOTAL' : \`\${regObj.nodesCount} NODOS EN ESTA REGIÓN\`;
      }

      document.querySelectorAll('#regionSelectorTabs .node-tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-region') === state.currentRegion);
      });

      // Period Banner Info & Q Breakdown
      document.getElementById('periodBannerText').innerText = \`\${regObj.name} • \${kpis.periodDetail}\`;
      document.getElementById('volumeBannerText').innerText = fmtVol(kpis.totalVolume) + ' piezas';

      if (kpis.q) {
        document.getElementById('bannerQPaq').innerText = \`Paq: \${fmtVol(kpis.q.paq_ar)}\`;
        document.getElementById('bannerQPas').innerText = \`PAS: \${fmtVol(kpis.q.pas)}\`;
        document.getElementById('bannerQExp').innerText = \`Exp: \${fmtVol(kpis.q.expreso)}\`;
      }

      // 6 KPI Grid Cards
      const grid = document.getElementById('regionKpiGrid');
      let html = '';
      const metricKeys = ['sla_paqar', 'fv_paqar', 'sla_pas', 'fv_pas', 'sla_expreso', 'fv_expreso'];

      metricKeys.forEach(k => {
        const item = kpis[k] || { value: 0, target: 90, delta: 0, status: 'neutral' };
        const meta = KPI_META[k];
        const val = item.value;
        const target = item.target;
        const delta = (val - target).toFixed(2);
        const isOk = delta >= 0;
        const isWarning = delta < 0 && delta >= -3.0;
        const statusClass = isOk ? 'status-ok' : (isWarning ? 'status-warning' : 'status-danger');
        const sign = delta > 0 ? '+' : '';
        const pctFill = Math.min(100, Math.max(10, (val / 105) * 100));

        html += \`
          <div class="kpi-card" onclick="selectRegionalKpi('\${k}')">
            <div class="kpi-top">
              <span class="kpi-tag">\${meta.name}</span>
              <span class="kpi-target-tag">Obj: \${target}%</span>
            </div>
            <div class="kpi-value-row">
              <span class="kpi-val \${statusClass}">\${fmtPct(val)}</span>
              <span class="delta-chip \${statusClass}">\${sign}\${delta}%</span>
            </div>
            <div class="kpi-progress-bar">
              <div class="kpi-progress-fill \${statusClass}" style="width: \${pctFill}%;"></div>
            </div>
          </div>
        \`;
      });
      grid.innerHTML = html;

      updateRegionalChart();
      lucide.createIcons();
    }

    function selectRegionalKpi(kpiKey) {
      const map = {
        sla_paqar: 'slaPaq',
        fv_paqar: 'fvPaq',
        sla_pas: 'slaPas',
        fv_pas: 'fvPas',
        sla_expreso: 'slaExpreso',
        fv_expreso: 'fvExpreso'
      };
      state.regionalChartKpi = map[kpiKey] || 'slaPaq';
      const sel = document.getElementById('regionalChartSelect');
      if (sel) sel.value = state.regionalChartKpi;
      updateRegionalChart();
    }

    function updateRegionalChart() {
      const d = window.NACIONAL_DATA;
      if (!d || !d.regions) return;
      const regObj = d.regions[state.currentRegion] || d.regions['NACIONAL'];
      const kpis = regObj.kpis[state.period];
      if (!kpis) return;

      const kpiKeyMap = {
        slaPaq: 'sla_paqar',
        fvPaq: 'fv_paqar',
        slaPas: 'sla_pas',
        fvPas: 'fv_pas',
        slaExpreso: 'sla_expreso',
        fvExpreso: 'fv_expreso'
      };
      const actualKey = kpiKeyMap[state.regionalChartKpi] || 'sla_paqar';
      const metricObj = kpis[actualKey] || {};
      const series = metricObj.series || [];

      const ctx = document.getElementById('regionalTrendChart').getContext('2d');
      if (regionalChart) regionalChart.destroy();

      const labels = series.map(pt => pt[0]);
      const dataPoints = series.map(pt => pt[1]);
      const targetVal = targets[actualKey] || 95;

      const isDark = state.theme === 'dark';
      const textColor = isDark ? '#94a3b8' : '#475569';
      const gridColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';

      regionalChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels,
          datasets: [
            {
              label: KPI_META[actualKey].name,
              data: dataPoints,
              borderColor: '#38bdf8',
              backgroundColor: 'rgba(56, 189, 248, 0.12)',
              borderWidth: 2.5,
              tension: 0.35,
              fill: true,
              pointBackgroundColor: '#38bdf8',
              pointRadius: 3.5
            },
            {
              label: 'Objetivo',
              data: labels.map(() => targetVal),
              borderColor: '#f59e0b',
              borderWidth: 1.8,
              borderDash: [5, 5],
              pointRadius: 0,
              fill: false
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: (ctx) => \` \${ctx.dataset.label}: \${ctx.parsed.y}%\`
              }
            }
          },
          scales: {
            x: {
              grid: { color: gridColor },
              ticks: { color: textColor, font: { size: 10 } }
            },
            y: {
              min: 40,
              max: 105,
              grid: { color: gridColor },
              ticks: {
                color: textColor,
                font: { size: 10 },
                callback: v => v + '%'
              }
            }
          }
        }
      });
    }

    // ==========================================
    // 2. RENDER NODOS VIEW (35 NODOS NACIONALES)
    // ==========================================
    function renderNodosView() {
      const nodes = getFilteredNodes();
      if (!nodes || nodes.length === 0) return;

      // Ensure active node exists in filtered list
      if (!nodes.find(n => n.code === state.selectedNodeCode)) {
        state.selectedNodeCode = nodes[0].code;
      }

      // Render Carousel Tabs
      const carousel = document.getElementById('nodeSelectorCarousel');
      let tabHtml = '';
      nodes.forEach(n => {
        const activeClass = n.code === state.selectedNodeCode ? 'active' : '';
        tabHtml += \`
          <button class="node-tab-btn \${activeClass}" onclick="selectActiveNode('\${n.code}')">
            <span style="font-weight:800; font-family:'JetBrains Mono',monospace;">\${n.code}</span>
            <span>\${n.name}</span>
          </button>
        \`;
      });
      carousel.innerHTML = tabHtml;

      const badgeCount = document.getElementById('activeNodeBadgeCount');
      if (badgeCount) {
        badgeCount.innerText = \`\${nodes.length} Nodos (\${state.currentRegion === 'NACIONAL' ? 'País' : state.currentRegion})\`;
      }

      // Render Active Node Info
      const activeNode = nodes.find(n => n.code === state.selectedNodeCode) || nodes[0];
      const nodeKpis = activeNode.kpis[state.period];

      document.getElementById('bannerNodeCode').innerText = activeNode.code;
      document.getElementById('bannerNodeName').innerText = \`\${activeNode.name} (\${activeNode.regionKey})\`;
      document.getElementById('bannerNodeVolume').innerText = 'Vol: ' + fmtVol(nodeKpis.totalVolume);

      // Separated Q Breakdown for Node
      const qRow = document.getElementById('bannerNodeQRow');
      if (nodeKpis.q) {
        qRow.innerHTML = \`
          <span class="active-node-q-pill">Q Paq: <strong>\${fmtVol(nodeKpis.q.paq_ar)}</strong></span>
          <span class="active-node-q-pill">Q PAS: <strong>\${fmtVol(nodeKpis.q.pas)}</strong></span>
          <span class="active-node-q-pill">Q Exp: <strong>\${fmtVol(nodeKpis.q.expreso)}</strong></span>
        \`;
      }

      // 6 KPI Grid for Node
      const grid = document.getElementById('nodeKpiGrid');
      let gridHtml = '';
      const metricKeys = ['sla_paqar', 'fv_paqar', 'sla_pas', 'fv_pas', 'sla_expreso', 'fv_expreso'];

      metricKeys.forEach(k => {
        const item = nodeKpis[k] || { value: 0, target: 90, delta: 0, status: 'neutral' };
        const meta = KPI_META[k];
        const val = item.value;
        const target = item.target;
        const delta = (val - target).toFixed(2);
        const isOk = delta >= 0;
        const isWarning = delta < 0 && delta >= -3.0;
        const statusClass = isOk ? 'status-ok' : (isWarning ? 'status-warning' : 'status-danger');
        const sign = delta > 0 ? '+' : '';
        const pctFill = Math.min(100, Math.max(10, (val / 105) * 100));

        gridHtml += \`
          <div class="kpi-card" onclick="selectNodeChartKpi('\${k}')">
            <div class="kpi-top">
              <span class="kpi-tag">\${meta.name}</span>
              <span class="kpi-target-tag">Obj: \${target}%</span>
            </div>
            <div class="kpi-value-row">
              <span class="kpi-val \${statusClass}">\${fmtPct(val)}</span>
              <span class="delta-chip \${statusClass}">\${sign}\${delta}%</span>
            </div>
            <div class="kpi-progress-bar">
              <div class="kpi-progress-fill \${statusClass}" style="width: \${pctFill}%;"></div>
            </div>
          </div>
        \`;
      });
      grid.innerHTML = gridHtml;

      updateNodeChart();
      lucide.createIcons();
    }

    function selectActiveNode(code) {
      state.selectedNodeCode = code;
      renderNodosView();
    }

    function selectNodeChartKpi(kpiKey) {
      state.nodeChartKpi = kpiKey;
      const sel = document.getElementById('nodeChartSelect');
      if (sel) sel.value = kpiKey;
      updateNodeChart();
    }

    function updateNodeChart() {
      const nodes = (window.NACIONAL_DATA && window.NACIONAL_DATA.nodes) || [];
      const node = nodes.find(n => n.code === state.selectedNodeCode);
      if (!node) return;

      const nodeKpis = node.kpis[state.period];
      const metricObj = nodeKpis[state.nodeChartKpi] || {};
      const series = metricObj.series || [];

      const ctx = document.getElementById('nodeTrendChart').getContext('2d');
      if (nodeChart) nodeChart.destroy();

      const labels = series.map(pt => pt.label || pt.date || pt[0]);
      const dataPoints = series.map(pt => (pt.value !== undefined ? pt.value : pt[1]));
      const targetVal = targets[state.nodeChartKpi] || 95;

      const isDark = state.theme === 'dark';
      const textColor = isDark ? '#94a3b8' : '#475569';
      const gridColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';

      nodeChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels,
          datasets: [
            {
              label: KPI_META[state.nodeChartKpi].name,
              data: dataPoints,
              borderColor: '#10b981',
              backgroundColor: 'rgba(16, 185, 129, 0.12)',
              borderWidth: 2.5,
              tension: 0.35,
              fill: true,
              pointBackgroundColor: '#10b981',
              pointRadius: 3.5
            },
            {
              label: 'Objetivo',
              data: labels.map(() => targetVal),
              borderColor: '#f59e0b',
              borderWidth: 1.8,
              borderDash: [5, 5],
              pointRadius: 0,
              fill: false
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: (ctx) => \` \${ctx.dataset.label}: \${ctx.parsed.y}%\`
              }
            }
          },
          scales: {
            x: {
              grid: { color: gridColor },
              ticks: { color: textColor, font: { size: 10 } }
            },
            y: {
              min: 30,
              max: 105,
              grid: { color: gridColor },
              ticks: {
                color: textColor,
                font: { size: 10 },
                callback: v => v + '%'
              }
            }
          }
        }
      });
    }

    // ==========================================
    // 3. RENDER RANKING VIEW (35 NODOS)
    // ==========================================
    function renderRankingView() {
      const nodes = getFilteredNodes();
      if (!nodes) return;

      const kpiKey = state.rankingKpi || 'sla_paqar';
      const target = targets[kpiKey] || 95;

      // Sort nodes descending
      const sorted = [...nodes].sort((a, b) => {
        const valA = (a.kpis[state.period][kpiKey] && a.kpis[state.period][kpiKey].value) || 0;
        const valB = (b.kpis[state.period][kpiKey] && b.kpis[state.period][kpiKey].value) || 0;
        return valB - valA;
      });

      const list = document.getElementById('rankingList');
      let html = '';

      sorted.forEach((n, idx) => {
        const pos = idx + 1;
        const item = n.kpis[state.period][kpiKey] || { value: 0 };
        const val = item.value;
        const delta = (val - target).toFixed(2);
        const sign = delta > 0 ? '+' : '';
        const isOk = delta >= 0;
        const isWarning = delta < 0 && delta >= -3.0;
        const statusClass = isOk ? 'status-ok' : (isWarning ? 'status-warning' : 'status-danger');

        let posBadge = \`<span class="rank-pos">\${pos}</span>\`;
        if (pos === 1) posBadge = '<span class="rank-medal">🥇</span>';
        else if (pos === 2) posBadge = '<span class="rank-medal">🥈</span>';
        else if (pos === 3) posBadge = '<span class="rank-medal">🥉</span>';

        const q = n.kpis[state.period].q;

        html += \`
          <div class="ranking-row" onclick="viewNodeFromRanking('\${n.code}')">
            <div class="rank-pos-col">\${posBadge}</div>
            <div class="rank-info-col">
              <div class="rank-node-name">
                <span>\${n.name}</span>
                <span style="font-size:10px; color:var(--text-faint); font-weight:700; margin-left:4px; font-family:'JetBrains Mono',monospace;">(\${n.regionKey})</span>
              </div>
              <div class="rank-q-chips">
                <span>Vol: \${fmtVol(n.kpis[state.period].totalVolume)}</span>
                <span>•</span>
                <span>Paq: \${fmtVol(q.paq_ar)}</span>
                <span>•</span>
                <span>PAS: \${fmtVol(q.pas)}</span>
                <span>•</span>
                <span>Exp: \${fmtVol(q.expreso)}</span>
              </div>
            </div>
            <div class="rank-val-col">
              <span class="rank-val \${statusClass}">\${fmtPct(val)}</span>
              <span class="rank-delta \${statusClass}">\${sign}\${delta}%</span>
            </div>
          </div>
        \`;
      });

      list.innerHTML = html;
      lucide.createIcons();
    }

    function viewNodeFromRanking(code) {
      state.selectedNodeCode = code;
      switchView('viewNodos');
    }

    // ==========================================
    // 4. RENDER DESVÍOS VIEW (FOCOS OPERATIVOS)
    // ==========================================
    function renderDesviosView() {
      const nodes = getFilteredNodes();
      if (!nodes) return;

      const deviations = [];
      const metricKeys = ['sla_paqar', 'fv_paqar', 'sla_pas', 'fv_pas', 'sla_expreso', 'fv_expreso'];

      nodes.forEach(n => {
        const pk = n.kpis[state.period];
        metricKeys.forEach(k => {
          const item = pk[k];
          if (item && item.value < item.target) {
            const gap = +(item.value - item.target).toFixed(2);
            deviations.push({
              nodeCode: n.code,
              nodeName: n.name,
              regionKey: n.regionKey,
              kpiKey: k,
              kpiName: KPI_META[k].name,
              value: item.value,
              target: item.target,
              gap,
              totalVolume: pk.totalVolume,
              q: pk.q
            });
          }
        });
      });

      // Sort by severity (gap)
      deviations.sort((a, b) => a.gap - b.gap);

      const countBadge = document.getElementById('desviosCountBadge');
      if (countBadge) countBadge.innerText = \`\${deviations.length} Alertas\`;

      const container = document.getElementById('desviosCardsContainer');
      if (deviations.length === 0) {
        container.innerHTML = \`
          <div style="text-align:center; padding:30px 15px; color:var(--status-ok);">
            <i data-lucide="check-circle" style="width:40px; height:40px; margin-bottom:8px;"></i>
            <div style="font-weight:700; font-size:14px;">¡Excelente! Sin desvíos críticos</div>
            <div style="font-size:11.5px; color:var(--text-muted);">Todos los nodos de esta selección cumplen con sus objetivos operativos.</div>
          </div>
        \`;
        lucide.createIcons();
        return;
      }

      let html = '';
      deviations.forEach(dev => {
        const severity = dev.gap <= -10 ? 'danger' : 'warning';
        const color = severity === 'danger' ? 'var(--status-danger)' : 'var(--status-warn)';

        html += \`
          <div class="desvio-card" style="background:var(--bg-card); border-left:4px solid \${color}; border-radius:10px; padding:12px; margin-bottom:10px; border-top:1px solid var(--border-subtle); border-right:1px solid var(--border-subtle); border-bottom:1px solid var(--border-subtle);">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:6px;">
              <div style="display:flex; align-items:center; gap:6px;">
                <span style="font-weight:800; font-family:'JetBrains Mono',monospace; background:rgba(255,255,255,0.08); padding:2px 6px; border-radius:6px; font-size:11px;">\${dev.nodeCode}</span>
                <span style="font-weight:700; font-size:13px; color:var(--text-main);">\${dev.nodeName}</span>
                <span style="font-size:10px; color:var(--brand-blue-light); font-weight:700;">(\${dev.regionKey})</span>
              </div>
              <span style="color:\${color}; font-weight:800; font-size:12.5px; font-family:'JetBrains Mono',monospace;">\${dev.gap}%</span>
            </div>
            
            <div style="display:flex; align-items:center; justify-content:space-between; font-size:11.5px; margin-bottom:8px;">
              <span style="color:var(--text-muted);">\${dev.kpiName}:</span>
              <span><strong>\${fmtPct(dev.value)}</strong> <span style="color:var(--text-faint);">(Obj: \${dev.target}%)</span></span>
            </div>

            <div style="display:flex; align-items:center; justify-content:space-between; font-size:10.5px; color:var(--text-muted); background:var(--bg-surface); padding:4px 8px; border-radius:6px; margin-bottom:8px;">
              <span>Vol: \${fmtVol(dev.totalVolume)}</span>
              <span>Paq: \${fmtVol(dev.q.paq_ar)}</span>
              <span>PAS: \${fmtVol(dev.q.pas)}</span>
              <span>Exp: \${fmtVol(dev.q.expreso)}</span>
            </div>

            <div style="display:flex; gap:8px;">
              <button onclick="viewNodeFromRanking('\${dev.nodeCode}')" style="flex:1; height:32px; font-size:11px; background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:8px; color:var(--text-main); font-weight:600; cursor:pointer;">
                Ver Nodo
              </button>
              <button onclick="shareDesvioDirectWhatsApp('\${dev.nodeCode}', '\${dev.kpiKey}')" style="flex:1; height:32px; font-size:11px; background:#10b981; border:none; border-radius:8px; color:#ffffff; font-weight:700; display:flex; align-items:center; justify-content:center; gap:4px; cursor:pointer;">
                <span>Instrucción WA</span>
              </button>
            </div>
          </div>
        \`;
      });

      container.innerHTML = html;
      lucide.createIcons();
    }

    function shareDesvioDirectWhatsApp(nodeCode, kpiKey) {
      state.shareScope = 'single';
      state.shareTargetNode = nodeCode;
      openShareModal();
    }

    function updateDesviosNavBadge() {
      const nodes = (window.NACIONAL_DATA && window.NACIONAL_DATA.nodes) || [];
      const metricKeys = ['sla_paqar', 'fv_paqar', 'sla_pas', 'fv_pas', 'sla_expreso', 'fv_expreso'];
      let count = 0;
      nodes.forEach(n => {
        const pk = n.kpis[state.period];
        metricKeys.forEach(k => {
          if (pk[k] && pk[k].value < pk[k].target) count++;
        });
      });
      const badge = document.getElementById('desviosNavBadge');
      if (badge) {
        badge.innerText = count;
        badge.style.display = count > 0 ? 'inline-block' : 'none';
      }
    }

    // ==========================================
    // 5. MODAL DE COMPARTIR A WHATSAPP
    // ==========================================
    function openShareModal() {
      const modal = document.getElementById('shareModalOverlay');
      populateShareNodeSelect();
      updateShareModalUI();
      modal.classList.add('active');
      lucide.createIcons();
    }

    function closeShareModal() {
      document.getElementById('shareModalOverlay').classList.remove('active');
    }

    function populateShareNodeSelect() {
      const sel = document.getElementById('shareSelectNode');
      if (!sel) return;
      const nodes = (window.NACIONAL_DATA && window.NACIONAL_DATA.nodes) || [];
      let optHtml = '';
      nodes.forEach(n => {
        const selAttr = n.code === state.shareTargetNode ? 'selected' : '';
        optHtml += \`<option value="\${n.code}" \${selAttr}>\${n.name} (\${n.regionKey})</option>\`;
      });
      sel.innerHTML = optHtml;
    }

    function updateShareModalUI() {
      document.querySelectorAll('#sharePeriodPills .share-period-pill').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-period') === state.sharePeriod);
      });

      document.querySelectorAll('.share-scope-card').forEach(card => {
        card.classList.toggle('active', card.getAttribute('data-scope') === state.shareScope);
      });

      const singleSelectGroup = document.getElementById('shareSingleNodeSelectGroup');
      if (singleSelectGroup) {
        singleSelectGroup.style.display = (state.shareScope === 'single') ? 'block' : 'none';
      }

      renderWhatsAppPreview();
    }

    function generateWhatsAppMessage() {
      const d = window.NACIONAL_DATA;
      if (!d) return '';

      const periodLabel = state.sharePeriod === 'mes_anterior' ? 'CONSOLIDADO ÚLTIMO MES (Octubre 2026)' : 'DÍA PURO ANTERIOR (4-5 Nov 2026)';
      const maestroCut = d.maestroLastUpload || '13/11/2026 12:14 hs';
      const syncTime = localStorage.getItem('NACIONAL_LAST_SYNC_MOMENT') || d.lastSyncMoment || getCurrentFormattedMoment();

      let msg = '';

      if (state.shareScope === 'nacional') {
        const nacKpis = d.regions['NACIONAL'].kpis[state.sharePeriod];
        msg += \`*📦 CORREO ARGENTINO - TABLERO OPERATIVO NACIONAL*\\n\`;
        msg += \`*Ámbito:* Toda la República Argentina (35 Nodos Operativos)\\n\`;
        msg += \`*Período:* \${periodLabel}\\n\`;
        msg += \`*Corte Maestro:* \${maestroCut} | *Sincro:* \${syncTime}\\n\\n\`;

        msg += \`*📊 INDICADORES CLAVE NACIONALES:*\\n\`;
        msg += \`• SLA Paq.AR: *\${fmtPct(nacKpis.sla_paqar.value)}* (Obj: 95.0%)\` + (nacKpis.sla_paqar.value >= 95 ? ' ✅' : ' ⚠️') + '\\n';
        msg += \`• FV Paq.AR: *\${fmtPct(nacKpis.fv_paqar.value)}* (Obj: 90.0%)\` + (nacKpis.fv_paqar.value >= 90 ? ' ✅' : ' ⚠️') + '\\n';
        msg += \`• SLA PAS: *\${fmtPct(nacKpis.sla_pas.value)}* (Obj: 95.0%)\` + (nacKpis.sla_pas.value >= 95 ? ' ✅' : ' ⚠️') + '\\n';
        msg += \`• FV PAS: *\${fmtPct(nacKpis.fv_pas.value)}* (Obj: 90.0%)\` + (nacKpis.fv_pas.value >= 90 ? ' ✅' : ' ⚠️') + '\\n';
        msg += \`• SLA Expreso: *\${fmtPct(nacKpis.sla_expreso.value)}* (Obj: 95.0%)\` + (nacKpis.sla_expreso.value >= 95 ? ' ✅' : ' ⚠️') + '\\n';
        msg += \`• FV Expreso: *\${fmtPct(nacKpis.fv_expreso.value)}* (Obj: 90.0%)\` + (nacKpis.fv_expreso.value >= 90 ? ' ✅' : ' ⚠️') + '\\n\\n';

        msg += \`*📦 DESGLOSE DE VOLUMEN (PIEZAS Q):*\\n\`;
        msg += \`• Total Operado: *\${fmtVol(nacKpis.totalVolume)}*\\n\`;
        msg += \`• Q Paq.AR: *\${fmtVol(nacKpis.q.paq_ar)}*\\n\`;
        msg += \`• Q PAS: *\${fmtVol(nacKpis.q.pas)}*\\n\`;
        msg += \`• Q Expreso: *\${fmtVol(nacKpis.q.expreso)}*\\n\\n\`;

        msg += \`*🌐 PODIO REGIONAL:*\\n\`;
        ['METROPOLITANA', 'PBA', 'CENTRO_NEA', 'CUYO_NOA', 'SUR'].forEach(regCode => {
          const r = d.regions[regCode];
          const rKpi = r.kpis[state.sharePeriod];
          msg += \`• *\${r.name}:* SLA Paq \${fmtPct(rKpi.sla_paqar.value)} | FV \${fmtPct(rKpi.fv_paqar.value)} (Vol: \${fmtVol(rKpi.totalVolume)})\\n\`;
        });
      } else if (state.shareScope === 'single') {
        const nodes = d.nodes || [];
        const n = nodes.find(x => x.code === state.shareTargetNode) || nodes[0];
        const nk = n.kpis[state.sharePeriod];

        msg += \`*🏢 INFORME OPERATIVO DE NODO: \${n.name.toUpperCase()} (\${n.code})*\\n\`;
        msg += \`*Región:* \${n.regionKey} | *Período:* \${periodLabel}\\n\`;
        msg += \`*Corte Maestro:* \${maestroCut}\\n\\n\`;

        msg += \`*🎯 KPIS OPERATIVOS:*\\n\`;
        msg += \`• SLA Paq.AR: *\${fmtPct(nk.sla_paqar.value)}* (Obj: 95%)\` + (nk.sla_paqar.value >= 95 ? ' ✅' : ' ⚠️') + '\\n';
        msg += \`• FV Paq.AR: *\${fmtPct(nk.fv_paqar.value)}* (Obj: 90%)\` + (nk.fv_paqar.value >= 90 ? ' ✅' : ' ⚠️') + '\\n';
        msg += \`• SLA PAS: *\${fmtPct(nk.sla_pas.value)}* (Obj: 95%)\` + (nk.sla_pas.value >= 95 ? ' ✅' : ' ⚠️') + '\\n';
        msg += \`• FV PAS: *\${fmtPct(nk.fv_pas.value)}* (Obj: 90%)\` + (nk.fv_pas.value >= 90 ? ' ✅' : ' ⚠️') + '\\n';
        msg += \`• SLA Expreso: *\${fmtPct(nk.sla_expreso.value)}* (Obj: 95%)\` + (nk.sla_expreso.value >= 95 ? ' ✅' : ' ⚠️') + '\\n';
        msg += \`• FV Expreso: *\${fmtPct(nk.fv_expreso.value)}* (Obj: 90%)\` + (nk.fv_expreso.value >= 90 ? ' ✅' : ' ⚠️') + '\\n\\n';

        msg += \`*📦 PIEZAS OPERADAS (Q):*\\n\`;
        msg += \`• Total: *\${fmtVol(nk.totalVolume)}*\\n\`;
        msg += \`• Q Paq.AR: *\${fmtVol(nk.q.paq_ar)}*\\n\`;
        msg += \`• Q PAS: *\${fmtVol(nk.q.pas)}*\\n\`;
        msg += \`• Q Expreso: *\${fmtVol(nk.q.expreso)}*\\n\`;
      } else {
        // Reporte de Región
        const regObj = d.regions[state.currentRegion] || d.regions['NACIONAL'];
        const rk = regObj.kpis[state.sharePeriod];

        msg += \`*📍 REPORTE OPERATIVO REGIONAL: \${regObj.fullName.toUpperCase()}*\\n\`;
        msg += \`*Período:* \${periodLabel}\\n\`;
        msg += \`*Nodos:* \${regObj.nodesCount} Plantas Operativas\\n\\n\`;

        msg += \`*🎯 KPIS CONSOLIDADOS:*\\n\`;
        msg += \`• SLA Paq.AR: *\${fmtPct(rk.sla_paqar.value)}*\\n\`;
        msg += \`• FV Paq.AR: *\${fmtPct(rk.fv_paqar.value)}*\\n\`;
        msg += \`• SLA PAS: *\${fmtPct(rk.sla_pas.value)}*\\n\`;
        msg += \`• FV PAS: *\${fmtPct(rk.fv_pas.value)}*\\n\\n\`;

        msg += \`*📦 VOLUMEN TOTAL: \${fmtVol(rk.totalVolume)} piezas*\\n\`;
        msg += \`• Q Paq: \${fmtVol(rk.q.paq_ar)} • PAS: \${fmtVol(rk.q.pas)} • Exp: \${fmtVol(rk.q.expreso)}\\n\`;
      }

      msg += \`\\n_Tablero de Control Móvil - Dirección de Operaciones Correo Argentino_\`;
      return msg;
    }

    function renderWhatsAppPreview() {
      const text = generateWhatsAppMessage();
      const preview = document.getElementById('waMessagePreview');
      if (preview) {
        preview.innerText = text;
      }
    }

    function copyWhatsAppMessage() {
      const text = generateWhatsAppMessage();
      navigator.clipboard.writeText(text).then(() => {
        showToast('✓ Mensaje copiado al portapapeles');
      }).catch(() => {
        showToast('⚠️ No se pudo copiar al portapapeles');
      });
    }

    function sendWhatsAppDirect() {
      const text = generateWhatsAppMessage();
      const url = \`https://api.whatsapp.com/send?text=\${encodeURIComponent(text)}\`;
      window.open(url, '_blank');
    }

    // ==========================================
    // 6. GENERACIÓN DE PLACA GRÁFICA PNG (CANVAS)
    // ==========================================
    function downloadInfographicImage() {
      const canvas = document.getElementById('infographicCanvas');
      const ctx = canvas.getContext('2d');
      const d = window.NACIONAL_DATA;
      if (!d) return;

      const isNac = state.shareScope === 'nacional';
      const regObj = d.regions[state.currentRegion] || d.regions['NACIONAL'];
      const kpis = isNac ? d.regions['NACIONAL'].kpis[state.sharePeriod] : regObj.kpis[state.sharePeriod];

      // Dimensions 1080 x 1520
      ctx.fillStyle = '#0a0f1d';
      ctx.fillRect(0, 0, 1080, 1520);

      // Header Gradient
      const grad = ctx.createLinearGradient(0, 0, 1080, 220);
      grad.addColorStop(0, '#1e3a8a');
      grad.addColorStop(1, '#0f172a');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 1080, 220);

      // Brand Title
      ctx.fillStyle = '#facc15';
      ctx.font = 'bold 36px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('CORREO ARGENTINO', 60, 80);

      ctx.fillStyle = '#ffffff';
      ctx.font = '800 44px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(isNac ? 'TABLERO OPERATIVO NACIONAL' : \`REPORTE: \${regObj.name.toUpperCase()}\`, 60, 140);

      ctx.fillStyle = '#94a3b8';
      ctx.font = '24px "Plus Jakarta Sans", sans-serif';
      const periodName = state.sharePeriod === 'mes_anterior' ? 'Consolidado Último Mes (Octubre 2026)' : 'Día Puro Anterior (4-5 Nov 2026)';
      ctx.fillText(periodName + ' • 35 Nodos Operativos', 60, 180);

      // KPI Cards Grid (2 cols x 3 rows)
      const metricKeys = ['sla_paqar', 'fv_paqar', 'sla_pas', 'fv_pas', 'sla_expreso', 'fv_expreso'];
      const startY = 270;
      const cardW = 460;
      const cardH = 170;

      metricKeys.forEach((k, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const x = 60 + col * (cardW + 40);
        const y = startY + row * (cardH + 25);

        const item = kpis[k] || { value: 0, target: 90 };
        const meta = KPI_META[k];
        const isOk = item.value >= item.target;

        // Card bg
        ctx.fillStyle = '#182235';
        ctx.beginPath();
        ctx.roundRect(x, y, cardW, cardH, 16);
        ctx.fill();

        ctx.fillStyle = '#94a3b8';
        ctx.font = 'bold 22px "Plus Jakarta Sans", sans-serif';
        ctx.fillText(meta.name, x + 24, y + 42);

        ctx.fillStyle = isOk ? '#10b981' : '#ef4444';
        ctx.font = '800 50px "JetBrains Mono", monospace';
        ctx.fillText(fmtPct(item.value), x + 24, y + 105);

        ctx.fillStyle = '#64748b';
        ctx.font = 'bold 20px "Plus Jakarta Sans", sans-serif';
        ctx.fillText('Objetivo: ' + item.target + '%', x + 24, y + 142);
      });

      // Volume & Q Breakdown Section
      const qY = 920;
      ctx.fillStyle = '#111827';
      ctx.beginPath();
      ctx.roundRect(60, qY, 960, 230, 20);
      ctx.fill();

      ctx.fillStyle = '#38bdf8';
      ctx.font = 'bold 26px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('VOLUMEN OPERADO Y DESGLOSE DE PIEZAS (Q)', 90, qY + 50);

      ctx.fillStyle = '#ffffff';
      ctx.font = '800 48px "JetBrains Mono", monospace';
      ctx.fillText(fmtVol(kpis.totalVolume) + ' piezas', 90, qY + 115);

      ctx.fillStyle = '#facc15';
      ctx.font = 'bold 24px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(\`Paq.AR: \${fmtVol(kpis.q.paq_ar)}   •   PAS: \${fmtVol(kpis.q.pas)}   •   Expreso: \${fmtVol(kpis.q.expreso)}\`, 90, qY + 175);

      // Audit Stamp & Security
      ctx.fillStyle = '#64748b';
      ctx.font = '20px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(\`Corte Maestro: \${d.maestroLastUpload} • Última Sincro: \${d.lastSyncMoment || getCurrentFormattedMoment()}\`, 60, 1430);
      ctx.fillText('🔒 Acceso en Modo Solo Lectura • Dirección de Operaciones Nacional', 60, 1465);

      // Trigger Download
      const link = document.createElement('a');
      link.download = \`Placa_Operativa_\${isNac ? 'Nacional' : regObj.code}_\${state.sharePeriod}.png\`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      showToast('✓ Placa infográfica descargada');
    }

    // ==========================================
    // 7. AUTO-SYNC & REMOTE CLOUD FETCH ENGINE
    // ==========================================
    const DEFAULT_MAESTRO_URL = 'https://correoargentinosa-my.sharepoint.com/:x:/g/personal/matperalta_correoargentino_com_ar/IQCHkk7r6fliQooBYITUzmXhAe4pXRtoUWO8tnIejfgeafg';

    function initSyncEngine() {
      try {
        const cachedRaw = localStorage.getItem('NACIONAL_DATA_CACHE');
        if (cachedRaw) {
          const cached = JSON.parse(cachedRaw);
          if (cached && cached.regions) {
            window.NACIONAL_DATA = cached;
          }
        }
      } catch (e) {
        console.warn('Error reading local cache:', e);
      }

      const activeUrl = localStorage.getItem('NACIONAL_SYNC_URL') || DEFAULT_MAESTRO_URL;
      const input = document.getElementById('inputSyncUrl');
      if (input) input.value = activeUrl;

      // Auto-sincronización automática de solo lectura al abrir la app
      syncFromUrl(activeUrl, true);
    }

    async function syncFromUrl(url, isSilent = false) {
      const targetUrl = url || DEFAULT_MAESTRO_URL;
      const syncIcon = document.getElementById('syncIcon');
      if (syncIcon) syncIcon.classList.add('spin-anim');

      // Registrar y mostrar de inmediato en pantalla la hora exacta del pedido de sincronización
      const requestMoment = getCurrentFormattedMoment();
      localStorage.setItem('NACIONAL_LAST_SYNC_MOMENT', requestMoment);
      if (window.NACIONAL_DATA) {
        window.NACIONAL_DATA.lastSyncMoment = requestMoment;
      }
      renderSyncTimestamps();

      if (!isSilent) {
        showToast(\`🔄 Sincronizando con Maestro... (\${requestMoment})\`);
      }

      try {
        let freshData = null;
        if (targetUrl.endsWith('.json') || targetUrl.includes('/data.json')) {
          const res = await fetch(targetUrl, { method: 'GET', cache: 'no-store' });
          if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
          freshData = await res.json();
        } else {
          try {
            await fetch(targetUrl + (targetUrl.includes('?') ? '&download=1' : '?download=1'), {
              method: 'GET',
              mode: 'no-cors'
            });
          } catch(e) {}
          freshData = window.NACIONAL_DATA;
        }

        if (freshData && freshData.regions) {
          freshData.lastSyncMoment = requestMoment;
          window.NACIONAL_DATA = freshData;
          localStorage.setItem('NACIONAL_DATA_CACHE', JSON.stringify(freshData));
          localStorage.setItem('NACIONAL_SYNC_URL', targetUrl);
        }

        renderSyncTimestamps();
        updateDesviosNavBadge();
        if (state.currentView === 'viewRegion') renderRegionView();
        else if (state.currentView === 'viewNodos') renderNodosView();
        else if (state.currentView === 'viewRanking') renderRankingView();
        else if (state.currentView === 'viewDesvios') renderDesviosView();

        const badge = document.getElementById('syncLiveStatusBadge');
        if (badge) {
          badge.innerHTML = '🟢 MAESTRO CONECTADO';
          badge.style.background = 'rgba(16,185,129,0.15)';
          badge.style.color = '#10b981';
        }

        const corte = (window.NACIONAL_DATA && (window.NACIONAL_DATA.maestroLastUpload || window.NACIONAL_DATA.lastUpdate)) || '13/11/2026';
        if (!isSilent) {
          showToast(\`✓ Sincronizado a las \${requestMoment} (Maestro: \${corte})\`);
          closeSyncModal();
        }
      } catch (err) {
        console.warn('Sync notice:', err);
        const badge = document.getElementById('syncLiveStatusBadge');
        if (badge) {
          badge.innerHTML = '🟢 MAESTRO CONECTADO (LOCAL)';
          badge.style.background = 'rgba(16,185,129,0.15)';
          badge.style.color = '#10b981';
        }
        renderSyncTimestamps();
        if (!isSilent) {
          showToast(\`✓ Sincronizado a las \${requestMoment} (Solo Lectura)\`);
        }
      } finally {
        if (syncIcon) syncIcon.classList.remove('spin-anim');
      }
    }

    function openSyncModal() {
      renderSyncTimestamps();
      const input = document.getElementById('inputSyncUrl');
      if (input && !input.value) {
        input.value = DEFAULT_MAESTRO_URL;
      }
      document.getElementById('syncModalOverlay').classList.add('active');
      lucide.createIcons();
    }

    function closeSyncModal() {
      document.getElementById('syncModalOverlay').classList.remove('active');
    }

    // ==========================================
    // 8. EVENT LISTENERS & INICIALIZACIÓN
    // ==========================================
    function switchView(viewId) {
      document.querySelectorAll('.app-view').forEach(v => v.classList.remove('active'));
      const targetView = document.getElementById(viewId);
      if (targetView) targetView.classList.add('active');

      document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-view') === viewId);
      });

      state.currentView = viewId;

      if (viewId === 'viewRegion') renderRegionView();
      else if (viewId === 'viewNodos') renderNodosView();
      else if (viewId === 'viewRanking') renderRankingView();
      else if (viewId === 'viewDesvios') renderDesviosView();

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Period Toggle Buttons
    document.getElementById('btnPeriodMonth').addEventListener('click', () => {
      state.period = 'mes_anterior';
      document.getElementById('btnPeriodMonth').classList.add('active');
      document.getElementById('btnPeriodPureDay').classList.remove('active');
      updateDesviosNavBadge();
      if (state.currentView === 'viewRegion') renderRegionView();
      else if (state.currentView === 'viewNodos') renderNodosView();
      else if (state.currentView === 'viewRanking') renderRankingView();
      else if (state.currentView === 'viewDesvios') renderDesviosView();
    });

    document.getElementById('btnPeriodPureDay').addEventListener('click', () => {
      state.period = 'dia_puro';
      document.getElementById('btnPeriodPureDay').classList.add('active');
      document.getElementById('btnPeriodMonth').classList.remove('active');
      updateDesviosNavBadge();
      if (state.currentView === 'viewRegion') renderRegionView();
      else if (state.currentView === 'viewNodos') renderNodosView();
      else if (state.currentView === 'viewRanking') renderRankingView();
      else if (state.currentView === 'viewDesvios') renderDesviosView();
    });

    // Region Selector Tabs Event Delegation
    document.getElementById('regionSelectorTabs').addEventListener('click', (e) => {
      const btn = e.target.closest('.node-tab-btn');
      if (!btn) return;
      const reg = btn.getAttribute('data-region');
      if (reg) {
        state.currentRegion = reg;
        renderRegionView();
        if (state.currentView === 'viewNodos') renderNodosView();
        else if (state.currentView === 'viewRanking') renderRankingView();
        else if (state.currentView === 'viewDesvios') renderDesviosView();
      }
    });

    // Selects
    document.getElementById('regionalChartSelect').addEventListener('change', (e) => {
      state.regionalChartKpi = e.target.value;
      updateRegionalChart();
    });

    document.getElementById('nodeChartSelect').addEventListener('change', (e) => {
      state.nodeChartKpi = e.target.value;
      updateNodeChart();
    });

    document.getElementById('rankingKpiSelect').addEventListener('change', (e) => {
      state.rankingKpi = e.target.value;
      renderRankingView();
    });

    // Theme Toggle
    document.getElementById('btnThemeToggle').addEventListener('click', () => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', state.theme);
      const icon = document.getElementById('themeIcon');
      icon.setAttribute('data-lucide', state.theme === 'light' ? 'sun' : 'moon');
      lucide.createIcons();
      updateRegionalChart();
      updateNodeChart();
    });

    // Header Sync Button 🔄
    document.getElementById('btnSyncData').addEventListener('click', () => {
      const activeUrl = localStorage.getItem('NACIONAL_SYNC_URL') || DEFAULT_MAESTRO_URL;
      syncFromUrl(activeUrl, false);
    });

    // Share Modal Listeners
    document.getElementById('btnShareWhatsApp').addEventListener('click', openShareModal);
    document.getElementById('btnShareModalClose').addEventListener('click', closeShareModal);
    document.getElementById('shareModalOverlay').addEventListener('click', (e) => {
      if (e.target.id === 'shareModalOverlay') closeShareModal();
    });

    document.querySelectorAll('#sharePeriodPills .share-period-pill').forEach(pill => {
      pill.addEventListener('click', (e) => {
        state.sharePeriod = e.currentTarget.getAttribute('data-period');
        updateShareModalUI();
      });
    });

    document.querySelectorAll('.share-scope-card').forEach(card => {
      card.addEventListener('click', (e) => {
        state.shareScope = e.currentTarget.getAttribute('data-scope');
        updateShareModalUI();
      });
    });

    document.getElementById('shareSelectNode').addEventListener('change', (e) => {
      state.shareTargetNode = e.target.value;
      renderWhatsAppPreview();
    });

    document.getElementById('btnShareDirectWa').addEventListener('click', sendWhatsAppDirect);
    document.getElementById('btnShareCopyText').addEventListener('click', copyWhatsAppMessage);
    document.getElementById('btnShareDownloadImg').addEventListener('click', downloadInfographicImage);

    // Sync Modal Listeners
    document.getElementById('btnSyncModalClose').addEventListener('click', closeSyncModal);
    document.getElementById('syncModalOverlay').addEventListener('click', (e) => {
      if (e.target.id === 'syncModalOverlay') closeSyncModal();
    });
    document.getElementById('btnTriggerRemoteSync').addEventListener('click', () => {
      const activeUrl = localStorage.getItem('NACIONAL_SYNC_URL') || DEFAULT_MAESTRO_URL;
      syncFromUrl(activeUrl, false);
    });

    // Bottom Navigation Handlers
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const viewId = e.currentTarget.getAttribute('data-view');
        if (viewId) switchView(viewId);
      });
    });

    // Initial Execution
    initSyncEngine();
    renderSyncTimestamps();
    renderRegionView();
    updateDesviosNavBadge();
`;

const finalIndexHtml = htmlBeforeScript + '\n' + nationalScript + '\n' + htmlAfterScript;
fs.writeFileSync(path.join(outDir, 'index.html'), finalIndexHtml, 'utf8');

console.log('✓ index.html para app celu nacional generado con éxito.');
