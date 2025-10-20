import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, BarChart3, Lightbulb, Rocket } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: '1',
      title: 'Enter Your Performance Metrics',
      description: 'Choose the part of your business you want to improve — Sales, Marketing, Customer Service, or Finance — and add a few simple numbers you already measure.',
      icon: FileText,
    },
    {
      number: '2', 
      title: 'Get Your AI Score',
      description: 'Navigator reviews your performance metrics and gives you a clear, easy-to-understand score.',
      icon: BarChart3,
    },
    {
      number: '3',
      title: 'Receive AI Recommendations',
      description: 'Based on your results, Navigator suggests AI-powered tools designed to help you improve where it matters most.',
      icon: Lightbulb,
    },
    {
      number: '4',
      title: 'Take Action with Confidence',
      description: 'Review your personalized recommendations and decide what to implement — whether you start small or scale big.',
      icon: Rocket,
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8 mb-16">
      {steps.map((step, index) => {
        const IconComponent = step.icon;
        return (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 flex items-center justify-center text-white font-bold text-lg mr-4 flex-shrink-0">
                  {step.number}
                </div>
                <IconComponent className="w-8 h-8 text-blue-600 mt-1" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default HowItWorksSection;
