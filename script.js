document.addEventListener('DOMContentLoaded', function () {
    const animateText = document.querySelector('#hero');

    function checkVisibility() {
        const rect = animateText.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight && rect.bottom >= 0) {
            animateText.classList.add('visible');
        }
    }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);

    checkVisibility();
});


document.addEventListener('DOMContentLoaded', function () {
    const animateText = document.querySelector('#about');
    
    function checkVisibility() {
            const rect = animateText.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (rect.top < windowHeight && rect.bottom >= 0) {
                animateText.classList.add('visible');
            }
        }
    
        window.addEventListener('scroll', checkVisibility);
        window.addEventListener('resize', checkVisibility);
    
        checkVisibility();
});

document.addEventListener('DOMContentLoaded', function () {
    const animateText = document.querySelector('#about-desc');
    
    function checkVisibility() {
            const rect = animateText.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (rect.top < windowHeight && rect.bottom >= 0) {
                animateText.classList.add('visible');
            }
        }
    
        window.addEventListener('scroll', checkVisibility);
        window.addEventListener('resize', checkVisibility);
    
        checkVisibility();
});
