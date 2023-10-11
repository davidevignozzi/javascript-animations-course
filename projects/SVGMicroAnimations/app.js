import gsap from 'gsap';

const tl = gsap.timeline({
  defaults: {
    duration: 0.35,
    ease: 'power2.out'
  }
});

/**
 * HTML Elements
 */
const home = document.querySelector('.home');
const notifications = document.querySelector('.notifications');
const messages = document.querySelector('.messages');

/**
 * Home Animation
 */
gsap.set('.feather', { scale: 0, transformOrigin: 'center' });
home.addEventListener('click', () => {
  gsap.fromTo(
    '.home-svg',
    { scale: 1 },
    { scale: 0.9, yoyo: true, repeat: 1 }
  );
  gsap.fromTo(
    '.feather',
    { y: -5, scale: 0 },
    { y: 20, scale: 1.5, duration: 1, stagger: 0.25 }
  );
  gsap.fromTo('.right-feather', { x: 0 }, { x: 5 });
});

/**
 * Notifications Animation
 */
gsap.set('.bell', { transformOrigin: 'top center' });
gsap.set('.ringer', { transformOrigin: 'top center' });
gsap.set('.wave', { autoAlpha: 0, transformOrigin: 'bottom' });
notifications.addEventListener('click', () => {
  gsap.fromTo(
    '.bell',
    { rotation: -5 },
    { rotation: 0, duration: 2, ease: 'elastic.out(5, 0.2)' }
  );
  gsap.fromTo(
    '.ringer',
    { rotation: -3, x: 0.5 },
    { rotation: 0, x: 0, duration: 1.25, ease: 'elastic.out(5, 0.2)' }
  );
  gsap.fromTo(
    '.wave',
    { scale: 0, autoAlpha: 1 },
    { scale: 1.3, autoAlpha: 0, duration: 1 }
  );
});
