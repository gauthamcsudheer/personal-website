document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header ul li');

    function changeNav() {
        let index = sections.length;

        while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((li) => li.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.querySelector('a').getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
        changeNav(); // Update active link after smooth scroll
    }

    window.addEventListener('scroll', changeNav);
    navLinks.forEach((li) => li.addEventListener('click', smoothScroll));
    changeNav(); // Update active link on initial load
});


sr = ScrollReveal({
    distance: '40px',
    duration: 2000,
    reset: true
});

sr.reveal('.left-side', {origin: 'top'});
sr.reveal('.right-side', {origin: 'right'});

sr.reveal('.works-h1', {origin: 'top'});

sr.reveal('.work1', {origin: 'left'});
sr.reveal('.work2', {origin: 'right'});
sr.reveal('.work3', {origin: 'left'});
sr.reveal('.work4', {origin: 'right'});
sr.reveal('.work5', {origin: 'bottom'});

sr.reveal('.abt-h1', {origin: 'top'});
sr.reveal('.programming', {origin: 'top'});

sr.reveal('.cert1', {origin: 'left'});
sr.reveal('.cert2', {origin: 'top'});
sr.reveal('.cert3', {origin: 'right'});
sr.reveal('.cert4', {origin: 'left'});
sr.reveal('.cert5', {origin: 'bottom'});
sr.reveal('.cert6', {origin: 'right'});