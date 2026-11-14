// ===== TEST SUITE EXHAUSTIVO — TEST_SUITE.JS =====
// Valida integridad de datos, cálculos matemáticos, transferencias entre cuadrillas y Dayforce CSV

// Mock de localStorage para Node.js
const mockStorage = {};
globalThis.localStorage = {
  getItem: (key) => mockStorage[key] || null,
  setItem: (key, val) => { mockStorage[key] = String(val); },
  removeItem: (key) => { delete mockStorage[key]; },
  clear: () => { Object.keys(mockStorage).forEach(k => delete mockStorage[k]); }
};

async function runTests() {
  console.log('🧪 Iniciando prueba exhaustiva de Timesheet Pro...\n');
  let passed = 0;
  let failed = 0;

  function assert(condition, testName) {
    if (condition) {
      console.log(`  ✅ PASÓ: ${testName}`);
      passed++;
    } else {
      console.error(`  ❌ FALLÓ: ${testName}`);
      failed++;
    }
  }

  // 1. Cargar módulos
  const { INITIAL_PHASE_CODES, INITIAL_LEADERS, INITIAL_EMPLOYEES, INITIAL_PROJECT_CONFIG } = await import('./mockData.js');
  const { state } = await import('./state.js');
  const { generateDayforceCsv } = await import('./dayforceExporter.js');

  // Test 1: Integridad de datos iniciales
  console.log('[GRUPO 1] Verificación de Catálogos y Datos Iniciales:');
  assert(INITIAL_PHASE_CODES.length >= 6, 'Catálogo de Phase Codes tiene al menos 6 tareas de construcción');
  assert(INITIAL_LEADERS.length >= 4, 'Catálogo de Líderes tiene al menos 4 cuadrillas');
  assert(INITIAL_EMPLOYEES.length >= 18, 'Catálogo de Empleados tiene al menos 18 trabajadores');
  assert(INITIAL_PROJECT_CONFIG.projectNumber === 'PRJ-079', 'Configuración de Proyecto configurada correctamente (PRJ-079 - 079 Data Center)');

  // Test 2: Estado inicial y cálculos
  console.log('\n[GRUPO 2] Estado Reactivo y Cálculos de Asistencia y Horas-Hombre:');
  state.resetToDefaults(false);
  assert(state.entries.length === INITIAL_EMPLOYEES.length, `State cargó ${state.entries.length} registros`);

  // Verificar que el estado inicial tiene trabajadores presentes Y ausentes
  const initialPresentCount = state.entries.filter(e => Boolean(e.present)).length;
  const initialAbsentCount = state.entries.filter(e => !Boolean(e.present)).length;
  assert(initialPresentCount > 0, `Hay ${initialPresentCount} trabajadores presentes inicialmente`);
  assert(initialAbsentCount > 0, `Hay ${initialAbsentCount} trabajadores ausentes inicialmente (para validación visual)`);

  const initialMetrics = state.getManHoursMetrics('all');
  const sumPresentHours = state.entries
    .filter(e => Boolean(e.present))
    .reduce((a, c) => a + (Number(c.hours) || 0), 0);
  assert(initialMetrics.totalHours === sumPresentHours, `Suma de métricas (${initialMetrics.totalHours} hrs) coincide con suma de empleados presentes (${sumPresentHours} hrs)`);
  assert(initialMetrics.breakdown.length > 0, `Desglose de tareas tiene ${initialMetrics.breakdown.length} Phase Codes activos`);

  // Test 3: Toggle de Asistencia (Presente / Ausente)
  console.log('\n[GRUPO 3] 1-Click Toggle de Asistencia en Campo:');
  const testWorkerId = '4521';
  const entryBefore = state.entries.find(e => e.employeeId === testWorkerId);
  const initialPresent = Boolean(entryBefore.present);
  
  // Toggling to opposite state
  const toggled = state.toggleAttendance(testWorkerId);
  assert(toggled !== null, 'toggleAttendance ejecutó exitosamente');
  assert(Boolean(toggled.present) === !initialPresent, `Estatus de asistencia cambió de ${initialPresent} a ${toggled.present}`);
  assert(toggled.hours === (toggled.present ? 8 : 0), `Horas cambiaron correspondientemente a ${toggled.hours} hrs`);

  // Toggling back
  const toggledBack = state.toggleAttendance(testWorkerId);
  assert(Boolean(toggledBack.present) === initialPresent, 'Empleado vuelto a su estado original con toggle exitoso');

  // Test 4: Cambio individual de Phase Code por trabajador
  console.log('\n[GRUPO 4] Asignación Individual de Phase Code:');
  const workerToRephase = state.entries.find(e => e.employeeId === '4523');
  const originalPhase = workerToRephase.phaseCode;
  const newPhase = '02-400';
  state.updateEntry(workerToRephase.id, { phaseCode: newPhase });
  assert(workerToRephase.phaseCode === newPhase, `Phase code individual de 4523 actualizado de ${originalPhase} a ${newPhase}`);

  // Test 5: Prestar / Transferir trabajador entre líderes
  console.log('\n[GRUPO 5] Prestar / Transferir Trabajador entre Cuadrillas:');
  const workerToLoan = '4526'; // Jesús Alvarado, originalmente en L-101 (Carlos Gómez)
  const targetLeader = 'L-102'; // Luis Martínez (Cuadrilla B)
  const loanPhase = '02-300';
  const transferResult = state.transferWorker(workerToLoan, targetLeader, loanPhase);
  assert(transferResult !== null, 'state.transferWorker ejecutó exitosamente');
  assert(transferResult.entry.leaderId === targetLeader, 'El trabajador ahora pertenece a la Cuadrilla de Luis Martínez');
  assert(transferResult.entry.phaseCode === loanPhase, `Se asignó el Phase Code ${loanPhase} para el préstamo`);
  assert(Boolean(transferResult.entry.present) === true, 'El trabajador transferido está marcado como Presente (8h)');

  // Test 6: Quitar trabajador de mi cuadrilla por hoy (prestado sin contar ausente)
  console.log('\n[GRUPO 6] Quitar de la Cuadrilla por Hoy (Prestado):');
  const workerToRemove = '4524'; // Roberto Mendoza
  const removedWorker = state.removeWorkerFromToday(workerToRemove);
  assert(removedWorker !== null, 'Trabajador 4524 removido de la lista de hoy');
  const stillInEntries = state.entries.some(e => e.employeeId === workerToRemove);
  assert(stillInEntries === false, 'El trabajador ya no aparece en el roster activo de hoy ni cuenta como ausente');

  // Test 7: Agregar / Adoptar trabajador en cuadrilla
  console.log('\n[GRUPO 7] Agregar / Adoptar Trabajador en Cuadrilla:');
  const leaderC = 'L-103';
  const addedEntry = state.addWorkerToCrew(workerToRemove, leaderC, '02-400');
  assert(addedEntry !== null, 'Trabajador 4524 adoptado por Cuadrilla C');
  assert(addedEntry.leaderId === leaderC, 'Trabajador asignado a Cuadrilla C');
  assert(addedEntry.phaseCode === '02-400', 'Phase Code asignado a 02-400');
  assert(Boolean(addedEntry.present) === true, 'Trabajador adoptado marcado como Presente (8h)');

  // Test 8: Marcar todos presentes en la cuadrilla
  console.log('\n[GRUPO 8] Marcar Todos Presentes en Cuadrilla (1 Click):');
  const leaderA = 'L-101';
  const markedCount = state.markAllPresentInCrew(leaderA);
  assert(markedCount > 0, `markAllPresentInCrew marcó ${markedCount} empleados`);
  const allCrewPresent = state.entries
    .filter(e => e.leaderId === leaderA)
    .every(e => Boolean(e.present) === true && e.hours === 8);
  assert(allCrewPresent === true, 'Todos los empleados de la Cuadrilla A quedaron marcados como Presentes (8 hrs)');

  // Test 9: Ingreso Rápido por ID (PIN Pad)
  console.log('\n[GRUPO 9] Ingreso Rápido por ID (PIN Pad):');
  const quickEmpId = '4522';
  const quickPunch = state.markPresentById(quickEmpId, '02-200');
  assert(quickPunch !== null, 'markPresentById ejecutó exitosamente');
  assert(Boolean(quickPunch.present) === true, 'Empleado 4522 marcado como Presente');
  assert(quickPunch.phaseCode === '02-200', 'Phase Code actualizado a 02-200');

  // Test 10: División de horas (Split hours) en oficina
  console.log('\n[GRUPO 10] División de Jornada (Split Hours):');
  const entryToSplit = state.entries.find(e => e.employeeId === '4521');
  const originalHours = entryToSplit.hours;
  const splitHours = 3.5;
  const newSplitEntry = state.splitEntryHours(entryToSplit.id, '02-600', splitHours);
  assert(newSplitEntry !== null, 'División de horas ejecutada exitosamente');
  assert(entryToSplit.hours === (originalHours - splitHours), `Horas de entrada original reducidas a ${entryToSplit.hours}`);
  assert(newSplitEntry.hours === splitHours, `Nueva entrada creada con ${splitHours} horas en Phase 02-600`);

  // Test 11: Aprobación Dual de los Superintendentes (Oshane Davis & Franklin Ramirez)
  console.log('\n[GRUPO 11] Aprobación Dual de Superintendentes (Oshane Davis & Franklin Ramirez):');
  state.unapprove();
  assert(state.superApprovals['SUP-01'].approved === false, 'SUP-01 (Oshane Davis) en estado inicial pendiente');
  assert(state.superApprovals['SUP-02'].approved === false, 'SUP-02 (Franklin Ramirez) en estado inicial pendiente');
  assert(state.superApproval.approved === false, 'Aprobación consolidada es false si ninguno aprobó');

  state.approveSuperintendent('SUP-01');
  assert(state.superApprovals['SUP-01'].approved === true, 'SUP-01 (Oshane Davis) aprobado exitosamente');
  assert(state.superApproval.approved === false, 'Aprobación consolidada sigue false cuando solo uno ha aprobado');
  assert(state.superApproval.anyApproved === true, 'anyApproved es true cuando al menos uno aprobó');

  state.approveSuperintendent('SUP-02');
  assert(state.superApprovals['SUP-02'].approved === true, 'SUP-02 (Franklin Ramirez) aprobado exitosamente');
  assert(state.superApproval.approved === true, 'Aprobación consolidada es true cuando ambos superintendentes aprobaron');

  // Test 12: Generación y Validación de Formato Dayforce CSV
  console.log('\n[GRUPO 12] Validación de Formato Dayforce CSV con División de Superintendentes:');
  const csvOutput = generateDayforceCsv(state.entries, state.project);
  assert(typeof csvOutput === 'string' && csvOutput.length > 200, 'CSV generado como string no vacío');

  const lines = csvOutput.split('\r\n');
  const headers = lines[0].split(',');
  assert(headers.includes('EmployeeNumber'), 'CSV contiene columna requerida: EmployeeNumber');
  assert(headers.includes('WorkDate'), 'CSV contiene columna requerida: WorkDate');
  assert(headers.includes('JobNumber'), 'CSV contiene columna requerida: JobNumber');
  assert(headers.includes('PhaseCode'), 'CSV contiene columna requerida: PhaseCode');
  assert(headers.includes('Hours'), 'CSV contiene columna requerida: Hours');
  assert(headers.includes('PayCode'), 'CSV contiene columna requerida: PayCode');
  assert(headers.includes('Supervisor'), 'CSV contiene columna requerida: Supervisor');
  assert(headers.includes('AttendanceStatus'), 'CSV contiene columna requerida: AttendanceStatus');

  const dataLine = lines[1];
  assert(dataLine.includes('PRJ-079'), 'Fila contiene el Job Number correcto PRJ-079');
  assert(dataLine.includes('"REG"'), 'Fila contiene el código de pago regular "REG"');
  assert(dataLine.includes('"PRESENT"') || dataLine.includes('"ABSENT"'), 'Fila contiene estatus de asistencia válido (PRESENT/ABSENT)');

  // Verificar que el CSV contiene ambos supervisores según la cuadrilla
  const containsOshane = lines.some(l => l.includes('"Oshane Davis"'));
  const containsFranklin = lines.some(l => l.includes('"Franklin Ramirez"'));
  assert(containsOshane === true, 'CSV contiene a "Oshane Davis" como Supervisor para Cuadrillas A y B');
  assert(containsFranklin === true, 'CSV contiene a "Franklin Ramirez" como Supervisor para Cuadrillas C y D');

  // Test 13: Verificación con PIN al Enviar Cuadrilla y Gating en Superintendente
  console.log('\n[GRUPO 13] Verificación con PIN al Enviar Cuadrilla y Gating en Superintendente:');
  const leaderA_id = 'L-101'; // Carlos Gómez (PIN / EmployeeId: 4525)
  state.unsubmitCrew(leaderA_id);
  assert(state.isCrewSubmitted(leaderA_id) === false, 'Cuadrilla A empieza sin enviar (unsubmitted)');

  // Intento con PIN erróneo
  const failedAttempt = state.submitCrew(leaderA_id, '9999');
  assert(failedAttempt.success === false, 'Envío rechazado con PIN incorrecto 9999');
  assert(state.isCrewSubmitted(leaderA_id) === false, 'Cuadrilla A sigue sin enviar tras PIN incorrecto');

  // Intento con PIN correcto de Carlos Gómez: 4525
  const successAttempt = state.submitCrew(leaderA_id, '4525');
  assert(successAttempt.success === true, 'Envío aprobado con PIN correcto (4525)');
  assert(state.isCrewSubmitted(leaderA_id) === true, 'isCrewSubmitted(L-101) es true');
  assert(successAttempt.submission.submittedBy === 'Carlos Gómez', 'submittedBy registrado como Carlos Gómez');

  // Verificar métricas de solo cuadrillas enviadas
  const subMetrics = state.getManHoursMetrics('all', 'all', true);
  assert(subMetrics.totalHours > 0, `Métricas de cuadrillas enviadas suman ${subMetrics.totalHours} hrs`);

  // Test 14: Gating de Horas-Hombre según Aprobación de Superintendentes
  console.log('\n[GRUPO 14] Gating de Horas-Hombre según Aprobación de Superintendentes:');
  state.unapprove(); // Reiniciar aprobaciones a false
  assert(state.isLeaderApproved('L-101') === false, 'Cuadrilla A (L-101) no aprobada cuando Oshane Davis está pendiente');
  assert(state.isLeaderApproved('L-103') === false, 'Cuadrilla C (L-103) no aprobada cuando Franklin Ramirez está pendiente');

  // Con soloApproved = true y sin aprobaciones, las horas son exactamente 0
  const unapprovedMetrics = state.getManHoursMetrics('all', 'all', false, true);
  assert(unapprovedMetrics.totalHours === 0, 'Horas-Hombre cargan como 0 hrs antes de aprobación del Superintendente');
  assert(unapprovedMetrics.breakdown.length === 0, 'Desglose de tareas está vacío antes de aprobación');

  // Aprobar solo Área 1 (Oshane Davis: L-101, L-102)
  state.approveSuperintendent('SUP-01');
  assert(state.isLeaderApproved('L-101') === true, 'Cuadrilla A (L-101) aprobada tras visto bueno de Oshane Davis');
  assert(state.isLeaderApproved('L-102') === true, 'Cuadrilla B (L-102) aprobada tras visto bueno de Oshane Davis');
  assert(state.isLeaderApproved('L-103') === false, 'Cuadrilla C (L-103) sigue sin aprobar (Franklin Ramirez pendiente)');

  const partialMetrics = state.getManHoursMetrics('all', 'all', false, true);
  assert(partialMetrics.totalHours > 0, `Horas de Área 1 cargadas exitosamente (${partialMetrics.totalHours} hrs)`);

  // Aprobar Área 2 (Franklin Ramirez: L-103, L-104)
  state.approveSuperintendent('SUP-02');
  assert(state.isLeaderApproved('L-103') === true, 'Cuadrilla C aprobada tras visto bueno de Franklin Ramirez');
  assert(state.isLeaderApproved('L-104') === true, 'Cuadrilla D aprobada tras visto bueno de Franklin Ramirez');

  const fullMetrics = state.getManHoursMetrics('all', 'all', false, true);
  const totalSiteHours = state.entries.filter(e => Boolean(e.present)).reduce((a, c) => a + (Number(c.hours) || 0), 0);
  assert(fullMetrics.totalHours === totalSiteHours, `Todas las horas (${fullMetrics.totalHours} hrs) cargadas tras aprobación de ambos superintendentes`);

  console.log('\n=============================================');
  console.log(`RESULTADO FINAL: ${passed} pruebas superadas, ${failed} fallidas.`);
  if (failed === 0) {
    console.log('🎉 TODAS LAS PRUEBAS EXHAUSTIVAS FUERON EXITOSAS.');
  }
  console.log('=============================================\n');

  if (failed > 0) process.exit(1);
}

runTests();
