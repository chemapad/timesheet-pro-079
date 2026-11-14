// ===== BUNDLE STANDALONE (ZERO CORS / COMPATIBLE CON FILE://) =====
(function() {

// --- MODULE: i18n.js ---
// ===== INTERNACIONALIZACIÓN (I18N) — ESPAÑOL & ENGLISH =====

const TRANSLATIONS = {
  es: {
    // Header & Nav
    appName: 'TIMESHEET PRO',
    projectTag: '| 079 Data Center',
    resetDemo: '🔄 Reiniciar Demo',
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
    enterIdAndSign: '🔢 Marcar por ID',
    markAllPresent: '⚡ Todos Presentes',
    btnAddWorkerToCrew: '➕ Agregar Empleado',
    btnLoanWorker: '🔄 Prestar / Mover',
    crewRoster: 'Personal de la Cuadrilla',
    readyCount: 'Presentes',
    bottomStatusSaved: 'Datos guardados localmente (modo offline activo)',
    submitToSuper: '📤 Certificar y Enviar Cuadrilla',
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
    btnConfirmTransfer: '🚀 Confirmar Transferencia',
    removeTodayHeader: 'O Quitar de la Cuadrilla por Hoy:',
    removeTodayDesc: 'Si el trabajador fue prestado a otra área y no quieres que aparezca como ausente en tu lista:',
    btnRemoveFromCrewToday: '🗑️ Quitar de mi lista hoy (Prestado)',

    // Add Worker Modal
    modalAddWorkerCrewTitle: 'Agregar / Recibir Empleado en mi Cuadrilla',
    modalAddWorkerCrewDesc: 'Selecciona un empleado de otra cuadrilla o del banco de la obra:',
    selectCompanyEmployee: 'Seleccionar empleado disponible:',
    addPhaseLabel: 'Phase Code para este empleado:',
    btnAddEmployeeToCrew: '✅ Agregar a mi Cuadrilla (Presente 8h)',
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
    btnConfirmSubmit: '🔒 Confirmar y Enviar al Superintendente',
    pinInvalid: '❌ Código o PIN incorrecto. Debe coincidir con tu ID de empleado.',
    crewNotSubmittedTitle: 'Cuadrilla Pendiente de Envío en Campo',
    crewNotSubmittedMsg: 'Esta lista aún no ha sido certificada ni enviada por el líder {leader}. La lista de trabajadores estará disponible aquí una vez que el líder verifique su código y confirme el envío.',
    crewLockedNotice: 'Lista protegida: Solo visible al superintendente tras el envío oficial del líder',
    crewSubmittedBadge: 'Enviada',
    awaitingSubmissionBadge: 'Esperando Envío',
    simulateLeaderSubmit: '⚡ Simular Envío de esta Cuadrilla',
    btnReSubmitToSuper: '✅ Enviada • Re-enviar cambios',
    certifiedByLead: 'Certificada por el líder',

    // Man Hours Approval Gating
    awaitingSuperApprovalTitle: 'Horas Pendientes de Aprobación del Superintendente',
    awaitingSuperApprovalDesc: 'Las horas-hombre se cargarán automáticamente una vez que el Superintendente apruebe la jornada en obra.',
    awaitingSuperApprovalBanner: '⏳ Aprobación Requerida: Las horas-hombre en este panel requieren la aprobación formal de los Superintendentes en obra.',
    partialApprovalBanner: 'ℹ️ Aprobación Parcial: Mostrando horas aprobadas por {approved}. Pendiente aprobación de {pending}.',
    bothApprovedBanner: '✅ Horas Validadas y Aprobadas: Mostrando reporte oficial certificado por Oshane Davis y Franklin Ramirez.',
    btnGoToSuper: '🏗️ Ir a Vista Superintendente',
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
    resetDemo: '🔄 Reset Demo',
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
    enterIdAndSign: '🔢 Check-in by ID',
    markAllPresent: '⚡ All Present',
    btnAddWorkerToCrew: '➕ Add Employee',
    btnLoanWorker: '🔄 Loan / Move',
    crewRoster: 'Crew Roster',
    readyCount: 'Present',
    bottomStatusSaved: 'Data saved locally (offline-ready)',
    submitToSuper: '📤 Certify & Submit Crew',
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
    btnConfirmTransfer: '🚀 Confirm Transfer',
    removeTodayHeader: 'Or Remove from Crew for Today:',
    removeTodayDesc: 'If the worker was loaned to another area and shouldn’t appear absent on your roster:',
    btnRemoveFromCrewToday: '🗑️ Remove from my roster today (Loaned)',

    // Add Worker Modal
    modalAddWorkerCrewTitle: 'Add / Receive Worker into My Crew',
    modalAddWorkerCrewDesc: 'Select an employee from another crew or jobsite pool:',
    selectCompanyEmployee: 'Select available employee:',
    addPhaseLabel: 'Phase Code for this employee:',
    btnAddEmployeeToCrew: '✅ Add to My Crew (Present 8h)',
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
    btnConfirmSubmit: '🔒 Confirm & Submit to Superintendent',
    pinInvalid: '❌ Incorrect Code or PIN. Must match your employee ID.',
    crewNotSubmittedTitle: 'Crew Pending Field Submission',
    crewNotSubmittedMsg: 'This roster has not yet been certified or submitted by Lead {leader}. The worker list will appear here once the lead verifies their employee code and confirms submission.',
    crewLockedNotice: 'Protected roster: Only visible to superintendent after lead certification',
    crewSubmittedBadge: 'Submitted',
    awaitingSubmissionBadge: 'Awaiting Submission',
    simulateLeaderSubmit: '⚡ Simulate Submission for this Crew',
    btnReSubmitToSuper: '✅ Submitted • Re-submit changes',
    certifiedByLead: 'Certified by lead',

    // Man Hours Approval Gating
    awaitingSuperApprovalTitle: 'Hours Awaiting Superintendent Approval',
    awaitingSuperApprovalDesc: 'Man-hours will load automatically once the Superintendent approves the jobsite shift.',
    awaitingSuperApprovalBanner: '⏳ Approval Required: Man-hours in this dashboard require formal approval by jobsite Superintendents.',
    partialApprovalBanner: 'ℹ️ Partial Approval: Displaying hours approved by {approved}. Awaiting approval from {pending}.',
    bothApprovedBanner: '✅ Validated & Approved Hours: Displaying official certified report by Oshane Davis and Franklin Ramirez.',
    btnGoToSuper: '🏗️ Go to Superintendent View',
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

function getLang() {
  return currentLang;
}

function setLang(lang) {
  currentLang = (lang === 'en' || lang === 'es') ? lang : 'es';
  localStorage.setItem('TIMESHEET_LANG', currentLang);
  return currentLang;
}

function t(key) {
  const dict = TRANSLATIONS[currentLang] || TRANSLATIONS['es'];
  return dict[key] || TRANSLATIONS['es'][key] || key;
}

function getLocalizedCrewName(leaderOrName) {
  if (!leaderOrName) return '';
  const name = typeof leaderOrName === 'string' ? leaderOrName : (leaderOrName.crewName || '');
  if (currentLang === 'en') {
    return name.replace(/Cuadrilla/g, 'Crew');
  }
  return name.replace(/Crew/g, 'Cuadrilla');
}

function getLocalizedSuperArea(areaStr) {
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


// --- MODULE: mockData.js ---
// ===== MOCK DATA — PROYECTO CONSTRUCCIÓN & DAYFORCE =====

const INITIAL_PHASE_CODES = [
  { code: '02-100', name: 'Underground Conduit', category: 'Rough-in', defaultRate: 8 },
  { code: '02-200', name: 'Overhead Cable Tray', category: 'Rough-in', defaultRate: 8 },
  { code: '02-300', name: 'Branch & Feeder Wire Pull', category: 'Wiring', defaultRate: 8 },
  { code: '02-400', name: 'Switchgear & Panel Terminations', category: 'Terminations', defaultRate: 8 },
  { code: '02-500', name: 'Lighting Fixtures & Controls', category: 'Devices', defaultRate: 8 },
  { code: '02-600', name: 'QA/QC & Pre-Commissioning', category: 'Inspection', defaultRate: 8 },
  { code: '01-050', name: 'Safety Meeting & Site Setup', category: 'General', defaultRate: 1 }
];

const INITIAL_SUPERINTENDENTS = [
  {
    id: 'SUP-01',
    name: 'Oshane Davis',
    title: 'Field Superintendent (Área 1)',
    area: 'Área 1 — Conduit & Wiring',
    email: 'odavis@gaylor.com',
    crews: ['L-101', 'L-102']
  },
  {
    id: 'SUP-02',
    name: 'Franklin Ramirez',
    title: 'Field Superintendent (Área 2)',
    area: 'Área 2 — Terminations & QA/QC',
    email: 'framirez@gaylor.com',
    crews: ['L-103', 'L-104']
  }
];

const INITIAL_LEADERS = [
  { 
    id: 'L-101', 
    employeeId: '4525',
    pin: '4525',
    name: 'Carlos Gómez', 
    role: 'Lead Electrician', 
    crewName: 'Cuadrilla A (Conduit & Tray)',
    superintendentId: 'SUP-01',
    superintendentName: 'Oshane Davis'
  },
  { 
    id: 'L-102', 
    employeeId: '4601',
    pin: '4601',
    name: 'Luis Martínez', 
    role: 'Lead Electrician', 
    crewName: 'Cuadrilla B (Wire Pulling)',
    superintendentId: 'SUP-01',
    superintendentName: 'Oshane Davis'
  },
  { 
    id: 'L-103', 
    employeeId: '4701',
    pin: '4701',
    name: 'Pedro Soto', 
    role: 'Lead Electrician', 
    crewName: 'Cuadrilla C (Terminations)',
    superintendentId: 'SUP-02',
    superintendentName: 'Franklin Ramirez'
  },
  { 
    id: 'L-104', 
    employeeId: '4801',
    pin: '4801',
    name: 'David Ramos', 
    role: 'Lead Electrician', 
    crewName: 'Cuadrilla D (QA/QC & Commissioning)',
    superintendentId: 'SUP-02',
    superintendentName: 'Franklin Ramirez'
  }
];

const INITIAL_EMPLOYEES = [
  // Cuadrilla A (Carlos Gómez — Super: Oshane Davis)
  { id: '4521', firstName: 'Juan', lastName: 'Pérez', role: 'Journeyman', leaderId: 'L-101' },
  { id: '4522', firstName: 'Miguel', lastName: 'Rodríguez', role: 'Apprentice 3', leaderId: 'L-101' },
  { id: '4523', firstName: 'Andrés', lastName: 'Castillo', role: 'Journeyman', leaderId: 'L-101' },
  { id: '4524', firstName: 'Roberto', lastName: 'Mendoza', role: 'Apprentice 2', leaderId: 'L-101' },
  { id: '4525', firstName: 'Carlos', lastName: 'Gómez', role: 'Lead Electrician', leaderId: 'L-101' },
  { id: '4526', firstName: 'Jesús', lastName: 'Alvarado', role: 'Helper', leaderId: 'L-101' },

  // Cuadrilla B (Luis Martínez — Super: Oshane Davis)
  { id: '4601', firstName: 'Luis', lastName: 'Martínez', role: 'Lead Electrician', leaderId: 'L-102' },
  { id: '4602', firstName: 'Fernando', lastName: 'Silva', role: 'Journeyman', leaderId: 'L-102' },
  { id: '4603', firstName: 'Gabriel', lastName: 'Torres', role: 'Journeyman', leaderId: 'L-102' },
  { id: '4604', firstName: 'Daniel', lastName: 'Reyes', role: 'Apprentice 4', leaderId: 'L-102' },
  { id: '4605', firstName: 'Héctor', lastName: 'Morales', role: 'Apprentice 1', leaderId: 'L-102' },

  // Cuadrilla C (Pedro Soto — Super: Franklin Ramirez)
  { id: '4701', firstName: 'Pedro', lastName: 'Soto', role: 'Lead Electrician', leaderId: 'L-103' },
  { id: '4702', firstName: 'Alejandro', lastName: 'Vargas', role: 'Journeyman', leaderId: 'L-103' },
  { id: '4703', firstName: 'Javier', lastName: 'Herrera', role: 'Journeyman', leaderId: 'L-103' },
  { id: '4704', firstName: 'Víctor', lastName: 'Guerrero', role: 'Apprentice 3', leaderId: 'L-103' },
  { id: '4705', firstName: 'Manuel', lastName: 'Ortiz', role: 'Journeyman', leaderId: 'L-103' },

  // Cuadrilla D (David Ramos — Super: Franklin Ramirez)
  { id: '4801', firstName: 'David', lastName: 'Ramos', role: 'Lead Electrician', leaderId: 'L-104' },
  { id: '4802', firstName: 'Jose', lastName: 'Zambrano', role: 'Journeyman Specialist', leaderId: 'L-104' },
  { id: '4803', firstName: 'Jose', lastName: 'Díaz', role: 'Journeyman Specialist', leaderId: 'L-104' },
  { id: '4804', firstName: 'Paul', lastName: 'Carroz', role: 'QA/QC Specialist', leaderId: 'L-104' }
];

const INITIAL_PROJECT_CONFIG = {
  projectNumber: 'PRJ-079',
  projectName: '079 Data Center',
  jobSite: 'Marietta, GA',
  contractor: 'Gaylor Electric',
  superintendents: INITIAL_SUPERINTENDENTS,
  superintendentName: 'Oshane Davis & Franklin Ramirez',
  superintendentEmail: 'odavis@gaylor.com, framirez@gaylor.com',
  officeEmail: 'payroll.079@gaylor.com',
  date: '2026-11-14',
  defaultShiftHours: 8
};

// Generar los registros iniciales de asistencia (Checkmark Presente / Ausente)
function getInitialTimesheetEntries() {
  const entries = [];
  const timeBase = '07:';

  INITIAL_EMPLOYEES.forEach((emp, index) => {
    let phaseCode = '02-100';
    if (emp.leaderId === 'L-101') phaseCode = index % 2 === 0 ? '02-100' : '02-200';
    if (emp.leaderId === 'L-102') phaseCode = '02-300';
    if (emp.leaderId === 'L-103') phaseCode = '02-400';
    if (emp.leaderId === 'L-104') phaseCode = '02-600';

    const minute = String(5 + (index % 25)).padStart(2, '0');
    // En Cuadrilla A (L-101): Miguel Rodríguez (4522) y Roberto Mendoza (4524) empiezan como Ausentes para demo visual
    // En otras cuadrillas: index 10 (Héctor Morales) empieza ausente
    const isAbsent = (emp.id === '4522' || emp.id === '4524' || emp.id === '4605');
    const isPresent = !isAbsent;

    entries.push({
      id: `entry-${emp.id}`,
      employeeId: emp.id,
      firstName: emp.firstName,
      lastName: emp.lastName,
      fullName: `${emp.firstName} ${emp.lastName}`,
      role: emp.role || 'Electrician',
      leaderId: emp.leaderId,
      phaseCode: phaseCode,
      hours: isPresent ? 8 : 0,
      present: isPresent,
      status: isPresent ? 'present' : 'absent',
      markedAt: isPresent ? `2026-11-14T${timeBase}${minute}:00` : null,
      notes: isPresent ? 'Asistencia confirmada' : 'Ausente (sin reportar)'
    });
  });

  return entries;
}


// --- MODULE: state.js ---
// ===== GESTOR DE ESTADO REACTIVO — STATE.JS =====


const STORAGE_KEY = 'TIMESHEET_SYSTEM_STATE_V4';

class AppState {
  constructor() {
    this.listeners = new Set();
    this.loadState();
  }

  loadState() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        this.project = parsed.project || { ...INITIAL_PROJECT_CONFIG };
        this.superintendents = parsed.superintendents || [...INITIAL_SUPERINTENDENTS];
        this.leaders = parsed.leaders || [...INITIAL_LEADERS];
        this.phaseCodes = parsed.phaseCodes || [...INITIAL_PHASE_CODES];
        this.employees = parsed.employees || [...INITIAL_EMPLOYEES];
        this.entries = parsed.entries || getInitialTimesheetEntries();
        this.currentLeaderId = parsed.currentLeaderId || 'L-101';
        this.activeSuperintendentId = parsed.activeSuperintendentId || 'all';

        this.superApprovals = parsed.superApprovals || {
          'SUP-01': {
            approved: false,
            approvedAt: null,
            approvedBy: 'Oshane Davis (Superintendent Área 1)',
            emailSent: false,
            emailSentAt: null
          },
          'SUP-02': {
            approved: false,
            approvedAt: null,
            approvedBy: 'Franklin Ramirez (Superintendent Área 2)',
            emailSent: false,
            emailSentAt: null
          }
        };

        this.crewSubmissions = parsed.crewSubmissions || {
          'L-101': { submitted: false, submittedAt: null, submittedBy: null },
          'L-102': { submitted: true, submittedAt: '2026-11-14T07:15:00', submittedBy: 'Luis Martínez', verificationCode: '4601' },
          'L-103': { submitted: false, submittedAt: null, submittedBy: null },
          'L-104': { submitted: false, submittedAt: null, submittedBy: null }
        };

        // Normalización defensiva de booleanos de asistencia
        this.entries.forEach(e => {
          e.present = Boolean(e.present);
          e.status = e.present ? 'present' : 'absent';
          e.hours = e.present ? (Number(e.hours) > 0 ? Number(e.hours) : 8) : 0;
        });
        return;
      } catch (err) {
        console.warn('Error parsing stored state, resetting to defaults:', err);
      }
    }

    this.resetToDefaults(false);
  }

  saveState() {
    const dataToSave = {
      project: this.project,
      superintendents: this.superintendents,
      leaders: this.leaders,
      phaseCodes: this.phaseCodes,
      employees: this.employees,
      entries: this.entries,
      currentLeaderId: this.currentLeaderId,
      activeSuperintendentId: this.activeSuperintendentId,
      superApprovals: this.superApprovals,
      crewSubmissions: this.crewSubmissions
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
    } catch (e) {
      console.warn('Could not save to localStorage:', e);
    }
    this.notify();
  }

  resetToDefaults(triggerNotify = true) {
    this.project = { ...INITIAL_PROJECT_CONFIG };
    this.superintendents = [...INITIAL_SUPERINTENDENTS];
    this.leaders = [...INITIAL_LEADERS];
    this.phaseCodes = [...INITIAL_PHASE_CODES];
    this.employees = [...INITIAL_EMPLOYEES];
    this.entries = getInitialTimesheetEntries();
    this.currentLeaderId = 'L-101';
    this.activeSuperintendentId = 'all';
    this.superApprovals = {
      'SUP-01': {
        approved: false,
        approvedAt: null,
        approvedBy: 'Oshane Davis (Superintendent Área 1)',
        emailSent: false,
        emailSentAt: null
      },
      'SUP-02': {
        approved: false,
        approvedAt: null,
        approvedBy: 'Franklin Ramirez (Superintendent Área 2)',
        emailSent: false,
        emailSentAt: null
      }
    };
    this.crewSubmissions = {
      'L-101': { submitted: false, submittedAt: null, submittedBy: null },
      'L-102': { submitted: true, submittedAt: '2026-11-14T07:15:00', submittedBy: 'Luis Martínez', verificationCode: '4601' },
      'L-103': { submitted: false, submittedAt: null, submittedBy: null },
      'L-104': { submitted: false, submittedAt: null, submittedBy: null }
    };
    if (triggerNotify) this.saveState();
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    for (const listener of this.listeners) {
      listener(this);
    }
  }

  // --- MÉTODOS DEL SUPERINTENDENTE ---
  setActiveSuperintendent(supId) {
    this.activeSuperintendentId = supId;
    this.saveState();
  }

  getActiveSuperintendent() {
    if (this.activeSuperintendentId === 'all') return null;
    return this.superintendents.find(s => s.id === this.activeSuperintendentId) || null;
  }

  getSuperintendentForLeader(leaderId) {
    const leader = this.leaders.find(l => l.id === leaderId);
    if (!leader) return this.superintendents[0];
    return this.superintendents.find(s => s.id === leader.superintendentId) || this.superintendents[0];
  }

  getLeadersForSuperintendent(supId = null) {
    const targetSup = supId || this.activeSuperintendentId;
    if (targetSup === 'all') return this.leaders;
    return this.leaders.filter(l => l.superintendentId === targetSup);
  }

  approveSuperintendent(supId) {
    const sup = this.superApprovals[supId];
    if (sup) {
      sup.approved = true;
      sup.approvedAt = new Date().toISOString();
      sup.emailSent = true;
      sup.emailSentAt = new Date().toISOString();
      this.saveState();
    }
    return sup;
  }

  unapproveSuperintendent(supId) {
    const sup = this.superApprovals[supId];
    if (sup) {
      sup.approved = false;
      sup.approvedAt = null;
      sup.emailSent = false;
      sup.emailSentAt = null;
      this.saveState();
    }
  }

  isLeaderApproved(leaderId) {
    const leader = this.leaders.find(l => l.id === leaderId);
    if (!leader) return false;
    const supId = leader.superintendentId;
    return Boolean(this.superApprovals[supId]?.approved);
  }

  approveAndSendToOffice({ approvedBy = null } = {}) {
    if (this.activeSuperintendentId === 'SUP-01') {
      return this.approveSuperintendent('SUP-01');
    } else if (this.activeSuperintendentId === 'SUP-02') {
      return this.approveSuperintendent('SUP-02');
    } else {
      this.approveSuperintendent('SUP-01');
      return this.approveSuperintendent('SUP-02');
    }
  }

  unapprove() {
    if (this.activeSuperintendentId === 'SUP-01') {
      this.unapproveSuperintendent('SUP-01');
    } else if (this.activeSuperintendentId === 'SUP-02') {
      this.unapproveSuperintendent('SUP-02');
    } else {
      this.unapproveSuperintendent('SUP-01');
      this.unapproveSuperintendent('SUP-02');
    }
  }

  get superApproval() {
    if (this.activeSuperintendentId === 'SUP-01') return this.superApprovals['SUP-01'];
    if (this.activeSuperintendentId === 'SUP-02') return this.superApprovals['SUP-02'];

    const sup1 = this.superApprovals['SUP-01'];
    const sup2 = this.superApprovals['SUP-02'];
    const bothApproved = sup1.approved && sup2.approved;
    const anyApproved = sup1.approved || sup2.approved;

    return {
      approved: bothApproved,
      anyApproved: anyApproved,
      approvedAt: sup2.approvedAt || sup1.approvedAt,
      approvedBy: bothApproved ? 'Oshane Davis & Franklin Ramirez' : (sup1.approved ? 'Oshane Davis' : (sup2.approved ? 'Franklin Ramirez' : null)),
      emailSent: anyApproved,
      emailSentAt: sup2.emailSentAt || sup1.emailSentAt
    };
  }

  // --- MÉTODOS DEL LÍDER ---
  setCurrentLeader(leaderId) {
    this.currentLeaderId = leaderId;
    this.saveState();
  }

  getCurrentLeader() {
    return this.leaders.find(l => l.id === this.currentLeaderId) || this.leaders[0];
  }

  getEntriesForCurrentLeader() {
    return this.entries.filter(e => e.leaderId === this.currentLeaderId);
  }

  findEmployeeById(employeeId) {
    const trimmed = String(employeeId).trim();
    return this.employees.find(emp => emp.id === trimmed);
  }

  // 1-Click Toggle rápido de asistencia
  toggleAttendance(employeeId) {
    const trimmedId = String(employeeId).trim();
    const entry = this.entries.find(e => e.employeeId === trimmedId);
    if (!entry) return null;

    entry.present = !Boolean(entry.present);
    entry.status = entry.present ? 'present' : 'absent';
    entry.hours = entry.present ? 8 : 0;
    entry.markedAt = entry.present ? new Date().toISOString() : null;
    entry.notes = entry.present ? 'Asistencia confirmada' : 'Ausente';

    this.saveState();
    return entry;
  }

  markPresentById(employeeId, phaseCode = null) {
    const trimmedId = String(employeeId).trim();
    let entry = this.entries.find(e => e.employeeId === trimmedId);
    const emp = this.findEmployeeById(trimmedId);

    if (entry) {
      entry.present = true;
      entry.status = 'present';
      entry.hours = entry.hours > 0 ? entry.hours : 8;
      entry.markedAt = new Date().toISOString();
      if (phaseCode) entry.phaseCode = phaseCode;
    } else {
      const firstName = emp ? emp.firstName : 'Empleado';
      const lastName = emp ? emp.lastName : `#${trimmedId}`;
      entry = {
        id: `entry-${trimmedId}-${Date.now()}`,
        employeeId: trimmedId,
        firstName: firstName,
        lastName: lastName,
        fullName: `${firstName} ${lastName}`,
        role: emp ? emp.role : 'Electrician',
        leaderId: this.currentLeaderId,
        phaseCode: phaseCode || '02-100',
        hours: 8,
        present: true,
        status: 'present',
        markedAt: new Date().toISOString(),
        notes: 'Agregado en campo'
      };
      this.entries.unshift(entry);
      if (!emp) {
        this.employees.push({
          id: trimmedId,
          firstName,
          lastName,
          role: 'Electrician',
          leaderId: this.currentLeaderId
        });
      }
    }

    this.saveState();
    return entry;
  }

  markAllPresentInCrew(leaderId = null) {
    const targetLead = leaderId || this.currentLeaderId;
    let count = 0;
    this.entries.forEach(e => {
      if (e.leaderId === targetLead) {
        e.present = true;
        e.status = 'present';
        e.hours = e.hours > 0 ? e.hours : 8;
        e.markedAt = e.markedAt || new Date().toISOString();
        e.notes = 'Asistencia confirmada';
        count++;
      }
    });
    this.saveState();
    return count;
  }

  signWorker({ employeeId, phaseCode, signatureData = null, hours = 8 }) {
    const entry = this.markPresentById(employeeId, phaseCode);
    if (entry) {
      entry.hours = Number(hours) || 8;
      this.saveState();
    }
    return entry;
  }

  applyDefaultPhaseCodeToCrew(leaderId, phaseCode) {
    let count = 0;
    this.entries.forEach(e => {
      if (e.leaderId === leaderId) {
        e.phaseCode = phaseCode;
        count++;
      }
    });
    this.saveState();
    return count;
  }

  // --- MÉTODOS DE ENVÍO Y VERIFICACIÓN DE CUADRILLA ---
  submitCrew(leaderId, pinOrCode) {
    const leader = this.leaders.find(l => l.id === leaderId);
    if (!leader) return { success: false, error: 'Leader not found' };

    const inputClean = String(pinOrCode || '').trim();
    const expectedId = String(leader.employeeId || '').trim();
    const expectedPin = String(leader.pin || '').trim();
    const expectedLId = String(leader.id || '').trim();

    // Validar si coincide con employeeId (ej: 4525), pin, o ID de líder (L-101)
    if (inputClean && (inputClean === expectedId || inputClean === expectedPin || inputClean.toLowerCase() === expectedLId.toLowerCase())) {
      const now = new Date().toISOString();
      this.crewSubmissions[leaderId] = {
        submitted: true,
        submittedAt: now,
        submittedBy: leader.name,
        verificationCode: inputClean
      };
      this.saveState();
      return { success: true, submission: this.crewSubmissions[leaderId], leader };
    }

    return { 
      success: false, 
      error: 'invalid_pin', 
      expected: expectedId,
      leader 
    };
  }

  isCrewSubmitted(leaderId) {
    return Boolean(this.crewSubmissions[leaderId]?.submitted);
  }

  getCrewSubmission(leaderId) {
    return this.crewSubmissions[leaderId] || { submitted: false, submittedAt: null, submittedBy: null };
  }

  unsubmitCrew(leaderId) {
    if (this.crewSubmissions[leaderId]) {
      this.crewSubmissions[leaderId] = { submitted: false, submittedAt: null, submittedBy: null };
      this.saveState();
    }
  }

  // --- PRESTAR / TRANSFERIR TRABAJADOR ENTRE CUADRILLAS ---
  transferWorker(employeeId, newLeaderId, newPhaseCode = null) {
    const trimmedId = String(employeeId).trim();
    let entry = this.entries.find(e => e.employeeId === trimmedId);
    const targetLeader = this.leaders.find(l => l.id === newLeaderId);
    if (!targetLeader) return null;

    if (entry) {
      entry.leaderId = newLeaderId;
      if (newPhaseCode) entry.phaseCode = newPhaseCode;
      entry.present = true;
      entry.status = 'present';
      entry.hours = entry.hours > 0 ? entry.hours : 8;
      entry.markedAt = new Date().toISOString();
      entry.notes = `Transferido a ${targetLeader.name}`;
    } else {
      const emp = this.findEmployeeById(trimmedId);
      entry = {
        id: `entry-${trimmedId}-${Date.now()}`,
        employeeId: trimmedId,
        firstName: emp ? emp.firstName : 'Empleado',
        lastName: emp ? emp.lastName : `#${trimmedId}`,
        fullName: emp ? `${emp.firstName} ${emp.lastName}` : `Empleado #${trimmedId}`,
        role: emp ? emp.role : 'Electrician',
        leaderId: newLeaderId,
        phaseCode: newPhaseCode || '02-100',
        hours: 8,
        present: true,
        status: 'present',
        markedAt: new Date().toISOString(),
        notes: `Transferido a ${targetLeader.name}`
      };
      this.entries.push(entry);
    }

    this.saveState();
    return { entry, targetLeader };
  }

  removeWorkerFromToday(employeeId) {
    const trimmedId = String(employeeId).trim();
    const index = this.entries.findIndex(e => e.employeeId === trimmedId);
    if (index !== -1) {
      const removed = this.entries.splice(index, 1)[0];
      this.saveState();
      return removed;
    }
    return null;
  }

  getAvailableEmployees(currentLeaderId = null) {
    const targetLead = currentLeaderId || this.currentLeaderId;
    const currentCrewEmpIds = new Set(
      this.entries.filter(e => e.leaderId === targetLead).map(e => e.employeeId)
    );
    return this.employees.filter(emp => !currentCrewEmpIds.has(emp.id));
  }

  addWorkerToCrew(employeeId, leaderId = null, phaseCode = null) {
    const targetLead = leaderId || this.currentLeaderId;
    const trimmedId = String(employeeId).trim();
    let entry = this.entries.find(e => e.employeeId === trimmedId);
    const emp = this.findEmployeeById(trimmedId);

    if (entry) {
      entry.leaderId = targetLead;
      if (phaseCode) entry.phaseCode = phaseCode;
      entry.present = true;
      entry.status = 'present';
      entry.hours = entry.hours > 0 ? entry.hours : 8;
      entry.markedAt = new Date().toISOString();
      entry.notes = 'Adoptado en cuadrilla';
    } else {
      entry = {
        id: `entry-${trimmedId}-${Date.now()}`,
        employeeId: trimmedId,
        firstName: emp ? emp.firstName : 'Empleado',
        lastName: emp ? emp.lastName : `#${trimmedId}`,
        fullName: emp ? `${emp.firstName} ${emp.lastName}` : `Empleado #${trimmedId}`,
        role: emp ? emp.role : 'Electrician',
        leaderId: targetLead,
        phaseCode: phaseCode || '02-100',
        hours: 8,
        present: true,
        status: 'present',
        markedAt: new Date().toISOString(),
        notes: 'Agregado a cuadrilla'
      };
      this.entries.push(entry);
    }

    this.saveState();
    return entry;
  }

  // --- MÉTODOS DE LA SECRETARIA / OFICINA ---
  updateEntry(entryId, updates) {
    const entry = this.entries.find(e => e.id === entryId);
    if (entry) {
      Object.assign(entry, updates);
      this.saveState();
      return entry;
    }
    return null;
  }

  deleteEntry(entryId) {
    this.entries = this.entries.filter(e => e.id !== entryId);
    this.saveState();
  }

  splitEntryHours(entryId, newPhaseCode, splitHours) {
    const entry = this.entries.find(e => e.id === entryId);
    if (!entry) return null;

    const currentHours = Number(entry.hours) || 8;
    const splitAmount = Number(splitHours) || 4;

    if (splitAmount >= currentHours) return null;

    entry.hours = currentHours - splitAmount;

    const newEntry = {
      ...entry,
      id: `entry-${entry.employeeId}-split-${Date.now()}`,
      phaseCode: newPhaseCode,
      hours: splitAmount,
      notes: `Horas divididas desde ${entry.phaseCode}`
    };

    this.entries.push(newEntry);
    this.saveState();
    return newEntry;
  }

  // --- AGREGACIONES Y MÉTRICAS DE HORAS-HOMBRE ---
  getManHoursMetrics(leaderFilter = 'all', supFilter = 'all', onlySubmitted = false, onlyApproved = false) {
    let filteredEntries = this.entries;

    if (supFilter && supFilter !== 'all') {
      const allowedLeaders = new Set(
        this.leaders.filter(l => l.superintendentId === supFilter).map(l => l.id)
      );
      filteredEntries = filteredEntries.filter(e => allowedLeaders.has(e.leaderId));
    }

    if (leaderFilter && leaderFilter !== 'all') {
      filteredEntries = filteredEntries.filter(e => e.leaderId === leaderFilter);
    }

    if (onlySubmitted) {
      const submittedLeaders = new Set(
        this.leaders.filter(l => this.isCrewSubmitted(l.id)).map(l => l.id)
      );
      filteredEntries = filteredEntries.filter(e => submittedLeaders.has(e.leaderId));
    }

    if (onlyApproved) {
      const approvedLeaders = new Set(
        this.leaders.filter(l => this.isLeaderApproved(l.id)).map(l => l.id)
      );
      filteredEntries = filteredEntries.filter(e => approvedLeaders.has(e.leaderId));
    }

    const phaseMap = {};
    let totalHours = 0;
    let signedCount = 0;
    let pendingCount = 0;

    this.phaseCodes.forEach(pc => {
      phaseMap[pc.code] = {
        code: pc.code,
        name: pc.name,
        category: pc.category,
        hours: 0,
        workerCount: 0,
        percentage: 0
      };
    });

    filteredEntries.forEach(entry => {
      const isPresent = Boolean(entry.present);
      const hrs = isPresent ? (Number(entry.hours) || 0) : 0;
      totalHours += hrs;
      if (isPresent) signedCount++;
      else pendingCount++;

      if (isPresent && hrs > 0) {
        const pCode = entry.phaseCode || '02-100';
        if (!phaseMap[pCode]) {
          phaseMap[pCode] = {
            code: pCode,
            name: 'Otro Phase Code',
            category: 'General',
            hours: 0,
            workerCount: 0,
            percentage: 0
          };
        }
        phaseMap[pCode].hours += hrs;
        phaseMap[pCode].workerCount += 1;
      }
    });

    const breakdown = Object.values(phaseMap)
      .filter(item => item.hours > 0)
      .map(item => ({
        ...item,
        percentage: totalHours > 0 ? ((item.hours / totalHours) * 100).toFixed(1) : 0
      }))
      .sort((a, b) => b.hours - a.hours);

    return {
      totalHours,
      totalWorkers: filteredEntries.length,
      signedCount,
      pendingCount,
      activePhaseCodesCount: breakdown.length,
      breakdown
    };
  }
}

const state = new AppState();


// --- MODULE: charts.js ---
// ===== MOTOR DE GRÁFICOS SVG NATIVOS — CHARTS.JS =====
// Funciona 100% offline sin librerías externas ni CDNs


const PALETTE = [
  '#0284c7', // Sky Blue - Conduit
  '#0d9488', // Teal - Cable Tray
  '#f59e0b', // Amber - Wire Pull
  '#8b5cf6', // Violet - Terminations
  '#10b981', // Emerald - Lighting
  '#ec4899', // Pink - QA/QC
  '#64748b'  // Slate - General
];

function renderBarChart(containerElement, breakdownData) {
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

function renderDonutChart(containerElement, breakdownData, totalHours) {
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


// --- MODULE: dayforceExporter.js ---



function generateDayforceCsv(entries, projectConfig) {
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

function downloadCsvFile(csvContent, filename) {
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

function openPrintableAuditSheet(entries, projectConfig, leaders) {
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


// --- MODULE: app.js ---
// ===== CONTROLADOR PRINCIPAL MINIMALISTA Y BILINGÜE — APP.JS =====





let currentSplittingEntryId = null;
let currentTransferringWorker = null;
let keypadCurrentDigits = '';

document.addEventListener('DOMContentLoaded', () => {
  initLanguageToggle();
  initRoleTabs();
  initLeaderControls();
  initSubmitCrewModal();
  initSwitchLeaderModal();
  initKeypadModal();
  initTransferModal();
  initAddWorkerModal();
  initSplitHoursModal();
  initOfficeControls();
  initSuperintendentControls();
  initResetButton();

  state.subscribe(() => {
    renderAllViews();
  });

  applyLanguage();
  renderAllViews();
});

// ===== GESTOR DE IDIOMA (I18N) =====
function initLanguageToggle() {
  const btn = document.getElementById('btnToggleLang');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const current = getLang();
    const next = current === 'es' ? 'en' : 'es';
    setLang(next);
    applyLanguage();
    renderAllViews();
    showToast(next === 'en' ? 'Language switched to English' : 'Idioma cambiado a Español');
  });
}

function applyLanguage() {
  const lang = getLang();
  const btn = document.getElementById('btnToggleLang');
  if (btn) {
    btn.innerHTML = lang === 'es' ? '🌐 <span>English</span>' : '🌐 <span>Español</span>';
  }

  // Actualizar todos los elementos con data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (key) el.textContent = t(key);
  });

  // Actualizar placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (key) el.placeholder = t(key);
  });

  // Actualizar fecha en barra inferior
  const dateEl = document.getElementById('bottomDateDisplay');
  if (dateEl) {
    dateEl.textContent = lang === 'en' ? '📅 Nov 14, 2026' : '📅 14 Nov 2026';
  }

  // Actualizar atributos de documento
  document.documentElement.lang = lang;
}

// Toast flotante
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// 1. Navegación entre roles
function initRoleTabs() {
  const tabs = document.querySelectorAll('.seg-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.dataset.tab;
      
      tabs.forEach(tEl => tEl.classList.remove('active'));
      tab.classList.add('active');

      document.querySelectorAll('.view-section').forEach(view => {
        view.classList.remove('active');
      });

      const activeView = document.getElementById(targetId);
      if (activeView) activeView.classList.add('active');

      if (targetId === 'tab-graficos') {
        renderChartsView();
      }
    });
  });
}

