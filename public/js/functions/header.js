window.addEventListener('load', () => {
    const headerMobileMenu = document.querySelector('.all-header-mobile-menu');

    document.addEventListener('click', e => {
        if (e.target.closest('.all-header-mobile-menu-button-icon') || e.target.closest('.all-header-menu-button-icon')) {
            headerMobileMenu.classList.toggle('display-none');
        };

        if (e.target.closest('.all-header-mobile-menu')) {
            headerMobileMenu.classList.add('display-none');
        }

        if (e.target.closest('#header-pastEvent-button') || e.target.closest('#header-pastEvent-button-mobile') || e.target.closest('#header-pastEvent-button-mobile')) {
            document.querySelector('.all-content-pastEvent-wrapper').scrollIntoView({ behavior: 'smooth' });
        };
        if (e.target.closest('#footer-speakers-button') || e.target.closest('#header-speakers-button') || e.target.closest('#header-speakers-button-mobile')) {
            document.querySelector('.all-content-speakers-wrapper').scrollIntoView({ behavior: 'smooth' });
        };
        if (e.target.closest('#footer-sponsors-button') || e.target.closest('#header-sponsors-button') || e.target.closest('#header-sponsors-button-mobile')) {
            document.querySelector('.all-content-sponsors-wrapper').scrollIntoView({ behavior: 'smooth' });
        };
        if (e.target.closest('#footer-schedule-button') || e.target.closest('#header-schedule-button') || e.target.closest('#header-schedule-button-mobile')) {
            document.querySelector('.all-content-schedule-wrapper').scrollIntoView({ behavior: 'smooth' });
        };
        if (e.target.closest('#footer-location-button') || e.target.closest('#header-location-button') || e.target.closest('#header-location-button-mobile')) {
            document.querySelector('.all-content-location-wrapper').scrollIntoView({ behavior: 'smooth' });
        };
    });
});