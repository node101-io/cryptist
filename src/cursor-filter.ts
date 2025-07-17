window.addEventListener('load', () => {
  const hoverFilter = document.getElementById('hover-filter');

  if (!hoverFilter) return;

  document.body.addEventListener('mousemove', event => {
    hoverFilter.style.opacity = '1';

    hoverFilter.style.left = `${event.x - 84}px`;
    hoverFilter.style.top = `${event.y - 84}px`;

    if (event.target instanceof HTMLElement && (event.target.closest('img') || event.target.closest('a') || event.target.closest('label') || event.target.closest('div[style*="background-image"]'))) {
      hoverFilter.style.scale = '0.5';
    } else {
      hoverFilter.style.scale = '0.2';
    }
  });

  document.querySelectorAll('iframe').forEach(iframe => {
    iframe.addEventListener('mouseenter', () => {
      hoverFilter.style.display = 'none';
    });
  
    iframe.addEventListener('mouseleave', () => {
      hoverFilter.style.display = 'unset';
    });
  });
});