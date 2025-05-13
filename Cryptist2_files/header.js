window.addEventListener('load', () => {
    const headerMobileMenu = document.querySelector('.all-header-mobile-menu');

    if (document.location.hash){
        document.querySelector('.all-content').style.scrollBehavior = 'auto';
        document.querySelector(document.location.hash).scrollIntoView();
        document.querySelector('.all-content').style.scrollBehavior = 'smooth';
    }

    document.addEventListener('click', e => {
        if (e.target.closest('.all-header-mobile-menu-button-icon') || e.target.closest('.all-header-menu-button-icon')) {
            headerMobileMenu.classList.toggle('display-none');
        };

        if (e.target.closest('.all-header-mobile-menu')) {
            headerMobileMenu.classList.add('display-none');
        }

        if (e.target.closest('#header-pastEvent-button') || e.target.closest('#header-pastEvent-button-mobile') || e.target.closest('#header-pastEvent-button-mobile')) {
            document.location.hash = 'past-event';
        };
        if (e.target.closest('#footer-speakers-button') || e.target.closest('#header-speakers-button') || e.target.closest('#header-speakers-button-mobile')) {
            document.location.hash = 'speakers';
        };
        if (e.target.closest('#footer-sponsors-button') || e.target.closest('#header-sponsors-button') || e.target.closest('#header-sponsors-button-mobile')) {
            document.location.hash = 'sponsors';
        };
        if (e.target.closest('#footer-schedule-button') || e.target.closest('#header-schedule-button') || e.target.closest('#header-schedule-button-mobile')) {
            document.location.hash = 'schedule';
        };
        if (e.target.closest('#footer-location-button') || e.target.closest('#header-location-button') || e.target.closest('#header-location-button-mobile')) {
            document.location.hash = 'location';
        };
    });
});""