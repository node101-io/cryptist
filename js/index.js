window.addEventListener('load', () => {
  const svg = document.querySelector('.index-title-wrapper svg:last-child');
  let isPortrait = window.innerHeight > window.innerWidth;

  updateSvgDimensions(svg, isPortrait);

  window.addEventListener('resize', () => {
    const newIsPortrait = window.innerHeight > window.innerWidth;

    if (newIsPortrait !== isPortrait) {
      isPortrait = newIsPortrait;
      updateSvgDimensions(svg, isPortrait);
    }
  });
});

function updateSvgDimensions(svg, isPortrait) {
  if (isPortrait) {
    svg.setAttribute('viewBox', '-2 -2 1316 854');
    svg.querySelector('image').setAttribute('height', '724');
  } else {
    svg.setAttribute('viewBox', '-2 -2 1316 454');
    svg.querySelector('image').setAttribute('height', '324');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll(`.fade-in-on-scroll`);
  if (!targets.length) return;

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });

  targets.forEach(target => observer.observe(target));
});