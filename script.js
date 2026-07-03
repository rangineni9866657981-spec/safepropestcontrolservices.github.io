// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Handle form submission - Redirect to WhatsApp
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Get form data
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const phone = this.querySelector('input[type="tel"]').value;
        const message = this.querySelector('textarea').value;
        
        // Create WhatsApp message with form data
        const whatsappMessage = `Hello Safe Pro Pest Control!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage: ${message}\n\nPlease call me back or send a quote.`;
        
        // Encode the message for WhatsApp URL
        const encodedMessage = encodeURIComponent(whatsappMessage);
        
        // WhatsApp API link
        const whatsappLink = `https://wa.me/919100504155?text=${encodedMessage}`;
        
        // Open WhatsApp
        window.open(whatsappLink, '_blank');
        
        // Reset form
        this.reset();
        
        // Show thank you message
        alert('Thank you for your message! Redirecting to WhatsApp...');
    });
}

// Add animation on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease-in';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card').forEach(card => {
    observer.observe(card);
});

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
