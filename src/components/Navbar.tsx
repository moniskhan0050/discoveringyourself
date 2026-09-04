import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Trainer', href: '#trainer' },
    { name: 'Registration', href: '#registration' },
    { name: 'Feedback', href: '#testimonials' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${scrolled ? 'py-4 glass border-b' : 'py-8 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-serif font-bold tracking-widest text-brand-lavender">
          JOURNEY <span className="font-light italic text-white">OF</span> SELF
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="text-sm uppercase tracking-widest hover:text-brand-lavender transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#registration" className="btn-primary py-2 px-6 text-sm">
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-lavender" onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-b overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {links.map((link) => (
                <a key={link.name} href={link.href} className="text-lg" onClick={() => setMobileMenu(false)}>
                  {link.name}
                </a>
              ))}
              <a href="#registration" className="btn-primary text-center" onClick={() => setMobileMenu(false)}>
                Book Workshop
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
