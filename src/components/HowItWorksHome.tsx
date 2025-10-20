import React from 'react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import { BarChart3, Target, Lightbulb, Rocket } from 'lucide-react';

const HowItWorksHome: React.FC = () => {
  const navigate = useNavigate();

  const steps = [
    { icon: BarChart3, title: 'Enter your business performance metrics' },
    { icon: Target, title: 'Get your AI Score' },
    { icon: Lightbulb, title: 'See personalized recommendations' },
    { icon: Rocket, title: 'Take action with confidence' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          From Metrics to Recommendations:
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16">In Minutes</p>

        
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {index + 1}
                </div>
                <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <p className="text-lg font-medium">{step.title}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => navigate('/questionnaire')}
          >
            See Your Score in Minutes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksHome;
