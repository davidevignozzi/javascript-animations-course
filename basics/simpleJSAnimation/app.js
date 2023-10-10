import './style.css';
import '../../style.css';

const button = document.querySelector('button');
const nav = document.querySelector('nav');
const p = document.querySelector('p');

/**
 * On click animate the nav
 * toggle nav-slide class
 *
 */
button.addEventListener('click', () => {
  //   nav.classList.add('nav-slide');
  nav.classList.toggle('nav-slide');

  p.classList.toggle('fade');
});
