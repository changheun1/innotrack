(function initInnoTrackFirebase() {
  const firebaseConfig = window.INNOTRACK_FIREBASE_CONFIG || {};
  const firebaseOptions = window.INNOTRACK_FIREBASE_OPTIONS || {};
  const bridge = window.InnoTrackDataBridge || null;
  const firebaseGlobal = window.firebase;

  const DEFAULT_ROLE = String(firebaseOptions.signupDefaultRole || "guest").toLowerCase();
  const READABLE_ROLES = Array.isArray(firebaseOptions.readableRoles) && firebaseOptions.readableRoles.length
    ? firebaseOptions.readableRoles.map((role) => String(role).toLowerCase())
    : ["user", "admin"];
  const MANAGEABLE_ROLES = Array.isArray(firebaseOptions.manageableRoles) && firebaseOptions.manageableRoles.length
    ? firebaseOptions.manageableRoles.map((role) => String(role).toLowerCase())
    : ["guest", "user", "admin"];
  const REQUIRED_CONFIG_KEYS = ["apiKey", "authDomain", "projectId", "messagingSenderId", "appId", "databaseURL"];
  const REMEMBERED_LOGIN_EMAIL_KEY = "innotrack.rememberedLoginEmail";
  const TEXT = {
    configMissing: "firebase-config.js에 Firebase 웹 앱 설정값을 입력하면 회원관리와 클라우드 저장이 활성화됩니다.",
    sdkMissing: "Firebase SDK를 불러오지 못했습니다. 네트워크 연결을 확인해 주세요.",
    signupDone: "회원가입이 완료되었습니다. 관리자 승인 후 데이터 동기화가 활성화됩니다.",
    signupFail: "회원가입 중 오류가 발생했습니다.",
    loginDone: "로그인되었습니다.",
    loginFail: "로그인에 실패했습니다.",
    profileSelfUpdated: "내 정보가 수정되었습니다.",
    profileSelfUpdateFail: "내 정보 수정 중 오류가 발생했습니다.",
    profileSelfUserOnly: "일반회원 계정에서만 정보수정을 사용할 수 있습니다.",
    passwordResetEmailRequired: "비밀번호 재설정 메일을 받을 이메일을 먼저 입력해 주세요.",
    passwordResetSent: "비밀번호 재설정 메일을 발송했습니다. 메일함을 확인해 주세요.",
    passwordResetFail: "비밀번호 재설정 메일 발송에 실패했습니다.",
    logoutDone: "로그아웃되었습니다.",
    pendingApproval: "승인 대기 중입니다. 관리자 승인 후 프로젝트 데이터가 연결됩니다.",
    demoMode: "로컬 저장 모드",
    memberMode: "Firebase 회원 모드",
    adminMode: "Firebase 관리자 모드",
    usersAdminOnly: "회원관리 목록은 관리자 권한에서만 확인할 수 있습니다.",
    usersLoading: "회원 정보를 불러오는 중입니다.",
    usersLoadFail: "회원 정보를 불러오지 못했습니다. 권한 또는 Firebase 규칙을 확인해 주세요.",
    usersEmpty: "등록된 회원이 없습니다.",
    roleUpdated: "회원 권한이 변경되었습니다.",
    roleUpdateFail: "회원 권한 변경 중 오류가 발생했습니다.",
    profileUpdated: "회원 정보가 수정되었습니다.",
    profileUpdateFail: "회원 정보 수정 중 오류가 발생했습니다.",
    profileDeleted: "회원 정보가 삭제되었습니다.",
    profileDeleteFail: "회원 정보 삭제 중 오류가 발생했습니다.",
    nameRequired: "이름을 입력해 주세요.",
    deletedAccountBlocked: "삭제된 계정입니다. 관리자에게 문의해 주세요.",
  };

  function ensureAuthToolbars() {
    const topbars = Array.from(document.querySelectorAll(".page-view .topbar"));

    topbars.forEach((topbar) => {
      const hasPrimaryToolbar = Boolean(topbar.querySelector("#auth-user") || topbar.querySelector("#auth-guest-actions"));
      const mirrorToolbars = Array.from(topbar.querySelectorAll("[data-auth-toolbar-mirror]"));

      if (!hasPrimaryToolbar && mirrorToolbars.length === 0) {
        const mirror = document.createElement("div");
        mirror.className = "topbar-actions auth-toolbar";
        mirror.setAttribute("data-auth-toolbar-mirror", "");
        mirror.innerHTML = `
          <div class="auth-user" data-auth-user-mirror hidden>
            <span class="auth-user-email" data-auth-user-email-mirror></span>
            <button type="button" class="ghost-button" data-auth-open-profile-mirror hidden>정보수정</button>
            <button type="button" class="ghost-button" data-auth-open-users-mirror hidden>회원관리</button>
            <button type="button" class="ghost-button" data-auth-logout-mirror>로그아웃</button>
          </div>
          <div class="auth-guest-actions" data-auth-guest-actions-mirror>
            <button type="button" class="ghost-button" data-auth-open-signup-mirror>회원가입</button>
            <button type="button" class="primary-button" data-auth-open-login-mirror>로그인</button>
          </div>
        `;
        topbar.appendChild(mirror);
      }

      if (mirrorToolbars.length > 1) {
        mirrorToolbars.slice(1).forEach((node) => node.remove());
      }

      topbar.querySelectorAll(".auth-user[data-auth-user-mirror]").forEach((userBar) => {
        if (userBar.querySelector("[data-auth-open-profile-mirror]")) {
          return;
        }

        const profileButton = document.createElement("button");
        profileButton.type = "button";
        profileButton.className = "ghost-button";
        profileButton.setAttribute("data-auth-open-profile-mirror", "");
        profileButton.hidden = true;
        profileButton.textContent = "정보수정";
        userBar.insertBefore(profileButton, userBar.querySelector("[data-auth-open-users-mirror], [data-auth-logout-mirror]"));
      });
    });
  }

  ensureAuthToolbars();

  const elements = {
    authStatusChip: document.querySelector("#auth-status-chip"),
    authUser: document.querySelector("#auth-user"),
    authUserEmail: document.querySelector("#auth-user-email"),
    authGuestActions: document.querySelector("#auth-guest-actions"),
    openSignupButton: document.querySelector("#open-signup-button"),
    openLoginButton: document.querySelector("#open-login-button"),
    openProfileModalButton: document.querySelector("#open-profile-modal-button"),
    openUsersModalButton: document.querySelector("#open-users-modal-button"),
    logoutButton: document.querySelector("#logout-button"),
    authUserMirrors: Array.from(document.querySelectorAll("[data-auth-user-mirror]")),
    authUserEmailMirrors: Array.from(document.querySelectorAll("[data-auth-user-email-mirror]")),
    authGuestActionMirrors: Array.from(document.querySelectorAll("[data-auth-guest-actions-mirror]")),
    openSignupButtonMirrors: Array.from(document.querySelectorAll("[data-auth-open-signup-mirror]")),
    openLoginButtonMirrors: Array.from(document.querySelectorAll("[data-auth-open-login-mirror]")),
    openProfileModalButtonMirrors: Array.from(document.querySelectorAll("[data-auth-open-profile-mirror]")),
    openUsersModalButtonMirrors: Array.from(document.querySelectorAll("[data-auth-open-users-mirror]")),
    logoutButtonMirrors: Array.from(document.querySelectorAll("[data-auth-logout-mirror]")),
    signupModal: document.querySelector("#signup-modal"),
    loginModal: document.querySelector("#login-modal"),
    profileModal: document.querySelector("#profile-modal"),
    usersModal: document.querySelector("#users-modal"),
    signupForm: document.querySelector("#signup-form"),
    loginForm: document.querySelector("#login-form"),
    profileForm: document.querySelector("#profile-form"),
    loginEmail: document.querySelector("#login-email"),
    loginPassword: document.querySelector("#login-password"),
    loginRememberEmail: document.querySelector("#login-remember-email"),
    forgotPasswordButton: document.querySelector("#forgot-password-button"),
    profileNameInput: document.querySelector("#profile-name-input"),
    profileCompanyInput: document.querySelector("#profile-company-input"),
    profileDepartmentInput: document.querySelector("#profile-department-input"),
    signupCompany: document.querySelector("#signup-company"),
    usersTableBody: document.querySelector("#users-table-body"),
    profileAvatar: document.querySelector("#profile-avatar"),
    profileName: document.querySelector("#profile-name"),
    profileRole: document.querySelector("#profile-role"),
  };

  const state = {
    auth: null,
    db: null,
    firebaseReady: false,
    currentUser: null,
    currentUserProfile: null,
    pendingSignupProfile: null,
    projectsRef: null,
    milestonesRef: null,
    qualificationsRef: null,
    certificationExamsRef: null,
    certificationExamApplicationsRef: null,
    educationSchedulesRef: null,
    educationEnrollmentsRef: null,
    educationCostDetailsRef: null,
    surveyFormsRef: null,
    surveyResponsesRef: null,
    usersRef: null,
  };

  const DELETED_ACCOUNT_ERROR = "INNOTRACK_DELETED_ACCOUNT";

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function hasCompleteConfig(config) {
    return REQUIRED_CONFIG_KEYS.every((key) => {
      const value = String(config[key] || "").trim();
      return value && !value.startsWith("YOUR_");
    });
  }

  function getRememberedLoginEmail() {
    try {
      return String(window.localStorage.getItem(REMEMBERED_LOGIN_EMAIL_KEY) || "").trim();
    } catch (error) {
      return "";
    }
  }

  function setRememberedLoginEmail(email) {
    try {
      if (email) {
        window.localStorage.setItem(REMEMBERED_LOGIN_EMAIL_KEY, email);
      } else {
        window.localStorage.removeItem(REMEMBERED_LOGIN_EMAIL_KEY);
      }
    } catch (error) {
      // Ignore storage access failures and continue with login flow.
    }
  }

  function syncRememberedLoginEmailField() {
    if (!elements.loginEmail || !elements.loginRememberEmail) {
      return;
    }

    const rememberedEmail = getRememberedLoginEmail();
    elements.loginRememberEmail.checked = Boolean(rememberedEmail);
    elements.loginEmail.value = rememberedEmail;
  }

  function isModalOpen(modal) {
    return Boolean(modal) && !modal.hidden;
  }

  function syncBodyModalState() {
    const authModalOpen = [elements.signupModal, elements.loginModal, elements.profileModal, elements.usersModal].some(isModalOpen);
    const coreModalOpen = [
      document.querySelector("#project-modal"),
      document.querySelector("#qualification-modal"),
      document.querySelector("#milestone-modal"),
    ].some(isModalOpen);
    document.body.classList.toggle("modal-open", authModalOpen || coreModalOpen);
  }

  function openModal(modal) {
    if (!modal) {
      return;
    }

    modal.hidden = false;
    syncBodyModalState();
  }

  function closeModal(modal) {
    if (!modal) {
      return;
    }

    modal.hidden = true;
    syncBodyModalState();
  }

  function closeAllAuthModals() {
    closeModal(elements.signupModal);
    closeModal(elements.loginModal);
    closeModal(elements.profileModal);
    closeModal(elements.usersModal);
  }

  function prepareLoginModal() {
    if (!elements.loginForm) {
      return;
    }

    elements.loginForm.reset();
    syncRememberedLoginEmailField();

    window.setTimeout(() => {
      if (elements.loginPassword && elements.loginEmail?.value) {
        elements.loginPassword.focus();
        return;
      }

      elements.loginEmail?.focus();
    }, 0);
  }

  function setStatusChip(text, tone = "muted") {
    if (!elements.authStatusChip) {
      return;
    }

    elements.authStatusChip.textContent = text;
    elements.authStatusChip.classList.remove("is-success", "is-warning", "is-muted");
    elements.authStatusChip.classList.add(
      tone === "success" ? "is-success" : tone === "warning" ? "is-warning" : "is-muted"
    );
  }

  function getProfileRoleLabel(profile) {
    const role = String(profile?.role || "").toLowerCase();

    if (role === "admin") {
      return "관리자";
    }

    if (role === "user") {
      return "승인 회원";
    }

    if (role === "guest") {
      return "승인 대기";
    }

    return "로그인 전";
  }

  function getInitials(profile) {
    const name = String(profile?.name || "").trim();

    if (name) {
      return name.slice(0, 2).toUpperCase();
    }

    const email = String(profile?.email || "").trim();
    if (email) {
      return email.slice(0, 2).toUpperCase();
    }

    return "IT";
  }

  function updateSidebarProfile(profile) {
    if (elements.profileAvatar) {
      elements.profileAvatar.textContent = getInitials(profile);
    }

    if (elements.profileName) {
      elements.profileName.textContent = profile?.name || "로컬 데모 사용자";
    }

    if (elements.profileRole) {
      elements.profileRole.textContent = profile ? getProfileRoleLabel(profile) : "로그인 전";
    }
  }

  function hasDataAccess(profile = state.currentUserProfile) {
    return READABLE_ROLES.includes(String(profile?.role || "").toLowerCase());
  }

  function hasAdminAccess(profile = state.currentUserProfile) {
    return String(profile?.role || "").toLowerCase() === "admin";
  }

  function hasMemberAccess(profile = state.currentUserProfile) {
    return String(profile?.role || "").toLowerCase() === "user";
  }

  function updateMirrorVisibility(nodes, hidden) {
    nodes.forEach((node) => {
      node.hidden = hidden;
    });
  }

  function updateMirrorText(nodes, text, title = "") {
    nodes.forEach((node) => {
      node.textContent = text;
      if (title) {
        node.title = title;
      } else {
        node.removeAttribute("title");
      }
    });
  }

  function renderBridgeApp() {
    if (bridge && typeof bridge.render === "function") {
      bridge.render();
    }
  }

  function updateAuthUi() {
    const signedIn = Boolean(state.currentUser);
    const profile = state.currentUserProfile;

    if (elements.authUser) {
      elements.authUser.hidden = !signedIn;
    }

    if (elements.authGuestActions) {
      elements.authGuestActions.hidden = signedIn;
    }

    updateMirrorVisibility(elements.authUserMirrors, !signedIn);
    updateMirrorVisibility(elements.authGuestActionMirrors, signedIn);

    if (elements.authUserEmail) {
      elements.authUserEmail.textContent = signedIn
        ? `${profile?.name || state.currentUser.email || "사용자"} 님 안녕하세요.`
        : "";
      if (signedIn && state.currentUser?.email) {
        elements.authUserEmail.title = state.currentUser.email;
      } else {
        elements.authUserEmail.removeAttribute("title");
      }
    }

    updateMirrorText(
      elements.authUserEmailMirrors,
      signedIn ? `${profile?.name || state.currentUser?.email || "사용자"} 님 안녕하세요.` : "",
      signedIn && state.currentUser?.email ? state.currentUser.email : "",
    );

    if (elements.openUsersModalButton) {
      elements.openUsersModalButton.hidden = !hasAdminAccess(profile);
    }
    if (elements.openProfileModalButton) {
      elements.openProfileModalButton.hidden = !hasMemberAccess(profile);
    }

    updateMirrorVisibility(elements.openUsersModalButtonMirrors, !hasAdminAccess(profile));
    updateMirrorVisibility(elements.openProfileModalButtonMirrors, !hasMemberAccess(profile));

    if (!state.firebaseReady) {
      setStatusChip(TEXT.configMissing, "warning");
      updateSidebarProfile(null);
      renderBridgeApp();
      return;
    }

    if (!signedIn) {
      setStatusChip(TEXT.demoMode, "muted");
      updateSidebarProfile(null);
      renderBridgeApp();
      return;
    }

    updateSidebarProfile(profile);

    if (hasAdminAccess(profile)) {
      setStatusChip(TEXT.adminMode, "success");
      renderBridgeApp();
      return;
    }

    if (hasDataAccess(profile)) {
      setStatusChip(TEXT.memberMode, "success");
      renderBridgeApp();
      return;
    }

    setStatusChip(TEXT.pendingApproval, "warning");
    renderBridgeApp();
  }

  function formatDateTime(value) {
    const numericValue = Number(value);
    if (!numericValue) {
      return "-";
    }

    return new Intl.DateTimeFormat("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(numericValue));
  }

  function formatDateOnly(value) {
    const numericValue = Number(value);
    if (!numericValue) {
      return "-";
    }

    return new Intl.DateTimeFormat("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(new Date(numericValue));
  }

  function listToMap(list) {
    return (Array.isArray(list) ? list : []).reduce((result, item) => {
      if (item && item.id) {
        result[item.id] = item;
      }

      return result;
    }, {});
  }

  function unsubscribeRef(refInstance) {
    if (refInstance) {
      refInstance.off();
    }
  }

  function unsubscribeDataRefs() {
    unsubscribeRef(state.projectsRef);
    unsubscribeRef(state.milestonesRef);
    unsubscribeRef(state.qualificationsRef);
    unsubscribeRef(state.certificationExamsRef);
    unsubscribeRef(state.certificationExamApplicationsRef);
    unsubscribeRef(state.educationSchedulesRef);
    unsubscribeRef(state.educationEnrollmentsRef);
    unsubscribeRef(state.educationCostDetailsRef);
    unsubscribeRef(state.surveyFormsRef);
    unsubscribeRef(state.surveyResponsesRef);
    state.projectsRef = null;
    state.milestonesRef = null;
    state.qualificationsRef = null;
    state.certificationExamsRef = null;
    state.certificationExamApplicationsRef = null;
    state.educationSchedulesRef = null;
    state.educationEnrollmentsRef = null;
    state.educationCostDetailsRef = null;
    state.surveyFormsRef = null;
    state.surveyResponsesRef = null;
  }

  function unsubscribeUsersRef() {
    unsubscribeRef(state.usersRef);
    state.usersRef = null;
  }

  function normalizeRole(value) {
    const role = String(value || "").toLowerCase();
    return MANAGEABLE_ROLES.includes(role) ? role : DEFAULT_ROLE;
  }

  function getRoleOptionLabel(role) {
    if (role === "admin") {
      return "관리자";
    }

    if (role === "user") {
      return "일반회원";
    }

    if (role === "guest") {
      return "승인대기";
    }

    return role;
  }

  function renderRoleOptions(selectedRole) {
    return MANAGEABLE_ROLES
      .map((option) => {
        const isSelected = option === selectedRole ? "selected" : "";
        return `<option value="${option}" ${isSelected}>${escapeHtml(getRoleOptionLabel(option))}</option>`;
      })
      .join("");
  }

  function renderCompanyOptions(selectedCompany) {
    const currentCompany = String(selectedCompany || "").trim();
    const companyOptions = Array.isArray(bridge?.companyOptions) ? [...bridge.companyOptions] : [];

    if (currentCompany && !companyOptions.includes(currentCompany)) {
      companyOptions.unshift(currentCompany);
    }

    return [
      '<option value="">선택 안함</option>',
      ...companyOptions.map((company) => {
        const isSelected = company === currentCompany ? "selected" : "";
        return `<option value="${escapeHtml(company)}" ${isSelected}>${escapeHtml(company)}</option>`;
      }),
    ].join("");
  }

  function renderUsersTable(usersValue) {
    if (!elements.usersTableBody) {
      return;
    }

    if (!hasAdminAccess()) {
      elements.usersTableBody.innerHTML = `<tr><td colspan="9" class="empty-cell">${TEXT.usersAdminOnly}</td></tr>`;
      return;
    }

    const users = Object.entries(usersValue || {})
      .map(([uid, user]) => ({
        uid,
        ...user,
      }))
      .filter((user) => !user.deletedAt)
      .sort((left, right) => {
        const leftRoleWeight = left.role === "admin" ? 0 : left.role === "user" ? 1 : 2;
        const rightRoleWeight = right.role === "admin" ? 0 : right.role === "user" ? 1 : 2;
        if (leftRoleWeight !== rightRoleWeight) {
          return leftRoleWeight - rightRoleWeight;
        }

        return String(left.name || "").localeCompare(String(right.name || ""), "ko");
      });

    if (!users.length) {
      elements.usersTableBody.innerHTML = `<tr><td colspan="9" class="empty-cell">${TEXT.usersEmpty}</td></tr>`;
      return;
    }

    elements.usersTableBody.innerHTML = users.map((user) => {
      const role = normalizeRole(user.role);
      const statusClass = role === "guest" ? "is-pending" : "is-active";
      const statusLabel = role === "guest" ? "승인대기" : "활성";
      const roleOptions = renderRoleOptions(role);
      const companyOptions = renderCompanyOptions(user.company);

      return `
        <tr data-user-uid="${escapeHtml(user.uid)}">
          <td>
            <input
              class="user-edit-input"
              type="text"
              data-user-field="name"
              value="${escapeHtml(user.name || "")}"
              placeholder="이름"
            >
          </td>
          <td>
            <select class="user-edit-select" data-user-field="company">
              ${companyOptions}
            </select>
          </td>
          <td>
            <input
              class="user-edit-input"
              type="text"
              data-user-field="department"
              value="${escapeHtml(user.department || "")}"
              placeholder="부서"
            >
          </td>
          <td class="user-email-cell" title="${escapeHtml(user.email || "-")}">${escapeHtml(user.email || "-")}</td>
          <td>
            <select class="user-role-select user-edit-select" data-user-field="role">
              ${roleOptions}
            </select>
          </td>
          <td><span class="user-status-badge ${statusClass}">${statusLabel}</span></td>
          <td class="user-date-cell">${formatDateOnly(user.createdAt)}</td>
          <td class="user-date-cell">${formatDateTime(user.lastLoginAt)}</td>
          <td>
            <div class="user-action-buttons">
              <button type="button" class="outline-button user-save-button" data-user-uid="${escapeHtml(user.uid)}">저장</button>
              <button type="button" class="action-button action-button-danger user-delete-button" data-user-uid="${escapeHtml(user.uid)}">삭제</button>
            </div>
          </td>
        </tr>
      `;
    }).join("");
  }

  async function updateUserRecord(uid, payload) {
    if (!state.db || !hasAdminAccess()) {
      return false;
    }

    const nextName = String(payload?.name || "").trim();
    if (!nextName) {
      window.alert(TEXT.nameRequired);
      return false;
    }

    try {
      const nextProfile = {
        name: nextName,
        company: String(payload?.company || "").trim(),
        department: String(payload?.department || "").trim(),
        role: normalizeRole(payload?.role),
        updatedAt: Date.now(),
      };

      await state.db.ref(`users/${uid}`).update({
        ...nextProfile,
      });

      if (uid === state.currentUser?.uid) {
        state.currentUserProfile = {
          ...state.currentUserProfile,
          ...nextProfile,
        };
        updateAuthUi();
        attachDataSubscriptions();
        attachUsersSubscription();

        if (!hasAdminAccess(state.currentUserProfile)) {
          closeModal(elements.usersModal);
        }
      }

      window.alert(TEXT.profileUpdated);
      return true;
    } catch (error) {
      window.alert(TEXT.profileUpdateFail);
      return false;
    }
  }

  async function deleteUserRecord(uid) {
    if (!state.db || !hasAdminAccess() || !uid) {
      return false;
    }

    try {
      await state.db.ref(`users/${uid}`).remove();

      if (uid === state.currentUser?.uid) {
        state.currentUserProfile = null;
        unsubscribeDataRefs();
        unsubscribeUsersRef();
        updateAuthUi();
        closeModal(elements.usersModal);
        await state.auth?.signOut();
      }

      window.alert(TEXT.profileDeleted);
      return true;
    } catch (error) {
      window.alert(TEXT.profileDeleteFail);
      return false;
    }
  }

  function seedCollection(path, getterName) {
    if (!bridge || typeof bridge[getterName] !== "function") {
      return Promise.resolve();
    }

    const currentList = bridge[getterName]();
    if (!Array.isArray(currentList) || !currentList.length) {
      return Promise.resolve();
    }

    return state.db.ref(path).set(listToMap(currentList));
  }

  function subscribeDataCollection(path, getterName, setterName) {
    if (!bridge || typeof bridge[setterName] !== "function") {
      return null;
    }

    const refInstance = state.db.ref(path);
    refInstance.on("value", async (snapshot) => {
      const value = snapshot.val();

      if (!value) {
        await seedCollection(path, getterName);
        return;
      }

      bridge[setterName](Object.values(value));
    });

    return refInstance;
  }

  function seedObjectCollection(path, getterName) {
    if (!bridge || typeof bridge[getterName] !== "function") {
      return Promise.resolve();
    }

    const currentValue = bridge[getterName]();
    if (!currentValue || typeof currentValue !== "object" || Array.isArray(currentValue)) {
      return Promise.resolve();
    }

    if (!Object.keys(currentValue).length) {
      return Promise.resolve();
    }

    return state.db.ref(path).set(currentValue);
  }

  function subscribeObjectCollection(path, getterName, setterName) {
    if (!bridge || typeof bridge[setterName] !== "function") {
      return null;
    }

    const refInstance = state.db.ref(path);
    refInstance.on("value", async (snapshot) => {
      const value = snapshot.val();
      const isObjectValue = value && typeof value === "object" && !Array.isArray(value);

      if (!isObjectValue || !Object.keys(value).length) {
        await seedObjectCollection(path, getterName);
        return;
      }

      bridge[setterName](value);
    });

    return refInstance;
  }

  function attachDataSubscriptions() {
    unsubscribeDataRefs();

    if (!state.db || !hasDataAccess()) {
      return;
    }

    state.projectsRef = subscribeDataCollection("projects", "getProjects", "setProjects");
    state.milestonesRef = subscribeDataCollection("milestones", "getMilestones", "setMilestones");
    state.qualificationsRef = subscribeDataCollection("qualifications", "getQualifications", "setQualifications");
    state.certificationExamsRef = subscribeDataCollection("certificationExams", "getCertificationExams", "setCertificationExams");
    state.certificationExamApplicationsRef = subscribeDataCollection("certificationExamApplications", "getCertificationExamApplications", "setCertificationExamApplications");
    state.educationSchedulesRef = subscribeDataCollection("educationSchedules", "getEducationSchedules", "setEducationSchedules");
    state.educationEnrollmentsRef = subscribeDataCollection("educationEnrollments", "getEducationEnrollments", "setEducationEnrollments");
    state.educationCostDetailsRef = subscribeObjectCollection("educationCostDetails", "getEducationCostDetails", "setEducationCostDetails");
    state.surveyFormsRef = subscribeDataCollection("surveyForms", "getSurveyForms", "setSurveyForms");
    state.surveyResponsesRef = subscribeDataCollection("surveyResponses", "getSurveyResponses", "setSurveyResponses");
  }

  function attachUsersSubscription() {
    unsubscribeUsersRef();

    if (!state.db || !hasAdminAccess()) {
      renderUsersTable(null);
      return;
    }

    if (elements.usersTableBody) {
      elements.usersTableBody.innerHTML = `<tr><td colspan="9" class="empty-cell">${TEXT.usersLoading}</td></tr>`;
    }

    state.usersRef = state.db.ref("users");
    state.usersRef.on("value", (snapshot) => {
      renderUsersTable(snapshot.val() || {});
    }, (error) => {
      if (elements.usersTableBody) {
        elements.usersTableBody.innerHTML = `<tr><td colspan="9" class="empty-cell">${TEXT.usersLoadFail}</td></tr>`;
      }
      setStatusChip(TEXT.usersLoadFail, "warning");
      if (error?.message) {
        window.alert(`${TEXT.usersLoadFail}\n${error.message}`);
      }
    });
  }

  async function ensureUserProfile(authUser, seedProfile) {
    const userRef = state.db.ref(`users/${authUser.uid}`);
    const snapshot = await userRef.once("value");
    const existingProfile = snapshot.val();

    if (existingProfile?.deletedAt) {
      const error = new Error(DELETED_ACCOUNT_ERROR);
      error.code = DELETED_ACCOUNT_ERROR;
      throw error;
    }
    const seedName = String(seedProfile?.name || "").trim();
    const existingName = String(existingProfile?.name || "").trim();
    const seedCompany = String(seedProfile?.company || "").trim();
    const existingCompany = String(existingProfile?.company || "").trim();
    const seedDepartment = String(seedProfile?.department || "").trim();
    const existingDepartment = String(existingProfile?.department || "").trim();

    const baseProfile = {
      uid: authUser.uid,
      // Prefer explicit signup input when provided to avoid email-prefix fallback winning race conditions.
      name: seedName || existingName || authUser.displayName || authUser.email?.split("@")[0] || "???",
      company: seedCompany || existingCompany || "",
      department: seedDepartment || existingDepartment || "",
      email: authUser.email || existingProfile?.email || "",
      role: existingProfile?.role || seedProfile?.role || DEFAULT_ROLE,
      createdAt: existingProfile?.createdAt || seedProfile?.createdAt || Date.now(),
      updatedAt: Date.now(),
      lastLoginAt: Date.now(),
    };

    await userRef.update(baseProfile);
    return baseProfile;
  }

  function setNoopRemoteSync() {
    window.innotrackFirebase = {
      saveProjects() {
        return Promise.resolve(false);
      },
      saveMilestones() {
        return Promise.resolve(false);
      },
      saveQualifications() {
        return Promise.resolve(false);
      },
      saveCertificationExams() {
        return Promise.resolve(false);
      },
      saveCertificationExamApplications() {
        return Promise.resolve(false);
      },
      saveEducationSchedules() {
        return Promise.resolve(false);
      },
      saveEducationEnrollments() {
        return Promise.resolve(false);
      },
      saveEducationCostDetails() {
        return Promise.resolve(false);
      },
      saveSurveyForms() {
        return Promise.resolve(false);
      },
      saveSurveyResponses() {
        return Promise.resolve(false);
      },
      getCurrentUserProfile() {
        return state.currentUserProfile;
      },
    };
  }

  async function handleSignupSubmit(event) {
    event.preventDefault();

    if (!state.firebaseReady || !state.auth) {
      window.alert(TEXT.configMissing);
      return;
    }

    const formData = new FormData(elements.signupForm);
    const email = String(formData.get("email") || "").trim();
    const password = String(formData.get("password") || "");
    const passwordConfirm = String(formData.get("passwordConfirm") || "");

    if (password !== passwordConfirm) {
      window.alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }

    try {
      const createdAt = Date.now();
      const pendingProfile = {
        name: String(formData.get("name") || "").trim(),
        company: String(formData.get("company") || "").trim(),
        department: String(formData.get("department") || "").trim(),
        role: DEFAULT_ROLE,
        createdAt,
        email,
      };
      state.pendingSignupProfile = pendingProfile;

      const credential = await state.auth.createUserWithEmailAndPassword(
        email,
        password
      );

      const ensuredName = pendingProfile.name || credential.user.email?.split("@")[0] || "???";
      const ensuredCompany = pendingProfile.company || "";
      const ensuredDepartment = pendingProfile.department || "";
      const nextProfile = {
        uid: credential.user.uid,
        name: ensuredName,
        company: ensuredCompany,
        department: ensuredDepartment,
        email: credential.user.email || pendingProfile.email,
        role: DEFAULT_ROLE,
        createdAt,
        updatedAt: Date.now(),
        lastLoginAt: Date.now(),
      };

      // Force a deterministic profile write at signup time.
      await state.db.ref(`users/${credential.user.uid}`).set(nextProfile);
      state.currentUserProfile = nextProfile;

      state.pendingSignupProfile = null;

      elements.signupForm.reset();
      closeModal(elements.signupModal);
      window.alert(TEXT.signupDone);
    } catch (error) {
      state.pendingSignupProfile = null;
      window.alert(`${TEXT.signupFail}\n${error?.message || ""}`.trim());
    }
  }

  async function handleLoginSubmit(event) {
    event.preventDefault();

    if (!state.firebaseReady || !state.auth) {
      window.alert(TEXT.configMissing);
      return;
    }

    const formData = new FormData(elements.loginForm);
    const email = String(formData.get("email") || "").trim();
    const password = String(formData.get("password") || "");
    const shouldRememberEmail = formData.get("rememberEmail") === "on";

    try {
      await state.auth.signInWithEmailAndPassword(email, password);

      setRememberedLoginEmail(shouldRememberEmail ? email : "");

      elements.loginForm.reset();
      syncRememberedLoginEmailField();
      closeModal(elements.loginModal);
      window.alert(TEXT.loginDone);
    } catch (error) {
      window.alert(`${TEXT.loginFail}\n${error?.message || ""}`.trim());
    }
  }

  async function handleForgotPassword() {
    if (!state.firebaseReady || !state.auth) {
      window.alert(TEXT.configMissing);
      return;
    }

    const email = String(elements.loginEmail?.value || "").trim();
    if (!email) {
      window.alert(TEXT.passwordResetEmailRequired);
      elements.loginEmail?.focus();
      return;
    }

    try {
      await state.auth.sendPasswordResetEmail(email);
      window.alert(TEXT.passwordResetSent);
    } catch (error) {
      window.alert(`${TEXT.passwordResetFail}\n${error?.message || ""}`.trim());
    }
  }

  function prepareProfileModal() {
    const profile = state.currentUserProfile;
    if (!elements.profileForm || !profile) {
      return;
    }

    if (elements.profileNameInput) {
      elements.profileNameInput.value = String(profile.name || "").trim();
    }
    if (elements.profileDepartmentInput) {
      elements.profileDepartmentInput.value = String(profile.department || "").trim();
    }
    if (elements.profileCompanyInput) {
      elements.profileCompanyInput.innerHTML = renderCompanyOptions(profile.company);
    }
  }

  async function handleProfileSubmit(event) {
    event.preventDefault();

    if (!state.db || !state.currentUser?.uid) {
      window.alert(TEXT.configMissing);
      return;
    }
    if (!hasMemberAccess()) {
      window.alert(TEXT.profileSelfUserOnly);
      return;
    }

    const name = String(elements.profileNameInput?.value || "").trim();
    if (!name) {
      window.alert(TEXT.nameRequired);
      elements.profileNameInput?.focus();
      return;
    }

    const nextProfile = {
      name,
      company: String(elements.profileCompanyInput?.value || "").trim(),
      department: String(elements.profileDepartmentInput?.value || "").trim(),
      updatedAt: Date.now(),
    };

    try {
      await state.db.ref(`users/${state.currentUser.uid}`).update(nextProfile);
      state.currentUserProfile = {
        ...state.currentUserProfile,
        ...nextProfile,
      };
      updateAuthUi();
      closeModal(elements.profileModal);
      window.alert(TEXT.profileSelfUpdated);
    } catch (error) {
      window.alert(`${TEXT.profileSelfUpdateFail}\n${error?.message || ""}`.trim());
    }
  }

  async function handleLogout() {
    if (!state.auth) {
      return;
    }

    try {
      await state.auth.signOut();
      window.alert(TEXT.logoutDone);
    } catch (error) {
      window.alert(error?.message || TEXT.loginFail);
    }
  }

  function populateSignupCompanyOptions() {
    if (!elements.signupCompany) {
      return;
    }

    const companies = Array.isArray(bridge?.companyOptions) ? bridge.companyOptions : [];
    elements.signupCompany.innerHTML = [
      '<option value="">선택하세요</option>',
      ...companies.map((company) => `<option value="${escapeHtml(company)}">${escapeHtml(company)}</option>`),
    ].join("");
  }

  function bindEvents() {
    populateSignupCompanyOptions();

    const openSignup = () => {
      openModal(elements.signupModal);
    };

    const openLogin = () => {
      prepareLoginModal();
      openModal(elements.loginModal);
    };

    const openUsers = () => {
      openModal(elements.usersModal);
      attachUsersSubscription();
    };
    const openProfile = () => {
      prepareProfileModal();
      openModal(elements.profileModal);
    };

    elements.openSignupButton?.addEventListener("click", openSignup);
    elements.openLoginButton?.addEventListener("click", openLogin);
    elements.openProfileModalButton?.addEventListener("click", openProfile);
    elements.openUsersModalButton?.addEventListener("click", openUsers);
    elements.openSignupButtonMirrors.forEach((button) => {
      button.addEventListener("click", openSignup);
    });
    elements.openLoginButtonMirrors.forEach((button) => {
      button.addEventListener("click", openLogin);
    });
    elements.openProfileModalButtonMirrors.forEach((button) => {
      button.addEventListener("click", openProfile);
    });
    elements.openUsersModalButtonMirrors.forEach((button) => {
      button.addEventListener("click", openUsers);
    });

    elements.logoutButton?.addEventListener("click", handleLogout);
    elements.logoutButtonMirrors.forEach((button) => {
      button.addEventListener("click", handleLogout);
    });
    elements.signupForm?.addEventListener("submit", handleSignupSubmit);
    elements.loginForm?.addEventListener("submit", handleLoginSubmit);
    elements.profileForm?.addEventListener("submit", handleProfileSubmit);
    elements.forgotPasswordButton?.addEventListener("click", handleForgotPassword);

    document.querySelectorAll("[data-auth-close]").forEach((button) => {
      button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-auth-close");
        if (!targetId) {
          return;
        }

        closeModal(document.querySelector(`#${targetId}`));
      });
    });

    [elements.signupModal, elements.loginModal, elements.profileModal, elements.usersModal].forEach((modal) => {
      modal?.addEventListener("click", (event) => {
        if (event.target === modal) {
          closeModal(modal);
        }
      });
    });

    elements.usersTableBody?.addEventListener("click", async (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) {
        return;
      }

      const saveButton = target.closest(".user-save-button");
      if (saveButton instanceof HTMLButtonElement) {
        const row = saveButton.closest("tr");
        if (!row) {
          return;
        }

        const nameField = row.querySelector('[data-user-field="name"]');
        const companyField = row.querySelector('[data-user-field="company"]');
        const departmentField = row.querySelector('[data-user-field="department"]');
        const roleField = row.querySelector('[data-user-field="role"]');

        if (
          !(nameField instanceof HTMLInputElement) ||
          !(companyField instanceof HTMLSelectElement) ||
          !(departmentField instanceof HTMLInputElement) ||
          !(roleField instanceof HTMLSelectElement)
        ) {
          return;
        }

        saveButton.disabled = true;

        try {
          await updateUserRecord(saveButton.dataset.userUid, {
            name: nameField.value,
            company: companyField.value,
            department: departmentField.value,
            role: roleField.value,
          });
        } finally {
          saveButton.disabled = false;
        }

        return;
      }

      const deleteButton = target.closest(".user-delete-button");
      if (deleteButton instanceof HTMLButtonElement) {
        const userUid = deleteButton.dataset.userUid;
        if (!userUid) {
          return;
        }

        const shouldDelete = window.confirm("선택한 회원 정보를 삭제할까요?\n삭제 후에는 회원관리 목록에서 제거됩니다.");
        if (!shouldDelete) {
          return;
        }

        deleteButton.disabled = true;

        try {
          await deleteUserRecord(userUid);
        } finally {
          deleteButton.disabled = false;
        }
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") {
        return;
      }

      closeAllAuthModals();
    });
  }

  async function handleAuthStateChanged(user) {
    state.currentUser = user;

    if (!user || !state.db) {
      state.currentUserProfile = null;
      unsubscribeDataRefs();
      unsubscribeUsersRef();
      updateAuthUi();
      return;
    }

    try {
      const pendingProfile = (
        state.pendingSignupProfile
        && String(state.pendingSignupProfile.email || "").toLowerCase() === String(user.email || "").toLowerCase()
      )
        ? state.pendingSignupProfile
        : null;

      state.currentUserProfile = await ensureUserProfile(user, pendingProfile || undefined);
      if (pendingProfile) {
        state.pendingSignupProfile = null;
      }
      updateAuthUi();
      attachDataSubscriptions();
      attachUsersSubscription();
    } catch (error) {
      if (error?.code === DELETED_ACCOUNT_ERROR) {
        state.currentUserProfile = null;
        unsubscribeDataRefs();
        unsubscribeUsersRef();
        updateAuthUi();
        await state.auth?.signOut();
        window.alert(TEXT.deletedAccountBlocked);
        return;
      }

      state.currentUserProfile = null;
      unsubscribeDataRefs();
      unsubscribeUsersRef();
      setStatusChip(TEXT.configMissing, "warning");
      updateAuthUi();
    }
  }

  function initFirebase() {
    setNoopRemoteSync();

    if (!firebaseGlobal) {
      setStatusChip(TEXT.sdkMissing, "warning");
      return;
    }

    if (!hasCompleteConfig(firebaseConfig)) {
      setStatusChip(TEXT.configMissing, "warning");
      return;
    }

    try {
      const app = firebaseGlobal.apps?.length
        ? firebaseGlobal.app()
        : firebaseGlobal.initializeApp(firebaseConfig);
      state.auth = typeof app.auth === "function" ? app.auth() : firebaseGlobal.auth();
      state.db = typeof app.database === "function" ? app.database() : firebaseGlobal.database();
      state.firebaseReady = true;

      window.innotrackFirebase = {
        saveProjects(list) {
          if (!state.db || !hasDataAccess()) {
            return Promise.resolve(false);
          }

          return state.db.ref("projects").set(listToMap(list)).then(() => true);
        },
        saveMilestones(list) {
          if (!state.db || !hasDataAccess()) {
            return Promise.resolve(false);
          }

          return state.db.ref("milestones").set(listToMap(list)).then(() => true);
        },
        saveQualifications(list) {
          if (!state.db || !hasDataAccess()) {
            return Promise.resolve(false);
          }

          return state.db.ref("qualifications").set(listToMap(list)).then(() => true);
        },
        saveCertificationExams(list) {
          if (!state.db || !hasDataAccess()) {
            return Promise.resolve(false);
          }

          return state.db.ref("certificationExams").set(listToMap(list)).then(() => true);
        },
        saveCertificationExamApplications(list) {
          if (!state.db || !hasDataAccess()) {
            return Promise.resolve(false);
          }

          return state.db.ref("certificationExamApplications").set(listToMap(list)).then(() => true);
        },
        saveEducationSchedules(list) {
          if (!state.db || !hasDataAccess()) {
            return Promise.resolve(false);
          }

          return state.db.ref("educationSchedules").set(listToMap(list)).then(() => true);
        },
        saveEducationEnrollments(list) {
          if (!state.db || !hasDataAccess()) {
            return Promise.resolve(false);
          }

          return state.db.ref("educationEnrollments").set(listToMap(list)).then(() => true);
        },
        saveEducationCostDetails(value) {
          if (!state.db || !hasDataAccess()) {
            return Promise.resolve(false);
          }

          const nextValue = value && typeof value === "object" && !Array.isArray(value) ? value : {};
          return state.db.ref("educationCostDetails").set(nextValue).then(() => true);
        },
        saveSurveyForms(list) {
          if (!state.db || !hasDataAccess()) {
            return Promise.resolve(false);
          }

          return state.db.ref("surveyForms").set(listToMap(list)).then(() => true);
        },
        saveSurveyResponses(list) {
          if (!state.db || !hasDataAccess()) {
            return Promise.resolve(false);
          }

          return state.db.ref("surveyResponses").set(listToMap(list)).then(() => true);
        },
        getCurrentUserProfile() {
          return state.currentUserProfile;
        },
      };

      state.auth.onAuthStateChanged(handleAuthStateChanged);
      updateAuthUi();
    } catch (error) {
      setStatusChip(`${TEXT.configMissing}`, "warning");
      setNoopRemoteSync();
    }
  }

  bindEvents();
  initFirebase();
})();
