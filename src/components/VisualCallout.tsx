import React from 'react';
import { ArrowRight } from 'lucide-react';

const VisualCallout: React.FC = () => {
  const steps = [
    'Performance Metrics',
    'Score',
    'Recommendations',
    'Action'
  ];

  return (
    <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl p-8 mb-16">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="bg-white rounded-lg px-6 py-4 shadow-lg">
              <p className="text-gray-900 font-semibold text-center whitespace-nowrap">
                {step}
              </p>
            </div>
            {index < steps.length - 1 && (
              <ArrowRight className="w-6 h-6 text-white hidden md:block" />
            )}
            {index < steps.length - 1 && (
              <ArrowRight className="w-6 h-6 text-white rotate-90 md:hidden" />
            )}
          </React.Fragment>
        ))}
      </div>
      <p className="text-white text-center text-lg font-medium">
        No complexity. No jargon. Just clear next steps.
      </p>
    </div>
  );
};

export default VisualCallout;
