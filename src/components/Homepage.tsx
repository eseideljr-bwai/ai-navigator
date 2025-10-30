import React from 'react';
import HeroSection from './HeroSection';
import ValuePropositionStrip from './ValuePropositionStrip';
import HowItWorksHome from './HowItWorksHome';
import ProductsBlock from './ProductsBlock';
import BenefitsSection from './BenefitsSection';
import WhyBridgeworksSection from './WhyBridgeworksSection';


const Homepage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ValuePropositionStrip />
      <HowItWorksHome />
      <ProductsBlock />
      <BenefitsSection />
      <WhyBridgeworksSection />

    </div>
  );
};

export default Homepage;
