document.addEventListener('DOMContentLoaded', () => {
    // Burger menu
    const burger = document.getElementById('burger-menu');
    const navLinks = document.querySelector('nav ul');

    if (burger && navLinks) {
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            burger.classList.toggle('active');
        });
    }

    // Footer animation
    const footer = document.querySelector('.footer-terminal');
    if (footer) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    footer.classList.add('start-animation');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5
        });

        observer.observe(footer);
    }
});