// 2. Vista Líder en Campo (Bloqueada a su propia cuadrilla con 1-click toggle)
function initLeaderControls() {
  const selectPhase = document.getElementById('selectDefaultPhaseCode');
  const btnMarkAll = document.getElementById('btnMarkAllPresent');

  selectPhase.innerHTML = '';
  state.phaseCodes.forEach(pc => {
    const opt = document.createElement('option');
    opt.value = pc.code;
    opt.textContent = `${pc.code} — ${pc.name}`;
    selectPhase.appendChild(opt);
  });

  selectPhase.addEventListener('change', (e) => {
    const count = state.applyDefaultPhaseCodeToCrew(state.currentLeaderId, e.target.value);
    showToast(`${t('toastPhaseAssigned')} ${e.target.value} (${count} pers.)`);
  });

  btnMarkAll?.addEventListener('click', () => {
    state.markAllPresentInCrew(state.currentLeaderId);
    showToast(t('toastAllPresent'));
  });
}

// Modal de verificación con Código de Empleado / PIN para enviar al Superintendente
function initSubmitCrewModal() {
  const modal = document.getElementById('modalConfirmSubmitCrew');
  const btnOpen = document.getElementById('btnSubmitCrewToSuper');
  const btnClose = document.getElementById('btnCloseSubmitModal');
  const btnCancel = document.getElementById('btnCancelSubmitModal');
  const btnConfirm = document.getElementById('btnConfirmSubmitWithPin');
  const inputPin = document.getElementById('inputLeaderSubmitPin');
  const errorEl = document.getElementById('submitPinError');
  const hintEl = document.getElementById('submitPinHint');

  const leaderNameEl = document.getElementById('modalSubmitLeaderName');
  const crewNameEl = document.getElementById('modalSubmitCrewName');
  const superNameEl = document.getElementById('modalSubmitSuperName');
  const statsEl = document.getElementById('modalSubmitStats');

  if (!modal || !btnOpen) return;

  function openSubmitModal() {
    const leader = state.getCurrentLeader();
    const superInfo = state.getSuperintendentForLeader(leader.id);
    const entries = state.getEntriesForCurrentLeader();
    const presentCount = entries.filter(e => Boolean(e.present)).length;
    const totalHrs = entries.reduce((a, c) => a + (Boolean(c.present) ? (Number(c.hours) || 0) : 0), 0);

    if (leaderNameEl) leaderNameEl.textContent = leader.name;
    if (crewNameEl) crewNameEl.textContent = getLocalizedCrewName(leader);
    if (superNameEl) superNameEl.textContent = superInfo ? superInfo.name : '';
    if (statsEl) statsEl.textContent = `${presentCount} / ${entries.length} ${t('readyCount')} (${totalHrs} hrs)`;

    const expectedPin = leader.employeeId || leader.pin || '4525';
    if (hintEl) {
      hintEl.innerHTML = `${t('leaderPinHint')} <strong>${expectedPin}</strong>`;
    }

    if (inputPin) {
      inputPin.value = '';
      inputPin.classList.remove('input-shake');
    }
    if (errorEl) {
      errorEl.style.display = 'none';
      errorEl.textContent = '';
    }

    modal.classList.add('active');
    setTimeout(() => inputPin?.focus(), 150);
  }

  function handleConfirmSubmit() {
    const pin = inputPin?.value || '';
    const res = state.submitCrew(state.currentLeaderId, pin);

    if (res.success) {
      modal.classList.remove('active');
      showToast(t('toastCrewSubmitted'));
      renderAllViews();
    } else {
      if (errorEl) {
        errorEl.textContent = t('pinInvalid');
        errorEl.style.display = 'block';
      }
      if (inputPin) {
        inputPin.classList.add('input-shake');
        setTimeout(() => inputPin.classList.remove('input-shake'), 400);
        inputPin.focus();
      }
    }
  }

  btnOpen.addEventListener('click', openSubmitModal);
  btnClose?.addEventListener('click', () => modal.classList.remove('active'));
  btnCancel?.addEventListener('click', () => modal.classList.remove('active'));
  btnConfirm?.addEventListener('click', handleConfirmSubmit);

  inputPin?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      handleConfirmSubmit();
    }
  });
}

