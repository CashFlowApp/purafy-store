import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Palette, Wind } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Droplets,
    title: 'Fill',
    description: 'Top-fill design. The Home\'s 4L tank lasts up to 30 hours. No awkward flipping or spilling.',
    gradient: 'from-purafy-500 to-purafy-600',
  },
  {
    number: '02',
    icon: Palette,
    title: 'Set Your Mood',
    description: 'Choose from 7 ambient LED colors. Warm amber for bedtime. Cool blue for focus. Your call.',
    gradient: 'from-cyan-accent to-purafy-500',
  },
  {
    number: '03',
    icon: Wind,
    title: 'Breathe',
    description: 'Ultrasonic micro-fog fills your room in minutes. Sit back and feel the difference.',
    gradient: 'from-amber-glow to-amber-warm',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white to-surface-light">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-bold text-purafy-500 uppercase tracking-[0.2em] mb-4">
            Simple as 1-2-3
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-purafy-900" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
            How It Works
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center"
            >
              <div className="relative inline-block mb-6">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-xl mx-auto`}>
                  <step.icon className="w-9 h-9 text-white" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-purafy-900 text-white text-xs font-extrabold rounded-full flex items-center justify-center shadow-lg">
                  {step.number}
                </span>
              </div>
              <h3 className="text-2xl font-extrabold text-purafy-900 mb-3" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>{step.title}</h3>
              <p className="text-gray-500 leading-relaxed text-[15px] max-w-xs mx-auto">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-8 text-gray-300">→</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
