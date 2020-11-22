const navControl = document.querySelector('.nav-control');
const navMenu = document.querySelector('.nav-menu');
const mask = document.querySelector('.mask');
const body = document.querySelector('body');

function toggleScrollable() {
    body.classList.toggle('unscrollable');
}

function toggleNavMenu() {

}

function toggleNavImage() {
    const src = `./${navControl.src}`;
    console.log(src)
    if(src === './images/icon-hamburger.svg') {
        navControl.src = './images/icon-close.svg';
    } else {
        navControl.src = './images/icon-hamburger.svg';
    }
}

function menuClick() {
    toggleNavMenu();
    toggleNavImage();
    toggleScrollable();
}

navControl.addEventListener('click', menuClick)