function initSwitchLeaderModal() {
  const modal = document.getElementById('modalSwitchLeader');
  const btnOpen = document.getElementById('btnSwitchLeaderDemo');
  const btnClose = document.getElementById('btnCloseSwitchLeader');
  const list = document.getElementById('switchLeaderButtonsList');

  if (!modal || !btnOpen) return;

  btnOpen.addEventListener('click', () => {
    list.innerHTML = '';
    state.leaders.forEach(leader => {
      const btn = document.createElement('button');
      btn.className = 'btn-reset-clean';
      btn.style.width = '100%';
      btn.style.textAlign = 'left';
      btn.style.padding = '10px 14px';
      btn.style.display = 'flex';
      btn.style.justifyContent = 'space-between';
      btn.style.alignItems = 'center';
      btn.style.fontSize = '13px';
      if (leader.id === state.currentLeaderId) {
        btn.style.borderColor = 'var(--primary)';
        btn.style.background = 'var(--primary-subtle)';
        btn.style.fontWeight = 'bold';
      }

      const superInfo = state.getSuperintendentForLeader(leader.id);
      btn.innerHTML = `
        <div>
          <strong>${leader.name}</strong>
          <div style="font-size: 11px; color: var(--slate-500);">${getLocalizedCrewName(leader)}</div>
          <div style="font-size: 11px; color: var(--primary); font-weight: 600; margin-top: 2px;">Super: ${superInfo ? superInfo.name : ''}</div>
        </div>
        <span>${leader.id === state.currentLeaderId ? '✅' : '➔'}</span>
      `;

      btn.addEventListener('click', () => {
        state.setCurrentLeader(leader.id);
        modal.classList.remove('active');
        showToast(`${getLang() === 'en' ? 'Active Lead' : 'Líder activo'}: ${leader.name}`);
      });

      list.appendChild(btn);
    });

    modal.classList.add('active');
  });

  btnClose?.addEventListener('click', () => modal.classList.remove('active'));
}

