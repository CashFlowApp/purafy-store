import React from 'react';
import { motion } from 'framer-motion';

const VideoShowcase: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-purafy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purafy-900/50 to-purafy-950/50" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-bold text-purafy-400 uppercase tracking-[0.2em] mb-4">
            See It In Action
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
            Purafy in Action
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-purafy-500/10"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full aspect-video object-cover"
          >
            <source src="/assets/home-orbit.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-purafy-950/40 to-transparent pointer-events-none" />
        </motion.div>

        <p className="text-center text-white/30 text-sm mt-6">7-color LED atmosphere ring with ultrasonic micro-fog technology</p>
      </div>
    </section>
  );
};

export default VideoShowcase;
