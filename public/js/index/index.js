window.addEventListener('load', () => {
    const button = document.querySelectorAll('[data-carousel-button]')

    button.forEach(button => {
        button.addEventListener('click', () => {
            const slides = button
                .closest('[data-carousel]')
                .querySelector('[data-slides]')
        
            const activeSlide = slides.querySelector('[data-active]')
            let newIndex = [...slides.children].indexOf(activeSlide) + 1
            if(newIndex >= slides.children.length) newIndex = 0
        
            slides.children[newIndex].dataset.active = true
            delete activeSlide.dataset.active
        });    
    });
});