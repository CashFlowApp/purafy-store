import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const StickyCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-2xl shadow-black/10 p-3"
        >
          <div className="flex gap-2">
            <a href="https://pqf3tp-z6.myshopify.com/cart/44203697864755:1" className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-amber-glow to-amber-warm text-white py-3 rounded-full text-sm font-extrabold shadow-lg shadow-amber-glow/20">
              <ShoppingBag className="w-4 h-4" />
              Home $159.99
            </a>
            <a href="https://pqf3tp-z6.myshopify.com/cart/44203703107635:1" className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purafy-500 to-purafy-600 text-white py-3 rounded-full text-sm font-extrabold shadow-lg shadow-purafy-500/20">
              <ShoppingBag className="w-4 h-4" />
              Mini $59.99
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;
