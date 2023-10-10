import gsap from 'gsap';

const tl = gsap.timeline({
  defaults: { duration: 0.75, ease: 'power3.out' }
});

/**
 * Image animation
 */
tl.fromTo(
  '.hero-img',
  { scale: 1.3, borderRadius: 0 },
  {
    scale: 1,
    borderRadius: '2rem',
    ease: 'elastic.out(1.5,1)',
    delay: 0.35,
    duration: 2.5
  }
);

/**
 * Text animation
 */
// 1st word
tl.fromTo(
  '.cta1',
  { x: '100%', autoAlpha: 0.5 },
  { x: 0, autoAlpha: 1 },
  '<20%'
);
// 3rd word
tl.fromTo(
  '.cta3',
  { x: '-100%', autoAlpha: 0.5 },
  { x: 0, autoAlpha: 1 },
  '<20%'
);
// 2nd word
tl.fromTo(
  '.cta2',
  { y: '-100%', autoAlpha: 0.5 },
  { y: 0, autoAlpha: 1 },
  '<20%'
);
// 4th word
tl.fromTo(
  '.cta4',
  { x: '100%', autoAlpha: 0.5 },
  { x: 0, autoAlpha: 1 },
  '<20%'
);
// 6th word
tl.fromTo(
  '.cta6',
  { x: '-100%', autoAlpha: 0.5 },
  { x: 0, autoAlpha: 1 },
  '<20%'
);
// 5th word
tl.fromTo(
  '.cta5',
  { y: '100%', autoAlpha: 0.5 },
  { y: 0, autoAlpha: 1 },
  '<20%'
);

/**
 * Button Animation
 */
tl.fromTo(
  '.cta-btn',
  { y: 20, autoAlpha: 0 },
  { y: 0, autoAlpha: 1 },
  '<'
);
