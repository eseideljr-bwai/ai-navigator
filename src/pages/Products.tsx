import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import AppLayout from '@/components/AppLayout';
import { usePageMeta } from '@/hooks/usePageMeta';

const Products: React.FC = () => {
  usePageMeta({
    title: 'AI Products Built for Your Business Needs | Bridgeworks AI',
    description: 'Explore Bridgeworks AI products designed for real business impact.',
    keywords: 'AI products, AI agents, virtual agents, AI chatbots, AI website builder'
  });

  return (
    <AppLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h1 className="text-5xl font-bold text-slate-800 mb-6">
            Products That Move Your Business Forward
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Bridgeworks AI delivers practical, results-driven solutions. From intelligent customer agents to high-performing websites, our products help you scale smarter and faster.
          </p>
          <Link to="/questionnaire">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              Get Your Free AI Score
            </Button>
          </Link>
        </div>
      </section>

      {/* IndexAI Section */}
      <section className="py-20" style={{backgroundColor: '#FFF7F2'}}>
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              IndexAI
            </h2>
            <p className="text-lg text-blue-600 font-semibold mb-6">
              A Bridgeworks AI Product
            </p>
            <p className="text-3xl font-bold text-gray-900 mb-8">
              Get Found by AI.
            </p>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                IndexAI helps businesses get discovered across AI-driven platforms like ChatGPT, Gemini, Claude, and Copilot. As search continues to shift toward AI assistants, visibility inside these tools is becoming just as important as SEO.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With IndexAI, Bridgeworks AI ensures your business is properly indexed, optimized, and visible where modern customers are searching — across today's top AI ecosystems.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-bold text-2xl mb-6 text-blue-600">Key Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">AI Visibility:</span>
                    <span className="text-gray-700"> Appear across ChatGPT, Gemini, Claude, and other AI platforms.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Automatic Optimization:</span>
                    <span className="text-gray-700"> We handle listing setup and updates for you.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Data Accuracy:</span>
                    <span className="text-gray-700"> Keep your business information consistent everywhere.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Performance Reporting:</span>
                    <span className="text-gray-700"> Receive monthly insights on visibility and traffic growth.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Cancel Anytime:</span>
                    <span className="text-gray-700"> Month-to-month flexibility with no long-term commitments.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-bold text-2xl mb-6 text-blue-600">Easy Setup</h3>
              <ol className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">1</span>
                  <div>
                    <span className="font-semibold text-gray-900">Sign Up</span>
                    <span className="text-gray-700"> — Complete our quick form with your business details.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <div>
                    <span className="font-semibold text-gray-900">Verification</span>
                    <span className="text-gray-700"> — We confirm your information and plan selection.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <div>
                    <span className="font-semibold text-gray-900">AI Listing Activation</span>
                    <span className="text-gray-700"> — Your business is distributed across major AI platforms.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <div>
                    <span className="font-semibold text-gray-900">Start Seeing Results</span>
                    <span className="text-gray-700"> — Expect to see traffic and discovery within 30 days.</span>
                  </div>
                </li>
              </ol>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-2xl font-bold text-gray-900">
                  Plans Starting at: <span className="text-blue-600">$49/month</span>
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/indexai">
              <Button size="lg" style={{backgroundColor: '#6EC1E4'}} className="hover:opacity-90 text-white">
                Learn More About IndexAI
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section className="py-20" style={{backgroundColor: '#EAF7FC'}}>
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AI Agents — Chat, Voice & Virtual
            </h2>
            <p className="text-2xl font-semibold mb-6" style={{color: '#F9A66C'}}>
              Always-on support across every channel.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              AI Agents give your business the power to engage customers instantly — whether it's a chat on your website, a phone call after hours, or a message on social media. With Chat, Voice, and Virtual Agents, you can provide 24/7 coverage, reduce workload, and improve customer experience without adding staff.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-3 text-gray-900">Chat Agents</h3>
              <p className="text-gray-700">
                Engage visitors on your website or app with instant answers, guided product discovery, and personalized recommendations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-3 text-gray-900">Voice Agents</h3>
              <p className="text-gray-700">
                Handle calls naturally, book appointments, route inquiries, and ensure no call goes unanswered.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-3 text-gray-900">Virtual Agents</h3>
              <p className="text-gray-700">
                Deliver seamless, human-like service that improves satisfaction, shortens wait times, and automates routine resolutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-3 text-gray-900">Smart Automation</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• Summarize conversations</li>
                <li>• Update your CRM</li>
                <li>• Send follow-ups automatically</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
            <h3 className="font-bold text-xl mb-4">Additional Capabilities</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                Natural language understanding
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                Secure handoff with transcripts and context
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                Knowledge base sync
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                Analytics dashboard for resolution and satisfaction
              </li>
            </ul>
          </div>

          <div style={{backgroundColor: '#FFF5EE'}} className="p-8 rounded-lg mb-8">
            <h3 className="font-bold text-xl mb-4">Use Cases</h3>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                Customer service & help desks
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                Scheduling-heavy businesses
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                Lead nurturing & follow-ups
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                After-hours coverage
              </li>
            </ul>
          </div>

          <div className="text-center">
            <Link to="/contact-us">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                Talk to Us About AI Agents
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Website Development */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AI Website Development
            </h2>
            <p className="text-2xl font-semibold mb-6 text-blue-500">
              A modern, conversion-focused site — built faster with AI.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We combine human strategy with AI-assisted tools to deliver websites that are fast, accessible, and designed to convert. From messaging to design to automation, your site will be powered by AI but tailored to your brand by our team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div style={{backgroundColor: '#FFF5EE'}} className="p-8 rounded-lg">
              <h3 className="font-bold text-xl mb-4">Feature Highlights</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  Strategy & site map aligned to your goals
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  AI-assisted copywriting (human-edited)
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  Component-based design system
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  Performance, SEO, and accessibility built in
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  AI features like search, FAQs, and chatbots
                </li>
              </ul>
            </div>

            <div style={{backgroundColor: '#FFF5EE'}} className="p-8 rounded-lg">
              <h3 className="font-bold text-xl mb-4">Additional Capabilities</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  Fast, secure hosting with built-in SEO
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  Lead capture + CRM integrations
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
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
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Start an AI Website Project
              </Button>
            </Link>
          </div>
        </div>
      </section>


    </AppLayout>
  );
};

export default Products;
