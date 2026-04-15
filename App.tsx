import React from 'react';
import { UpsellProvider } from './components/UpsellContext';
import BundleUpsell from './components/BundleUpsell';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSelector from './components/ProductSelector';
import Benefits from './components/Benefits';
import ProductShowcase from './components/ProductShowcase';
import HowItWorks from './components/HowItWorks';
import VideoShowcase from './components/VideoShowcase';
import MiniShowcase from './components/MiniShowcase';
import Testimonials from './components/Testimonials';
import Lifestyle from './components/Lifestyle';
import ComparisonTable from './components/ComparisonTable';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

const App: React.FC = () => {
  return (
    <UpsellProvider>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <ProductSelector />
        <Benefits />
        <ProductShowcase />
        <HowItWorks />
        <VideoShowcase />
        <MiniShowcase />
        <Testimonials />
        <Lifestyle />
        <ComparisonTable />
        <FAQ />
        <CTA />
        <Footer />
        <StickyCTA />
        <BundleUpsell />
      </div>
    </UpsellProvider>
  );
};

export default App;
