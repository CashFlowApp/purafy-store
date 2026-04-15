import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Battery, Maximize, Palette, ShoppingBag, Zap, Thermometer, Wifi } from 'lucide-react';

const products = [
  {
    name: 'Purafy Home',
    tagline: 'Whole-room purification. All day. All night.',
    price: '$159.99',
    comparePrice: '$229.99',
    image: '/assets/home-both-colors.jpg',
    badge: 'Best Seller',
    badgeColor: 'from-amber-glow to-amber-warm',
    checkoutUrl: 'https://pqf3tp-z6.myshopify.com/cart/44203697864755:1',
    specs: [
      { icon: Droplets, label: '4L Tank' },
      { icon: Battery, label: '30hr Runtime' },
      { icon: Thermometer, label: 'Cool & Warm Mist' },
      { icon: Wifi, label: 'App + Remote' },
    ],
    colors: ['Matte Black', 'Clean White'],
    highlight: true,
  },
  {
    name: 'Purafy Mini',
    tagline: 'Small but mighty.',
    price: '$59.99',
    comparePrice: '$89.99',
    image: '/assets/mini-white.jpg',
    badge: 'Most Portable',
    badgeColor: 'from-purafy-500 to-cyan-accent',
    checkoutUrl: 'https://pqf3tp-z6.myshopify.com/cart/44203703107635:1',
    specs: [
      { icon: Droplets, label: '1000ml Tank' },
      { icon: Zap, label: 'USB 5V Powered' },
      { icon: Maximize, label: '30-40 sqm' },
      { icon: Palette, label: '7-Color LED' },
    ],
    colors: ['White', 'Black'],
    highlight: false,
  },
];

const ProductSelector: React.FC = () => {
  return (
    <section id="product-selector" className="py-24 md:py-32 bg-surface-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block text-sm font-bold text-purafy-500 uppercase tracking-[0.2em] mb-4">Two Models. One Mission.</span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-purafy-900 mb-4" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>Choose Your Purafy</h2>
          <p className="text-gray-500 text-lg font-light max-w-lg mx-auto">The Home covers your entire room. The Mini goes wherever you go.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div key={product.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative rounded-3xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 ${product.highlight ? 'border-purafy-200 shadow-xl shadow-purafy-100/40 bg-white' : 'border-gray-200 shadow-lg bg-white'}`}>
              <div className="absolute top-4 left-4 z-10">
                <span className={`inline-block text-xs font-bold text-white px-3 py-1.5 rounded-full bg-gradient-to-r ${product.badgeColor}`}>{product.badge}</span>
              </div>
              <div className="w-full aspect-[4/3] bg-gradient-to-br from-purafy-50 to-surface-light overflow-hidden">
                <img src={product.image} alt={product.name} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-extrabold text-purafy-900 mb-1" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>{product.name}</h3>
                <p className="text-gray-500 text-sm mb-6">{product.tagline}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {product.specs.map((spec) => (
                    <div key={spec.label} className="flex items-center gap-2.5 bg-surface-light rounded-xl px-3 py-2.5">
                      <spec.icon className="w-4 h-4 text-purafy-500 flex-shrink-0" />
                      <span className="text-sm font-medium text-purafy-800">{spec.label}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mb-6">Available in: {product.colors.join(' · ')}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-gray-400 line-through mr-2">{product.comparePrice}</span>
                    <span className="text-3xl font-extrabold text-purafy-900" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>{product.price}</span>
                  </div>
                  <a href={product.checkoutUrl} className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 ${product.highlight ? 'bg-gradient-to-r from-amber-glow to-amber-warm hover:shadow-lg hover:shadow-amber-glow/30' : 'bg-gradient-to-r from-purafy-500 to-purafy-600 hover:shadow-lg hover:shadow-purafy-500/30'}`}>
                    <ShoppingBag className="w-4 h-4" />Shop Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSelector;
