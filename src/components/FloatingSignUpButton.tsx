import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const FloatingSignUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the hero section height (approximately the form area)
      // Show button once user scrolls past ~800px (typical hero section height)
      const scrollPosition = window.scrollY;
      const heroHeight = 800; // Approximate height of hero section with form
      
      setIsVisible(scrollPosition > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Check initial position
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-6 py-6 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2 font-semibold text-base animate-in fade-in slide-in-from-bottom-4"
      size="lg"
    >
      <span>Sign Up Now</span>
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
};
