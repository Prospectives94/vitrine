/**
 * Wrenz Agency - Interactive JavaScript Engine
 * Features: Ambient Particle Grid, Fullscreen Animated Overlay Menu,
 * Smooth Section ScrollSpy (Mission, Who is Wren, Projects, Contact),
 * and Contact Form.
 */

document.addEventListener('DOMContentLoaded', () => {
    initAmbientCanvas();
    initHeaderAndMenu();
    initScrollSpy();
    initContactForm();
});

/* ==========================================
   01. Ambient Particle Grid Canvas
   ========================================== */
function initAmbientCanvas() {
    const canvas = document.getElementById('ambient-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    const particleCount = Math.min(Math.floor(width / 24), 60);

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.4;
            this.vy = (Math.random() - 0.5) * 0.4;
            this.radius = Math.random() * 1.8 + 0.8;
            this.alpha = Math.random() * 0.5 + 0.2;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0) this.x = width;
            if (this.x > width) this.x = 0;
            if (this.y < 0) this.y = height;
            if (this.y > height) this.y = 0;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 255, 102, ${this.alpha})`;
            ctx.shadowBlur = 8;
            ctx.shadowColor = '#00ff66';
            ctx.fill();
            ctx.shadowBlur = 0;
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function connectParticles() {
        for (let a = 0; a < particles.length; a++) {
            for (let b = a + 1; b < particles.length; b++) {
                const dx = particles[a].x - particles[b].x;
                const dy = particles[a].y - particles[b].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 140) {
                    const alpha = (1 - dist / 140) * 0.2;
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
                    ctx.lineWidth = 0.7;
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach((p) => {
            p.update();
            p.draw();
        });
        connectParticles();
        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });
}

/* ==========================================
   02. Animated Menu & Sticky Header
   ========================================== */
function initHeaderAndMenu() {
    const header = document.getElementById('main-header');
    const menuToggle = document.getElementById('menu-toggle');
    const menuOverlay = document.getElementById('full-menu-overlay');
    const overlayLinks = document.querySelectorAll('.menu-overlay-link');

    // Sticky Header Scroll Listener
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Toggle Overlay Menu
    function toggleMenu() {
        const isOpen = menuOverlay.classList.contains('active');
        if (isOpen) {
            menuOverlay.classList.remove('active');
            menuToggle.classList.remove('open');
            document.body.style.overflow = '';
        } else {
            menuOverlay.classList.add('active');
            menuToggle.classList.add('open');
            document.body.style.overflow = 'hidden';
        }
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    // Close Menu when clicking any overlay link
    overlayLinks.forEach((link) => {
        link.addEventListener('click', () => {
            menuOverlay.classList.remove('active');
            menuToggle.classList.remove('open');
            document.body.style.overflow = '';
        });
    });
}

/* ==========================================
   03. ScrollSpy Active Link Highlight
   ========================================== */
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let currentSection = '';
        const scrollPos = window.scrollY + 250;

        sections.forEach((section) => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            if (scrollPos >= top && scrollPos < top + height) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
}

/* ==========================================
   04. Contact Form Handling
   ========================================== */
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = document.getElementById('submit-btn');
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<span>Sending...</span><i class="fa-solid fa-spinner animate-spin"></i>`;

            setTimeout(() => {
                contactForm.style.display = 'none';
                formSuccess.classList.remove('hidden');
            }, 1000);
        });
    }
}
