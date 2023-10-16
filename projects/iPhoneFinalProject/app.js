import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

/**
 * Higlight
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
    end: '70%',
    markers: true
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
    end: '80%',
    markers: { startColor: 'blue', endColor: 'white' }
  }
});
tlHRemove.to('.higlight', {
  color: 'rgba(255, 255, 255, 0.6)',
  stagger: 1
});
