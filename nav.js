const navControl = document.querySelector('.nav-control');
const navMenu = document.querySelector('.nav-menu');
const mask = document.querySelector('.mask');
const body = document.querySelector('body');

//GSAP Code Here

function toggleScrollable() {
    body.classList.toggle('unscrollable');
}

function toggleNavMenu() {
    navMenu.classList.toggle('nav-menu-active');
}

function toggleNavImage() {
    const src = navControl.src;
    const splitSrc = src.split('/');
    const idxLast = splitSrc.length - 1;
    if (splitSrc[idxLast] === 'icon-hamburger.svg') {
        splitSrc[idxLast] = 'icon-close.svg';
    } else {
        splitSrc[idxLast] = 'icon-hamburger.svg';
    }
    navControl.src = splitSrc.join('/');
}

function toggleMask() {
    mask.classList.toggle('mask-active');
}

function menuClick() {
    toggleNavMenu();
    toggleNavImage();
    toggleScrollable();
    toggleMask();
}

navControl.addEventListener('click', menuClick);
mask.addEventListener('click', menuClick);
