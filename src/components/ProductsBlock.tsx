import React from 'react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, Globe, Check, Search } from 'lucide-react';

const ProductsBlock: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Products Built for Your Business Needs
        </h2>
        <p className="text-xl text-gray-600 text-center max-w-4xl mx-auto mb-16">
          Navigator is just the beginning. Bridgeworks AI delivers products that help you put recommendations into action — from automating customer interactions to building modern, conversion-focused websites.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <MessageSquare className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold mb-4">AI Agents</h3>
            <p className="text-gray-600 mb-6">
              Engage customers instantly across chat, phone, and virtual channels with 24/7 AI-powered support.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start"><Check className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" /><span>24/7 availability</span></li>
              <li className="flex items-start"><Check className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" /><span>Natural conversations</span></li>
              <li className="flex items-start"><Check className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" /><span>Seamless handoff</span></li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Globe className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold mb-4">AI Website Development</h3>
            <p className="text-gray-600 mb-6">
              Launch high-performing, AI-powered websites tailored to your brand and designed to convert.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start"><Check className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" /><span>AI-assisted copy</span></li>
              <li className="flex items-start"><Check className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" /><span>SEO & performance</span></li>
              <li className="flex items-start"><Check className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" /><span>Optional AI features</span></li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Search className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold mb-4">IndexAI</h3>
            <p className="text-gray-600 mb-6">
              Get your business discovered by AI platforms like ChatGPT and Gemini. Be visible where customers search.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start"><Check className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" /><span>AI platform listings</span></li>
              <li className="flex items-start"><Check className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" /><span>Managed updates</span></li>
              <li className="flex items-start"><Check className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" /><span>No contracts</span></li>
            </ul>
            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700"
              onClick={() => navigate('/indexai')}
            >
              Learn More
            </Button>
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => navigate('/products')}
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsBlock;
