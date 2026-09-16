const API_URL = localStorage.getItem('apiUrl') || 'http://localhost:5000/api';

const navItems = [
  ['index.html', 'Home', 'fa-house'],
  ['about.html', 'About', 'fa-circle-info'],
  ['plastic-types.html', 'Plastic Types', 'fa-shapes'],
  ['segregation.html', 'Segregation', 'fa-recycle'],
  ['reuse.html', 'Reuse', 'fa-arrows-rotate'],
  ['recycling.html', 'Recycling', 'fa-leaf'],
  ['dos-donts.html', "Do's & Don'ts", 'fa-list-check'],
  ['quiz.html', 'Quiz', 'fa-circle-question'],
  ['feedback.html', 'Feedback', 'fa-comment-dots']
];

const telugu = {
  Home: 'హోమ్',
  About: 'మన గురించి',
  'Plastic Types': 'ప్లాస్టిక్ రకాలు',
  Segregation: 'వేరు చేయడం',
  Reuse: 'మళ్లీ వాడటం',
  Recycling: 'రీసైక్లింగ్',
  "Do's & Don'ts": 'చేయవలసినవి - వద్దు',
  Quiz: 'క్విజ్',
  Feedback: 'అభిప్రాయం',
  Login: 'లాగిన్',
  Register: 'నమోదు',
  Logout: 'లాగౌట్',
  'Start Learning': 'నేర్చుకోవడం ప్రారంభించండి',
  'Take the Quiz': 'క్విజ్ ఆడండి',
  'Community Awareness Platform': 'గ్రామీణ ప్లాస్టిక్ అవగాహన వేదిక',
  'Together for a Cleaner Village': 'పరిశుభ్రమైన గ్రామం కోసం కలిసి పని చేద్దాం'
};

function isTe() {
  return localStorage.getItem('language') === 'te';
}

function t(text) {
  return isTe() && telugu[text] ? telugu[text] : text;
}

function currentPage() {
  return location.pathname.split('/').pop() || 'index.html';
}

function getUser() {
  try {
    return JSON.parse(localStorage.getItem('user'));
  } catch (e) {
    return null;
  }
}

function renderNav() {
  const target = document.querySelector('#site-nav');
  if (!target) return;
  document.body.classList.toggle('te', isTe());

  const current = currentPage();
  const isAdmin = location.pathname.includes('/admin/');
  const user = getUser();

  const adminItems = [
    ['dashboard.html', 'Dashboard', 'fa-gauge'],
    ['content.html', 'Content', 'fa-newspaper'],
    ['quiz-management.html', 'Quiz', 'fa-file-circle-question'],
    ['users.html', 'Learners', 'fa-users'],
    ['feedback.html', 'Feedback', 'fa-comments']
  ];

  const items = isAdmin ? adminItems : navItems;

  target.innerHTML = `
    <header class="site-navbar">
      <nav class="navbar navbar-expand-xl" aria-label="Main navigation">
        <div class="container">
          <a class="navbar-brand" href="${isAdmin ? 'dashboard.html' : 'index.html'}">
            <span class="brand-emblem" aria-hidden="true">
              <i class="fa-solid fa-recycle"></i>
            </span>
            <span class="brand-title">
              <span class="brand-name">EcoVillage</span>
              <span class="brand-subtitle">Plastic Awareness</span>
            </span>
          </a>

          <button class="navbar-toggler border-0 p-2" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa-solid fa-bars text-success fs-4"></i>
          </button>

          <div class="collapse navbar-collapse" id="navMenu">
            <ul class="navbar-nav mx-auto align-items-xl-center">
              ${items.map(([href, label, icon]) => `
                <li class="nav-item">
                  <a class="nav-link ${current === href ? 'active' : ''}" href="${href}">
                    <i class="fa-solid ${icon} fs-6 opacity-75"></i>
                    <span>${t(label)}</span>
                  </a>
                </li>
              `).join('')}
            </ul>

            <div class="d-flex align-items-center flex-wrap gap-2 mt-3 mt-xl-0">
              ${!isAdmin ? (
                user ? `
                  <div class="dropdown">
                    <button class="btn btn-soft btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown">
                      <i class="fa-solid fa-user-check text-success"></i> ${user.name || 'Account'}
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end shadow-sm border-0">
                      <li><span class="dropdown-item-text small text-muted">${user.village || 'Village Member'}</span></li>
                      <li><hr class="dropdown-divider"></li>
                      <li><button class="dropdown-item text-danger" onclick="userLogout()"><i class="fa-solid fa-arrow-right-from-bracket me-2"></i>Logout</button></li>
                    </ul>
                  </div>
                ` : `
                  <a class="btn btn-primary btn-sm" href="login.html">
                    <i class="fa-solid fa-right-to-bracket"></i> ${t('Login')}
                  </a>
                `
              ) : `
                <button class="btn btn-outline-danger btn-sm" type="button" onclick="adminLogout()">
                  <i class="fa-solid fa-power-off"></i> Logout
                </button>
              `}

              <button class="lang-toggle-btn" id="languageToggle" type="button" aria-label="Switch language">
                <span class="lang-indicator"></span>
                <i class="fa-solid fa-globe"></i>
                <span>${isTe() ? 'English' : 'తెలుగు'}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  `;

  document.querySelector('#languageToggle').addEventListener('click', () => {
    localStorage.setItem('language', isTe() ? 'en' : 'te');
    location.reload();
  });
}

