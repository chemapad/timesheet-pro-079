// ===== MOCK DATA — PROYECTO CONSTRUCCIÓN & DAYFORCE =====

export const INITIAL_PHASE_CODES = [
  { code: '02-100', name: 'Underground Conduit', category: 'Rough-in', defaultRate: 8 },
  { code: '02-200', name: 'Overhead Cable Tray', category: 'Rough-in', defaultRate: 8 },
  { code: '02-300', name: 'Branch & Feeder Wire Pull', category: 'Wiring', defaultRate: 8 },
  { code: '02-400', name: 'Switchgear & Panel Terminations', category: 'Terminations', defaultRate: 8 },
  { code: '02-500', name: 'Lighting Fixtures & Controls', category: 'Devices', defaultRate: 8 },
  { code: '02-600', name: 'QA/QC & Pre-Commissioning', category: 'Inspection', defaultRate: 8 },
  { code: '01-050', name: 'Safety Meeting & Site Setup', category: 'General', defaultRate: 1 }
];

export const INITIAL_SUPERINTENDENTS = [
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

export const INITIAL_LEADERS = [
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

export const INITIAL_EMPLOYEES = [
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

export const INITIAL_PROJECT_CONFIG = {
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
export function getInitialTimesheetEntries() {
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
