// ===== GESTOR DE ESTADO REACTIVO — STATE.JS =====
import { 
  INITIAL_PHASE_CODES, 
  INITIAL_SUPERINTENDENTS,
  INITIAL_LEADERS, 
  INITIAL_EMPLOYEES, 
  INITIAL_PROJECT_CONFIG, 
  getInitialTimesheetEntries
} from './mockData.js';

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

export const state = new AppState();
