import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import IndexAIHero from '@/components/IndexAIHero';
import IndexAIPricing from '@/components/IndexAIPricing';
import IndexAIFAQ from '@/components/IndexAIFAQ';
import { FloatingSignUpButton } from '@/components/FloatingSignUpButton';
import AppLayout from '@/components/AppLayout';
import { AppProvider } from '@/contexts/AppContext';


export default function IndexAI() {

  useEffect(() => {
    document.title = 'IndexAI | Get Found by AI Search Platforms | Bridgeworks AI';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'IndexAI by Bridgeworks AI helps your business appear in ChatGPT, Gemini, and next-gen AI search platforms. Get discovered by customers using AI assistants.');
    }
  }, []);

  const scrollToForm = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AppProvider>
      <AppLayout>
        <div className="min-h-screen">

      <IndexAIHero />

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold mb-6">Traditional SEO Can't Keep Up.</h2>
              <p className="text-lg text-gray-700 mb-4">The way people search is changing. Instead of typing keywords into search engines, millions are asking AI assistants like ChatGPT, Gemini, and Copilot for recommendations.</p>
              <p className="text-lg text-gray-700 mb-4">If your business isn't visible inside these platforms, you're invisible to your next customers.</p>
              <p className="text-lg font-semibold text-blue-600">IndexAI bridges that gap — putting your business directly where AI looks for answers.</p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img src="https://d64gsuwffb70l.cloudfront.net/6876bb16aa54743efc18517e_1760641444616_f1c24f77.webp" alt="Traditional search challenges" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1 rounded-xl overflow-hidden shadow-xl">
              <img src="https://d64gsuwffb70l.cloudfront.net/6876bb16aa54743efc18517e_1760641446043_3d94c5bd.webp" alt="AI search solution" className="w-full h-full object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-6">Meet IndexAI — your bridge to AI visibility.</h2>
              <p className="text-lg text-gray-700 mb-8">We help your business get listed, verified, and optimized across AI chat and discovery tools. From setup to ongoing updates, we manage everything behind the scenes so you can focus on running your business.</p>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-4">How It Works:</h3>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div><h4 className="font-semibold text-lg mb-1">Submit Your Info</h4><p className="text-gray-600">Tell us about your business.</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div><h4 className="font-semibold text-lg mb-1">We Handle Setup</h4><p className="text-gray-600">We get your listings active across AI search platforms.</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div><h4 className="font-semibold text-lg mb-1">You Get Found</h4><p className="text-gray-600">New customers discover your business through AI tools.</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <IndexAIPricing />

      {/* Why Bridgeworks Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">Powered by Bridgeworks AI — Performance-Driven Digital Solutions.</h2>
          <p className="text-lg text-gray-700">Bridgeworks AI creates technology that empowers businesses to thrive in the AI era. With a focus on performance, visibility, and automation, we help you bridge the gap between human connection and artificial intelligence.</p>
        </div>
      </section>

      <IndexAIFAQ />

      {/* Support Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Need help or have questions?</h2>
          <p className="text-lg text-gray-700 mb-8">Our team is here to support you. Whether you're signing up or already listed, we're ready to help.</p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <a href="mailto:support@bridgeworks.ai">Contact Support</a>
          </Button>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get Discovered. Stay Visible. Grow with AI.</h2>
          <Button onClick={scrollToForm} size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
            Start Your AI Discovery <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      <FloatingSignUpButton />
        </div>
      </AppLayout>
    </AppProvider>
  );
}

