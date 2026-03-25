// ─── State ────────────────────────────────────────────────────────────────────
const state = {
  view: 'home',       // 'home' | 'category' | 'exercise'
  categoryId: null,
  exerciseId: null,
  activeLevel: null   // currently playing video level
};

// ─── Router ───────────────────────────────────────────────────────────────────
function navigate(view, categoryId = null, exerciseId = null) {
  // Pause any playing video before navigating
  document.querySelectorAll('video').forEach(v => v.pause());

  state.view = view;
  state.categoryId = categoryId;
  state.exerciseId = exerciseId;
  state.activeLevel = null;
  render();
  window.scrollTo(0, 0);
}

// ─── Data helpers ─────────────────────────────────────────────────────────────
function getCategory(id) {
  return APP_DATA.categories.find(c => c.id === id);
}

function getExercise(categoryId, exerciseId) {
  const cat = getCategory(categoryId);
  return cat ? cat.exercises.find(e => e.id === exerciseId) : null;
}

// ─── Render ───────────────────────────────────────────────────────────────────
function render() {
  const app = document.getElementById('app');
  switch (state.view) {
    case 'home':     app.innerHTML = renderHome(); break;
    case 'category': app.innerHTML = renderCategory(); break;
    case 'exercise': app.innerHTML = renderExercise(); break;
  }
  attachEvents();
}

// ── Home ──────────────────────────────────────────────────────────────────────
function renderHome() {
  const cards = APP_DATA.categories.map(cat => `
    <button class="category-card" data-action="go-category" data-id="${cat.id}"
            style="--cat-color: ${cat.color}">
      <div class="category-card__icon">${cat.icon}</div>
      <div class="category-card__name">${cat.name}</div>
      <div class="category-card__count">${cat.exercises.length} exercice${cat.exercises.length > 1 ? 's' : ''}</div>
      <div class="category-card__arrow">
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
        </svg>
      </div>
    </button>
  `).join('');

  return `
    <div class="screen screen--home">
      <header class="home-header">
        <div class="home-header__logo">
          <svg class="logo-icon" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" rx="10" fill="#FF5E00"/>
            <path d="M8 20h4M28 20h4M12 20h16M14 14v12M26 14v12" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="home-header__text">
          <h1>CROSS FITNESS</h1>
          <p>Jeannine Manuel School</p>
        </div>
      </header>
      <div class="categories-grid">${cards}</div>
    </div>
  `;
}

// ── Category ──────────────────────────────────────────────────────────────────
function renderCategory() {
  const cat = getCategory(state.categoryId);
  if (!cat) return renderHome();

  const cards = cat.exercises.map(ex => `
    <button class="exercise-card" data-action="go-exercise"
            data-category="${cat.id}" data-exercise="${ex.id}"
            style="--cat-color: ${cat.color}">
      <div class="exercise-card__levels">
        ${ex.levels.map(l => `<span class="level-chip level-chip--${l.id.toLowerCase()}">${l.id}</span>`).join('')}
      </div>
      <div class="exercise-card__name">${ex.name}</div>
      <div class="exercise-card__norep">
        <span class="norep-badge">NO REP</span>
        <span>${ex.norep.length} critère${ex.norep.length > 1 ? 's' : ''}</span>
      </div>
      <div class="exercise-card__arrow">
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
        </svg>
      </div>
    </button>
  `).join('');

  return `
    <div class="screen screen--category">
      <header class="nav-header" style="--cat-color: ${cat.color}">
        <button class="nav-btn" data-action="go-home" aria-label="Accueil">
          <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
        </button>
        <div class="nav-header__info">
          <div class="nav-header__icon">${cat.icon}</div>
          <h2>${cat.name}</h2>
        </div>
        <div class="nav-header__spacer"></div>
      </header>
      <div class="exercises-list">${cards}</div>
    </div>
  `;
}

// ── Exercise ──────────────────────────────────────────────────────────────────
function renderExercise() {
  const cat = getCategory(state.categoryId);
  const ex = getExercise(state.categoryId, state.exerciseId);
  if (!cat || !ex) return renderHome();

  const videoGrid = ex.levels.map((level, idx) => `
    <div class="video-card" data-level="${level.id}">
      <div class="video-card__header">
        <span class="level-badge level-badge--${level.id.toLowerCase()}" style="--cat-color: ${cat.color}">${level.id}</span>
        <span class="video-card__label">${level.label}</span>
      </div>
      <div class="video-card__media">
        <video
          id="video-${idx}"
          src="${level.video}"
          poster="${level.poster}"
          preload="none"
          playsinline
          webkit-playsinline
          loop
          controls
        ></video>
      </div>
    </div>
  `).join('');

  const norepItems = ex.norep.map(item => `
    <li class="norep-item">
      <svg class="norep-item__icon" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
      </svg>
      ${item}
    </li>
  `).join('');

  return `
    <div class="screen screen--exercise">
      <header class="nav-header" style="--cat-color: ${cat.color}">
        <button class="nav-btn" data-action="go-category" data-id="${cat.id}" aria-label="Retour">
          <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
          </svg>
        </button>
        <div class="nav-header__info">
          <span class="nav-header__category" style="color: ${cat.color}">${cat.name}</span>
          <h2>${ex.name}</h2>
        </div>
        <button class="nav-btn" data-action="go-home" aria-label="Accueil">
          <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
        </button>
      </header>

      <div class="exercise-content">
        <div class="video-grid">${videoGrid}</div>

        <div class="norep-section">
          <div class="norep-section__header">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
            </svg>
            <span>NO REP</span>
          </div>
          <ul class="norep-list">${norepItems}</ul>
        </div>
      </div>
    </div>
  `;
}

// ─── Events ───────────────────────────────────────────────────────────────────
function attachEvents() {
  document.querySelectorAll('[data-action]').forEach(el => {
    el.addEventListener('click', handleAction);
  });
}

function handleAction(e) {
  const el = e.currentTarget;
  const action = el.dataset.action;

  switch (action) {
    case 'go-home':
      navigate('home');
      break;
    case 'go-category':
      navigate('category', el.dataset.id || state.categoryId);
      break;
    case 'go-exercise':
      navigate('exercise', el.dataset.category, el.dataset.exercise);
      break;
  }
}

// ─── Service Worker ───────────────────────────────────────────────────────────
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}

// ─── Init ─────────────────────────────────────────────────────────────────────
render();
