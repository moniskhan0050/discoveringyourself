import { createClient } from '@supabase/supabase-js';
const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
);
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
    // Submit registration and open Razorpay payment
const regForm = document.getElementById('registration-form');

if (regForm) {
    regForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const form = this;
        const btn = form.querySelector('button');
        const originalText = btn.innerHTML;

        btn.innerHTML = 'Processing...';
        btn.disabled = true;

        const formData = new FormData(form);

        // Create unique registration ID
        const registrationId =
            'REG-' +
            Date.now() +
            '-' +
            Math.random().toString(36).substring(2, 8).toUpperCase();

        const registrationData = {
            registration_id: registrationId,
            name: formData.get('name'),
            gender: formData.get('gender'),
            age: Number(formData.get('age')),
            mobile: formData.get('contact'),
            profession: formData.get('profession'),
            city: formData.get('city'),
            state: formData.get('state'),
            amount: 499,
            payment_status: 'pending',
            registration_status: 'pending'
        };

        // 1. Save registration in Supabase
        supabase
            .from('registrations')
            .insert([registrationData])
            .select()
            .single()
            .then(({ data, error }) => {

                if (error) {
                    console.error('Supabase registration error:', error);
                    throw new Error('Could not save registration');
                }

                // 2. Send existing Web3Forms notification
                return fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        Accept: 'application/json'
                    }
                });
            })
            .then(response => {

                if (!response.ok) {
                    throw new Error('Web3Forms submission failed');
                }

                // 3. Create Razorpay order
                return supabase.functions.invoke('super-action', {
                    body: {
                        registration_id: registrationId,
                        amount: 499
                    }
                });
            })
            .then(({ data, error }) => {

                if (error || !data) {
                    console.error('Razorpay order error:', error);
                    throw new Error('Could not create payment order');
                }

                // 4. Open Razorpay Checkout
                const options = {
                    key: data.key_id,
                    amount: data.amount,
                    currency: data.currency,
                    name: 'Discovering Yourself',
                    description: 'Workshop Registration',
                    order_id: data.order_id,

                    prefill: {
                        name: formData.get('name'),
                        contact: formData.get('contact')
                    },

                    handler: function (paymentResponse) {

                        // 5. Verify payment on server
                        supabase.functions.invoke('verify-payment', {
                            body: {
                                razorpay_payment_id:
                                    paymentResponse.razorpay_payment_id,

                                razorpay_order_id:
                                    paymentResponse.razorpay_order_id,

                                razorpay_signature:
                                    paymentResponse.razorpay_signature,

                                registration_id: registrationId
                            }
                        })
                        .then(({ data, error }) => {

                            if (error || !data || !data.success) {
                                throw new Error('Payment verification failed');
                            }

                            // Payment successful
                            form.hidden = true;

                            const success =
                                document.getElementById('registration-success');

                            if (success) {
                                success.hidden = false;
                                success.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'center'
                                });
                            }
                        })
                        .catch(error => {
                            console.error(error);
                            alert(
                                'Payment verification failed. Please contact support.'
                            );
                            btn.disabled = false;
                            btn.innerHTML = originalText;
                        });
                    },

                    modal: {
                        ondismiss: function () {
                            btn.disabled = false;
                            btn.innerHTML = originalText;
                        }
                    },

                    theme: {
                        color: '#000000'
                    }
                };

                const razorpay = new Razorpay(options);
                razorpay.open();
            })
            .catch(error => {
                console.error(error);

                btn.disabled = false;
                btn.innerHTML = originalText;

                alert(
                    'Registration could not be processed. Please try again.'
                );
            });
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
