import React from 'react';
import { Rocket, Users, Lightbulb, Lock, TrendingUp, Clock } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <Rocket className="w-8 h-8 text-orange-500" />,
      title: "Accelerate Growth",
      description: "Boost productivity by 40% with AI-powered automation that handles repetitive tasks, freeing your team to focus on strategic initiatives."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Team Empowerment",
      description: "Transform every team member into a power user with intuitive AI tools that require zero technical expertise to master."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-orange-500" />,
      title: "Innovation Engine",
      description: "Unlock creative potential with AI that generates ideas, optimizes processes, and reveals hidden opportunities in your data."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
      title: "Competitive Edge",
      description: "Stay ahead of the curve with cutting-edge AI solutions that give you the advantage in today's fast-moving market."
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: "Time Savings",
      description: "Reclaim hours every day with intelligent automation that works 24/7, handling tasks while you focus on what matters most."
    },
    {
      icon: <Lock className="w-8 h-8 text-blue-500" />,
      title: "Enterprise Security",
      description: "Rest easy with bank-level security, compliance standards, and privacy protection that keeps your business data safe."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our <span className="text-blue-600">AI Platform</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of business automation with our comprehensive AI ecosystem
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="mb-6 p-3 bg-gray-50 rounded-xl w-fit">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;