// =====================
// THEME / DARK MODE
// =====================
(function () {
  const STORAGE_KEY = 'site-theme';
  const TOGGLE_SELECTOR = '.toggle-switch .checkbox';

  function applyTheme(theme) {
    const isDark = theme === 'dark';

    document.documentElement.classList.toggle('dark-theme', isDark);
    document.body.classList.toggle('dark-theme', isDark);

    const checkbox = document.querySelector(TOGGLE_SELECTOR);
    if (checkbox) {
      checkbox.checked = isDark;
    }
  }

  function getSavedTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY) || 'light';
    } catch (e) {
      return 'light';
    }
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) { }
  }

  function initThemeToggle() {
    const checkbox = document.querySelector(TOGGLE_SELECTOR);
    const initialTheme = getSavedTheme();

    // 1) Aplica el tema guardado APENAS carga la página
    applyTheme(initialTheme);

    // 2) Si no hay checkbox (página sin switch), no hacemos nada más
    if (!checkbox) return;

    // 3) Escuchamos cambios en el switch
    checkbox.addEventListener('change', function () {
      const newTheme = checkbox.checked ? 'dark' : 'light';
      applyTheme(newTheme);
      saveTheme(newTheme);
    }, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemeToggle);
  } else {
    initThemeToggle();
  }
})();
