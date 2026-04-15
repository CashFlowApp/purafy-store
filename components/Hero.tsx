import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingBag, Truck } from 'lucide-react';
import { useUpsell } from './UpsellContext';

const Hero: React.FC = () => {
  const { openUpsellModal } = useUpsell();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-purafy-900">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/home-hero-dark.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/home-hero-loop.mp4" type="video/mp4" />
        </video>
        {/* Contrast overlay */}
        <div className="absolute inset-0 bg-purafy-950/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-purafy-950/50 via-transparent to-purafy-950/80" />
      </div>

      {/* Bottom edge blend */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-surface-white to-transparent z-10" />
      {/* Top edge blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-purafy-950/60 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-5 py-2 mb-8"
        >
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-glow text-amber-glow" />
            ))}
          </div>
          <span className="text-white/70 text-sm font-medium">10,000+ Happy Homes</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl text-white leading-[1] mb-6 font-extrabold tracking-tight"
          style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
        >
          Better Air.
          <br />
          <span className="bg-gradient-to-r from-purafy-400 to-cyan-accent bg-clip-text text-transparent">Better Sleep.</span>
          <br />
          Better Life.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
        >
          Premium ultrasonic humidifiers with UV-C sterilization, cool & warm mist,
          and 7-color LED. Up to 30 hours on a single fill. Two sizes. One mission.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button onClick={() => openUpsellModal('home')} className="group flex items-center gap-3 bg-gradient-to-r from-amber-glow to-amber-warm text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-amber-glow/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
            <ShoppingBag className="w-5 h-5" />
            Shop Purafy Home — $159.99
          </button>
          <button onClick={() => openUpsellModal('mini')} className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm hover:bg-white/15 px-8 py-4 rounded-full border border-white/15 hover:border-white/30 transition-all duration-300 font-bold cursor-pointer">
            Shop Purafy Mini — $59.99
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-12 text-white/30 text-sm"
        >
          <span className="flex items-center gap-1.5"><Truck className="w-4 h-4" />Free Shipping</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>30-Day Guarantee</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>1-Year Warranty</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>10,000+ 5-Star Reviews</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
