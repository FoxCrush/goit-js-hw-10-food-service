const bodyEl = document.querySelector('body');
const themeSwitchEl = document.querySelector('.theme-switch__toggle');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
if (localStorage.getItem('theme') === Theme.LIGHT) {
    bodyEl.classList.add(Theme.LIGHT);
    themeSwitchEl.checked = false;
} else {
    bodyEl.classList.add(Theme.DARK);
    themeSwitchEl.checked = true;
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
