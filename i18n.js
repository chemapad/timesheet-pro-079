// ===== INTERNACIONALIZACIÓN (I18N) — ESPAÑOL & ENGLISH =====

export const TRANSLATIONS = {
  es: {
    // Header & Nav
    appName: 'TIMESHEET PRO',
    projectTag: '| 079 Data Center',
    resetDemo: 'Reiniciar Demo',
    tabLeader: '👷 Líder en Campo',
    tabSuper: '🏗️ Superintendente',
    tabCharts: '📊 Horas-Hombre',
    tabOffice: '👩‍💼 Secretaria',
    pending: 'Pendiente',
    ready: 'Listo',

    // Leader View
    crewLeadLabel: 'Líder de Cuadrilla:',
    activeLeadLabel: 'Mi Cuadrilla:',
    switchLeadDemo: '🔄 Cambiar Líder',
    switchLeadModalTitle: 'Seleccionar Líder de Prueba',
    switchLeadModalDesc: 'En campo real, cada líder inicia sesión y solo ve a su propia cuadrilla. Elige qué líder quieres simular para este demo:',
    phaseCodeLabel: 'Phase Code general de cuadrilla:',
    enterIdAndSign: 'Marcar por ID',
    markAllPresent: 'Marcar Todos Presentes',
    btnAddWorkerToCrew: 'Agregar Empleado',
    btnLoanWorker: 'Prestar / Mover',
    crewRoster: 'Personal de la Cuadrilla',
    readyCount: 'Presentes',
    bottomStatusSaved: 'Datos guardados localmente (modo offline activo)',
    submitToSuper: 'Certificar y Enviar Cuadrilla',
    btnPresent: '✅ Presente',
    btnAbsent: '❌ Ausente',
    hoursShort: 'hrs',
    noWorkersInCrew: 'No hay trabajadores en esta cuadrilla aún.',

    // Super View
    workersOnSite: 'Trabajadores en Obra',
    reportedHours: 'Horas Reportadas',
    activeCrews: 'Cuadrillas Activas',
    signaturesCompleted: 'Asistencia Confirmada',
    jobsiteApprovalTitle: 'Aprobación de Jornada en Obra',
    jobsiteApprovalText: 'Revisa las cuadrillas. Al aprobar, se enviará el archivo Dayforce automáticamente por correo a la secretaria.',
    btnApproveAndSend: 'Aprobar y Enviar a Secretaría',
    dayApprovedNotice: 'Día Aprobado',
    sentFormallyBy: 'Enviado formalmente por',
    approvedAndSentBadge: 'APROBADO & ENVIADO',
    revertBtn: 'Deshacer',
    crewDetailTitle: 'Detalle por Cuadrilla:',
    attendanceRate: 'Asistencia',

    // Dual Superintendents
    superFilterLabel: 'Superintendente:',
    allSuperintendents: '📋 Ambos Superintendentes (Consolidado)',
    superOshane: '👷 Oshane Davis — Área 1 (Cuadrillas A & B)',
    superFranklin: '👷 Franklin Ramirez — Área 2 (Cuadrillas C & D)',
    superArea1: 'Área 1: Cuadrillas A & B (Oshane Davis)',
    superArea2: 'Área 2: Cuadrillas C & D (Franklin Ramirez)',
    superAreaAll: 'Área 1 & 2 (Obra Completa — 4 Cuadrillas)',
    area1Badge: '(Área 1)',
    area2Badge: '(Área 2)',
    bothAreasBadge: '(Ambas Áreas)',
    assignedSuperLabel: 'Superintendente a cargo:',
    btnApproveOshane: 'Aprobar Área 1 (Oshane Davis)',
    btnApproveFranklin: 'Aprobar Área 2 (Franklin Ramirez)',
    btnApproveBoth: 'Aprobar Ambas Áreas (Oshane & Franklin)',
    partialApprovalStatus: '1/2 Parcial',
    approvedBothBanner: 'Oshane Davis & Franklin Ramirez aprobaron ambas áreas. Archivos listos para Dayforce.',
    unassignedLeader: 'Sin Asignar',
    donutUnit: 'Horas',
    manHoursLabel: 'Horas-Hombre',
    noHoursChart: 'No hay registros de horas disponibles para este filtro.',
    awaitingChart: 'Esperando datos de horas-hombre...',
    toastInvalidHours: 'Horas inválidas.',

    // Charts View
    chartsHeaderTitle: 'Control de Horas-Hombre por Phase Code',
    allCrewsConsolidated: 'Todas las Cuadrillas (Consolidado)',
    hoursInvestedByTask: '📈 Horas Invertidas por Tarea',
    laborDistribution: '🍩 Distribución de Mano de Obra',
    productivitySummary: 'Resumen de Productividad',
    thPhaseCode: 'Phase Code',
    thDescription: 'Descripción',
    thCategory: 'Categoría',
    thPersonnel: 'Personal',
    thHours: 'Horas',
    thTotalPct: '% Total',
    noHoursRecorded: 'Sin horas registradas.',

    // Office View
    officeReportReceived: '📩 Reporte Recibido del Superintendente',
    officeAttachmentsText: 'Archivos adjuntos: timesheet_dayforce.csv y firmas_auditoria.pdf.',
    officePreviewTitle: 'Revisión Previa & Exportación a Dayforce',
    officePreviewSubtitle: 'Ajusta horas o phase codes si es necesario antes de exportar el archivo definitivo.',
    btnDownloadDayforceCsv: 'Descargar CSV Dayforce',
    btnViewPdf: 'Ver Hoja de Auditoría (PDF)',
    searchPlaceholder: 'Buscar por ID o nombre...',
    allCrewsFilter: 'Todas las cuadrillas',
    thId: 'ID',
    thName: 'Nombre',
    thCrew: 'Cuadrilla',
    thAttendance: 'Asistencia',
    thAction: 'Acción',
    btnSplit: 'Dividir',
    noWorkersFound: 'No se encontraron empleados.',

    // Modals
    modalKeypadTitle: 'Ingreso Rápido por ID',
    modalKeypadSubtitle: 'Teclea tu número de empleado para marcar asistencia',
    keypadPrompt: 'Ingresa 4 dígitos (ej: 4521)',
    keypadNewWorker: 'Trabajador nuevo (se agregará como Presente)',
    keypadInputDigits: 'Ingresa los 4 dígitos',
    keypadClear: 'BORRAR',
    keypadGo: 'MARCAR PRESENTE ➔',

    // Transfer Modal
    modalTransferTitle: 'Prestar / Mover Trabajador',
    modalTransferDesc: 'Transfiere a este trabajador a otro líder para la jornada de hoy:',
    transferToLeader: 'Transferir a la Cuadrilla de:',
    transferPhase: 'Phase Code en la nueva cuadrilla:',
    btnConfirmTransfer: 'Confirmar Transferencia',
    removeTodayHeader: 'O Quitar de la Cuadrilla por Hoy:',
    removeTodayDesc: 'Si el trabajador fue prestado a otra área y no quieres que aparezca como ausente en tu lista:',
    btnRemoveFromCrewToday: 'Quitar de mi lista hoy (Prestado)',

    // Add Worker Modal
    modalAddWorkerCrewTitle: 'Agregar / Recibir Empleado en mi Cuadrilla',
    modalAddWorkerCrewDesc: 'Selecciona un empleado de otra cuadrilla o del banco de la obra:',
    selectCompanyEmployee: 'Seleccionar empleado disponible:',
    addPhaseLabel: 'Phase Code para este empleado:',
    btnAddEmployeeToCrew: 'Agregar a mi Cuadrilla (Presente 8h)',
    noAvailableEmployees: 'Todos los empleados ya están asignados a tu cuadrilla.',

    splitHoursTitle: 'Dividir Horas en Dos Tareas',
    newPhaseCodeLabel: 'Nuevo Phase Code',
    hoursToTransferLabel: 'Horas a transferir',
    btnCancel: 'Cancelar',

    // Modal Confirm Submit Crew with PIN
    modalSubmitVerifyTitle: 'Certificar y Enviar Cuadrilla',
    modalSubmitVerifySub: 'Verificación y firma digital del líder en campo',
    enterLeaderPinPrompt: 'Ingresa tu Código de Empleado / PIN para confirmar:',
    submitPinPlaceholder: 'Código / PIN (ej: 4525)',
    leaderPinHint: 'Tu código de líder es:',
    btnConfirmSubmit: 'Confirmar y Enviar al Superintendente',
    pinInvalid: '❌ Código o PIN incorrecto. Debe coincidir con tu ID de empleado.',
    crewNotSubmittedTitle: 'Cuadrilla Pendiente de Envío en Campo',
    crewNotSubmittedMsg: 'Esta lista aún no ha sido certificada ni enviada por el líder {leader}. La lista de trabajadores estará disponible aquí una vez que el líder verifique su código y confirme el envío.',
    crewLockedNotice: 'Lista protegida: Solo visible al superintendente tras el envío oficial del líder',
    crewSubmittedBadge: 'Enviada',
    awaitingSubmissionBadge: 'Esperando Envío',
    simulateLeaderSubmit: 'Simular Envío de esta Cuadrilla',
    btnReSubmitToSuper: 'Enviada • Re-enviar cambios',
    certifiedByLead: 'Certificada por el líder',

    // Man Hours Approval Gating
    awaitingSuperApprovalTitle: 'Horas Pendientes de Aprobación del Superintendente',
    awaitingSuperApprovalDesc: 'Las horas-hombre se cargarán automáticamente una vez que el Superintendente apruebe la jornada en obra.',
    awaitingSuperApprovalBanner: '⏳ Aprobación Requerida: Las horas-hombre en este panel requieren la aprobación formal de los Superintendentes en obra.',
    partialApprovalBanner: 'ℹ️ Aprobación Parcial: Mostrando horas aprobadas por {approved}. Pendiente aprobación de {pending}.',
    bothApprovedBanner: '✅ Horas Validadas y Aprobadas: Mostrando reporte oficial certificado por Oshane Davis y Franklin Ramirez.',
    btnGoToSuper: 'Ir a Vista Superintendente',
    awaitingSuperApprovalTable: 'Sin horas disponibles. Requiere aprobación previa del Superintendente.',

    // Toasts
    toastMarkedPresent: 'marcado como Presente ✅ (8 hrs)',
    toastMarkedAbsent: 'marcado como Ausente ❌ (0 hrs)',
    toastAllPresent: 'Todos los empleados de la cuadrilla marcados como Presentes ✅.',
    toastPhaseAssigned: 'Phase Code general asignado a la cuadrilla',
    toastPhaseUpdated: 'Phase Code actualizado para',
    toastWorkerTransferred: 'transferido con éxito a',
    toastWorkerRemovedToday: 'removido de tu lista por hoy (no contará como ausente).',
    toastWorkerAddedToCrew: 'agregado a tu cuadrilla con éxito ✅.',
    toastCrewSubmitted: '✅ Cuadrilla certificada y enviada al Superintendente.',
    toastApprovedSuper: '✅ Aprobado. Archivo Dayforce enviado a secretaría por correo.',
    toastApprovedReverted: 'Aprobación revertida.',
    toastCsvDownloaded: 'Archivo descargado con formato oficial Dayforce.',
    toastHoursSplit: 'Horas divididas:',
    toastDemoReset: 'Demo reiniciado con éxito.'
  },

  en: {
    // Header & Nav
    appName: 'TIMESHEET PRO',
    projectTag: '| 079 Data Center',
    resetDemo: 'Reset Demo',
    tabLeader: '👷 Field Lead',
    tabSuper: '🏗️ Superintendent',
    tabCharts: '📊 Man-Hours',
    tabOffice: '👩‍💼 Office / Dayforce',
    pending: 'Pending',
    ready: 'Ready',

    // Leader View
    crewLeadLabel: 'Crew Lead:',
    activeLeadLabel: 'My Crew:',
    switchLeadDemo: '🔄 Switch Lead',
    switchLeadModalTitle: 'Select Demo Lead',
    switchLeadModalDesc: 'In production, each lead logs in and only sees their own assigned crew. Select which lead to simulate for this demo:',
    phaseCodeLabel: 'Crew General Phase Code:',
    enterIdAndSign: 'Check-in by ID',
    markAllPresent: 'All Present',
    btnAddWorkerToCrew: 'Add Employee',
    btnLoanWorker: 'Loan / Move',
    crewRoster: 'Crew Roster',
    readyCount: 'Present',
    bottomStatusSaved: 'Data saved locally (offline-ready)',
    submitToSuper: 'Certify & Submit Crew',
    btnPresent: '✅ Present',
    btnAbsent: '❌ Absent',
    hoursShort: 'hrs',
    noWorkersInCrew: 'No workers assigned to this crew yet.',

    // Super View
    workersOnSite: 'Workers on Site',
    reportedHours: 'Reported Hours',
    activeCrews: 'Active Crews',
    signaturesCompleted: 'Attendance Confirmed',
    jobsiteApprovalTitle: 'Daily Jobsite Approval',
    jobsiteApprovalText: 'Review crews. Once approved, the Dayforce file will be automatically emailed to the office.',
    btnApproveAndSend: 'Approve & Send to Office',
    dayApprovedNotice: 'Day Approved',
    sentFormallyBy: 'Formally approved by',
    approvedAndSentBadge: 'APPROVED & SENT',
    revertBtn: 'Undo',
    crewDetailTitle: 'Crew Breakdown:',
    attendanceRate: 'Attendance',

    // Dual Superintendents
    superFilterLabel: 'Superintendent:',
    allSuperintendents: '📋 Both Superintendents (Consolidated)',
    superOshane: '👷 Oshane Davis — Area 1 (Crews A & B)',
    superFranklin: '👷 Franklin Ramirez — Area 2 (Crews C & D)',
    superArea1: 'Area 1: Crews A & B (Oshane Davis)',
    superArea2: 'Area 2: Crews C & D (Franklin Ramirez)',
    superAreaAll: 'Area 1 & 2 (Entire Jobsite — 4 Crews)',
    area1Badge: '(Area 1)',
    area2Badge: '(Area 2)',
    bothAreasBadge: '(Both Areas)',
    assignedSuperLabel: 'Superintendent in charge:',
    btnApproveOshane: 'Approve Area 1 (Oshane Davis)',
    btnApproveFranklin: 'Approve Area 2 (Franklin Ramirez)',
    btnApproveBoth: 'Approve Both Areas (Oshane & Franklin)',
    partialApprovalStatus: '1/2 Partial',
    approvedBothBanner: 'Oshane Davis & Franklin Ramirez approved both areas. Files ready for Dayforce.',
    unassignedLeader: 'Unassigned',
    donutUnit: 'Hours',
    manHoursLabel: 'Man-Hours',
    noHoursChart: 'No hours recorded for this filter.',
    awaitingChart: 'Awaiting man-hours data...',
    toastInvalidHours: 'Invalid hours.',

    // Charts View
    chartsHeaderTitle: 'Man-Hours Tracking by Phase Code',
    allCrewsConsolidated: 'All Crews (Consolidated)',
    hoursInvestedByTask: '📈 Hours Invested by Task',
    laborDistribution: '🍩 Labor Distribution',
    productivitySummary: 'Productivity Summary',
    thPhaseCode: 'Phase Code',
    thDescription: 'Description',
    thCategory: 'Category',
    thPersonnel: 'Personnel',
    thHours: 'Hours',
    thTotalPct: 'Total %',
    noHoursRecorded: 'No hours recorded.',

    // Office View
    officeReportReceived: '📩 Report Received from Superintendent',
    officeAttachmentsText: 'Attachments: timesheet_dayforce.csv & audit_sheet.pdf.',
    officePreviewTitle: 'Pre-Review & Dayforce Export',
    officePreviewSubtitle: 'Adjust hours or phase codes if needed before exporting the final file.',
    btnDownloadDayforceCsv: 'Download Dayforce CSV',
    btnViewPdf: 'View Audit Sheet (PDF)',
    searchPlaceholder: 'Search by ID or name...',
    allCrewsFilter: 'All crews',
    thId: 'ID',
    thName: 'Name',
    thCrew: 'Crew',
    thAttendance: 'Attendance',
    thAction: 'Action',
    btnSplit: 'Split',
    noWorkersFound: 'No employees found.',

    // Modals
    modalKeypadTitle: 'Quick Check-in by ID',
    modalKeypadSubtitle: 'Type your employee number to confirm attendance',
    keypadPrompt: 'Enter 4 digits (e.g. 4521)',
    keypadNewWorker: 'New worker (will be added as Present)',
    keypadInputDigits: 'Enter your 4 digits',
    keypadClear: 'CLEAR',
    keypadGo: 'MARK PRESENT ➔',

    // Transfer Modal
    modalTransferTitle: 'Loan / Move Worker',
    modalTransferDesc: 'Transfer this worker to another lead for today:',
    transferToLeader: 'Transfer to Crew of:',
    transferPhase: 'Phase Code in new crew:',
    btnConfirmTransfer: 'Confirm Transfer',
    removeTodayHeader: 'Or Remove from Crew for Today:',
    removeTodayDesc: 'If the worker was loaned to another area and shouldn’t appear absent on your roster:',
    btnRemoveFromCrewToday: 'Remove from my roster today (Loaned)',

    // Add Worker Modal
    modalAddWorkerCrewTitle: 'Add / Receive Worker into My Crew',
    modalAddWorkerCrewDesc: 'Select an employee from another crew or jobsite pool:',
    selectCompanyEmployee: 'Select available employee:',
    addPhaseLabel: 'Phase Code for this employee:',
    btnAddEmployeeToCrew: 'Add to My Crew (Present 8h)',
    noAvailableEmployees: 'All employees are already assigned to your crew.',

    splitHoursTitle: 'Split Hours across Tasks',
    newPhaseCodeLabel: 'New Phase Code',
    hoursToTransferLabel: 'Hours to transfer',
    btnCancel: 'Cancel',

    // Modal Confirm Submit Crew with PIN
    modalSubmitVerifyTitle: 'Certify & Submit Crew',
    modalSubmitVerifySub: 'Field lead digital signature and verification',
    enterLeaderPinPrompt: 'Enter your Employee ID / PIN to confirm:',
    submitPinPlaceholder: 'Code / PIN (e.g. 4525)',
    leaderPinHint: 'Your lead verification code is:',
    btnConfirmSubmit: 'Confirm & Submit to Superintendent',
    pinInvalid: '❌ Incorrect Code or PIN. Must match your employee ID.',
    crewNotSubmittedTitle: 'Crew Pending Field Submission',
    crewNotSubmittedMsg: 'This roster has not yet been certified or submitted by Lead {leader}. The worker list will appear here once the lead verifies their employee code and confirms submission.',
    crewLockedNotice: 'Protected roster: Only visible to superintendent after lead certification',
    crewSubmittedBadge: 'Submitted',
    awaitingSubmissionBadge: 'Awaiting Submission',
    simulateLeaderSubmit: 'Simulate Submission for this Crew',
    btnReSubmitToSuper: 'Submitted • Re-submit changes',
    certifiedByLead: 'Certified by lead',

    // Man Hours Approval Gating
    awaitingSuperApprovalTitle: 'Hours Awaiting Superintendent Approval',
    awaitingSuperApprovalDesc: 'Man-hours will load automatically once the Superintendent approves the jobsite shift.',
    awaitingSuperApprovalBanner: '⏳ Approval Required: Man-hours in this dashboard require formal approval by jobsite Superintendents.',
    partialApprovalBanner: 'ℹ️ Partial Approval: Displaying hours approved by {approved}. Awaiting approval from {pending}.',
    bothApprovedBanner: '✅ Validated & Approved Hours: Displaying official certified report by Oshane Davis and Franklin Ramirez.',
    btnGoToSuper: 'Go to Superintendent View',
    awaitingSuperApprovalTable: 'No hours available. Requires prior approval by Superintendent.',

    // Toasts
    toastMarkedPresent: 'marked as Present ✅ (8 hrs)',
    toastMarkedAbsent: 'marked as Absent ❌ (0 hrs)',
    toastAllPresent: 'All crew members marked as Present ✅.',
    toastPhaseAssigned: 'General Phase Code assigned to crew',
    toastPhaseUpdated: 'Phase Code updated for',
    toastWorkerTransferred: 'successfully transferred to',
    toastWorkerRemovedToday: 'removed from your crew today (will not count as absent).',
    toastWorkerAddedToCrew: 'successfully added to your crew ✅.',
    toastCrewSubmitted: '✅ Crew certified and submitted to Superintendent.',
    toastApprovedSuper: '✅ Approved. Dayforce file emailed to office.',
    toastApprovedReverted: 'Approval reverted.',
    toastCsvDownloaded: 'File downloaded in official Dayforce format.',
    toastHoursSplit: 'Hours split:',
    toastDemoReset: 'Demo reset successfully.'
  }
};

