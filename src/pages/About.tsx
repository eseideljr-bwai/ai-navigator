import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Lightbulb, CheckSquare, TrendingUp, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import AppLayout from '@/components/AppLayout';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function About() {
  usePageMeta({
    title: 'About Bridgeworks AI | Building the Bridge Between Business and Artificial Intelligence',
    description: 'Bridgeworks AI was founded to help small and mid-sized businesses bridge the gap between potential and performance through practical AI adoption. Learn more about our founders and mission to make AI accessible, measurable, and results-driven.',
    keywords: 'Bridgeworks AI team, about Bridgeworks AI, business AI mission, small business AI adoption'
  });


  const values = [
    {
      icon: Lightbulb,
      title: 'Clarity',
      description: 'Plain-language insights, no jargon.'
    },
    {
      icon: CheckSquare,
      title: 'Practicality',
      description: 'Solutions tied directly to outcomes.'
    },
    {
      icon: TrendingUp,
      title: 'Scalability',
      description: 'Start small, grow at your pace.'
    }
  ];

  const leaders = [
    {
      name: 'Eric Seidel, Sr.',
      title: 'Founder & CEO',
      linkedin: ''
    },
    {
      name: 'Amber Seidel',
      title: 'Founder & CFO',
      linkedin: ''
    },
    {
      name: 'Eric Seidel, Jr.',
      title: 'Founder & President',
      linkedin: 'https://www.linkedin.com/in/ewjseidel/'
    }
  ];


  return (
    <AppLayout>
    <div className="min-h-screen">

      {/* Hero Section */}
      <section 
        className="relative py-24 px-6 text-center text-white"
        style={{
          backgroundImage: 'url(https://d64gsuwffb70l.cloudfront.net/6876bb16aa54743efc18517e_1759255548792_f6958c40.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">
            Building the Bridge Between Complexity and Clarity in AI
          </h1>
          <p className="text-xl mb-8 text-gray-100">
            Bridgeworks AI helps small and mid-sized businesses cut through the noise of artificial intelligence with clear, practical, and scalable solutions.
          </p>
          <Link to="/questionnaire">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Your Free AI Score
            </Button>
          </Link>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Bridgeworks AI was founded with one mission: to make AI adoption simple, accessible, and results-driven. Too many small and mid-sized businesses are overwhelmed by hype, left behind by enterprise-only solutions, or unsure where to start. We built Bridgeworks AI to change that. By connecting your performance metrics to tailored AI recommendations, we make adoption clear, practical, and achievable for any team.
            </p>
          </div>
          <div>
            <img 
              src="https://d64gsuwffb70l.cloudfront.net/6876bb16aa54743efc18517e_1759255549661_abc51292.webp"
              alt="Bridgeworks team collaboration"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            What We Stand For
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-blue-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Why Choose Us</h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            AI doesn't have to be complicated or intimidating. Bridgeworks AI gives you the confidence to move from exploration to execution, with tools and guidance designed for real-world businesses — not just enterprises.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-gray-700 font-semibold">
            <div className="flex items-center gap-2">
              <span className="text-blue-600">✓</span> 100% Data Privacy
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-600">✓</span> Built for SMBs
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-600">✓</span> Results in Minutes
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl text-gray-400">👤</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{leader.name}</h3>
                <p className="text-gray-600 mb-4">{leader.title}</p>
                {leader.linkedin && (
                  <a href={leader.linkedin} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Linkedin className="w-4 h-4" />
                      LinkedIn Profile
                    </Button>
                  </a>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Closing CTA */}
      <section className="py-20 px-6 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Ready to See What AI Can Do for You?
          </h2>
          <Link to="/questionnaire">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Your Free AI Score
            </Button>
          </Link>
        </div>
      </section>
    </div>
    </AppLayout>
  );
}