function userLogout() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  location.reload();
}

function adminLogout() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  location.href = 'login.html';
}

function renderFooter() {
  const el = document.querySelector('#site-footer');
  if (!el) return;

  el.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="row g-4 justify-content-between">
          <div class="col-lg-4">
            <div class="d-flex align-items-center gap-2 mb-3">
              <span class="brand-emblem" style="width:38px;height:38px;font-size:1.1rem;">
                <i class="fa-solid fa-recycle"></i>
              </span>
              <h3 class="h5 mb-0 text-white">EcoVillage Awareness</h3>
            </div>
            <p class="text-secondary small mb-3">
              Empowering rural and local communities with clear, practical knowledge to reduce, reuse, segregate, and recycle plastic waste for healthier villages and greener nature.
            </p>
            <div class="d-flex gap-2">
              <span class="badge-soft badge-soft-emerald"><i class="fa-solid fa-shield-heart"></i> Community Driven</span>
              <span class="badge-soft badge-soft-blue"><i class="fa-solid fa-earth-americas"></i> 100% Free Learning</span>
            </div>
          </div>

          <div class="col-6 col-md-3 col-lg-2">
            <h4 class="h6 mb-3 text-white">Explore Guide</h4>
            <ul class="footer-link-list">
              <li><a href="about.html"><i class="fa-solid fa-chevron-right fs-xs"></i> Why It Matters</a></li>
              <li><a href="plastic-types.html"><i class="fa-solid fa-chevron-right fs-xs"></i> Resin Codes 1-7</a></li>
              <li><a href="segregation.html"><i class="fa-solid fa-chevron-right fs-xs"></i> Waste Segregation</a></li>
              <li><a href="dos-donts.html"><i class="fa-solid fa-chevron-right fs-xs"></i> Do's & Don'ts</a></li>
            </ul>
          </div>

          <div class="col-6 col-md-3 col-lg-2">
            <h4 class="h6 mb-3 text-white">Action & Impact</h4>
            <ul class="footer-link-list">
              <li><a href="reuse.html"><i class="fa-solid fa-chevron-right fs-xs"></i> Safe Reuse Habits</a></li>
              <li><a href="recycling.html"><i class="fa-solid fa-chevron-right fs-xs"></i> Recycling Loop</a></li>
              <li><a href="quiz.html"><i class="fa-solid fa-chevron-right fs-xs"></i> Take 2-Min Quiz</a></li>
              <li><a href="feedback.html"><i class="fa-solid fa-chevron-right fs-xs"></i> Village Feedback</a></li>
            </ul>
          </div>

          <div class="col-md-5 col-lg-3">
            <div class="card p-3 border-0" style="background: rgba(255,255,255,0.06); backdrop-filter: blur(10px);">
              <h5 class="h6 text-white mb-2"><i class="fa-solid fa-hand-holding-heart text-success me-1"></i> Community Pledge</h5>
              <p class="small text-secondary mb-3">
                "Keep clean, segregate early, and never burn plastic. Clean soil and water protect our children's future."
              </p>
              <a href="quiz.html" class="btn btn-soft btn-sm w-100">
                <i class="fa-solid fa-award"></i> Check Your Awareness
              </a>
              <div class="text-center mt-2">
                <a href="admin/login.html" class="small text-secondary opacity-75 hover-underline" style="font-size:0.75rem;">
                  <i class="fa-solid fa-lock me-1"></i> Admin Portal
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <span>&copy; <span data-year>${new Date().getFullYear()}</span> EcoVillage Plastic Awareness Initiative.</span>
          <span class="small text-secondary">
            <i class="fa-solid fa-seedling text-success"></i> Cleaner villages begin with one small daily choice.
          </span>
        </div>
      </div>
    </footer>
  `;
}

async function api(path, options = {}) {
  const headers = { 'Content-Type': 'application/json', ...(options.headers || {}) };
  const token = localStorage.getItem('token');
  if (token) headers.Authorization = `Bearer ${token}`;

  const response = await fetch(`${API_URL}${path}`, { ...options, headers });
  const data = await response.json().catch(() => ({ success: false, message: 'Invalid server response' }));
  if (!response.ok) throw new Error(data.message || 'Request failed');
  return data;
}

function toast(message, success = true) {
  const existing = document.querySelector('.custom-toast');
  if (existing) existing.remove();

  const el = document.createElement('div');
  el.className = `custom-toast ${success ? 'success' : 'error'}`;
  el.setAttribute('role', 'status');
  el.innerHTML = `
    <i class="fa-solid ${success ? 'fa-circle-check text-success' : 'fa-circle-exclamation text-danger'} fs-4"></i>
    <div class="flex-grow-1 small fw-semibold text-dark">${message}</div>
    <button type="button" class="btn-close btn-sm" aria-label="Close" onclick="this.parentElement.remove()"></button>
  `;
  document.body.appendChild(el);

  setTimeout(() => {
    if (el && el.parentElement) {
      el.style.opacity = '0';
      el.style.transform = 'translateX(100%)';
      el.style.transition = 'all 0.3s ease';
      setTimeout(() => el.remove(), 300);
    }
  }, 3800);
}

function init() {
  renderNav();
  renderFooter();
  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });
}

document.addEventListener('DOMContentLoaded', init);