function renderLeaderView() {
  const leader = state.getCurrentLeader();
  const entries = state.getEntriesForCurrentLeader();
  const container = document.getElementById('crewGridContainer');
  const countDisplay = document.getElementById('crewProgressCount');
  const titleDisplay = document.getElementById('crewListTitle');

  // Actualizar tarjeta de perfil del líder activo
  const avatarEl = document.getElementById('currentLeaderAvatar');
  const nameEl = document.getElementById('currentLeaderName');
  const crewEl = document.getElementById('currentLeaderCrew');
  const superEl = document.getElementById('currentLeaderSuper');
  const supInfo = state.getSuperintendentForLeader(leader.id);

  if (avatarEl) avatarEl.textContent = leader.name.split(' ').map(n => n[0]).join('').substring(0, 2);
  if (nameEl) nameEl.textContent = leader.name;
  if (crewEl) crewEl.textContent = getLocalizedCrewName(leader);
  if (superEl && supInfo) {
    superEl.textContent = `Super: ${supInfo.name} (${getLocalizedSuperArea(supInfo.area)})`;
  }

  if (titleDisplay) {
    titleDisplay.textContent = getLang() === 'en' 
      ? `${leader.name}'s Crew (${getLocalizedCrewName(leader)})` 
      : `Cuadrilla de ${leader.name} (${getLocalizedCrewName(leader)})`;
  }

  const presentCount = entries.filter(e => Boolean(e.present)).length;
  if (countDisplay) {
    countDisplay.textContent = `${presentCount} / ${entries.length} ${t('readyCount')}`;
  }

  const badgeLeaderPending = document.getElementById('badgeLeaderPending');
  const pendingCount = entries.length - presentCount;
  if (badgeLeaderPending) {
    badgeLeaderPending.textContent = pendingCount > 0 ? `${pendingCount} ${t('pending')}` : t('ready');
    badgeLeaderPending.style.background = pendingCount > 0 ? 'var(--accent)' : 'var(--success)';
    badgeLeaderPending.style.color = pendingCount > 0 ? 'var(--slate-900)' : 'white';
  }

  if (!container) return;
  container.innerHTML = '';

  if (entries.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 24px; color: var(--slate-500); font-size: 13px;">
        ${t('noWorkersInCrew')}
      </div>`;
    return;
  }

  entries.forEach(entry => {
    const isPresent = Boolean(entry.present);
    const row = document.createElement('div');
    row.className = `crew-item-row ${isPresent ? 'is-present' : 'is-absent'}`;

    const initials = entry.fullName.split(' ').map(n => n[0]).join('').substring(0, 2);

    const buttonHtml = isPresent
      ? `<button class="btn-attendance-toggle btn-attendance-present" data-id="${entry.employeeId}">
           ${t('btnPresent')} (${entry.hours || 8} ${t('hoursShort')})
         </button>`
      : `<button class="btn-attendance-toggle btn-attendance-absent" data-id="${entry.employeeId}">
           ${t('btnAbsent')} (0 ${t('hoursShort')})
         </button>`;

    // Selector inline de Phase Code específico por trabajador
    const phaseSelectHtml = `
      <select class="inline-phase-select" data-id="${entry.employeeId}" title="${t('phaseCodeLabel')}">
        ${state.phaseCodes.map(pc => `
          <option value="${pc.code}" ${pc.code === entry.phaseCode ? 'selected' : ''}>
            ${pc.code} (${pc.name.split(' ')[0]})
          </option>
        `).join('')}
      </select>
    `;

    row.innerHTML = `
      <div class="crew-left-info">
        <div class="crew-avatar-circle" style="background: ${isPresent ? 'var(--primary-subtle)' : '#f1f5f9'}; color: ${isPresent ? 'var(--primary)' : 'var(--slate-400)'};">
          ${initials}
        </div>
        <div class="crew-name-id">
          <h4 style="color: ${isPresent ? 'var(--slate-900)' : 'var(--slate-500)'}; font-weight: 700;">
            ${entry.fullName} ${!isPresent ? `<span style="font-size: 11px; font-weight: normal; color: var(--danger); margin-left: 4px;">(${t('btnAbsent').replace('❌ ', '')})</span>` : ''}
          </h4>
          <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 4px; margin-top: 2px;">
            <span class="id-tag">ID: ${entry.employeeId}</span>
            ${phaseSelectHtml}
          </div>
        </div>
      </div>
      <div class="crew-right-action">
        ${buttonHtml}
        <button class="btn-transfer-clean btn-open-transfer" data-id="${entry.employeeId}" title="${t('btnLoanWorker')}">
          <span>🔄</span> <span>${t('btnLoanWorker')}</span>
        </button>
      </div>
    `;

    // 1-Click Toggle rápido de asistencia con feedback inmediato
    row.querySelector('.btn-attendance-toggle').addEventListener('click', (e) => {
      e.stopPropagation();
      const updated = state.toggleAttendance(entry.employeeId);
      if (updated) {
        const msg = updated.present 
          ? `${entry.fullName} ${t('toastMarkedPresent')}` 
          : `${entry.fullName} ${t('toastMarkedAbsent')}`;
        showToast(msg);
      }
    });

    // Cambio individual de Phase Code por trabajador
    row.querySelector('.inline-phase-select').addEventListener('change', (e) => {
      e.stopPropagation();
      const newCode = e.target.value;
      state.updateEntry(entry.id, { phaseCode: newCode });
      showToast(`${t('toastPhaseUpdated')} ${entry.fullName}: ${newCode}`);
    });

    // Abrir modal de préstamo / transferencia
    row.querySelector('.btn-open-transfer').addEventListener('click', (e) => {
      e.stopPropagation();
      openTransferModal(entry);
    });

    container.appendChild(row);
  });

  // Actualizar botón de envío según estado de certificación
  const btnSubmitCrew = document.getElementById('btnSubmitCrewToSuper');
  if (btnSubmitCrew) {
    const isSub = state.isCrewSubmitted(state.currentLeaderId);
    const subInfo = state.getCrewSubmission(state.currentLeaderId);
    if (isSub && subInfo.submittedAt) {
      const timeStr = new Date(subInfo.submittedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      btnSubmitCrew.innerHTML = `<span>✅</span> <span>${t('btnReSubmitToSuper')} (${timeStr})</span>`;
      btnSubmitCrew.style.background = '#059669';
    } else {
      btnSubmitCrew.innerHTML = `<span>📤</span> <span>${t('submitToSuper')}</span>`;
      btnSubmitCrew.style.background = 'var(--primary)';
    }
  }
}

// 3. Modal Teclado Numérico (PIN Pad) — Marca asistencia instantáneamente
function initKeypadModal() {
  const modal = document.getElementById('modalKeypad');
  const btnOpen = document.getElementById('btnOpenKeypad');
  const btnClose = document.getElementById('btnCloseKeypad');
  const display = document.getElementById('keypadDisplay');
  const feedback = document.getElementById('keypadFeedback');

  btnOpen?.addEventListener('click', () => {
    keypadCurrentDigits = '';
    display.textContent = '____';
    feedback.textContent = t('keypadPrompt');
    feedback.style.color = 'var(--primary)';
    modal.classList.add('active');
  });

  btnClose?.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  const buttons = modal.querySelectorAll('.keypad-key');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.key;

      if (key === 'clear') {
        keypadCurrentDigits = '';
      } else if (key === 'enter') {
        processKeypadSubmit();
        return;
      } else if (keypadCurrentDigits.length < 5) {
        keypadCurrentDigits += key;
      }

      display.textContent = keypadCurrentDigits.padEnd(4, '_');

      const emp = state.findEmployeeById(keypadCurrentDigits);
      if (emp) {
        feedback.textContent = `👤 ${emp.firstName} ${emp.lastName} (${emp.role})`;
        feedback.style.color = 'var(--success-text)';
      } else if (keypadCurrentDigits.length >= 4) {
        feedback.textContent = t('keypadNewWorker');
        feedback.style.color = 'var(--accent)';
      } else {
        feedback.textContent = t('keypadInputDigits');
        feedback.style.color = 'var(--slate-500)';
      }

      if (keypadCurrentDigits.length === 4 && emp) {
        setTimeout(processKeypadSubmit, 300);
      }
    });
  });

  function processKeypadSubmit() {
    if (!keypadCurrentDigits) return;

    const defaultPhase = document.getElementById('selectDefaultPhaseCode')?.value || '02-100';
    const entry = state.markPresentById(keypadCurrentDigits, defaultPhase);
    modal.classList.remove('active');

    if (entry) {
      showToast(`${entry.fullName} ${t('toastMarkedPresent')}`);
    }
    keypadCurrentDigits = '';
  }
}

// 4. Modal Prestar / Transferir Trabajador entre Cuadrillas
function initTransferModal() {
  const modal = document.getElementById('modalTransferWorker');
  const btnClose = document.getElementById('btnCloseTransferModal');
  const selectLeader = document.getElementById('selectTransferTargetLeader');
  const selectPhase = document.getElementById('selectTransferTargetPhase');
  const btnConfirm = document.getElementById('btnConfirmTransferWorker');
  const btnRemove = document.getElementById('btnRemoveFromCrewToday');

  if (!modal) return;

  btnClose?.addEventListener('click', () => {
    modal.classList.remove('active');
    currentTransferringWorker = null;
  });

  btnConfirm?.addEventListener('click', () => {
    if (!currentTransferringWorker) return;

    const targetLeaderId = selectLeader.value;
    const targetPhase = selectPhase.value;

    const res = state.transferWorker(currentTransferringWorker.employeeId, targetLeaderId, targetPhase);
    modal.classList.remove('active');

    if (res && res.targetLeader) {
      showToast(`${currentTransferringWorker.fullName} ${t('toastWorkerTransferred')} ${res.targetLeader.name}`);
    }
    currentTransferringWorker = null;
  });

  btnRemove?.addEventListener('click', () => {
    if (!currentTransferringWorker) return;

    state.removeWorkerFromToday(currentTransferringWorker.employeeId);
    modal.classList.remove('active');
    showToast(`${currentTransferringWorker.fullName} ${t('toastWorkerRemovedToday')}`);
    currentTransferringWorker = null;
  });
}

function openTransferModal(workerEntry) {
  currentTransferringWorker = workerEntry;
  const modal = document.getElementById('modalTransferWorker');
  const nameEl = document.getElementById('transferWorkerName');
  const selectLeader = document.getElementById('selectTransferTargetLeader');
  const selectPhase = document.getElementById('selectTransferTargetPhase');

  if (!modal) return;

  if (nameEl) nameEl.textContent = `${workerEntry.fullName} (ID: ${workerEntry.employeeId})`;

  // Llenar líderes distintos al actual
  selectLeader.innerHTML = '';
  const otherLeaders = state.leaders.filter(l => l.id !== state.currentLeaderId);
  otherLeaders.forEach(leader => {
    const opt = document.createElement('option');
    opt.value = leader.id;
    opt.textContent = `${leader.name} — ${getLocalizedCrewName(leader)}`;
    selectLeader.appendChild(opt);
  });

  // Llenar phase codes
  selectPhase.innerHTML = '';
  state.phaseCodes.forEach(pc => {
    const opt = document.createElement('option');
    opt.value = pc.code;
    opt.textContent = `${pc.code} — ${pc.name}`;
    if (pc.code === workerEntry.phaseCode) opt.selected = true;
    selectPhase.appendChild(opt);
  });

  modal.classList.add('active');
}

// 5. Modal Agregar / Recibir Empleado en Cuadrilla
function initAddWorkerModal() {
  const modal = document.getElementById('modalAddWorker');
  const btnOpen = document.getElementById('btnOpenAddWorkerModal');
  const btnClose = document.getElementById('btnCloseAddWorker');
  const selectWorker = document.getElementById('selectAvailableWorker');
  const selectPhase = document.getElementById('selectAddWorkerPhase');
  const btnConfirm = document.getElementById('btnConfirmAddWorker');

  if (!modal) return;

  btnOpen?.addEventListener('click', () => {
    const available = state.getAvailableEmployees(state.currentLeaderId);
    selectWorker.innerHTML = '';

    if (available.length === 0) {
      selectWorker.innerHTML = `<option value="">${t('noAvailableEmployees')}</option>`;
      btnConfirm.disabled = true;
    } else {
      btnConfirm.disabled = false;
      available.forEach(emp => {
        const homeLeader = state.leaders.find(l => l.id === emp.leaderId);
        const opt = document.createElement('option');
        opt.value = emp.id;
        const leaderInfo = homeLeader ? `${homeLeader.name} (${getLocalizedCrewName(homeLeader)})` : t('unassignedLeader');
        opt.textContent = `${emp.firstName} ${emp.lastName} (ID: ${emp.id}) — ${leaderInfo}`;
        selectWorker.appendChild(opt);
      });
    }

    selectPhase.innerHTML = '';
    const defaultPhase = document.getElementById('selectDefaultPhaseCode')?.value || '02-100';
    state.phaseCodes.forEach(pc => {
      const opt = document.createElement('option');
      opt.value = pc.code;
      opt.textContent = `${pc.code} — ${pc.name}`;
      if (pc.code === defaultPhase) opt.selected = true;
      selectPhase.appendChild(opt);
    });

    modal.classList.add('active');
  });

  btnClose?.addEventListener('click', () => modal.classList.remove('active'));

  btnConfirm?.addEventListener('click', () => {
    const empId = selectWorker.value;
    if (!empId) return;

    const phaseCode = selectPhase.value;
    const added = state.addWorkerToCrew(empId, state.currentLeaderId, phaseCode);

    modal.classList.remove('active');
    if (added) {
      showToast(`${added.fullName} ${t('toastWorkerAddedToCrew')}`);
    }
  });
}

// 6. Vista Superintendente (Dual: Oshane Davis & Franklin Ramirez)
function initSuperintendentControls() {
  const filterSelect = document.getElementById('selectSuperintendentFilter');
  filterSelect?.addEventListener('change', (e) => {
    state.setActiveSuperintendent(e.target.value);
  });
}

function renderSuperintendentView() {
  const filterSelect = document.getElementById('selectSuperintendentFilter');
  if (filterSelect && filterSelect.value !== state.activeSuperintendentId) {
    filterSelect.value = state.activeSuperintendentId;
  }

  // Actualizar badge descriptivo del área seleccionada
  const areaBadge = document.getElementById('superAreaInfoBadge');
  if (areaBadge) {
    if (state.activeSuperintendentId === 'SUP-01') {
      areaBadge.textContent = t('superArea1');
    } else if (state.activeSuperintendentId === 'SUP-02') {
      areaBadge.textContent = t('superArea2');
    } else {
      areaBadge.textContent = t('superAreaAll');
    }
  }

  const submittedMetrics = state.getManHoursMetrics('all', state.activeSuperintendentId, true);
  const relevantLeaders = state.getLeadersForSuperintendent();
  const submittedCrewsCount = relevantLeaders.filter(l => state.isCrewSubmitted(l.id)).length;

  document.getElementById('superTotalWorkers').textContent = submittedMetrics.signedCount;
  document.getElementById('superTotalHours').textContent = `${submittedMetrics.totalHours} hrs`;
  document.getElementById('superTotalCrews').textContent = `${submittedCrewsCount} / ${relevantLeaders.length}`;

  const pct = submittedMetrics.totalWorkers > 0 ? Math.round((submittedMetrics.signedCount / submittedMetrics.totalWorkers) * 100) : 0;
  document.getElementById('superSignaturesPct').textContent = `${pct}%`;

  const bannerText = document.getElementById('superBannerText');
  const actionBox = document.getElementById('superApprovalActionBox');
  const badgeSuperStatus = document.getElementById('badgeSuperStatus');

  const sup1 = state.superApprovals['SUP-01'];
  const sup2 = state.superApprovals['SUP-02'];
  const isEn = getLang() === 'en';

  if (state.activeSuperintendentId === 'SUP-01') {
    if (sup1.approved) {
      if (badgeSuperStatus) {
        badgeSuperStatus.textContent = t('ready');
        badgeSuperStatus.style.background = 'var(--success)';
        badgeSuperStatus.style.color = 'white';
      }
      bannerText.innerHTML = `
        ✅ <strong>${t('dayApprovedNotice')} ${t('area1Badge')}:</strong> ${t('sentFormallyBy')} Oshane Davis (${new Date(sup1.approvedAt).toLocaleTimeString()}).
      `;
      actionBox.innerHTML = `
        <div style="display: flex; gap: 8px; align-items: center;">
          <span style="font-size: 13px; font-weight: bold; color: var(--success);">${t('approvedAndSentBadge')} ${t('area1Badge')}</span>
          <button id="btnSuperRevert1" class="btn-reset-clean">${t('revertBtn')}</button>
        </div>
      `;
      document.getElementById('btnSuperRevert1')?.addEventListener('click', () => {
        state.unapproveSuperintendent('SUP-01');
        showToast(t('toastApprovedReverted'));
      });
    } else {
      if (badgeSuperStatus) {
        badgeSuperStatus.textContent = t('pending');
        badgeSuperStatus.style.background = 'var(--accent)';
        badgeSuperStatus.style.color = 'var(--slate-900)';
      }
      bannerText.textContent = `${isEn ? 'Area 1 (Oshane Davis)' : 'Área 1 (Oshane Davis)'} — ${t('jobsiteApprovalText')}`;
      actionBox.innerHTML = `
        <button id="btnSuperApprove1" class="btn-approve-huge">
          <span>✅</span> <span>${t('btnApproveOshane')}</span>
        </button>
      `;
      document.getElementById('btnSuperApprove1')?.addEventListener('click', () => {
        state.approveSuperintendent('SUP-01');
        showToast(`${isEn ? 'Area 1' : 'Área 1'}: ${t('toastApprovedSuper')}`);
      });
    }
  } else if (state.activeSuperintendentId === 'SUP-02') {
    if (sup2.approved) {
      if (badgeSuperStatus) {
        badgeSuperStatus.textContent = t('ready');
        badgeSuperStatus.style.background = 'var(--success)';
        badgeSuperStatus.style.color = 'white';
      }
      bannerText.innerHTML = `
        ✅ <strong>${t('dayApprovedNotice')} ${t('area2Badge')}:</strong> ${t('sentFormallyBy')} Franklin Ramirez (${new Date(sup2.approvedAt).toLocaleTimeString()}).
      `;
      actionBox.innerHTML = `
        <div style="display: flex; gap: 8px; align-items: center;">
          <span style="font-size: 13px; font-weight: bold; color: var(--success);">${t('approvedAndSentBadge')} ${t('area2Badge')}</span>
          <button id="btnSuperRevert2" class="btn-reset-clean">${t('revertBtn')}</button>
        </div>
      `;
      document.getElementById('btnSuperRevert2')?.addEventListener('click', () => {
        state.unapproveSuperintendent('SUP-02');
        showToast(t('toastApprovedReverted'));
      });
    } else {
      if (badgeSuperStatus) {
        badgeSuperStatus.textContent = t('pending');
        badgeSuperStatus.style.background = 'var(--accent)';
        badgeSuperStatus.style.color = 'var(--slate-900)';
      }
      bannerText.textContent = `${isEn ? 'Area 2 (Franklin Ramirez)' : 'Área 2 (Franklin Ramirez)'} — ${t('jobsiteApprovalText')}`;
      actionBox.innerHTML = `
        <button id="btnSuperApprove2" class="btn-approve-huge" style="background: #0284c7;">
          <span>✅</span> <span>${t('btnApproveFranklin')}</span>
        </button>
      `;
      document.getElementById('btnSuperApprove2')?.addEventListener('click', () => {
        state.approveSuperintendent('SUP-02');
        showToast(`${isEn ? 'Area 2' : 'Área 2'}: ${t('toastApprovedSuper')}`);
      });
    }
  } else {
    // Modo Consolidado (Ambos)
    const bothApproved = sup1.approved && sup2.approved;
    if (bothApproved) {
      if (badgeSuperStatus) {
        badgeSuperStatus.textContent = t('ready');
        badgeSuperStatus.style.background = 'var(--success)';
        badgeSuperStatus.style.color = 'white';
      }
      bannerText.innerHTML = `
        ✅ <strong>${t('dayApprovedNotice')}:</strong> ${t('approvedBothBanner')}
      `;
      actionBox.innerHTML = `
        <div style="display: flex; gap: 8px; align-items: center;">
          <span style="font-size: 13px; font-weight: bold; color: var(--success);">${t('approvedAndSentBadge')} ${t('bothAreasBadge')}</span>
          <button id="btnSuperRevertAll" class="btn-reset-clean">${t('revertBtn')}</button>
        </div>
      `;
      document.getElementById('btnSuperRevertAll')?.addEventListener('click', () => {
        state.unapprove();
        showToast(t('toastApprovedReverted'));
      });
    } else {
      const anyApproved = sup1.approved || sup2.approved;
      if (badgeSuperStatus) {
        badgeSuperStatus.textContent = anyApproved ? t('partialApprovalStatus') : t('pending');
        badgeSuperStatus.style.background = anyApproved ? '#fed7aa' : 'var(--accent)';
        badgeSuperStatus.style.color = anyApproved ? '#9a3412' : 'var(--slate-900)';
      }
      bannerText.innerHTML = `
        ${sup1.approved ? (isEn ? '✅ Area 1 (Oshane Davis) approved.' : '✅ Área 1 (Oshane Davis) aprobada.') : (isEn ? '⏳ Area 1 (Oshane Davis) pending.' : '⏳ Área 1 (Oshane Davis) pendiente.')}
        ${sup2.approved ? (isEn ? '✅ Area 2 (Franklin Ramirez) approved.' : '✅ Área 2 (Franklin Ramirez) aprobada.') : (isEn ? '⏳ Area 2 (Franklin Ramirez) pending.' : '⏳ Área 2 (Franklin Ramirez) pendiente.')}
      `;
      actionBox.innerHTML = `
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          ${!sup1.approved ? `
            <button id="btnApproveSup1" class="btn-approve-huge" style="font-size: 12px; padding: 10px 14px;">
              <span>✅</span> <span>${t('btnApproveOshane')}</span>
            </button>` : `
            <span style="color: var(--success); font-weight: 700; display: flex; align-items: center; font-size: 12px; padding: 4px 8px; background: var(--success-subtle); border-radius: 6px;">
              ✅ Oshane Davis ${t('area1Badge')}
            </span>`
          }
          ${!sup2.approved ? `
            <button id="btnApproveSup2" class="btn-approve-huge" style="font-size: 12px; padding: 10px 14px; background: #0284c7;">
              <span>✅</span> <span>${t('btnApproveFranklin')}</span>
            </button>` : `
            <span style="color: var(--success); font-weight: 700; display: flex; align-items: center; font-size: 12px; padding: 4px 8px; background: var(--success-subtle); border-radius: 6px;">
              ✅ Franklin Ramirez ${t('area2Badge')}
            </span>`
          }
        </div>
      `;
      document.getElementById('btnApproveSup1')?.addEventListener('click', () => {
        state.approveSuperintendent('SUP-01');
        showToast(`${isEn ? 'Area 1' : 'Área 1'}: ${t('toastApprovedSuper')}`);
      });
      document.getElementById('btnApproveSup2')?.addEventListener('click', () => {
        state.approveSuperintendent('SUP-02');
        showToast(`${isEn ? 'Area 2' : 'Área 2'}: ${t('toastApprovedSuper')}`);
      });
    }
  }

  // Acordeón limpio de cuadrillas (filtrado por superintendente activo)
  const accordionContainer = document.getElementById('superCrewsAccordionContainer');
  if (!accordionContainer) return;
  accordionContainer.innerHTML = '';

  relevantLeaders.forEach(leader => {
    const isSubmitted = state.isCrewSubmitted(leader.id);
    const submission = state.getCrewSubmission(leader.id);
    const crewEntries = state.entries.filter(e => e.leaderId === leader.id);
    const presentCount = crewEntries.filter(e => Boolean(e.present)).length;
    const totalHours = crewEntries.reduce((a, c) => {
      return a + (Boolean(c.present) ? (Number(c.hours) || 0) : 0);
    }, 0);

    const leaderSuper = state.getSuperintendentForLeader(leader.id);
    const card = document.createElement('div');
    card.className = 'accordion-item';

    const isAllPresent = presentCount === crewEntries.length && crewEntries.length > 0;

    let rightBadgeHtml = '';
    let contentHtml = '';

    if (isSubmitted) {
      const timeStr = submission.submittedAt ? new Date(submission.submittedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '';
      rightBadgeHtml = `
        <span style="font-size: 12px; font-weight: bold; color: var(--primary);">${totalHours} hrs</span>
        <span class="badge-submitted-sub">✅ ${t('crewSubmittedBadge')} ${timeStr ? `(${timeStr})` : ''}</span>
        <span class="seg-badge" style="background: ${isAllPresent ? '#d1fae5' : '#fef3c7'}; color: ${isAllPresent ? '#065f46' : '#92400e'};">
          ${presentCount} / ${crewEntries.length} ${t('attendanceRate')}
        </span>
        <span style="font-size: 11px; color: var(--slate-400);">▼</span>
      `;

      contentHtml = `
        <div style="display: flex; justify-content: space-between; align-items: center; background: #ecfdf5; border: 1px solid #a7f3d0; padding: 6px 12px; border-radius: 6px; margin-bottom: 10px; font-size: 12px; color: #065f46;">
          <span>✅ <strong>${t('certifiedByLead')}:</strong> ${submission.submittedBy || leader.name} (ID: ${submission.verificationCode || leader.employeeId})</span>
          <span style="font-weight: 600;">⏰ ${timeStr}</span>
        </div>
        <div class="table-clean-wrap">
          <table class="table-clean">
            <thead>
              <tr>
                <th>${t('thId')}</th>
                <th>${t('thName')}</th>
                <th>${t('thPhaseCode')}</th>
                <th style="text-align: center;">${t('thHours')}</th>
                <th style="text-align: center;">${t('thAttendance')}</th>
              </tr>
            </thead>
            <tbody>
              ${crewEntries.map(e => {
                const isPres = Boolean(e.present);
                const attBadge = isPres
                  ? `<span class="badge-att-present">${t('btnPresent')} (${e.hours || 8}h)</span>`
                  : `<span class="badge-att-absent">${t('btnAbsent')} (0h)</span>`;

                return `
                  <tr style="${!isPres ? 'background: #fff8f8; color: #64748b;' : ''}">
                    <td style="font-family: monospace; font-weight: bold;">${e.employeeId}</td>
                    <td><strong>${e.fullName}</strong></td>
                    <td><span style="color: var(--primary); font-weight: bold;">${e.phaseCode}</span></td>
                    <td style="text-align: center; font-weight: bold;">${isPres ? `${e.hours}h` : '0h'}</td>
                    <td style="text-align: center;">${attBadge}</td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      `;
    } else {
      rightBadgeHtml = `
        <span class="badge-awaiting-sub">⏳ ${t('awaitingSubmissionBadge')}</span>
        <span style="font-size: 11px; color: var(--slate-400);">▼</span>
      `;

      contentHtml = `
        <div class="crew-not-submitted-card">
          <div style="font-size: 28px; margin-bottom: 6px;">⏳</div>
          <h5 style="font-size: 14px; font-weight: 700; color: #9a3412; margin-bottom: 4px;">
            ${t('crewNotSubmittedTitle')}
          </h5>
          <p style="font-size: 12px; color: #78350f; max-width: 480px; margin: 0 auto 10px auto; line-height: 1.4;">
            ${t('crewNotSubmittedMsg').replace('{leader}', leader.name)}
          </p>
          <div style="display: flex; justify-content: center; gap: 8px; align-items: center; flex-wrap: wrap;">
            <span style="font-size: 11px; color: #92400e; background: #fff7ed; border: 1px solid #ffedd5; padding: 5px 10px; border-radius: 6px;">
              🔒 ${t('crewLockedNotice')}
            </span>
            <button class="btn-reset-clean btn-simulate-submit" data-leader-id="${leader.id}" style="font-size: 11px; padding: 5px 10px; border-color: #f59e0b; color: #b45309; background: #fef3c7;">
              ${t('simulateLeaderSubmit')}
            </button>
          </div>
        </div>
      `;
    }

    card.innerHTML = `
      <div class="accordion-title">
        <div>
          <span>👷 ${leader.name}</span>
          <span style="font-weight: normal; color: var(--slate-500); font-size: 12px; margin-left: 6px;">(${getLocalizedCrewName(leader)})</span>
          <span class="id-tag" style="margin-left: 8px; font-size: 10px; background: #e0f2fe; color: #0369a1;">${leaderSuper.name}</span>
        </div>
        <div style="display: flex; align-items: center; gap: 10px;">
          ${rightBadgeHtml}
        </div>
      </div>
      <div class="accordion-content">
        ${contentHtml}
      </div>
    `;

    const titleEl = card.querySelector('.accordion-title');
    const contentEl = card.querySelector('.accordion-content');
    titleEl.addEventListener('click', () => {
      contentEl.style.display = contentEl.style.display === 'none' ? 'block' : 'none';
    });

    const simulateBtn = card.querySelector('.btn-simulate-submit');
    if (simulateBtn) {
      simulateBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const lId = simulateBtn.dataset.leaderId;
        const leaderObj = state.leaders.find(l => l.id === lId);
        if (leaderObj) {
          state.submitCrew(lId, leaderObj.employeeId || '4525');
          showToast(`${leaderObj.name}: ${t('toastCrewSubmitted')}`);
          renderAllViews();
        }
      });
    }

    accordionContainer.appendChild(card);
  });
}

