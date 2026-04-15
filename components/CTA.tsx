import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Shield, Truck, RotateCcw, Star } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section id="cta" className="py-24 md:py-32 bg-gradient-to-b from-purafy-900 to-purafy-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purafy-500/8 rounded-full blur-[200px]" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-cyan-accent/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="flex items-center justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-amber-glow text-amber-glow" />
            ))}
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
            Ready to
            <span className="bg-gradient-to-r from-purafy-400 to-cyan-accent bg-clip-text text-transparent"> Breathe Better?</span>
          </h2>

          <p className="text-lg text-white/40 max-w-xl mx-auto mb-10 font-light">
            Free shipping. 30-day money-back guarantee. Your lungs will thank you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <a href="https://pqf3tp-z6.myshopify.com/cart/44203697864755:1" className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-glow to-amber-warm text-white px-8 py-4 rounded-full text-lg font-extrabold hover:shadow-2xl hover:shadow-amber-glow/30 transition-all duration-300 hover:-translate-y-1">
              <ShoppingBag className="w-5 h-5" />
              Shop Purafy Home — $159.99
            </a>
            <a href="https://pqf3tp-z6.myshopify.com/cart/44203703107635:1" className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/15 text-white px-8 py-4 rounded-full text-lg font-extrabold hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
              <ShoppingBag className="w-5 h-5" />
              Shop Purafy Mini — $59.99
            </a>
          </div>

          <p className="text-white/25 text-sm mt-6">Free shipping on all orders. No hidden fees.</p>
          <div className="mt-4 inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2">
            <span className="text-xs font-semibold text-amber-glow">🎁 Buy 2 Save 10% | Buy 3+ Save 25%</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
            {[
              { icon: Shield, label: 'SSL Secure\nCheckout' },
              { icon: RotateCcw, label: '30-Day Money\nBack Guarantee' },
              { icon: Truck, label: 'Free Shipping\nWorldwide' },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <badge.icon className="w-5 h-5 text-purafy-400" />
                </div>
                <span className="text-white/35 text-xs text-left whitespace-pre-line">{badge.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
