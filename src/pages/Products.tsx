import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import AppLayout from '@/components/AppLayout';
import { usePageMeta } from '@/hooks/usePageMeta';

const Products: React.FC = () => {
  usePageMeta({
    title: 'AI Products Built for Your Business Needs | Bridgeworks AI',
    description: 'Explore Bridgeworks AI products designed for real business impact. From AI Agents that automate customer conversations to AI Website Development that converts visitors into customers, our tools are built to help you operate smarter and scale faster.',
    keywords: 'AI products, AI agents, virtual agents, AI chatbots, AI website builder, AI automation, voice AI, business AI tools'
  });


  return (
    <AppLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Products that move your business forward
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Bridgeworks AI delivers practical, results-driven solutions. From intelligent customer agents to high-performing websites, our products help you scale smarter and faster.
          </p>
          <Link to="/questionnaire">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
              Get Your Free AI Score
            </Button>
          </Link>
        </div>
      </section>

      {/* Product 1: AI Agents */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AI Agents - Chat, Voice & Virtual

            </h2>
            <p className="text-2xl text-blue-600 font-semibold mb-6">
              Always-on support across every channel.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              AI Agents give your business the power to engage customers instantly — whether it's a chat on your website, a phone call after hours, or a request on social media. With Chat, Voice, and Virtual Agents, you can provide 24/7 coverage, reduce workload, and improve customer experience without hiring more staff.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 flex items-start">
                <Check className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                Chat Agents
              </h3>
              <p className="text-gray-700">
                Engage visitors on your website or app with instant answers, guided product discovery, and personalized recommendations.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 flex items-start">
                <Check className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                Voice Agents
              </h3>
              <p className="text-gray-700">
                Handle calls naturally, book appointments, route inquiries, and ensure no call goes unanswered.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 flex items-start">
                <Check className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                Virtual Agents
              </h3>
              <p className="text-gray-700">
                Deliver seamless, human-like service that improves satisfaction, shortens wait times, and automates routine resolutions.
              </p>

            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 flex items-start">
                <Check className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                Smart Automation
              </h3>
              <p className="text-gray-700">
                Summarize conversations, update your CRM, and send follow-ups automatically.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h3 className="font-bold text-xl mb-4">Additional Capabilities</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                Natural language understanding for real conversations
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                Secure handoff with transcripts and context
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                Syncs with your knowledge base, docs, and FAQs
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                Analytics dashboard for volume, resolution, and satisfaction
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 p-8 rounded-lg mb-8">
            <h3 className="font-bold text-xl mb-4">Use Cases</h3>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                Customer service & help desks
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                Intake & scheduling-heavy businesses
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                Sales follow-up and lead nurturing
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                After-hours coverage and overflow handling
              </li>
            </ul>
          </div>

          <div className="text-center">
            <Link to="/contact-us">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                Talk to Us About AI Agents
              </Button>
            </Link>
          </div>

        </div>
      </section>

      {/* Product 2: AI Website Development */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AI Website Development
            </h2>
            <p className="text-2xl text-orange-600 font-semibold mb-6">
              A modern, conversion-focused site — built faster with AI.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We combine human strategy with AI-assisted tools to deliver websites that are fast, accessible, and designed to convert. From messaging to design to automation, your site will be powered by AI but tailored to your brand by our team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="font-bold text-xl mb-4">Feature Highlights</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                  Strategy & site map aligned to your goals
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                  AI-assisted copywriting (human-edited)
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                  Component-based design system
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                  Performance, SEO, and accessibility built in
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                  AI features like search, FAQs, and chatbots
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="font-bold text-xl mb-4">Additional Capabilities</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                  Fast, secure hosting with built-in SEO
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                  Lead capture + CRM integrations
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                  Privacy and compliance tools
                </li>
              </ul>
            </div>
          </div>


          <div className="bg-blue-50 p-8 rounded-lg mb-8">
            <h3 className="font-bold text-xl mb-4">Use Cases</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                Launching a new brand or website
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                Increasing conversions on an existing site
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                Businesses that want speed + scalability without complexity
              </li>
            </ul>
          </div>

          <div className="text-center">
            <Link to="/contact-us">
              <Button size="lg" className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800">
                Start an AI Website Project
              </Button>
            </Link>
          </div>
        </div>


      </section>

      {/* Cross-Sell Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Not sure where to start?
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            AI Navigator helps you prioritize by scoring your business performance metrics and pointing you to the product that will drive the biggest impact — whether that's smarter customer interactions with AI Agents or higher conversions with a new AI-powered website.
          </p>
          <Link to="/questionnaire">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700">
              Get Your Free AI Score
            </Button>
          </Link>
        </div>
      </section>
    </AppLayout>
  );
};

export default Products;
