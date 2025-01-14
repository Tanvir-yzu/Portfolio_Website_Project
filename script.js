// JavaScript for Interactive Features

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Dynamic greeting based on time of day
const heroSection = document.querySelector('.hero-section p');
const hours = new Date().getHours();
let greeting;

if (hours < 12) {
    greeting = "Good morning!";
} else if (hours < 18) {
    greeting = "Good afternoon!";
} else {
    greeting = "Good evening!";
}

heroSection.textContent = `${greeting} Welcome to my portfolio! I'm a passionate web developer with a knack for creating clean, user-friendly websites.`;

// Highlight active navigation link during scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 50;
        const sectionHeight = section.offsetHeight;

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            document.querySelector('.nav-links a[href="#' + section.id + '"]').classList.add('active');
        } else {
            document.querySelector('.nav-links a[href="#' + section.id + '"]').classList.remove('active');
        }
    });
});
