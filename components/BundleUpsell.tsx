import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Truck, ShoppingBag, Minus, Plus, Tag } from 'lucide-react';
import { useUpsell } from './UpsellContext';

const STORE_URL = 'https://pqf3tp-z6.myshopify.com';

const productData = {
  home: {
    name: 'Purafy Home',
    variantId: '44203697864755',
    price: 159.99,
    comparePrice: 229.99,
    image: '/assets/home-hero-dark.jpg',
    bundleImage2: '/assets/home-both-colors.jpg',
    bundleImage3: '/assets/home-bundle-3.jpg',
  },
  mini: {
    name: 'Purafy Mini',
    variantId: '44203703107635',
    price: 59.99,
    comparePrice: 89.99,
    image: '/assets/mini-white.jpg',
    bundleImage2: '/assets/mini-bundle-2.jpg',
    bundleImage3: '/assets/mini-bundle-3.jpg',
  },
};

const buildCheckoutUrl = (variantId: string, qty: number, discountCode?: string) => {
  let url = `${STORE_URL}/cart/${variantId}:${qty}`;
  if (discountCode) url += `?discount=${discountCode}`;
  return url;
};

const BundleUpsell: React.FC = () => {
  const { isOpen, product, closeUpsellModal } = useUpsell();
  const [familyQty, setFamilyQty] = useState(3);

  if (!product) return null;

  const data = productData[product];
  const price1 = data.price;
  const price2Original = data.price * 2;
  const price2Discounted = +(price2Original * 0.9).toFixed(2);
  const savings2 = +(price2Original - price2Discounted).toFixed(2);
  const priceFamilyOriginal = +(data.price * familyQty).toFixed(2);
  const priceFamilyDiscounted = +(priceFamilyOriginal * 0.75).toFixed(2);
  const savingsFamily = +(priceFamilyOriginal - priceFamilyDiscounted).toFixed(2);

  const goToCheckout = (qty: number, discount?: string) => {
    window.location.href = buildCheckoutUrl(data.variantId, qty, discount);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={closeUpsellModal}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeUpsellModal}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>

            {/* Header */}
            <div className="px-6 pt-6 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden border border-gray-200 flex-shrink-0">
                  <img src={data.image} alt={data.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">{data.name} selected</p>
                  <h3 className="text-xl md:text-2xl font-extrabold text-gray-900" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                    Great choice! Want to save more?
                  </h3>
                </div>
              </div>
            </div>

            {/* 3 Tier Options */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                {/* === OPTION 2: Buy 2 (FIRST on mobile via order-first) === */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="relative rounded-xl border-2 border-amber-400 bg-amber-50/30 p-5 flex flex-col order-first md:order-2"
                >
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      <Tag className="w-3 h-3" />Most Popular
                    </span>
                  </div>

                  <h4 className="font-extrabold text-gray-900 text-center mt-2 mb-3" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                    Buy 2 — Save 10%
                  </h4>

                  <div className="w-full aspect-[16/10] rounded-lg overflow-hidden mb-4 bg-gray-50">
                    <img
                      src={data.bundleImage2}
                      alt={`2x ${data.name}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center gap-2 p-3"><img src="${data.image}" class="w-1/2 h-full object-cover rounded-lg" /><img src="${data.image}" class="w-1/2 h-full object-cover rounded-lg" /></div>`;
                      }}
                    />
                  </div>

                  <div className="text-center mb-4 flex-1">
                    <span className="text-sm text-gray-400 line-through">${price2Original.toFixed(2)}</span>
                    <div className="text-2xl font-extrabold text-gray-900" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                      ${price2Discounted.toFixed(2)}
                    </div>
                    <span className="inline-block mt-1 text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                      You save ${savings2.toFixed(2)}
                    </span>
                  </div>

                  <button
                    onClick={() => goToCheckout(2, 'BUNDLE10')}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 rounded-full font-bold text-sm hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Add 2 to Cart — Save 10%
                  </button>
                </motion.div>

                {/* === OPTION 1: Just One === */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="relative rounded-xl border border-gray-200 bg-white p-5 flex flex-col order-2 md:order-1"
                >
                  <h4 className="font-extrabold text-gray-900 text-center mt-2 mb-3" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                    Just One
                  </h4>

                  <div className="w-full aspect-[16/10] rounded-lg overflow-hidden mb-4 bg-gray-50 flex items-center justify-center">
                    <img
                      src={data.image}
                      alt={`1x ${data.name}`}
                      className="h-full object-cover rounded-lg"
                    />
                  </div>

                  <div className="text-center mb-4 flex-1">
                    <div className="text-2xl font-extrabold text-gray-900" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                      ${price1.toFixed(2)}
                    </div>
                    <span className="text-xs text-gray-400 mt-1 block">Standard pricing</span>
                  </div>

                  <button
                    onClick={() => goToCheckout(1)}
                    className="w-full flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 py-3 rounded-full font-bold text-sm hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                  >
                    Continue with 1
                  </button>
                </motion.div>

                {/* === OPTION 3: Family Bundle 3+ === */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="relative rounded-xl border-2 border-purafy-400 bg-purafy-50/30 p-5 flex flex-col order-3"
                >
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 bg-gradient-to-r from-purafy-500 to-purafy-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      Best Value
                    </span>
                  </div>

                  <h4 className="font-extrabold text-gray-900 text-center mt-2 mb-3" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                    Family Bundle — 3+
                  </h4>

                  <div className="w-full aspect-[16/10] rounded-lg overflow-hidden mb-4 bg-gray-50">
                    <img
                      src={data.bundleImage3}
                      alt={`${familyQty}x ${data.name}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center gap-1 p-2"><img src="${data.image}" class="w-1/3 h-full object-cover rounded-lg" /><img src="${data.image}" class="w-1/3 h-full object-cover rounded-lg" /><img src="${data.image}" class="w-1/3 h-full object-cover rounded-lg" /></div>`;
                      }}
                    />
                  </div>

                  {/* Quantity Selector */}
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <button
                      onClick={() => setFamilyQty(Math.max(3, familyQty - 1))}
                      className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-lg font-extrabold text-gray-900 w-6 text-center">{familyQty}</span>
                    <button
                      onClick={() => setFamilyQty(Math.min(10, familyQty + 1))}
                      className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="text-center mb-4 flex-1">
                    <span className="text-sm text-gray-400 line-through">${priceFamilyOriginal.toFixed(2)}</span>
                    <div className="text-2xl font-extrabold text-gray-900" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                      ${priceFamilyDiscounted.toFixed(2)}
                    </div>
                    <span className="inline-block mt-1 text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                      You save ${savingsFamily.toFixed(2)}
                    </span>
                  </div>

                  <button
                    onClick={() => goToCheckout(familyQty, 'FAMILY25')}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purafy-500 to-purafy-600 text-white py-3 rounded-full font-bold text-sm hover:shadow-lg hover:shadow-purafy-500/30 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Add {familyQty} to Cart — Save 25%
                  </button>
                </motion.div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 pb-5 pt-2 border-t border-gray-100">
              <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                <Truck className="w-4 h-4" />
                <span>Free shipping on all orders</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BundleUpsell;
