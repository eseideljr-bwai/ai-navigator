import React from 'react';
import AppLayout from '@/components/AppLayout';
import Homepage from '@/components/Homepage';
import { AppProvider } from '@/contexts/AppContext';
import { usePageMeta } from '@/hooks/usePageMeta';


const Index: React.FC = () => {
  usePageMeta({
    title: 'Bridgeworks AI | Navigate the Future of Business with AI',
    description: 'Bridgeworks AI helps small and mid-sized businesses adopt artificial intelligence with confidence. Our AI Navigator analyzes your performance metrics across Sales, Marketing, Customer Service, and Finance — then recommends practical AI products like AI Agents, AI Chat, and AI Website Development to help you grow smarter.',
    keywords: 'AI for small business, AI automation tools, business AI solutions, AI productivity, AI customer service, AI website development, AI agents, AI navigator, AI tool recommendations'
  });


  return (
    <AppProvider>
      <AppLayout>
        <Homepage />
      </AppLayout>
    </AppProvider>
  );
};

export default Index;