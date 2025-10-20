import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-1 bg-orange-400/20 backdrop-blur-sm rounded-full px-4 py-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-orange-400 fill-current" />
              ))}
              <span className="text-orange-400 font-medium ml-2">Trusted by businesses worldwide</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Transform
            <span className="block text-transparent bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text">
              Your Business?
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
            Join the AI revolution and unlock your team's full potential with intelligent automation that works.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/questionnaire">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg px-8 py-4 rounded-full font-semibold shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
              >
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>

            <Button 
              size="lg" 
              variant="outline"
              className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white text-lg px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;