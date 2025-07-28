// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Activate animations on scroll
const scrollElements = document.querySelectorAll('.animate-on-scroll, .fade-in');

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const displayScrollElement = (element) => {
    element.classList.add('active');
};

const hideScrollElement = (element) => {
    element.classList.remove('active');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        } else {
            hideScrollElement(el);
        }
    });
};

window.addEventListener('scroll', () => {
    handleScrollAnimation();
});

// Testimonials slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');

const showTestimonial = (index) => {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove('active');
        if (i === index) testimonial.classList.add('active');
    });
};

const nextTestimonial = () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
};

const prevTestimonial = () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
};

setInterval(nextTestimonial, 5000); // Switch testimonial every 5 seconds

// Initialize EmailJS
(function(){
    emailjs.init("321MpVWTjpnfyEAxQ"); // Replace with your actual EmailJS public key from dashboard
})();

// Contact form handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const serviceCode = formData.get('service');
    const message = formData.get('message');
    const privacy = formData.get('privacy');
    
    // Map service codes to full service names
    const serviceNames = {
        'corporate': 'Corporate Law',
        'realestate': 'Real Estate Law',
        'family': 'Family Law',
        'criminal': 'Criminal Law',
        'civil': 'Civil Litigation',
        'documentation': 'Legal Documentation',
        'other': 'Other'
    };
    
    const service = serviceNames[serviceCode] || serviceCode;
    
    // Debug logging
    console.log('Service Code:', serviceCode);
    console.log('Mapped Service:', service);
    
    // Basic validation
    if (!firstName || !lastName || !email || !phone || !serviceCode || !message || !privacy) {
        alert('Please fill in all required fields and accept the privacy policy.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Phone validation (Indian format)
    const phoneRegex = /^[+]?[0-9]{10,13}$/;
    if (!phoneRegex.test(phone.replace(/\s+/g, ''))) {
        alert('Please enter a valid phone number.');
        return;
    }
    
    // Create email content
    const emailContent = {
        to_email: 'dheeraj8453@gmail.com',
        from_name: `${firstName} ${lastName}`,
        from_email: email,
        phone: phone,
        service: service,
        message: message,
        subject: `New Legal Consultation Request - ${service}`
    };
    
    // Show loading state
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Send email using EmailJS
    emailjs.send('service_himh7h4', 'template_yl4iyna', emailContent)
        .then(function(response) {
            console.log('EmailJS response:', response);
            alert('Thank you for your inquiry! We will contact you soon.');
            contactForm.reset();
        })
        .catch(function(error) {
            console.error('EmailJS error:', error);
            alert('Sorry, there was an error sending your message. Please try again or call us directly at +91-8341445701.');
        })
        .finally(function() {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        });

    // Fallback success message (remove the lines below when EmailJS is properly configured)
    // setTimeout(() => {
    //     alert(`Thank you ${firstName}! Your consultation request for ${service} has been received. We will contact you at ${email} soon.`);
    //     this.reset();
    //     submitButton.textContent = originalText;
    //     submitButton.disabled = false;
    // }, 1000);
});
