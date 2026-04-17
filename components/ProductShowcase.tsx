import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Palette, Zap, Thermometer, Wifi, ShoppingBag } from 'lucide-react';
import { useUpsell } from './UpsellContext';

const features = [
  { icon: Droplets, label: '4L Large Capacity', sublabel: '30 hours on one fill', position: 'left' },
  { icon: Thermometer, label: 'Cool & Warm Mist', sublabel: 'Year-round comfort', position: 'left' },
  { icon: Zap, label: '400ml/hr Mist Output', sublabel: 'Powerful ultrasonic fog', position: 'right' },
  { icon: Wifi, label: 'App + Remote Control', sublabel: 'Smart Tuya integration', position: 'right' },
  { icon: Palette, label: '7-Color LED + UV-C', sublabel: 'Ambience + sterilization', position: 'right' },
];

const ProductShowcase: React.FC = () => {
  const leftFeatures = features.filter(f => f.position === 'left');
  const rightFeatures = features.filter(f => f.position === 'right');
  const { openUpsellModal } = useUpsell();

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-purafy-900 to-purafy-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block text-sm font-bold text-purafy-400 uppercase tracking-[0.2em] mb-4">Purafy Home</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
            Engineered for<span className="bg-gradient-to-r from-purafy-400 to-cyan-accent bg-clip-text text-transparent"> Wellness</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <div className="space-y-8">
            {leftFeatures.map((feature, i) => (
              <motion.div key={feature.label} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }} className="flex items-start gap-4 text-left lg:text-right lg:justify-end">
                <div className="lg:order-2">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-purafy-400" />
                  </div>
                </div>
                <div className="lg:order-1">
                  <h4 className="text-white font-bold text-sm">{feature.label}</h4>
                  <p className="text-white/40 text-xs mt-0.5">{feature.sublabel}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative aspect-square rounded-3xl overflow-hidden border border-white/10">
            <img src="/assets/home-hero-dark.jpg" alt="Purafy Home" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-purafy-950/30 to-transparent" />
          </motion.div>

          <div className="space-y-8">
            {rightFeatures.map((feature, i) => (
              <motion.div key={feature.label} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-cyan-accent" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">{feature.label}</h4>
                  <p className="text-white/40 text-xs mt-0.5">{feature.sublabel}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <img src="/assets/home-water-pour.jpg" alt="Easy top-fill design" loading="lazy" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700" />
            <div className="px-5 py-4 bg-white/5">
              <p className="text-white font-bold text-sm">Easy Top-Fill Design</p>
              <p className="text-white/40 text-xs mt-1">No messy flipping. Pour and go. 4L lasts 30 hours.</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <div className="grid grid-cols-2">
              <img src="/assets/mini-white.jpg" alt="Purafy Mini White" loading="lazy" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700" />
              <img src="/assets/mini-black.jpg" alt="Purafy Mini Black" loading="lazy" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="px-5 py-4 bg-white/5">
              <p className="text-white font-bold text-sm">Purafy Mini — Two Finishes</p>
              <p className="text-white/40 text-xs mt-1">Clean White or Matte Black. Compact. Portable. Powerful.</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <button onClick={() => openUpsellModal('home')} className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-glow to-amber-warm text-white px-6 py-4 rounded-full text-base sm:text-lg font-bold hover:shadow-2xl hover:shadow-amber-glow/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
            <ShoppingBag className="w-5 h-5" />Shop Purafy Home — $159.99
          </button>
          <button onClick={() => openUpsellModal('mini')} className="inline-flex items-center gap-3 bg-gradient-to-r from-purafy-500 to-purafy-600 text-white px-6 py-4 rounded-full text-base sm:text-lg font-bold hover:shadow-2xl hover:shadow-purafy-500/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
            <ShoppingBag className="w-5 h-5" />Shop Purafy Mini — $59.99
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;
