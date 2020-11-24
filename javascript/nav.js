const navControl = document.querySelector('.nav-control');
const navMenu = document.querySelector('.nav-menu');
const mask = document.querySelector('.mask');
const body = document.querySelector('body');
let isActive = false;

//GSAP Timeline
const timeline = gsap.timeline({paused: true, delay: 0.3});
timeline.to('.mask', {y: 0, duration: 0.3})
.to('.nav-menu', {x: 0, opacity: 1, duration: 0.3})

const toggleScrollable = () => {
    body.classList.toggle('unscrollable');
}

const toggleNavImage = () => {
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

const toggleActives = () => {
    if (!isActive) {
        timeline.play();
    } else {
        timeline.reverse();
    }
    isActive = !isActive;
}

const menuClick = () => {
    toggleNavImage();
    toggleScrollable();
    toggleActives();
}


navControl.addEventListener('click', menuClick);
mask.addEventListener('click', menuClick);