let currentLang = localStorage.getItem('TIMESHEET_LANG') || 'es';

export function getLang() {
  return currentLang;
}

export function setLang(lang) {
  currentLang = (lang === 'en' || lang === 'es') ? lang : 'es';
  localStorage.setItem('TIMESHEET_LANG', currentLang);
  return currentLang;
}

export function t(key) {
  const dict = TRANSLATIONS[currentLang] || TRANSLATIONS['es'];
  return dict[key] || TRANSLATIONS['es'][key] || key;
}

export function getLocalizedCrewName(leaderOrName) {
  if (!leaderOrName) return '';
  const name = typeof leaderOrName === 'string' ? leaderOrName : (leaderOrName.crewName || '');
  if (currentLang === 'en') {
    return name.replace(/Cuadrilla/g, 'Crew');
  }
  return name.replace(/Crew/g, 'Cuadrilla');
}

export function getLocalizedSuperArea(areaStr) {
  if (!areaStr) return '';
  if (currentLang === 'en') {
    return areaStr
      .replace(/Área/g, 'Area')
      .replace(/Cuadrillas/g, 'Crews')
      .replace(/Obra Completa/g, 'Entire Jobsite');
  }
  return areaStr
    .replace(/Area/g, 'Área')
    .replace(/Crews/g, 'Cuadrillas')
    .replace(/Entire Jobsite/g, 'Obra Completa');
}
