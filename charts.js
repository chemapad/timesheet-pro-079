// ===== MOTOR DE GRÁFICOS SVG NATIVOS — CHARTS.JS =====
// Funciona 100% offline sin librerías externas ni CDNs
import { getLang, t } from './i18n.js';

const PALETTE = [
  '#0284c7', // Sky Blue - Conduit
  '#0d9488', // Teal - Cable Tray
  '#f59e0b', // Amber - Wire Pull
  '#8b5cf6', // Violet - Terminations
  '#10b981', // Emerald - Lighting
  '#ec4899', // Pink - QA/QC
  '#64748b'  // Slate - General
];

export function renderBarChart(containerElement, breakdownData) {
  if (!containerElement) return;
  const isEn = getLang() === 'en';

  if (!breakdownData || breakdownData.length === 0) {
    containerElement.innerHTML = `
      <div class="empty-chart">
        <p>${t('noHoursChart')}</p>
      </div>`;
    return;
  }

  const maxHours = Math.max(...breakdownData.map(d => d.hours), 1);

  let barsHtml = breakdownData.map((item, idx) => {
    const color = PALETTE[idx % PALETTE.length];
    const widthPercent = Math.max((item.hours / maxHours) * 100, 3);

    return `
      <div class="bar-row">
        <div class="bar-info">
          <span class="bar-code">${item.code}</span>
          <span class="bar-name">${item.name}</span>
          <span class="bar-workers">👷 ${item.workerCount} ${isEn ? 'workers' : 'pers.'}</span>
        </div>
        <div class="bar-track">
          <div class="bar-fill" style="width: ${widthPercent}%; background-color: ${color};" title="${item.hours} ${isEn ? 'hours' : 'horas'} (${item.percentage}%)">
            <span class="bar-label">${item.hours} ${t('hoursShort')}</span>
          </div>
        </div>
        <div class="bar-pct">${item.percentage}%</div>
      </div>
    `;
  }).join('');

  containerElement.innerHTML = `
    <div class="svg-bar-chart">
      ${barsHtml}
    </div>
  `;
}

export function renderDonutChart(containerElement, breakdownData, totalHours) {
  if (!containerElement) return;

  if (!breakdownData || breakdownData.length === 0 || totalHours <= 0) {
    containerElement.innerHTML = `
      <div class="empty-chart">
        <p>${t('awaitingChart')}</p>
      </div>`;
    return;
  }

  const size = 180;
  const strokeWidth = 22;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  let accumulatedPercent = 0;

  const circles = breakdownData.map((item, idx) => {
    const color = PALETTE[idx % PALETTE.length];
    const pct = item.hours / totalHours;
    const strokeDasharray = `${pct * circumference} ${circumference}`;
    const strokeDashoffset = -accumulatedPercent * circumference;
    accumulatedPercent += pct;

    return `
      <circle 
        cx="${size / 2}" 
        cy="${size / 2}" 
        r="${radius}" 
        fill="transparent" 
        stroke="${color}" 
        stroke-width="${strokeWidth}" 
        stroke-dasharray="${strokeDasharray}" 
        stroke-dashoffset="${strokeDashoffset}"
        stroke-linecap="round"
        class="donut-segment"
      />
    `;
  }).join('');

  const legendHtml = breakdownData.map((item, idx) => {
    const color = PALETTE[idx % PALETTE.length];
    return `
      <div class="legend-item">
        <span class="legend-color" style="background-color: ${color}"></span>
        <span class="legend-text"><strong>${item.code}</strong> ${item.name}</span>
        <span class="legend-value">${item.hours}h (${item.percentage}%)</span>
      </div>
    `;
  }).join('');

  containerElement.innerHTML = `
    <div class="donut-wrapper">
      <div class="donut-svg-box">
        <svg viewBox="0 0 ${size} ${size}" class="donut-svg">
          <g transform="rotate(-90 ${size / 2} ${size / 2})">
            ${circles}
          </g>
        </svg>
        <div class="donut-center-text">
          <span class="donut-total">${totalHours}</span>
          <span class="donut-unit">${t('donutUnit')}</span>
        </div>
      </div>
      <div class="donut-legend">
        ${legendHtml}
      </div>
    </div>
  `;
}
