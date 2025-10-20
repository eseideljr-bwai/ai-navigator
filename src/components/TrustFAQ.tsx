import React from 'react';
import { Clock, Wrench, Shield } from 'lucide-react';

const TrustFAQ: React.FC = () => {
  const faqs = [
    {
      question: 'How long does it take?',
      answer: 'Just minutes.',
      icon: Clock,
    },
    {
      question: 'Do I need technical skills?',
      answer: 'No, everything is explained in plain language.',
      icon: Wrench,
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, your information stays private and protected.',
      icon: Shield,
    },
  ];

  return (
    <div className="bg-blue-50 rounded-xl p-8 mb-16">
      <div className="grid md:grid-cols-3 gap-8">
        {faqs.map((faq, index) => {
          const IconComponent = faq.icon;
          return (
            <div key={index} className="text-center">
              <IconComponent className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrustFAQ;