// 7. Vista Horas-Hombre (Charts)
function initChartsView() {
  const selectFilter = document.getElementById('selectFilterLeaderCharts');
  if (!selectFilter) return;

  selectFilter.innerHTML = `<option value="all">${t('allCrewsConsolidated')}</option>`;
  state.leaders.forEach(leader => {
    const opt = document.createElement('option');
    opt.value = leader.id;
    opt.textContent = getLang() === 'en' ? `${leader.name}'s Crew` : `Cuadrilla de ${leader.name}`;
    selectFilter.appendChild(opt);
  });

  selectFilter.addEventListener('change', () => {
    renderChartsView();
  });
}

function renderChartsView() {
  const selectFilter = document.getElementById('selectFilterLeaderCharts');
  const leaderFilter = selectFilter ? selectFilter.value : 'all';

  if (selectFilter) {
    const currentVal = selectFilter.value || 'all';
    selectFilter.innerHTML = `<option value="all">${t('allCrewsConsolidated')}</option>`;
    state.leaders.forEach(leader => {
      const opt = document.createElement('option');
      opt.value = leader.id;
      opt.textContent = getLang() === 'en' 
        ? `${leader.name}'s Crew (${getLocalizedCrewName(leader)})` 
        : `Cuadrilla de ${leader.name} (${getLocalizedCrewName(leader)})`;
      selectFilter.appendChild(opt);
    });
    selectFilter.value = currentVal;
  }

  // Las horas solo cargan si están aprobadas por los superintendentes (onlyApproved = true)
  const metrics = state.getManHoursMetrics(leaderFilter, 'all', false, true);

  const sup1 = state.superApprovals['SUP-01'];
  const sup2 = state.superApprovals['SUP-02'];
  const bothApproved = sup1.approved && sup2.approved;
  const anyApproved = sup1.approved || sup2.approved;
  const isEn = getLang() === 'en';

  // Banner de estado de aprobación en Horas-Hombre
  const bannerContainer = document.getElementById('chartsApprovalBanner');
  if (bannerContainer) {
    if (leaderFilter !== 'all') {
      const leaderObj = state.leaders.find(l => l.id === leaderFilter);
      const isApproved = leaderObj ? state.isLeaderApproved(leaderObj.id) : false;
      const superInfo = leaderObj ? state.getSuperintendentForLeader(leaderObj.id) : null;
      const superName = superInfo ? superInfo.name : 'Superintendente';

      if (!isApproved) {
        bannerContainer.innerHTML = `
          <div class="charts-approval-alert">
            <div>
              <strong>⏳ ${t('awaitingSuperApprovalTitle')}</strong>
              <div style="font-size: 12px; margin-top: 3px;">
                ${isEn 
                  ? `The hours for ${leaderObj ? leaderObj.name : ''}'s crew will appear here once Superintendent ${superName} approves them.` 
                  : `Las horas de la cuadrilla de ${leaderObj ? leaderObj.name : ''} se habilitarán una vez que el Superintendente ${superName} las apruebe.`}
              </div>
            </div>
            <button class="btn-reset-clean btn-jump-to-super" style="background: white; border-color: #f59e0b; color: #b45309; font-weight: bold; font-size: 12px;">
              ${t('btnGoToSuper')}
            </button>
          </div>
        `;
      } else {
        bannerContainer.innerHTML = `
          <div class="charts-approval-success">
            ✅ ${isEn 
              ? `Hours approved and validated on site by Superintendent ${superName}.` 
              : `Horas aprobadas y validadas en obra por el Superintendente ${superName}.`}
          </div>
        `;
      }
    } else {
      if (!anyApproved) {
        bannerContainer.innerHTML = `
          <div class="charts-approval-alert">
            <div>
              <strong>${t('awaitingSuperApprovalTitle')}</strong>
              <div style="font-size: 12px; margin-top: 3px;">
                ${t('awaitingSuperApprovalBanner')}
              </div>
            </div>
            <button class="btn-reset-clean btn-jump-to-super" style="background: white; border-color: #f59e0b; color: #b45309; font-weight: bold; font-size: 12px;">
              ${t('btnGoToSuper')}
            </button>
          </div>
        `;
      } else if (!bothApproved) {
        const approvedName = sup1.approved ? 'Oshane Davis (Área 1)' : 'Franklin Ramirez (Área 2)';
        const pendingName = sup1.approved ? 'Franklin Ramirez (Área 2)' : 'Oshane Davis (Área 1)';
        bannerContainer.innerHTML = `
          <div class="charts-approval-partial" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
            <span>${t('partialApprovalBanner').replace('{approved}', approvedName).replace('{pending}', pendingName)}</span>
            <button class="btn-reset-clean btn-jump-to-super" style="background: white; border-color: #93c5fd; color: #1e40af; font-size: 11px; padding: 4px 8px;">
              ${t('btnGoToSuper')}
            </button>
          </div>
        `;
      } else {
        bannerContainer.innerHTML = `
          <div class="charts-approval-success">
            ${t('bothApprovedBanner')}
          </div>
        `;
      }
    }

    bannerContainer.querySelectorAll('.btn-jump-to-super').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelector('.seg-tab[data-tab="tab-super"]')?.click();
      });
    });
  }

  const badgeTotalHours = document.getElementById('badgeTotalHours');
  if (badgeTotalHours) {
    badgeTotalHours.textContent = `${metrics.totalHours} ${t('hoursShort')}`;
    badgeTotalHours.style.background = metrics.totalHours > 0 ? 'var(--primary)' : 'var(--slate-200)';
    badgeTotalHours.style.color = metrics.totalHours > 0 ? 'white' : 'var(--slate-600)';
  }

  const barContainer = document.getElementById('barChartContainer');
  const donutContainer = document.getElementById('donutChartContainer');

  if (metrics.totalHours === 0) {
    if (barContainer) {
      barContainer.innerHTML = `
        <div class="empty-chart" style="padding: 36px 16px; text-align: center;">
          <div style="font-size: 32px; margin-bottom: 8px;">⏳</div>
          <strong style="color: var(--slate-700); font-size: 13px;">${t('awaitingSuperApprovalTitle')}</strong>
          <p style="font-size: 12px; margin-top: 4px; color: var(--slate-500); max-width: 320px; margin-left: auto; margin-right: auto;">
            ${t('awaitingSuperApprovalDesc')}
          </p>
        </div>`;
    }
    if (donutContainer) {
      donutContainer.innerHTML = `
        <div class="empty-chart" style="padding: 36px 16px; text-align: center;">
          <div style="font-size: 32px; margin-bottom: 8px;">🍩</div>
          <strong style="color: var(--slate-700); font-size: 13px;">${t('awaitingSuperApprovalTitle')}</strong>
          <p style="font-size: 12px; margin-top: 4px; color: var(--slate-500); max-width: 320px; margin-left: auto; margin-right: auto;">
            ${t('awaitingSuperApprovalDesc')}
          </p>
        </div>`;
    }
  } else {
    renderBarChart(barContainer, metrics.breakdown);
    renderDonutChart(donutContainer, metrics.breakdown, metrics.totalHours);
  }

  const tableBody = document.getElementById('metricsTableBody');
  if (tableBody) {
    if (metrics.breakdown.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="6" style="text-align: center; padding: 24px; color: var(--slate-500); font-size: 13px;">⏳ ${t('awaitingSuperApprovalTable')}</td></tr>`;
      return;
    }

    tableBody.innerHTML = metrics.breakdown.map(item => `
      <tr>
        <td style="font-family: monospace; font-weight: bold; color: var(--primary);">${item.code}</td>
        <td><strong>${item.name}</strong></td>
        <td><span style="font-size: 11px; color: var(--slate-500);">${item.category}</span></td>
        <td style="text-align: center; font-weight: bold;">${item.workerCount}</td>
        <td style="text-align: center; font-weight: 800; color: var(--primary);">${item.hours} ${t('hoursShort')}</td>
        <td style="text-align: center; font-weight: bold; color: var(--slate-700);">${item.percentage}%</td>
      </tr>
    `).join('');
  }
}

