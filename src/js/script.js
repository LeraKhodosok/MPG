const menu = document.querySelector('.menu_block');
const toggle = document.querySelector('.menu_toggle');
const menuClose = document.querySelector('.menu_closed');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

menuClose.addEventListener('click', () => {
    menu.classList.toggle('active');
})