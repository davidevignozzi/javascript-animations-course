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
 * Hero Text animation
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

/**
 * Split text alternative
 */
const logo = document.querySelector('.logo');
const letters = logo.textContent.split(''); // Each letter will be an item of an arry

logo.textContent = ''; // To delete the original logo. Will be replaced letter by letter

letters.forEach((letter) => {
  logo.innerHTML += `<span class="letter">${letter}</span>`; // Add each letter in a span in the logo
});

gsap.set('.letter', { display: 'inline-block' });
gsap.fromTo(
  '.letter',
  { y: '100%' },
  { y: 0, ease: 'back.out(3)', delay: 2, stagger: 0.075 }
);
