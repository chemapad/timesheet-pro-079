// ===== CONTROLADOR PRINCIPAL MINIMALISTA Y BILINGÜE — APP.JS =====
import { state } from './state.js';
import { renderBarChart, renderDonutChart } from './charts.js';
import { generateDayforceCsv, downloadCsvFile, openPrintableAuditSheet } from './dayforceExporter.js';
import { t, getLang, setLang, getLocalizedCrewName, getLocalizedSuperArea } from './i18n.js';

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
