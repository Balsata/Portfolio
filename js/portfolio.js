document.addEventListener('DOMContentLoaded', () => {
    // Asegura que el body tenga la clase 'loaded'
    document.body.classList.add('loaded');

    // Ejemplo: animación de entrada de las secciones de detalle del proyecto
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        section.classList.add('reveal');
        observer.observe(section);
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector('.carousel-track');
    const slides = track.querySelectorAll('img');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');

    let index = 0;

    function updateSlide() {
        const slideWidth = slides[0].clientWidth;
        track.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    nextBtn.addEventListener('click', () => {
        index = (index + 1) % slides.length;
        updateSlide();
    });

    prevBtn.addEventListener('click', () => {
        index = (index - 1 + slides.length) % slides.length;
        updateSlide();
    });

    // Responsive adjustments
    window.addEventListener('resize', updateSlide);
});
