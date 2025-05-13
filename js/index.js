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
