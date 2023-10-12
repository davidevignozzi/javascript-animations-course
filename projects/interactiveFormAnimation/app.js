import gsap from 'gsap';

/**
 * HTML Elements
 */
const containers = document.querySelectorAll('.input-container');
const form = document.querySelector('form');
const checkbox = document.querySelector('.checkbox');

/**
 * Validate email
 */
function validateEmail(email) {
  let re = /\S+@\S+\.\S+/;
  return re.test(email);
}
function validatePhone(phone) {
  let re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(phone);
}

/**
 * Animations
 *
 */
const tl = gsap.timeline({ defaults: { duration: 1 } });

/**
 * SVG start = initial position
 * SVG end = bended position
 * Get those in figma
 */
const start =
  'M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512';

const end =
  'M1 0.999512C1 0.999512 61.5 7.5 151 7.5C240.5 7.5 301 0.999512 301 0.999512';

/**
 * Elastic animation
 */
// Check if input is focused
containers.forEach((container) => {
  // Get the input, line and placeholder of the focused input
  const input = container.querySelector('.input');
  const line = container.querySelector('.elastic-line');
  const placeholder = container.querySelector('.placeholder');

  input.addEventListener('focus', () => {
    // Check if there is any text in the input
    if (!input.value) {
      // Elastic effect
      tl.fromTo(
        line,
        { attr: { d: start } },
        { attr: { d: end }, ease: 'power2.out', duration: 0.75 }
      );
      tl.to(
        line,
        { attr: { d: start }, ease: 'elastic.out(3,0.5)' },
        '<50%'
      );

      // Placeholder Shift
      tl.to(
        placeholder,
        {
          top: -15,
          left: 0,
          scale: 0.7,
          duration: 0.5,
          ease: 'power2.out'
        },
        '<15%'
      );
    }
  });
});
// Revert when input is not focused
form.addEventListener('click', () => {
  containers.forEach((container) => {
    // Get the input, line and placeholder of the focused input
    const input = container.querySelector('.input');
    const line = container.querySelector('.elastic-line');
    const placeholder = container.querySelector('.placeholder');

    // Check if the active element is not the input
    if (document.activeElement !== input) {
      // Check if there is any text in the input
      if (!input.value) {
        gsap.to(placeholder, {
          top: 0,
          left: 0,
          scale: 1,
          duration: 0.5,
          ease: 'power2.out'
        });
      }
    }

    // Validate
    input.addEventListener('input', (e) => {
      // Name Validation
      if (e.target.type === 'text') {
        let inputText = e.target.value;
        if (inputText.length > 2) {
          // Valid => Color blue
          colorize('#6391e8', line, placeholder);
        } else {
          // Not Valid => Color red
          colorize('#fe8c99', line, placeholder);
        }
      }

      // Email Validation
      if (e.target.type === 'email') {
        let valid = validateEmail(e.target.value);
        if (valid) {
          // Valid => Color blue
          colorize('#6391e8', line, placeholder);
        } else {
          // Not Valid => Color red
          colorize('#fe8c99', line, placeholder);
        }
      }

      // Phone Validation
      if (e.target.type === 'tel') {
        let valid = validatePhone(e.target.value);
        if (valid) {
          // Valid => Color blue
          colorize('#6391e8', line, placeholder);
        } else {
          // Not Valid => Color red
          colorize('#fe8c99', line, placeholder);
        }
      }
    });
  });
});

/**
 * Checkbox fill animation
 */
const tl2 = gsap.timeline({
  defaults: { duration: 0.5, ease: 'power2.out' }
});

const tickMarkPath = document.querySelector('.tick-mark path');
const pathLength = tickMarkPath.getTotalLength();

gsap.set(tickMarkPath, {
  strokeDashoffset: pathLength,
  strokeDasharray: pathLength
});

checkbox.addEventListener('click', () => {
  if (checkbox.checked) {
    tl2.to('.checkbox-fill', { top: 0 });
    tl2.fromTo(
      tickMarkPath,
      { strokeDashoffset: pathLength },
      { strokeDashoffset: 0 },
      '<50%'
    );
    tl2.to('.checkbox-label', { color: '#6391e8' }, '<');
  } else {
    tl2.to('.checkbox-fill', { top: '100%' });
    tl2.fromTo(
      tickMarkPath,
      { strokeDashoffset: 0 },
      { strokeDashoffset: pathLength }
    );
    tl2.to('.checkbox-label', { color: '#c5c5c5' }, '<');
  }
});

/**
 * Colorize Function
 */
function colorize(color, line, placeholder) {
  gsap.to(line, { stroke: color, duration: 0.75 });
  gsap.to(placeholder, { color: color, duration: 0.75 });
}

/**
 * Character Animation
 *
 */
gsap.set('#eye', { transformOrigin: 'center' });
gsap.fromTo(
  '#eye',
  { scaleY: 1 },
  {
    scaleY: 0.3,
    repeat: -1,
    yoyo: true,
    repeatDelay: 0.5,
    ease: 'power2.out'
  }
);
gsap.fromTo(
  '.eyebrow',
  { y: 0 },
  { y: -1, repeat: -1, yoyo: true, repeatDelay: 0.5, ease: 'power2.out' }
);
