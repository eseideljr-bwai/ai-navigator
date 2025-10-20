import React from 'react';
import { BridgeworksLogoWhite } from './BridgeworksLogoWhite';

import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <Link to="/questionnaire">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <BridgeworksLogoWhite className="h-12" />

            </div>
            <p className="text-gray-300 text-sm">
              Transforming businesses with intelligent AI solutions.
            </p>
          </div>
          <div className="md:col-start-3 grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4 text-blue-300">Solutions</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link to="/how-it-works" className="hover:text-white transition-colors">AI Navigator</Link></li>
                <li><Link to="/products" className="hover:text-white transition-colors">AI Agents</Link></li>
                <li><Link to="/products" className="hover:text-white transition-colors">AI Website Development</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-blue-300">Company</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/contact-us" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/questionnaire" className="hover:text-white transition-colors">Get Started</Link></li>
              </ul>
            </div>
          </div>

        </div>
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Bridgeworks AI. All rights reserved.</p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;