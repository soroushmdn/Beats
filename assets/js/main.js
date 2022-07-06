// @@@@@@@@@@@@@@@@@@ show sidebar menu @@@@@@@@@@@@@@@@@
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

navToggle.addEventListener('click', () => {
  navMenu.classList.add('show-menu');
});

navClose.addEventListener('click', () => {
  navMenu.classList.remove('show-menu');
});

// @@@@@@@@@@@@@@@@@@ remove sidebar menu @@@@@@@@@@@@@@@@@
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach((n) => {
  n.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
});

// @@@@@@@@@@@@@@@@@@ CHANGE BACKGROUND HEADER @@@@@@@@@@@@@@@@@
window.addEventListener('scroll', scrollHeader);
function scrollHeader() {
  const header = document.getElementById('header');
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}

// @@@@@@@@@@@@@@@@ show scroll up @@@@@@@@@@@@@@
window.addEventListener('scroll', scrollUp);
function scrollUp() {
  const scrollUp = document.getElementById('scrollup');
  // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 200) {
    scrollUp.classList.add('show-scroll');
  } else {
    scrollUp.classList.remove('show-scroll');
  }
}

// @@@@@@@@@@@@@@@@  scroll reveal @@@@@@@@@@@@@@@@@@
const sr = ScrollReveal({
  distance: '60px',
  delay: 400,
  duration: 2500,
});

sr.reveal(`.home__data, .section-title`);

sr.reveal(`.home__img `, { origin: 'top' });

sr.reveal(
  `.sponser__container div ,.products__card ,.footer__content,.footer__logo ,.footer__copy`,
  {
    origin: 'top',
    interval: 150,
  }
);

sr.reveal(`.specs__data , .case__img , .discount__data `, {
  origin: 'left',
  interval: 150,
});

sr.reveal(`.specs__img ,.case__data , .discount__img`, { origin: 'right' });
