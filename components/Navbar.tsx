import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Products', href: '#product-selector' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-purafy-200/20 py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <Logo className="h-9 w-auto" dark={scrolled} />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 hover:text-purafy-500 ${
                scrolled ? 'text-gray-600' : 'text-white/80'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#cta"
            className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-amber-glow to-amber-warm text-white px-6 py-2.5 rounded-full text-sm font-bold hover:shadow-lg hover:shadow-amber-glow/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            <ShoppingBag className="w-4 h-4" />
            Shop Now
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-purafy-100"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)} className="text-gray-700 font-medium py-2 hover:text-purafy-500 transition-colors">{link.label}</a>
              ))}
              <a href="#cta" onClick={() => setMenuOpen(false)} className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-glow to-amber-warm text-white px-6 py-3 rounded-full font-bold mt-2">
                <ShoppingBag className="w-4 h-4" />Shop Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
