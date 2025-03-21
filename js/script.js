const menu = document.querySelector('.menu-hamburger');

function menuHandler() {
    const ul = document.querySelector('.items');
    ul.classList.toggle('active');
}

menu.addEventListener('click', menuHandler)