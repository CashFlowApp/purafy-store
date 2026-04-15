import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Zap, Palette, Volume2, Maximize } from 'lucide-react';

const MiniShowcase: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-surface-light to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block text-sm font-bold text-purafy-500 uppercase tracking-[0.2em] mb-4">Purafy Mini</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-purafy-900" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
            Small but <span className="bg-gradient-to-r from-purafy-500 to-cyan-accent bg-clip-text text-transparent">Mighty</span>
          </h2>
          <p className="text-gray-500 text-lg font-light max-w-lg mx-auto mt-4">Portable. USB-powered. Goes wherever you go.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-xl">
            <video autoPlay muted loop playsInline className="w-full aspect-square object-cover">
              <source src="/assets/mini-hero-loop.mp4" type="video/mp4" />
            </video>
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
            <div className="space-y-5 mb-8">
              {[
                { icon: Zap, label: 'USB DC 5V / 3W', desc: 'Plug into any laptop, power bank, or car adapter.' },
                { icon: Palette, label: '7-Color LED', desc: 'Set the vibe wherever you are.' },
                { icon: Volume2, label: '1000ml Tank', desc: 'Up to 12 hours of continuous mist on a single fill.' },
                { icon: Maximize, label: '20 sqm Coverage', desc: 'Covers desks, nightstands, nurseries — even small rooms.' },
              ].map((spec) => (
                <div key={spec.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purafy-50 flex items-center justify-center flex-shrink-0">
                    <spec.icon className="w-5 h-5 text-purafy-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-purafy-900 text-sm">{spec.label}</h4>
                    <p className="text-gray-500 text-sm">{spec.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Color options */}
            <div className="flex gap-4 mb-8">
              <div className="flex-1 rounded-2xl overflow-hidden border border-gray-200 hover:border-purafy-300 transition-colors">
                <img src="/assets/mini-white.jpg" alt="Purafy Mini White" loading="lazy" className="w-full aspect-square object-cover" />
                <p className="text-center py-2 text-sm font-medium text-gray-600">White</p>
              </div>
              <div className="flex-1 rounded-2xl overflow-hidden border border-gray-200 hover:border-purafy-300 transition-colors">
                <img src="/assets/mini-black.jpg" alt="Purafy Mini Black" loading="lazy" className="w-full aspect-square object-cover" />
                <p className="text-center py-2 text-sm font-medium text-gray-600">Black</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div>
                <span className="text-sm text-gray-400 line-through mr-2">$89.99</span>
                <span className="text-3xl font-extrabold text-purafy-900" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>$59.99</span>
              </div>
              <a href="https://pqf3tp-z6.myshopify.com/cart/44203703107635:1" className="inline-flex items-center gap-2 bg-gradient-to-r from-purafy-500 to-purafy-600 text-white px-6 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-purafy-500/30 transition-all hover:-translate-y-0.5">
                <ShoppingBag className="w-4 h-4" />Shop Mini
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MiniShowcase;
