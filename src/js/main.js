const body = document.querySelector('body');
const toggle = document.querySelector('.toggle-switch');
const themeState = document.querySelector('.toggle-ui-state');
console.log(themeState.innerHTML);

function changeTheme() {
    body.classList.toggle('light');
    toggle.checked ? themeState.innerHTML = 'Light Mode' : themeState.innerHTML = 'Dark Mode';
}

toggle.addEventListener('click', changeTheme);