const bodyEl = document.querySelector('body');
const themeSwitchEl = document.querySelector('.theme-switch__toggle');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
if (bodyEl) {
    bodyEl.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
    themeSwitchEl.checked = false;
}
function switchElToggled() {
    if (localStorage.getItem('theme') === Theme.LIGHT) {
        localStorage.setItem('theme', Theme.DARK);
        bodyEl.classList.replace(Theme.LIGHT, Theme.DARK);

    } else if (localStorage.getItem('theme') === Theme.DARK) {
        localStorage.setItem('theme', Theme.LIGHT);
        bodyEl.classList.replace(Theme.DARK, Theme.LIGHT);

    }
};
themeSwitchEl.addEventListener('change', switchElToggled);
