import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Zap, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BridgeworksLogo } from './BridgeworksLogo';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-blue-100 to-orange-50 py-20">
      <div className="container mx-auto px-6 text-center">
        
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Unlock Your Business Potential with{' '}
          <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
            AI Innovation
          </span>
        </h1>
        
        <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
          Discover cutting-edge AI solutions tailored for modern businesses. 
          From automation to insights, we've got the tools to accelerate your growth.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
            <Zap className="w-8 h-8 text-orange-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Lightning Fast</h3>
            <p className="text-gray-600 text-sm">Deploy AI solutions in minutes, not months</p>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
            <Target className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Precision Matching</h3>
            <p className="text-gray-600 text-sm">AI tools perfectly aligned with your needs</p>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
            <Sparkles className="w-8 h-8 text-orange-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Future Ready</h3>
            <p className="text-gray-600 text-sm">Stay ahead with next-gen technology</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/questionnaire">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3">
              Start Your AI Journey
            </Button>
          </Link>
          <Link to="/how-it-works">
            <Button size="lg" variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50 px-8 py-3">
              Learn More
            </Button>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;