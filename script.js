// DOM Elements
const navbar = document.querySelector('.navbar');
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');
const animatedElements = document.querySelectorAll('.animate-up');

// Scroll Event for Sticky Navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Navigation Toggle
mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

const mobileCloseBtn = document.querySelector('.mobile-close-btn');
if (mobileCloseBtn) {
    mobileCloseBtn.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
}

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-link, .btn-cta').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

animatedElements.forEach(el => {
    observer.observe(el);
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// FAQ Accordion Toggle
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        const isActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(i => {
            i.classList.remove('active');
            i.querySelector('.faq-answer').style.maxHeight = null;
        });
        if (!isActive) {
            item.classList.add('active');
            const answer = item.querySelector('.faq-answer');
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});

// --- Interactive Gallery Logic ---



const galleryData = {
    'Weddings & Receptions': [
        // Weddings
        'images/wedding/3831cfb2-e49f-471c-a434-c3c1d37cd88a.JPG',
        'images/wedding/443A67C3-437E-4387-8470-F3375D658FBE.PNG',
        'images/wedding/69c060e1-1cae-4b07-bc0f-7bf9cbd60243.JPG',
        'images/wedding/IMG_1063.jpg',
        'images/wedding/IMG_1102.jpg',
        'images/wedding/IMG_1147.jpg',
        'images/wedding/IMG_1270.jpg',
        'images/wedding/IMG_1275.jpg',
        'images/wedding/IMG_1276.jpg',
        'images/wedding/IMG_1277.jpg',
        'images/wedding/IMG_1278.jpg',
        'images/wedding/IMG_1279.jpg',
        'images/wedding/IMG_1280.jpg',
        'images/wedding/IMG_1281.jpg',
        'images/wedding/IMG_1282.jpg',
        'images/wedding/IMG_1283.jpg',
        'images/wedding/IMG_1284.jpg',
        'images/wedding/IMG_1285.jpg',
        'images/wedding/IMG_1286.jpg',
        'images/wedding/IMG_1287.PNG',
        'images/wedding/IMG_1288.jpg',
        'images/wedding/IMG_1289.jpg',
        'images/wedding/IMG_1290.jpg',
        'images/wedding/IMG_1291.jpg',
        'images/wedding/c8a34454-284f-4212-9848-74c633bdc6b9.JPG',
        'images/wedding/ca0ec266-8809-4fe7-bfe1-6be9a2f82c80.jpg',
        // Reception
        'images/reception/IMG_0876.jpg',
        'images/reception/IMG_0903.jpg',
        'images/reception/IMG_1062.jpg',
        'images/reception/IMG_1255.jpg',
        'images/reception/IMG_1256.jpg',
        'images/reception/IMG_1258.jpg',
        'images/reception/IMG_1259.jpg',
        'images/reception/IMG_1267.jpg',
        'images/reception/IMG_1268.jpg',
        'images/reception/IMG_1269.jpg',
        'images/reception/IMG_1271.jpg',
        'images/reception/IMG_1272.jpg',
        'images/reception/IMG_1274.jpg'
    ],
    'Engagement & Sangeet': [
        // Engagement
        'images/engagements/eng_1.png',
        'images/engagements/eng_2.png',
        'images/engagements/eng_3.png',
        'images/engagements/eng_4.png',
        // Sangeet (Fixed Paths)

        'images/sangeet/IMG_0406.jpg',
        'images/sangeet/IMG_0892.jpg',
        'images/sangeet/IMG_0896.jpg',
        'images/sangeet/IMG_0914.jpg',
        'images/sangeet/IMG_0916.jpg',
        'images/sangeet/IMG_1006.jpg',
        'images/sangeet/IMG_1026.jpg',
        'images/sangeet/IMG_1028.jpg',
        'images/sangeet/IMG_1052.jpg'
    ],
    'Haldi, Mehendi & Home Ceremonies': [
        // Haldi (Fixed Paths)
        'images/haldi/uploaded_media_0_1769922019575.jpg',
        'images/haldi/uploaded_media_1_1769922019575.jpg',
        'images/haldi/uploaded_media_2_1769922019575.jpg',
        'images/haldi/uploaded_media_3_1769922019575.jpg',
        'images/haldi/uploaded_media_4_1769922019575.jpg',
        'images/haldi/uploaded_media_0_1769922087457.png',
        'images/haldi/uploaded_media_1_1769922087457.jpg',
        'images/haldi/uploaded_media_2_1769922087457.jpg',
        'images/haldi/uploaded_media_3_1769922087457.jpg',
        'images/haldi/uploaded_media_4_1769922087457.jpg',
        'images/haldi/uploaded_media_1769922148739.jpg',
        // Home
        'images/home/uploaded_media_0_1769922728192.png',
        'images/home/uploaded_media_1_1769922728192.jpg',
        'images/home/uploaded_media_2_1769922728192.jpg',
        'images/home/uploaded_media_3_1769922728192.jpg',
        'images/home/uploaded_media_4_1769922728192.jpg',
        'images/home/uploaded_media_1769922869974.jpg'
    ],
    'Baby Showers & Birthdays': [
        // Baby Showers
        'images/babyshower/uploaded_media_0_1769920881037.png',
        'images/babyshower/uploaded_media_1_1769920881037.jpg',
        'images/babyshower/uploaded_media_2_1769920881037.jpg',
        // Birthdays
        'images/birthday/uploaded_media_0_1769921392491.png',
        'images/birthday/uploaded_media_1_1769921392491.jpg',
        'images/birthday/uploaded_media_2_1769921392491.jpg',
        'images/birthday/uploaded_media_3_1769921392491.png',
        'images/birthday/uploaded_media_4_1769921392491.jpg',
        'images/birthday/uploaded_media_0_1769921637770.png',
        'images/birthday/uploaded_media_1_1769921637770.jpg',
        'images/birthday/uploaded_media_2_1769921637770.jpg',
        'images/birthday/uploaded_media_3_1769921637770.jpg'
    ]
};    // End of galleryData


const serviceCards = document.querySelectorAll('.service-card');
const galleryModal = document.getElementById('gallery-modal');
const galleryClose = document.querySelector('.gallery-close');
const galleryTitle = document.getElementById('gallery-title');
const galleryGrid = document.getElementById('gallery-grid');

// Open Modal Handler
serviceCards.forEach(card => {
    card.addEventListener('click', () => {
        const categoryName = card.querySelector('h3').innerText;
        galleryTitle.innerText = categoryName; // Update Title
        galleryGrid.innerHTML = ''; // Clear previous

        // Get images or fallback
        const images = galleryData[categoryName] || ['images/hero.png'];

        images.forEach(imgSrc => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.classList.add('gallery-img');
            img.alt = categoryName;
            galleryGrid.appendChild(img);
        });

        galleryModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

// Close Modal Handler
if (galleryClose) {
    galleryClose.addEventListener('click', () => {
        galleryModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
}

window.addEventListener('click', (e) => {
    if (e.target == galleryModal) {
        galleryModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// --- Contact Form Handling ---
// --- Contact Form Handling ---
// const contactForm = document.getElementById('contact-form');
// const successMsg = document.getElementById('form-success-msg');

// if (contactForm) {
//     contactForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         const formData = new FormData(contactForm);
//         fetch('/', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//             body: new URLSearchParams(formData).toString()
//         })
//         .then(() => {
//             contactForm.style.display = 'none';
//             successMsg.style.display = 'block';
//         })
//         .catch((error) => alert('Error submitting form. Please try again.'));
//     });
// }
