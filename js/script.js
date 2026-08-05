
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mise à jour dynamique de l'année dans le footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Gestion du Menu Hamburger pour Mobile
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            // Basculer les classes d'animation
            navLinks.classList.toggle('nav-active');
            hamburger.classList.toggle('toggle');
            
            // Bloquer le scroll du body quand le menu est ouvert
            if (navLinks.classList.contains('nav-active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });

        // Fermer le menu lors du clic sur un lien mobile
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('nav-active');
                hamburger.classList.remove('toggle');
                document.body.style.overflow = 'auto';
            });
        });
    }

    // 3. Animations au défilement
    const reveals = document.querySelectorAll('.reveal');

    // Options pour l'observateur 
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.10
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Ajoute la classe qui déclenche l'animation CSS
                entry.target.classList.add('visible');
                // Optionnel : arrêter d'observer une fois l'élément affiché (optimisation)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});