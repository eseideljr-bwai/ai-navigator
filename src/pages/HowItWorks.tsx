import React from 'react';
import AppLayout from '@/components/AppLayout';
import HowItWorksSection from '@/components/HowItWorksSection';
import VisualCallout from '@/components/VisualCallout';
import TrustFAQ from '@/components/TrustFAQ';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { usePageMeta } from '@/hooks/usePageMeta';

const HowItWorks: React.FC = () => {
  const navigate = useNavigate();

  usePageMeta({
    title: 'How Bridgeworks AI Works | Analyze, Score, and Automate',
    description: 'See how Bridgeworks AI Navigator turns your business metrics into insight. Input your Sales, Marketing, Service, and Finance data, get an instant performance score, and receive AI-powered recommendations tailored to your goals.',
    keywords: 'AI navigator, business performance analysis, AI recommendations, AI scoring system, AI automation process'
  });


  return (
    <AppLayout>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6 py-16">
          {/* Intro Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              From Performance Metrics to AI Recommendations — in Minutes
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Bridgeworks AI Navigator takes the guesswork out of AI adoption. Just enter the performance metrics you already track, and our system does the rest — scoring results and mapping AI solutions tailored to your needs.
            </p>
          </div>

          {/* Step-by-Step Walkthrough */}
          <HowItWorksSection />

          {/* Visual Callout */}
          <VisualCallout />

          {/* Trust / FAQ Strip */}
          <TrustFAQ />

          {/* CTA Banner */}
          <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              See Your AI Score Today
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Your performance metrics in. AI recommendations out. Simple as that.
            </p>
            <Button 
              size="lg" 
              onClick={() => navigate('/questionnaire')}
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-6 text-lg"
            >
              Get Started for Free
            </Button>

          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default HowItWorks;
