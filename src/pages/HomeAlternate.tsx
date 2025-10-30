import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { Target, Users, BookOpen, Shield, ArrowRight } from "lucide-react";

const HomeAlternate = () => {
  const navigate = useNavigate();

  const handleGetScore = () => {
    navigate('/questionnaire');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://d64gsuwffb70l.cloudfront.net/6876bb16aa54743efc18517e_1759412154135_b5ef7f82.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            AI Tools That Work for Your Business
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Bridgeworks AI Navigator scores your performance metrics and delivers tailored recommendations — fast, clear, and practical.
          </p>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
            onClick={handleGetScore}
          >
            Get Your Free AI Score
          </Button>
        </div>
      </section>

      {/* Value Prop Strip */}

      <section className="bg-blue-50 py-8 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-gray-800 font-medium">
            AI is complicated. We make it simple, practical, and secure for small to mid-sized businesses.

          </p>
        </div>
      </section>

      {/* Features 4-up */}
      <section className="py-20 px-4">
         <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={<Target className="w-10 h-10 text-blue-600" />}
            title="Smart AI matching based on your metrics"
            description=""
          />
          <FeatureCard 
            icon={<Users className="w-10 h-10 text-blue-600" />}
            title="Built for real teams and real budgets"
            description=""
          />
          <FeatureCard 
            icon={<BookOpen className="w-10 h-10 text-blue-600" />}
            title="Plain-language results, no expertise needed"
            description=""
          />
          <FeatureCard 
            icon={<Shield className="w-10 h-10 text-blue-600" />}
            title="Private & secure data handling"
            description=""
          />

        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">From metrics to recommendations in minutes</h2>
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {[
              "Enter your business performance metrics",
              "Get your AI Score",
              "See personalized recommendations",
              "Take action with confidence"

            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {idx + 1}
                </div>
                <p className="text-lg">{step}</p>
              </div>
            ))}
          </div>
          <Button 
            size="lg" 
            className="mt-12 bg-blue-600 hover:bg-blue-700"
            onClick={handleGetScore}
          >
            See Your Score in Minutes
          </Button>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Products Built for Your Business Needs</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">Navigator is just the beginning. Bridgeworks AI delivers products that help you put recommendations into action — from automating customer interactions to building modern, conversion-focused websites.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <ProductCard 
              image="https://d64gsuwffb70l.cloudfront.net/6876bb16aa54743efc18517e_1759412159650_9772204e.webp"
              title="AI Agents (Chat, Voice & Virtual)"
              description="Engage customers instantly across chat, phone, and virtual channels. Our AI Agents answer questions, schedule appointments, and automate resolutions — while seamlessly handing off to your team when needed."
              bullets={[
                "24/7 Chat, Voice & Virtual support",
                "Natural, human-like conversations",
                "Secure handoff with full transcripts"
              ]}
              onLearnMore={() => navigate('/products')}
            />
            <ProductCard 
              image="https://d64gsuwffb70l.cloudfront.net/6876bb16aa54743efc18517e_1759412164258_27cc4fae.webp"
              title="AI Website Development"
              description="Launch a high-performing, AI-powered website tailored to your brand. We combine AI-assisted build tools with human strategy to create fast, scalable sites designed to convert."
              bullets={[
                "AI-assisted copy with human editing",
                "SEO, performance, and accessibility built in",
                "Optional AI features (chat, search, FAQs)"
              ]}
              onLearnMore={() => navigate('/products')}
            />
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => navigate('/products')}
            >
              View All Products
            </Button>
          </div>
        </div>


      </section>

      {/* Why Bridgeworks */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Why Bridgeworks AI?</h2>
          <p className="text-xl text-gray-700 mb-12">
            We bridge the gap between today's operations and tomorrow's AI opportunities — with products that are fast, practical, and built for small teams.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Fast Results</h3>
              <p className="text-gray-600">Minutes, not months</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Tailored to You</h3>
              <p className="text-gray-600">Recommendations fit your business</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Designed for Teams</h3>
              <p className="text-gray-600">Built for real people, not just enterprises</p>
            </div>
          </div>
        </div>
      </section>

      {/* Big CTA */}
      <section className="bg-blue-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to see what AI can do for your business?
          </h2>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg mb-4"
            onClick={handleGetScore}
          >
            Get Your Free AI Score
          </Button>
          <p className="text-blue-100 text-sm">
            No credit card required · Free forever plan · Setup in 5 minutes
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="text-center">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ProductCard = ({ image, title, description, bullets, onLearnMore }: any) => (
  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <CardContent className="p-6">
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-6">
        {bullets.map((bullet: string, idx: number) => (
          <li key={idx} className="flex items-start">
            <span className="text-green-600 mr-2">✓</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <Button variant="outline" className="w-full" onClick={onLearnMore}>
        Learn More <ArrowRight className="ml-2 w-4 h-4" />
      </Button>
    </CardContent>
  </Card>
);

export default HomeAlternate;
