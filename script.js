// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Contact Form handling
const form = document.getElementById('contact-form');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (name && email && message) {
            alert(`Thank you, ${name}!\nYour message has been received.\n\n(This is a demo for educational purposes)`);
            form.reset();
        } else {
            alert('Please fill in all fields before sending.');
        }
    });
}

// Header scroll effect (becomes more solid when scrolling)
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 80) {
        header.style.background = 'rgba(0, 0, 0, 0.98)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.85)';
    }
});
