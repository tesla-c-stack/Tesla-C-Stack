// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const spans = hamburger.querySelectorAll('span');
    if (navLinks.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Refined Configurator with Model 3
let basePrice = 44990;
let currentRange = 320;

function selectModel(model) {
    const preview = document.getElementById('car-preview');
    if (model === 'model3') {
        preview.src = 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/model3-hero-desktop.jpg';
        basePrice = 38990;
    } else if (model === 'modely') {
        preview.src = 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/modely-hero-desktop.jpg';
        basePrice = 44990;
    } else if (model === 'cybertruck') {
        preview.src = 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/cybertruck-hero-desktop.jpg';
        basePrice = 60990;
    } else if (model === 'roadster') {
        preview.src = 'https://picsum.photos/id/201/800/500';
        basePrice = 200000;
    } else if (model === 'models') {
        preview.src = 'https://picsum.photos/id/870/800/500';
        basePrice = 89990;
    } else if (model === 'modelx') {
        preview.src = 'https://picsum.photos/id/133/800/500';
        basePrice = 94990;
    }
    updatePrice();
}

function changeExterior(color) {
    const preview = document.getElementById('car-preview');
    const urls = {
        red: 'https://picsum.photos/id/1015/800/500',
        white: 'https://picsum.photos/id/1016/800/500',
        black: 'https://picsum.photos/id/1018/800/500',
        blue: 'https://picsum.photos/id/133/800/500'
    };
    preview.src = urls[color];
}

function changeWheels(size) {
    const rangeEl = document.getElementById('range-display');
    const priceEl = document.getElementById('price-display');
    const ranges = {19: 330, 20: 310, 21: 290};
    const wheelPrices = {19: 0, 20: 2500, 21: 4500};
    
    currentRange = ranges[size];
    const totalPrice = basePrice + wheelPrices[size];
    
    rangeEl.textContent = `${currentRange} miles`;
    priceEl.textContent = `Starting at \[ {totalPrice.toLocaleString()}`;
}

function changeInterior(interior) {
    alert(`Interior updated to ${interior}. Premium materials applied.`);
}

function updatePrice() {
    const priceEl = document.getElementById('price-display');
    priceEl.textContent = `Starting at \]{basePrice.toLocaleString()}`;
}

// Supercharger Simulation
function findSupercharger() {
    const resultEl = document.getElementById('supercharger-result');
    resultEl.textContent = "Nearest Supercharger: 2.4 miles away • 12 stalls available • ~18 min for 200 miles";
}

// Robotaxi Booking
function bookRobotaxi() {
    const pickup = document.getElementById('pickup').value || "Current Location";
    const destination = document.getElementById('destination').value || "Destination";
    const datetime = document.getElementById('datetime').value || "ASAP";
    
    const confirmation = `Robotaxi booked successfully!\n\n` +
        `Pickup: ${pickup}\n` +
        `Destination: ${destination}\n` +
        `Scheduled: ${datetime}\n\n` +
        `Vehicle: Tesla Robotaxi (Full Self-Driving)\n` +
        `Estimated Arrival: 3 minutes\n` +
        `Estimated Fare: $18–$24\n\n` +
        `Enjoy climate-controlled comfort and premium audio.\nSafe travels!`;
    
    alert(confirmation);
}

// Contact form
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        if (name) {
            alert(`Thank you, ${name}!\n\nYour message has been received.`);
            form.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
}

// Scroll animations & Parallax
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.section, .vehicles-grid .vehicle-card, .energy-grid .energy-card, .store-grid .store-card, .dashboard-grid .dashboard-card, .configurator');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.15 });
    elements.forEach(el => observer.observe(el));
};

const parallaxHero = () => {
    const heroes = document.querySelectorAll('.hero');
    window.addEventListener('scroll', () => {
        heroes.forEach(hero => {
            hero.style.backgroundPositionY = `${window.scrollY * 0.4}px`;
        });
    });
};

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.style.background = window.scrollY > 80 ? 'rgba(0, 0, 0, 0.98)' : 'rgba(0, 0, 0, 0.85)';
});

window.addEventListener('load', () => {
    animateOnScroll();
    parallaxHero();
});
