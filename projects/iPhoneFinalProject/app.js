import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

/**
 * Higlight
 *
 */
// Page transition
const tlHPageTransition = gsap.timeline({
  scrollTrigger: {
    trigger: '.first-page',
    scrub: true,
    start: '0%',
    end: '100%',
    pin: true,
    pinSpacing: false
  }
});

// Higlight become white (opacity: 1)
const tlHiglight = gsap.timeline({
  scrollTrigger: {
    trigger: '.second-page',
    scrub: true,
    start: '-40%',
    end: '70%'
    // markers: true
  }
});
tlHiglight.fromTo(
  '.higlight',
  {
    color: 'rgba(255, 255, 255, 0.6)'
  },
  {
    color: 'rgba(255, 255, 255, 1)',
    stagger: 1
  }
);

// Higlight return transparent (opacity: 0.6)
const tlHRemove = gsap.timeline({
  scrollTrigger: {
    trigger: '.second-page',
    scrub: true,
    start: '0%',
    end: '80%'
    // markers: { startColor: 'blue', endColor: 'white' }
  }
});
tlHRemove.to('.higlight', {
  color: 'rgba(255, 255, 255, 0.6)',
  stagger: 1
});

/**
 * Phone Split
 *
 */
const tlSplit = gsap.timeline({
  scrollTrigger: {
    trigger: '.third-page',
    start: '-25%',
    end: '30%',
    scrub: true
  }
});
tlSplit.fromTo('.large-phone', { x: '40%' }, { x: '20%' });
tlSplit.fromTo('.small-phone', { x: '-40%' }, { x: '-20%' }, '<');
tlSplit.fromTo(
  '.product-text-left',
  { x: 50, autoAlpha: 0 },
  { x: -100, autoAlpha: 1 },
  '<'
);
tlSplit.fromTo(
  '.product-text-right',
  { x: -50, autoAlpha: 0 },
  { x: 100, autoAlpha: 1 },
  '<'
);

const tlSplitPin = gsap.timeline({
  scrollTrigger: {
    trigger: '.third-page',
    pin: true,
    pinSpacing: false,
    start: '0%',
    end: '100%'
  }
});

/**
 * Carousel
 *
 */
const swatches = document.querySelectorAll('.swatches img');
const gallery = document.querySelector('.phone-gallery');
const slides = document.querySelectorAll('.phone-gallery-container');

let currentSwatch = 'blue';
let topIndex = 2;

swatches.forEach((swatch, idx) => {
  const coord = slides[idx].getBoundingClientRect().left;

  swatch.addEventListener('click', (e) => {
    let swatchName = e.target.getAttribute('swatch');
    let closeUp = document.querySelector(`.${swatchName}`);

    // Check if we are on the same swatch
    if (currentSwatch === swatchName) {
      return;
    }

    // CloseUp
    gsap.set(closeUp, { zIndex: topIndex });
    gsap.fromTo(closeUp, { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 });

    // Gallery
    gsap.to(gallery, { x: -coord, duration: 1, ease: 'power2.out' });

    topIndex++;
    currentSwatch = swatchName;
  });
});

/**
 * Video on scroll
 *
 */
const tlVideo = gsap.timeline({
  scrollTrigger: {
    trigger: '.fifth-page',
    start: '0%',
    end: '150%',
    scrub: true,
    pin: true
  }
});
tlVideo.fromTo(
  '.product-video',
  { currentTime: 0 },
  { currentTime: 3, duration: 1 }
);
tlVideo.fromTo(
  '.product-info-container h3',
  { autoAlpha: 0 },
  { autoAlpha: 1, duration: 0.5, stagger: 0.25 },
  '<'
);

/**
 * Parallax Effect
 *
 */
const tlParallax = gsap.timeline({
  scrollTrigger: {
    trigger: '.sixth-page',
    start: '-25%',
    end: '50%',
    scrub: true
  }
});
tlParallax.fromTo('.photo-description', { y: 0 }, { y: -80 });
tlParallax.fromTo('.portrait-container', { y: 0 }, { y: -80 }, '<');
tlParallax.fromTo('.phone-video', { y: 0 }, { y: -200 }, '<');
