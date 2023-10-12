import gsap from 'gsap';

/**
 * Timelines
 */
const tlLeave = gsap.timeline({
  defaults: { duration: 0.75, ease: 'power2.out' }
});

const tlEnter = gsap.timeline({
  defaults: { duration: 0.75, ease: 'power2.out' }
});

/**
 * Leave Animations
 */
const leaveAnimation = (current, done) => {
  // get the product of the specific page
  const product = current.querySelector('.image-container');
  const text = current.querySelector('.showcase-text');
  const circles = current.querySelectorAll('.circle');
  const arrow = current.querySelector('.showcase-arrow');

  return (
    tlLeave.fromTo(arrow, { opacity: 1, y: 0 }, { opacity: 0, y: 50 }),
    tlLeave.fromTo(
      product,
      { y: 0, opacity: 1 },
      { y: 100, opacity: 0 },
      '<'
    ),
    tlLeave.fromTo(
      text,
      { y: 0, opacity: 1 },
      { y: 100, opacity: 0, onComplete: done },
      '<'
    ),
    tlLeave.fromTo(
      circles,
      { y: 0, opacity: 1 },
      {
        y: -200,
        opacity: 0,
        stagger: 0.15,
        ease: 'back.out(1.7)',
        duration: 1
      },
      '<'
    )
  );
};

/**
 * Enter Animations
 */
const enterAnimation = (current, done) => {
  // get the product of the specific page
  const product = current.querySelector('.image-container');
  const text = current.querySelector('.showcase-text');
  const circles = current.querySelectorAll('.circle');
  const arrow = current.querySelector('.showcase-arrow');

  return (
    tlEnter.fromTo(arrow, { opacity: 0, y: 50 }, { opacity: 1, y: 0 }),
    tlEnter.fromTo(
      product,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1 },
      '<'
    ),
    tlEnter.fromTo(
      text,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, onComplete: done },
      '<'
    ),
    tlEnter.fromTo(
      circles,
      { y: -200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        ease: 'back.out(1.7)',
        duration: 1
      },
      '<'
    )
  );
};

/**
 * Run animations
 */
barba.init({
  preventRunning: true,
  transitions: [
    // Showcase transitions
    {
      name: 'default',
      leave(data) {
        // console.log('🚀 ~ data:', data);
        const done = this.async();
        let current = data.current.container;

        /*
            gsap.fromTo(
            current,
            { opacity: 1 },
            { opacity: 0, duration: 1, onComplete: done }
            );
        */

        leaveAnimation(current, done);
      },
      enter(data) {
        const done = this.async();
        let next = data.next.container;

        /*
            gsap.fromTo(
            next,
            { opacity: 0 },
            { opacity: 1, duration: 1, onComplete: done }
            );
        */

        enterAnimation(next, done);
      }
    }
  ]
});
