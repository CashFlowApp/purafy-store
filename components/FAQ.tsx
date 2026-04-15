import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How long does the Purafy Home run?',
    answer: 'Up to 30 hours on a single fill with its massive 4-liter tank. That\'s over a full day of continuous, whisper-quiet mist — no refills needed overnight.',
  },
  {
    question: 'How loud is it?',
    answer: 'The Purafy Home operates at under 28dB — quieter than a whisper. The Mini ranges from 20-40dB depending on the mist level. Both are designed to be sleep-friendly.',
  },
  {
    question: 'Does it work with essential oils?',
    answer: 'Yes! Both models are compatible with water-soluble essential oils. Add 2-3 drops for aromatherapy — lavender for sleep, eucalyptus for congestion, peppermint for energy.',
  },
  {
    question: 'What size room does it cover?',
    answer: 'The Purafy Home effectively covers rooms up to 40 sqm (430 sq ft) with its powerful 400ml/hr mist output — perfect for bedrooms, living rooms, and home offices. The Mini covers up to 20 sqm (215 sq ft) with 50ml/hr output — ideal for personal spaces, desks, and nurseries.',
  },
  {
    question: 'How do I clean it?',
    answer: 'Simple — remove the top, rinse with water weekly. No filters to replace, no subscriptions, no ongoing costs. Just clean water and you\'re good to go.',
  },
  {
    question: 'What\'s the difference between Home and Mini?',
    answer: 'The Home is the premium whole-room solution — 4L tank, 30-hour runtime, cool AND warm mist, UV-C sterilization, app + remote control, and 400ml/hr output. The Mini is ultra-portable — 1000ml tank, USB DC 5V powered, 50ml/hr output, perfect for your desk, car, or travel bag. Both have 7-color LED and aromatherapy support.',
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Yes! We ship worldwide. US shipping is $5.99 flat rate, international shipping is $9.99. Standard delivery is 5-12 business days depending on destination.',
  },
  {
    question: 'What\'s your return policy?',
    answer: '30-day money-back guarantee, no questions asked. If you don\'t love your Purafy, return it for a full refund. We also include a 1-year warranty on all units.',
  },
];

const FAQItem: React.FC<{ faq: typeof faqs[0]; isOpen: boolean; toggle: () => void }> = ({ faq, isOpen, toggle }) => (
  <div className="border-b border-gray-100 last:border-0">
    <button onClick={toggle} className="w-full flex items-center justify-between py-6 text-left group">
      <span className="text-lg font-semibold text-purafy-900 group-hover:text-purafy-500 transition-colors pr-4" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
        {faq.question}
      </span>
      <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="flex-shrink-0">
        <ChevronDown className="w-5 h-5 text-gray-400" />
      </motion.div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
          <p className="text-gray-500 leading-relaxed pb-6 pr-8">{faq.answer}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block text-sm font-bold text-purafy-500 uppercase tracking-[0.2em] mb-4">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-purafy-900" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>Got Questions?</h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-white rounded-2xl border border-gray-100 shadow-sm px-8">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} isOpen={openIndex === index} toggle={() => setOpenIndex(openIndex === index ? null : index)} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
