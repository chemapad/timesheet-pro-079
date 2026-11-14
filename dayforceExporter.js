import { INITIAL_LEADERS } from './mockData.js';
import { getLang, getLocalizedCrewName } from './i18n.js';

export function generateDayforceCsv(entries, projectConfig) {
  const headers = [
    'EmployeeNumber',
    'WorkDate',
    'JobNumber',
    'PhaseCode',
    'Hours',
    'PayCode',
    'Department',
    'Supervisor',
    'AttendanceStatus',
    'MarkedTimestamp',
    'Comments'
  ];

  const leaders = projectConfig.leaders || INITIAL_LEADERS;
  const leaderMap = {};
  leaders.forEach(l => { leaderMap[l.id] = l; });

  const rows = entries.map(entry => {
    const isPresent = Boolean(entry.present);
    const hoursFormatted = isPresent ? (Number(entry.hours) || 8).toFixed(2) : '0.00';
    const dateFormatted = projectConfig.date || new Date().toISOString().split('T')[0];
    const attendanceStatus = isPresent ? 'PRESENT' : 'ABSENT';

    const leader = leaderMap[entry.leaderId];
    const supervisorName = leader ? (leader.superintendentName || 'Oshane Davis') : 'Oshane Davis';
    const cleanComment = `${isPresent ? 'Present' : 'Absent'} - Lead: ${leader ? leader.name : 'Lead'} (${entry.phaseCode})`.replace(/"/g, '""');

    return [
      `"${entry.employeeId}"`,
      `"${dateFormatted}"`,
      `"${projectConfig.projectNumber || 'PRJ-079'}"`,
      `"${entry.phaseCode}"`,
      hoursFormatted,
      `"REG"`, // Regular pay code
      `"ELECTRICAL"`,
      `"${supervisorName}"`,
      `"${attendanceStatus}"`,
      `"${entry.markedAt || ''}"`,
      `"${cleanComment}"`
    ].join(',');
  });

  return [headers.join(','), ...rows].join('\r\n');
}

export function downloadCsvFile(csvContent, filename) {
  const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function openPrintableAuditSheet(entries, projectConfig, leaders) {
  const leaderMap = {};
  leaders.forEach(l => { leaderMap[l.id] = l; });

  const isEn = getLang() === 'en';
  const presentEntries = entries.filter(e => Boolean(e.present));
  const totalHours = presentEntries.reduce((acc, e) => acc + (Number(e.hours) || 0), 0);

  const rowsHtml = entries.map((entry) => {
    const leader = leaderMap[entry.leaderId];
    const leaderName = leader ? `${leader.name} (${getLocalizedCrewName(leader)})` : (isEn ? 'Lead' : 'Líder');
    const superName = leader ? (leader.superintendentName || 'Oshane Davis') : 'Oshane Davis';
    const isPresent = Boolean(entry.present);
    
    const statusBadge = isPresent
      ? `<span style="display: inline-block; background: #ecfdf5; color: #065f46; border: 1px solid #a7f3d0; padding: 3px 8px; border-radius: 4px; font-weight: bold; font-size: 11px;">✅ ${isEn ? 'PRESENT' : 'PRESENTE'} (${entry.hours || 8} hrs)</span>`
      : `<span style="display: inline-block; background: #fef2f2; color: #991b1b; border: 1px solid #fecaca; padding: 3px 8px; border-radius: 4px; font-weight: bold; font-size: 11px;">❌ ${isEn ? 'ABSENT' : 'AUSENTE'}</span>`;

    const timeStr = entry.markedAt ? entry.markedAt.split('T')[1].substring(0, 5) : '--';

    return `
      <tr style="border-bottom: 1px solid #e2e8f0; font-size: 12px; ${!isPresent ? 'background: #fff8f8; color: #64748b;' : ''}">
        <td style="padding: 7px 10px; font-family: monospace; font-weight: bold;">${entry.employeeId}</td>
        <td style="padding: 7px 10px;"><strong>${entry.fullName}</strong></td>
        <td style="padding: 7px 10px; color: #475569;">
          ${leaderName}
          <div style="font-size: 10px; color: #0c4381; font-weight: 600;">Super: ${superName}</div>
        </td>
        <td style="padding: 7px 10px; font-weight: bold; color: #0369a1;">${entry.phaseCode}</td>
        <td style="padding: 7px 10px; text-align: center; font-weight: bold;">${isPresent ? `${entry.hours} hrs` : '0 hrs'}</td>
        <td style="padding: 7px 10px; text-align: center; color: #64748b; font-size: 11px;">${timeStr}</td>
        <td style="padding: 7px 10px; text-align: center;">${statusBadge}</td>
      </tr>
    `;
  }).join('');

  const printHtml = `
    <!DOCTYPE html>
    <html lang="${isEn ? 'en' : 'es'}">
    <head>
      <meta charset="UTF-8">
      <title>${isEn ? 'Official Timesheet' : 'Timesheet Oficial'} — ${projectConfig.projectName}</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif; padding: 28px; color: #0f172a; margin: 0; }
        .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 3px solid #0c4381; padding-bottom: 14px; margin-bottom: 18px; }
        .title h1 { margin: 0; font-size: 20px; color: #0c4381; text-transform: uppercase; letter-spacing: -0.3px; }
        .title p { margin: 4px 0 0; font-size: 12px; color: #64748b; }
        .badge { background: #0c4381; color: white; padding: 6px 14px; border-radius: 4px; font-weight: bold; font-size: 12px; letter-spacing: 0.5px; }
        .meta-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 18px; background: #f8fafc; padding: 12px 16px; border-radius: 6px; border: 1px solid #e2e8f0; font-size: 12px; }
        .meta-item strong { display: block; color: #475569; font-size: 11px; text-transform: uppercase; margin-bottom: 2px; }
        table { width: 100%; border-collapse: collapse; margin-bottom: 28px; }
        th { background: #f1f5f9; color: #334155; text-align: left; padding: 9px 10px; font-size: 11px; text-transform: uppercase; border-bottom: 2px solid #cbd5e1; }
        .signatures-footer { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin-top: 36px; page-break-inside: avoid; }
        .sig-block { border-top: 1.5px solid #475569; padding-top: 10px; font-size: 11px; }
        .sig-block strong { display: block; font-size: 12px; color: #0f172a; margin-bottom: 2px; }
        @media print {
          body { padding: 0; }
          .no-print { display: none; }
        }
      </style>
    </head>
    <body>
      <div class="no-print" style="margin-bottom: 20px; text-align: right;">
        <button onclick="window.print()" style="background: #0c4381; color: white; border: none; padding: 9px 18px; border-radius: 6px; font-weight: bold; cursor: pointer; font-size: 13px;">
          🖨️ ${isEn ? 'Print / Save as PDF' : 'Imprimir / Guardar como PDF'}
        </button>
      </div>

      <div class="header">
        <div class="title">
          <h1>${projectConfig.contractor} — Daily Timesheet & Labor Report</h1>
          <p>${isEn ? 'Project' : 'Proyecto'}: <strong>${projectConfig.projectNumber} — ${projectConfig.projectName}</strong> | ${isEn ? 'Location' : 'Ubicación'}: ${projectConfig.jobSite}</p>
        </div>
        <div class="badge">${isEn ? 'DAYFORCE AUDITABLE REPORT' : 'REPORTE AUDITABLE DAYFORCE'}</div>
      </div>

      <div class="meta-grid">
        <div class="meta-item"><strong>${isEn ? 'Work Date' : 'Fecha de Trabajo'}:</strong> ${projectConfig.date}</div>
        <div class="meta-item"><strong>${isEn ? 'Superintendents' : 'Superintendentes'}:</strong> Oshane Davis | Franklin Ramirez</div>
        <div class="meta-item"><strong>${isEn ? 'On-Site Workers' : 'Personal en Obra'}:</strong> ${presentEntries.length} ${isEn ? 'present' : 'presentes'} / ${entries.length} ${isEn ? 'assigned' : 'asignados'}</div>
        <div class="meta-item"><strong>${isEn ? 'Total Man-Hours' : 'Total Horas-Hombre'}:</strong> ${totalHours} ${isEn ? 'billable hrs' : 'horas facturables'}</div>
      </div>

      <table>
        <thead>
          <tr>
            <th style="width: 75px;">${isEn ? 'Emp ID' : 'ID Emp'}</th>
            <th>${isEn ? 'Employee Name' : 'Nombre y Apellido'}</th>
            <th>${isEn ? 'Crew & Superintendent' : 'Cuadrilla & Superintendente'}</th>
            <th style="width: 100px;">Phase Code</th>
            <th style="width: 75px; text-align: center;">${isEn ? 'Hours' : 'Horas'}</th>
            <th style="width: 65px; text-align: center;">${isEn ? 'Punch' : 'Hora'}</th>
            <th style="width: 150px; text-align: center;">${isEn ? 'Attendance Status' : 'Estatus de Asistencia'}</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml}
        </tbody>
      </table>

      <div class="signatures-footer">
        <div class="sig-block">
          <strong>${isEn ? 'Approved by Field Superintendent (Area 1):' : 'Aprobado por Field Superintendent (Área 1):'}</strong>
          <p style="margin: 4px 0 0; color: #475569;"><strong>Oshane Davis</strong> (${isEn ? 'Crews A & B' : 'Cuadrillas A & B'})</p>
          <span style="font-size: 10px; color: #94a3b8;">Timestamp: ${new Date().toLocaleString()}</span>
        </div>
        <div class="sig-block">
          <strong>${isEn ? 'Approved by Field Superintendent (Area 2):' : 'Aprobado por Field Superintendent (Área 2):'}</strong>
          <p style="margin: 4px 0 0; color: #475569;"><strong>Franklin Ramirez</strong> (${isEn ? 'Crews C & D' : 'Cuadrillas C & D'})</p>
          <span style="font-size: 10px; color: #94a3b8;">Timestamp: ${new Date().toLocaleString()}</span>
        </div>
        <div class="sig-block">
          <strong>${isEn ? 'Processed in Payroll / Office:' : 'Procesado en Oficina / Nómina:'}</strong>
          <p style="margin: 4px 0 0; color: #475569;">Job Costing & Ceridian Dayforce</p>
          <span style="font-size: 10px; color: #94a3b8;">${isEn ? 'Status: Certified & Compliant' : 'Estatus: Certificado conforme'}</span>
        </div>
      </div>
    </body>
    </html>
  `;

  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.write(printHtml);
    printWindow.document.close();
  }
}
