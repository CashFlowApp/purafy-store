import React from 'react';
import { motion } from 'framer-motion';

const scenes = [
  { image: '/assets/home-bedroom.jpg', label: 'Perfect for the bedroom', sublabel: 'Purafy Home' },
  { image: '/assets/home-livingroom-1.jpg', label: 'Elevate your living space', sublabel: 'Purafy Home' },
  { image: '/assets/home-nursery.jpg', label: 'Safe for the nursery', sublabel: 'Purafy Home' },
];

const Lifestyle: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block text-sm font-bold text-purafy-500 uppercase tracking-[0.2em] mb-4">Fits Your Life</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-purafy-900" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>Designed for Your Life</h2>
          <p className="text-gray-500 text-lg font-light max-w-lg mx-auto mt-4">From the bedroom to the office to the nursery — Purafy fits wherever life takes you.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {scenes.map((scene, index) => (
            <motion.div
              key={scene.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-gray-100">
                <img
                  src={scene.image}
                  alt={scene.label}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="mt-4 text-center">
                <h4 className="font-bold text-purafy-900">{scene.label}</h4>
                <p className="text-sm text-gray-400">{scene.sublabel}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lifestyle;
