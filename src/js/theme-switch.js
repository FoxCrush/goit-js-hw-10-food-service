const bodyEl = document.querySelector('body');
const themeSwitchEl = document.querySelector('.theme-switch__toggle');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function swithingToLightTheme() {
    localStorage.setItem('theme', Theme.LIGHT);
    bodyEl.classList.replace(Theme.DARK, Theme.LIGHT);
}
function swithingToDarkTheme() {
    localStorage.setItem('theme', Theme.DARK);
    bodyEl.classList.replace(Theme.LIGHT, Theme.DARK);
}
function setStarterLocalStorage() {
    bodyEl.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
}
function setStarterBodyTheme() {
    bodyEl.classList.add(localStorage.getItem('theme'));
    themeSwitchEl.checked = localStorage.getItem('theme') === Theme.DARK;
}
function restoringLocalStorageToDarkTheme() {
    bodyEl.classList.remove(Theme.LIGHT);
    bodyEl.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
}
function restoringLocalStorageToLightTheme() {
    bodyEl.classList.remove(Theme.DARK);
    bodyEl.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
}

if (!localStorage.getItem('theme')) {
    setStarterLocalStorage();
}
if (bodyEl.classList.length === 0) {
    setStarterBodyTheme();
}

function switchElToggled() {
    if (localStorage.getItem('theme') === Theme.LIGHT) {
        swithingToDarkTheme();
    } else if (localStorage.getItem('theme') === Theme.DARK) {
        swithingToLightTheme();
    }
    else if (!localStorage.getItem('theme')) {
        if (themeSwitchEl.checked) {
            restoringLocalStorageToDarkTheme();
        }
        else {
            restoringLocalStorageToLightTheme();
        }
    }
};

themeSwitchEl.addEventListener('change', switchElToggled);

if (!bodyEl.classList.value === localStorage.getItem('theme')) {
    localStorage.removeItem('theme');
}