import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const WhyBridgeworksSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-orange-500">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Future of Business is <span className="text-orange-300">AI-Powered</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Join thousands of forward-thinking companies already transforming their operations with intelligent automation
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Don't let your competitors get ahead. Start your AI transformation today and experience the power of intelligent automation.
            </p>
            <Link to="/questionnaire">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBridgeworksSection;