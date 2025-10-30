import { useEffect } from 'react';

export default function IndexAIHero() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js-na2.hsforms.net/forms/embed/244135672.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="absolute inset-0 opacity-20">
        <img src="https://d64gsuwffb70l.cloudfront.net/6876bb16aa54743efc18517e_1760641443821_3f457cb8.webp" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get Found by AI.</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-200">Your business, indexed across ChatGPT, Gemini, and the next generation of AI search.</h2>
            <p className="text-lg text-blue-100">IndexAI by Bridgeworks AI helps your business appear in today's most powerful AI platforms — making it easy for new customers to discover, connect, and engage.</p>
          </div>
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Start Your AI Discovery</h3>
            <div className="hs-form-frame" data-region="na2" data-form-id="155aeed7-6b75-4ebf-9481-80a820202fd2" data-portal-id="244135672"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
