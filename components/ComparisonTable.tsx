import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const rows = [
  { label: 'Tank Capacity', home: '4L (4000ml)', mini: '1000ml' },
  { label: 'Runtime', home: 'Up to 30 hours', mini: 'Up to 12 hours' },
  { label: 'Mist Output', home: '400ml/hour', mini: '50ml/hour' },
  { label: 'Room Coverage', home: 'Up to 25 sqm', mini: 'Up to 30-40 sqm' },
  { label: 'Noise Level', home: '<28 dB', mini: '20-40 dB' },
  { label: 'Power', home: 'AC 25W', mini: 'USB DC 5V / 3W' },
  { label: 'Cool & Warm Mist', home: true, mini: false },
  { label: 'UV Sterilization', home: true, mini: false },
  { label: 'Remote / App Control', home: true, mini: false },
  { label: 'LED Colors', home: '7 colors', mini: '7 colors' },
  { label: 'Timer Function', home: true, mini: false },
  { label: 'Essential Oil Compatible', home: true, mini: true },
  { label: 'Auto Shut-Off', home: true, mini: true },
  { label: 'Price', home: '$159.99', mini: '$59.99' },
];

const ComparisonTable: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-surface-light to-surface-white">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <span className="inline-block text-sm font-bold text-purafy-500 uppercase tracking-[0.2em] mb-4">Compare</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-purafy-900" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>Mini vs Home</h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="grid grid-cols-3 bg-purafy-900 text-white">
            <div className="p-4 text-sm font-bold"></div>
            <div className="p-4 text-center">
              <div className="text-sm font-extrabold">Purafy Home</div>
              <div className="text-xs text-purafy-300">Best Seller</div>
            </div>
            <div className="p-4 text-center">
              <div className="text-sm font-extrabold">Purafy Mini</div>
              <div className="text-xs text-purafy-300">Most Portable</div>
            </div>
          </div>

          {rows.map((row, index) => (
            <div key={row.label} className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-white' : 'bg-surface-light/50'} border-t border-gray-50`}>
              <div className="p-4 text-sm font-semibold text-purafy-800">{row.label}</div>
              <div className="p-4 text-center text-sm text-gray-600">
                {typeof row.home === 'boolean' ? (
                  row.home ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <span className="text-gray-300">—</span>
                ) : (
                  <span className={row.label === 'Price' ? 'font-extrabold text-purafy-900' : ''}>{row.home}</span>
                )}
              </div>
              <div className="p-4 text-center text-sm text-gray-600">
                {typeof row.mini === 'boolean' ? (
                  row.mini ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <span className="text-gray-300">—</span>
                ) : (
                  <span className={row.label === 'Price' ? 'font-extrabold text-purafy-900' : ''}>{row.mini}</span>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonTable;
