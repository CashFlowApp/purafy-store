import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah M.',
    text: 'I\'ve tried 4 humidifiers. This is the first one I actually LOVE. My skin feels incredible and I sleep so much better.',
    rating: 5,
    tag: 'Purafy Home',
  },
  {
    name: 'James R.',
    text: 'Bought the Mini for my desk and the Home for our bedroom. Game changer for dry winter air.',
    rating: 5,
    tag: 'Both Models',
  },
  {
    name: 'Michelle T.',
    text: 'My allergies have improved so much since using this every night. The LED light is a bonus — my kids love it.',
    rating: 5,
    tag: 'Purafy Home',
  },
  {
    name: 'David K.',
    text: 'Quiet enough to sleep through, powerful enough to feel the difference. Worth every penny.',
    rating: 5,
    tag: 'Purafy Home',
  },
  {
    name: 'Nia J.',
    text: 'Bought one for myself, then bought 3 more as gifts. Everyone asks me where I got it.',
    rating: 5,
    tag: 'Purafy Mini',
  },
  {
    name: 'Marcus W.',
    text: 'My wife has asthma and this has made a noticeable difference. We run it every night now. The 24-hour tank is a lifesaver.',
    rating: 5,
    tag: 'Purafy Home',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-surface-light">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-bold text-purafy-500 uppercase tracking-[0.2em] mb-4">
            Real Reviews
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-purafy-900 mb-4" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
            Join 10,000+ Homes Breathing Better
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-glow text-amber-glow" />
              ))}
            </div>
            <span className="text-gray-500 text-sm ml-2">4.9 out of 5 from 10,000+ reviews</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-glow text-amber-glow" />
                ))}
              </div>
              <p className="text-purafy-800 leading-relaxed mb-6 text-[15px]">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <span className="text-purafy-900 font-bold text-sm">{review.name}</span>
                <span className="text-xs font-semibold bg-purafy-50 text-purafy-500 px-3 py-1 rounded-full">
                  {review.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