// 8. Vista Secretaria / Oficina
function initOfficeControls() {
  const searchInput = document.getElementById('officeSearchInput');
  const leaderFilter = document.getElementById('officeLeaderFilter');
  const btnCsv = document.getElementById('btnDownloadDayforceCsv');
  const btnPdf = document.getElementById('btnPrintAuditPdf');

  searchInput.addEventListener('input', () => renderOfficeView());
  leaderFilter.addEventListener('change', () => renderOfficeView());

  btnCsv.addEventListener('click', () => {
    const csvContent = generateDayforceCsv(state.entries, state.project);
    const filename = `timesheet_dayforce_${state.project.date || '2026-11-14'}.csv`;
    downloadCsvFile(csvContent, filename);
    showToast(t('toastCsvDownloaded'));
  });

  btnPdf.addEventListener('click', () => {
    openPrintableAuditSheet(state.entries, state.project, state.leaders);
  });
}

function renderOfficeView() {
  const searchInput = document.getElementById('officeSearchInput');
  const leaderFilter = document.getElementById('officeLeaderFilter');
  const tableBody = document.getElementById('officeTableBody');

  if (leaderFilter) {
    const currentSelected = leaderFilter.value || 'all';
    leaderFilter.innerHTML = `<option value="all">${t('allCrewsFilter')}</option>`;
    state.leaders.forEach(leader => {
      const opt = document.createElement('option');
      opt.value = leader.id;
      opt.textContent = `${leader.name} (${getLocalizedCrewName(leader)})`;
      leaderFilter.appendChild(opt);
    });
    leaderFilter.value = currentSelected;
  }

  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
  const selectedLeader = leaderFilter ? leaderFilter.value : 'all';

  const filtered = state.entries.filter(entry => {
    const matchesLeader = selectedLeader === 'all' || entry.leaderId === selectedLeader;
    const matchesQuery = !query || 
      entry.employeeId.toLowerCase().includes(query) ||
      entry.fullName.toLowerCase().includes(query) ||
      entry.phaseCode.toLowerCase().includes(query);
    return matchesLeader && matchesQuery;
  });

  const emailBody = document.getElementById('emailSimBody');
  const emailTimestamp = document.getElementById('emailSimTimestamp');

  const presentCount = state.entries.filter(e => Boolean(e.present)).length;

  const sup1 = state.superApprovals['SUP-01'];
  const sup2 = state.superApprovals['SUP-02'];
  const isEn = getLang() === 'en';

  if (sup1.approved && sup2.approved) {
    emailTimestamp.textContent = isEn 
      ? `Both approved today, ${new Date(sup2.approvedAt || sup1.approvedAt).toLocaleTimeString()}`
      : `Ambos aprobaron hoy, ${new Date(sup2.approvedAt || sup1.approvedAt).toLocaleTimeString()}`;
    emailBody.innerHTML = isEn
      ? `✅ <strong>Timesheet Approved on Site:</strong> Oshane Davis (Area 1) and Franklin Ramirez (Area 2) approved today's shift with <strong>${presentCount} present workers</strong> (${state.entries.length} assigned). The files are ready for Dayforce import.`
      : `✅ <strong>Timesheet Aprobado en Obra:</strong> Oshane Davis (Área 1) y Franklin Ramirez (Área 2) aprobaron la jornada con <strong>${presentCount} empleados presentes</strong> (${state.entries.length} asignados). Los archivos están listos para Dayforce.`;
  } else if (sup1.approved || sup2.approved) {
    const approvedSup = sup1.approved ? 'Oshane Davis (Área 1)' : 'Franklin Ramirez (Área 2)';
    const pendingSup = sup1.approved ? 'Franklin Ramirez (Área 2)' : 'Oshane Davis (Área 1)';
    emailTimestamp.textContent = isEn ? `Partial approval (${approvedSup})` : `Aprobación parcial (${approvedSup})`;
    emailBody.innerHTML = isEn
      ? `⚠️ <strong>Partial Approval:</strong> ${approvedSup} approved, awaiting ${pendingSup}. <strong>${presentCount} workers present</strong> so far.`
      : `⚠️ <strong>Aprobación Parcial:</strong> ${approvedSup} aprobó su área. En espera de ${pendingSup}. <strong>${presentCount} empleados presentes</strong> hasta ahora.`;
  } else {
    emailTimestamp.textContent = isEn
      ? 'Awaiting Superintendents approval (Oshane Davis & Franklin Ramirez)'
      : 'En espera de aprobación de los Superintendentes (Oshane Davis y Franklin Ramirez)';
    emailBody.innerHTML = isEn
      ? `⏳ <strong>Draft in progress:</strong> Crew leads are completing field rosters for Oshane Davis (Area 1) and Franklin Ramirez (Area 2). You can preview and edit rows below.`
      : `⏳ <strong>Borrador en proceso:</strong> Los líderes están confirmando asistencia para Oshane Davis (Área 1) y Franklin Ramirez (Área 2). Puedes revisar y ajustar abajo.`;
  }

  if (!tableBody) return;
  tableBody.innerHTML = '';

  if (filtered.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="7" style="text-align: center; padding: 16px; color: var(--slate-400);">${t('noWorkersFound')}</td></tr>`;
    return;
  }

  const leaderMap = {};
  state.leaders.forEach(l => { leaderMap[l.id] = `${l.name} (${getLocalizedCrewName(l)})`; });

  filtered.forEach(entry => {
    const tr = document.createElement('tr');
    const leaderName = leaderMap[entry.leaderId] || t('unassignedLeader');
    const isPres = Boolean(entry.present);

    const attHtml = isPres
      ? `<span class="badge-att-present">${t('btnPresent')}</span>`
      : `<span class="badge-att-absent">${t('btnAbsent')}</span>`;

    tr.innerHTML = `
      <td style="font-family: monospace; font-weight: bold;">${entry.employeeId}</td>
      <td><strong>${entry.fullName}</strong></td>
      <td style="color: var(--slate-500); font-size: 12px;">${leaderName}</td>
      <td>
        <select class="clean-select office-phase-select" data-id="${entry.id}" style="padding: 3px 6px; font-size: 12px; width: auto;">
          ${state.phaseCodes.map(pc => `
            <option value="${pc.code}" ${pc.code === entry.phaseCode ? 'selected' : ''}>${pc.code} — ${pc.name}</option>
          `).join('')}
        </select>
      </td>
      <td style="text-align: center;">
        <input type="number" class="inline-num office-hours-input" data-id="${entry.id}" min="0" max="16" step="0.5" value="${isPres ? entry.hours : 0}"/>
      </td>
      <td style="text-align: center;">${attHtml}</td>
      <td style="text-align: center; white-space: nowrap;">
        <button class="btn-reset-clean btn-split-hours" data-id="${entry.id}" style="padding: 2px 6px; font-size: 11px;" title="${t('btnSplit')}">
          ✂️ ${t('btnSplit')}
        </button>
      </td>
    `;

    tr.querySelector('.office-phase-select').addEventListener('change', (e) => {
      state.updateEntry(entry.id, { phaseCode: e.target.value });
      showToast(`Phase Code: ${e.target.value}`);
    });

    tr.querySelector('.office-hours-input').addEventListener('change', (e) => {
      const val = parseFloat(e.target.value) || 0;
      state.updateEntry(entry.id, { hours: val });
      showToast(`Hours: ${val}h`);
    });

    tr.querySelector('.btn-split-hours').addEventListener('click', () => {
      openSplitHoursModal(entry.id);
    });

    tableBody.appendChild(tr);
  });
}

// 9. Modal Dividir Horas
function initSplitHoursModal() {
  const modal = document.getElementById('modalSplitHours');
  const btnClose = document.getElementById('btnCloseSplitModal');
  const btnCancel = document.getElementById('btnCancelSplit');
  const btnConfirm = document.getElementById('btnConfirmSplit');
  const phaseSelect = document.getElementById('splitPhaseSelect');
  const hoursInput = document.getElementById('splitHoursInput');

  if (!modal) return;

  phaseSelect.innerHTML = '';
  state.phaseCodes.forEach(pc => {
    const opt = document.createElement('option');
    opt.value = pc.code;
    opt.textContent = `${pc.code} — ${pc.name}`;
    phaseSelect.appendChild(opt);
  });

  const closeModal = () => {
    modal.classList.remove('active');
    currentSplittingEntryId = null;
  };

  btnClose?.addEventListener('click', closeModal);
  btnCancel?.addEventListener('click', closeModal);

  btnConfirm?.addEventListener('click', () => {
    if (!currentSplittingEntryId) return;

    const newPhase = phaseSelect.value;
    const splitHours = parseFloat(hoursInput.value) || 4;

    const result = state.splitEntryHours(currentSplittingEntryId, newPhase, splitHours);
    if (result) {
      showToast(`${t('toastHoursSplit')} ${splitHours} hrs ➔ ${newPhase}`);
      closeModal();
    } else {
      showToast(t('toastInvalidHours'));
    }
  });
}

function openSplitHoursModal(entryId) {
  currentSplittingEntryId = entryId;
  const entry = state.entries.find(e => e.id === entryId);
  if (!entry) return;

  const modal = document.getElementById('modalSplitHours');
  document.getElementById('splitModalText').innerHTML = getLang() === 'en'
    ? `Split shift for <strong>${entry.fullName}</strong> (Currently: ${entry.hours} hrs on ${entry.phaseCode}).`
    : `Dividir jornada de <strong>${entry.fullName}</strong> (Actualmente: ${entry.hours} horas en ${entry.phaseCode}).`;

  document.getElementById('splitHoursInput').value = Math.max(Math.floor(entry.hours / 2), 1);
  modal.classList.add('active');
}

// 10. Reinicio de Demo
function initResetButton() {
  const btn = document.getElementById('btnResetDemo');
  btn?.addEventListener('click', () => {
    const msg = getLang() === 'en' 
      ? 'Reset demo data to initial state?' 
      : '¿Reiniciar datos del demo al estado inicial?';
    if (confirm(msg)) {
      state.resetToDefaults(true);
      showToast(t('toastDemoReset'));
    }
  });
}

// Render central
function renderAllViews() {
  renderLeaderView();
  renderSuperintendentView();
  initChartsView();
  renderChartsView();
  renderOfficeView();
}


})();
