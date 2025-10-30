import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function IndexAIPricing() {
  const plans = [
    { name: 'Starter', description: 'Get listed on core AI platforms for essential visibility.', price: 49 },
    { name: 'Pro', description: 'Broader reach, more keywords, and priority updates.', price: 99 },
    { name: 'Enterprise', description: 'Multi-location listings, analytics, and dedicated support.', price: 199 }
  ];

  const scrollToForm = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Choose the Plan That Fits Your Business</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-gray-600 mb-6 min-h-[60px]">{plan.description}</p>
              <div className="mb-6">
                <span className="text-5xl font-bold">${plan.price}</span>
                <span className="text-gray-600">/month</span>
              </div>
              <Button onClick={scrollToForm} className="w-full bg-blue-600 hover:bg-blue-700">Get Started</Button>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">All plans include setup, updates, and cancellation flexibility — no contracts required.</p>
      </div>
    </section>
  );
}
