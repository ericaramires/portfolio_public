import translations from './translations.js';

const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// EmailJS environment variables from Vite
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

const initTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    body.setAttribute('data-theme', savedTheme);
    themeToggle.textContent = savedTheme === 'light' ? '🌙' : '🌞';
};

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeToggle.textContent = newTheme === 'light' ? '🌙' : '🌞';
});

initTheme();

const langBtn = document.querySelector('.lang-btn');
const langDropdown = document.querySelector('.language-dropdown');
const langOptions = document.querySelectorAll('.language-dropdown button');

langBtn.addEventListener('click', () => {
    const languageToggle = document.querySelector('.language-toggle');
    if (window.innerWidth <= 768) {
        languageToggle.classList.toggle('active');
    }
});

langOptions.forEach(option => {
    option.addEventListener('click', () => {
        const lang = option.getAttribute('data-lang');
        const flag = option.querySelector('img').cloneNode(true);
        langBtn.innerHTML = '';
        langBtn.appendChild(flag);
        localStorage.setItem('language', lang);
        if (window.innerWidth <= 768) {
            document.querySelector('.language-toggle').classList.remove('active');
        }
        changeLanguage(lang);
    });
});

const initLanguage = () => {
    const savedLang = localStorage.getItem('language') || navigator.language.split('-')[0] || 'pt-BR';
    const langOption = document.querySelector(`[data-lang="${savedLang}"]`);
    if (langOption) {
        const flag = langOption.querySelector('img').cloneNode(true);
        langBtn.innerHTML = '';
        langBtn.appendChild(flag);
        changeLanguage(savedLang);
    }
};

const changeLanguage = (lang) => {
    const texts = translations[lang];
    document.querySelector('a[href="#hero"].nav-item').textContent = texts.nav_home;
    document.querySelector('a[href="#skills"].nav-item').textContent = texts.nav_skills;
    document.querySelector('a[href="#projects"].nav-item').textContent = texts.nav_projects;
    document.querySelector('a[href="#contact"].nav-item').textContent = texts.nav_contact;
    document.querySelector('.greeting').textContent = texts.greeting;
    document.querySelector('.description').textContent = texts.description;
    window.professions = texts.professions;
    restartTypewriterEffect();
    document.querySelector('#skills h2').textContent = texts.skills_title;
    document.querySelector('#projects h2').textContent = texts.projects_title;
    document.querySelector('#contact h2').textContent = texts.contact_title;
    const projectCards = document.querySelectorAll('.project-card h3');
    if (projectCards.length >= 1) projectCards[0].textContent = texts.project1_title;
    if (projectCards.length >= 2) projectCards[1].textContent = texts.project2_title;
    if (projectCards.length >= 3) projectCards[2].textContent = texts.project3_title;
    document.querySelector('label[for="name"]').textContent = texts.name_label;
    document.querySelector('label[for="email"]').textContent = texts.email_label;
    document.querySelector('label[for="message"]').textContent = texts.message_label;
    document.querySelector('button[type="submit"]').textContent = texts.send_button;
    document.documentElement.lang = lang;
    const cvLink = document.getElementById('cv-download');
    const cvSpan = document.querySelector('.cv-text');
    if (cvLink && cvSpan) {
        cvLink.href = translations[lang].cv_file;
        cvSpan.textContent = translations[lang].cv_text;
    }
};

let typewriterTimeout;

function restartTypewriterEffect() {
    clearTimeout(typewriterTimeout);
    const typedTextElement = document.getElementById('typed-text');
    if (typedTextElement) {
        typedTextElement.textContent = '';
        let currentIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        function typeEffect() {
            const currentText = window.professions[currentIndex];
            if (isDeleting) {
                typedTextElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typedTextElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }
            let typeSpeed = isDeleting ? 50 : 150;
            if (!isDeleting && charIndex === currentText.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                currentIndex = (currentIndex + 1) % window.professions.length;
                typeSpeed = 500;
            }
            typewriterTimeout = setTimeout(typeEffect, typeSpeed);
        }
        typeEffect();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
});

const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        navLinks.classList.add('active');
        menuOpen = true;
    } else {
        navLinks.classList.remove('active');
        menuOpen = false;
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            if (menuOpen) {
                navLinks.classList.remove('active');
                menuOpen = false;
            }
        }
    });
});

const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 10) {
        navbar.classList.add('with-shadow');
    } else {
        navbar.classList.remove('with-shadow');
    }
    navbar.style.transform = 'translateY(0)';
    lastScroll = currentScroll;
});

const contactForm = document.getElementById('contact-form');
const submitButton = contactForm.querySelector('button[type="submit"]');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        recipient: 'ramireserica@gmail.com'
    };
    submitButton.classList.add('loading');
    submitButton.disabled = true;
    try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        submitButton.classList.remove('loading');
        submitButton.classList.add('success');
        contactForm.reset();
        setTimeout(() => {
            submitButton.classList.remove('success');
            submitButton.disabled = false;
        }, 2000);
    } catch (error) {
        submitButton.classList.remove('loading');
        submitButton.classList.add('error');
        setTimeout(() => {
            submitButton.classList.remove('error');
            submitButton.disabled = false;
        }, 2000);
    }
});

const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

const cursorDot = document.createElement('div');
cursorDot.className = 'cursor-dot';
document.body.appendChild(cursorDot);

document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

const interactiveElements = document.querySelectorAll('a, button, .project-card, .social-link');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-hover');
        cursorDot.classList.add('cursor-hover');
    });
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-hover');
        cursorDot.classList.remove('cursor-hover');
    });
});
