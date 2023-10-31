window.addEventListener('load', () => {
    const pastEventSlideText = document.querySelector('.all-content-pastEvent-slide-text');
    
    document.addEventListener('click', event => {
        if (event.target.closest('.all-footer-info-mail-clipboard')) {
            const emailEl = document.querySelector('.all-footer-info-mail-clipboard-text');

            navigator.clipboard.writeText(emailEl.innerText);

            const originalText = emailEl.innerText;
            emailEl.innerText = 'Copied!';
            setTimeout(() => {
                emailEl.innerText = originalText;
            }, 1000);
        };

        if (event.target.closest('.all-content-speakers-each-category')) {
            const clickedCategory = event.target.closest('.all-content-speakers-each-category');

            if (!clickedCategory.classList.contains('all-content-speakers-each-category-active')) {
                document.querySelector('.all-content-speakers-each-category-active').classList.remove('all-content-speakers-each-category-active');

                clickedCategory.classList.add('all-content-speakers-each-category-active');

                document.querySelectorAll('.all-content-speakers-card-container').forEach(container => {
                    container.classList.add('display-none');
                });

                document.getElementById(clickedCategory.id + '-container').classList.remove('display-none');
            };
        };

        if (event.target.closest('[data-carousel-button]')) {
            const button = event.target.closest('[data-carousel-button]');
            const slides = button
                .closest('[data-carousel]')
                .querySelector('[data-slides]')
        
            const activeSlide = slides.querySelector('[data-active]')
            let newIndex = [...slides.children].indexOf(activeSlide) + 1
            if(newIndex >= slides.children.length) newIndex = 0
        
            slides.children[newIndex].dataset.active = true
            delete activeSlide.dataset.active
            
            if (event.target.closest('.all-content-pastEvent-wrapper'))
                pastEventSlideText.innerText = slides.children[newIndex].firstChild.alt;
        };
    });
});