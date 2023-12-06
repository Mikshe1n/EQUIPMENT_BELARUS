document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.scroll-section');

    function activateSection() {
        let scrollPosition = window.scrollY;

        sections.forEach(section => {
            const offset = section.offsetTop - window.innerHeight / 2;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPosition >= offset && scrollPosition < offset + height) {
                removeAllActiveClasses();
                section.classList.add('active');
            }
        });
    }

    function removeAllActiveClasses() {
        sections.forEach(section => {
            section.classList.remove('active');
        });
    }

    window.addEventListener('scroll', activateSection);

    // Call the function on page load to highlight the initial section
    activateSection();
});





