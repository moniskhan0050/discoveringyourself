document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Reveal Animation on Scroll
    const reveals = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.15 });

    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });

    // Parallax Effect for Hero
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const heroBg = document.querySelector('.hero-bg-parallax');
        if (heroBg) {
            heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
        }

        // Navbar scrolled state
        const navbar = document.querySelector('.navbar');
        if (scrolled > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Submit registration without leaving the page so payment instructions remain visible.
    const regForm = document.getElementById('registration-form');
    if (regForm) {
        regForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = this.querySelector('button');
            const success = document.getElementById('registration-success');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i data-lucide="loader" class="spin"></i> Booking...';
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
            btn.disabled = true;

            fetch(this.action, {
                method: 'POST',
                body: new FormData(this),
                headers: { Accept: 'application/json' }
            })
                .then(response => {
                    if (!response.ok) throw new Error('Registration failed');
                    this.hidden = true;
                    success.hidden = false;
                    success.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    if (typeof lucide !== 'undefined') lucide.createIcons();
                })
                .catch(() => {
                    btn.disabled = false;
                    btn.innerHTML = originalText;
                    alert('Registration could not be submitted. Please try again.');
                });
        });
    }

    const receiptFile = document.getElementById('receipt-file');
    const receiptNote = document.getElementById('receipt-note');
    if (receiptFile && receiptNote) {
        receiptFile.addEventListener('change', () => {
            receiptNote.textContent = receiptFile.files[0]
                ? `${receiptFile.files[0].name} selected. Attach it in WhatsApp before sending.`
                : 'Attach the selected receipt in WhatsApp before sending.';
        });
    }

    // Mobile Menu Placeholder (Toggle implementation)
    const mobileBtn = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            navLinks.classList.toggle('mobile-nav');
        });
    }
});
