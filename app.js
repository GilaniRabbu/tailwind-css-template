let MainMenu = document.getElementById('main-menu');
let CloseBtn = document.getElementById('close-menu');
let OpenBtn = document.getElementById('open-menu');

CloseBtn.addEventListener('click', () => {
    MainMenu.classList.toggle('hidden');
});

OpenBtn.addEventListener('click', () => {
    MainMenu.classList.toggle('hidden');
});