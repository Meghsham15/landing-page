document.addEventListener('DOMContentLoaded', () => {
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    const elements = document.querySelectorAll('.person, .gallery-item');
    elements.forEach(element => {
        observer.observe(element);
    });
});
