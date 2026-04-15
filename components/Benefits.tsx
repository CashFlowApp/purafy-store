import React from 'react';
import { motion } from 'framer-motion';
import { Wind, Moon, Heart, RefreshCw } from 'lucide-react';

const benefits = [
  {
    icon: Wind,
    title: 'Breathe Cleaner',
    description: 'Ultrasonic micro-fog technology creates nano-fine mist that moisturizes air and skin. No white dust. No wet surfaces. Just pure, humidified air.',
    gradient: 'from-purafy-500 to-cyan-accent',
  },
  {
    icon: Moon,
    title: 'Sleep Deeper',
    description: 'Whisper-quiet operation with calming 7-color ambient light creates your perfect sleep environment. Fill before bed, sleep through the night.',
    gradient: 'from-purple-500 to-purafy-600',
  },
  {
    icon: Heart,
    title: 'Feel Better',
    description: 'Proper humidity relieves dry skin, sinus congestion, allergies, and cold symptoms. Your body needs moisture — give it what it craves.',
    gradient: 'from-rose-500 to-pink-600',
  },
  {
    icon: RefreshCw,
    title: 'Live Easier',
    description: 'Fill once, run all day. No filters. No subscriptions. No maintenance headaches. Just better air, automatically.',
    gradient: 'from-amber-glow to-amber-warm',
  },
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-24 md:py-32 bg-gradient-to-b from-surface-white to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-bold text-purafy-500 uppercase tracking-[0.2em] mb-4">
            Why Purafy?
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-purafy-900" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
            Four Reasons You'll Love It
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-purafy-100 transition-all duration-500 hover:-translate-y-1"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} mb-6 shadow-lg`}>
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-purafy-900 mb-3" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>{benefit.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
