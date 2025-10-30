import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function IndexAIFAQ() {
  const faqs = [
    {
      question: 'How does IndexAI list my business?',
      answer: 'We partner with AI discovery networks that ensure your business data is recognized by AI models like ChatGPT and Gemini.'
    },
    {
      question: 'How long does it take to appear?',
      answer: 'Most businesses are visible within 2–3 weeks after setup.'
    },
    {
      question: 'Do I need to manage it myself?',
      answer: 'No — we handle everything for you.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, IndexAI plans are month-to-month with no long-term commitments.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
