import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-purafy-950 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-16">
          <div className="md:col-span-1">
            <Logo className="h-8 w-auto mb-4" />
            <p className="text-white/25 text-sm leading-relaxed">Better air. Better sleep. Better life.</p>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Shop</h4>
            <ul className="space-y-3">
              {['Purafy Home', 'Purafy Mini', 'Essential Oils', 'Gift Sets'].map((item) => (
                <li key={item}><a href="#product-selector" className="text-white/30 text-sm hover:text-purafy-400 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Support</h4>
            <ul className="space-y-3">
              {['About', 'Contact Us', 'FAQ', 'Shipping Info', 'Track Order'].map((item) => (
                <li key={item}><a href={item === 'FAQ' ? '#faq' : '#'} className="text-white/30 text-sm hover:text-purafy-400 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-3">
              {[{ label: 'Privacy Policy', href: '/privacy' }, { label: 'Terms of Service', href: '/terms' }, { label: 'Refund Policy', href: '/refund-policy' }, { label: 'Shipping Policy', href: '/shipping-policy' }].map((item) => (
                <li key={item.label}><a href={item.href} className="text-white/30 text-sm hover:text-purafy-400 transition-colors">{item.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/15 text-sm">&copy; 2026 Purafy. Better air. Better sleep. Better life.</p>
          <div className="flex items-center gap-6">
            {['Instagram', 'TikTok'].map((social) => (
              <a key={social} href="#" className="text-white/15 text-sm hover:text-purafy-400 transition-colors">{social}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
