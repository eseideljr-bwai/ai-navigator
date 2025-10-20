import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

import { BridgeworksLogo } from './BridgeworksLogo';

const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-blue-200 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <BridgeworksLogo className="h-16" />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/products" className={`${isActive('/products') ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors font-medium`}>Products</Link>
            <Link to="/solutions" className={`${isActive('/solutions') ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors font-medium`}>Solutions</Link>
            <Link to="/about" className={`${isActive('/about') ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors font-medium`}>About</Link>
            <Link to="/how-it-works" className={`${isActive('/how-it-works') ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors font-medium`}>How it Works</Link>
            <Link to="/pricing" className={`${isActive('/pricing') ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors font-medium`}>Pricing</Link>
            <Link to="/contact-us">
              <Button variant="outline" size="sm" className="border-orange-300 text-orange-600 hover:bg-orange-50">Contact Us</Button>
            </Link>



            <Link to="/questionnaire">
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">Get Started</Button>
            </Link>
          </div>
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-200">
            <div className="flex flex-col space-y-4">
              <Link to="/products" className={`${isActive('/products') ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors font-medium`} onClick={() => setMobileMenuOpen(false)}>Products</Link>
              <Link to="/solutions" className={`${isActive('/solutions') ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors font-medium`} onClick={() => setMobileMenuOpen(false)}>Solutions</Link>
              <Link to="/about" className={`${isActive('/about') ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors font-medium`} onClick={() => setMobileMenuOpen(false)}>About</Link>
              <Link to="/how-it-works" className={`${isActive('/how-it-works') ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors font-medium`} onClick={() => setMobileMenuOpen(false)}>How it Works</Link>
              <Link to="/pricing" className={`${isActive('/pricing') ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors font-medium`} onClick={() => setMobileMenuOpen(false)}>Pricing</Link>

              <Link to="/contact-us" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" size="sm" className="border-orange-300 text-orange-600 hover:bg-orange-50 w-full">Contact Us</Button>
              </Link>


              <Link to="/questionnaire" onClick={() => setMobileMenuOpen(false)}>
                <Button size="sm" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 w-full">Get Started</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
