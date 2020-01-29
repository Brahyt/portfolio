import store from './store.js';

store.populateTinkering();

const myNav = document.querySelector('nav');
const myDoc = document.querySelector('body');

window.onscroll = function() {
  if (window.pageYOffset >= 220) {
    myNav.classList.add('nav-colored');
    myNav.classList.remove('nav-trans');
  } else {
    myNav.classList.remove('nav-colored');
    myNav.classList.add('nav-trans');
  }
};
