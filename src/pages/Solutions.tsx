import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { SolutionCard } from '@/components/SolutionCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Target, Users, TrendingUp } from 'lucide-react';


const Solutions: React.FC = () => {
  const solutions = [
    {
      title: "Sell Smarter, Not Harder",
      description: "Close more deals and save time by focusing on the opportunities that matter most.",
      image: "https://d64gsuwffb70l.cloudfront.net/6876bb16aa54743efc18517e_1759249075436_9b6574b8.webp",
      features: [
        "AI-powered lead scoring to rank prospects",
        "Deal prioritization to spotlight engaged buyers",
        "Automated follow-up reminders and messages",
        "Predictive insights to keep pipelines moving"
      ]
    },
    {
      title: "Turn Traffic Into Customers",
      description: "Transform clicks into conversions with personalized, AI-driven marketing.",
      image: "https://d64gsuwffb70l.cloudfront.net/6876bb16aa54743efc18517e_1759249079618_602fa29d.webp",
      features: [
        "Dynamic content personalization for every visitor",
        "Real-time product and service recommendations",
        "Abandoned cart and form recovery campaigns",
        "Campaign optimization based on engagement data"
      ]
    },
    {
      title: "Support Customers Around the Clock",
      description: "Deliver faster, friendlier support while reducing team workload.",
      image: "https://d64gsuwffb70l.cloudfront.net/6876bb16aa54743efc18517e_1759249083521_44d0455c.webp",
      features: [
        "24/7 chatbots to answer common questions",
        "Sentiment detection to identify frustrated customers",
        "Smart ticket routing to the right support agents",
        "Automated responses for repetitive inquiries"
      ]
    },
    {
      title: "Take the Stress Out of Finance",
      description: "Automate routine tasks and gain clearer visibility into your bottom line.",
      image: "https://d64gsuwffb70l.cloudfront.net/6876bb16aa54743efc18517e_1759249088067_584ff6b2.webp",
      features: [
        "Invoice tracking and automated reminders",
        "Intelligent expense and document processing",
        "Automated data entry and reconciliation",
        "AI-driven cash flow forecasting"
      ]
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-5"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Every Part of Your Business</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Bridgeworks AI Navigator pinpoints opportunities in Sales, Marketing, Customer Service, and Finance — then recommends the tools that can save time, cut costs, and drive growth.
            </p>
            <Link to="/questionnaire">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                See Your AI Score <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>


          </div>

        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Solutions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive suite of AI-powered solutions tailored to meet your business needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {solutions.map((solution, index) => (
              <SolutionCard key={index} {...solution} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Why Choose Our Solutions?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Fast Implementation", desc: "Get up and running in days, not months" },
              { icon: Target, title: "Precision Results", desc: "AI-driven accuracy for better outcomes" },
              { icon: Users, title: "Expert Support", desc: "24/7 dedicated customer success team" },
              { icon: TrendingUp, title: "Scalable Growth", desc: "Solutions that grow with your business" }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our solutions can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-us">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                Contact Us
              </Button>
            </Link>
            <Link to="/questionnaire">
              <Button size="lg" variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50">
                Get your AI Score
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;
