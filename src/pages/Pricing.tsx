import AppLayout from '@/components/AppLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { usePageMeta } from '@/hooks/usePageMeta';

const Pricing = () => {
  usePageMeta({
    title: 'Pricing | Bridgeworks AI Navigator and Product Solutions',
    description: 'Flexible pricing for every business stage. Choose between AI Navigator recommendations, AI setup support, or full implementation services — tailored to your goals and budget.',
    keywords: 'AI pricing, AI solutions cost, AI implementation services, AI navigator plans, business AI subscription'
  });

  const plans = [
    {
      name: 'Free',
      price: 'Free',
      period: 'forever',
      description: 'Best for individuals or small teams trying AI Navigator for the first time.',
      features: [
        'Access to Sales, Marketing, Customer Service, and Finance performance scoring (basic)',
        'AI recommendations based on top performance gaps',
        '1 user account',
        'Private & secure data handling'
      ],
      cta: 'Start Free',
      popular: false
    },
    {
      name: 'Pro',
      price: '$49',
      period: '/month',
      description: 'Best for growing teams that want advanced insights and broader recommendations.',
      features: [
        'Deeper performance scoring across all departments',
        'Expanded AI recommendations with priority insights',
        'Multiple users (up to 5)',
        'Downloadable reports',
        'Email support'
      ],
      cta: 'Upgrade to Pro',
      popular: true
    },
    {
      name: 'Business',
      price: 'Custom',
      period: '',
      description: 'Best for larger teams needing full flexibility and support.',
      features: [
        'Unlimited scoring and recommendations',
        'Advanced analytics & benchmarking',
        'Unlimited users',
        'Dedicated account manager',
        'Priority support'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'Can I stay on Free forever?',
      answer: 'Yes, Free is always available.'
    },
    {
      question: 'Do I need a credit card to start?',
      answer: 'No, start free without a card.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, always encrypted and private.'
    }
  ];

  return (
    <AppLayout>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Start free. Upgrade when you're ready for deeper insights and more features.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Get Started Free</Button>
        </div>

        {/* Pricing Cards */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <Card key={plan.name} className={`relative ${plan.popular ? 'border-blue-600 border-2 shadow-xl' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`} variant={plan.popular ? 'default' : 'outline'}>
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="container mx-auto px-4 py-16 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Closing CTA */}
        <div className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Find Your AI Fit?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Start free today and see which AI tools can move your business forward.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Your Free AI Score
            </Button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Pricing;
