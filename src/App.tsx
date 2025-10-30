import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import HowItWorks from "./pages/HowItWorks";
import Solutions from "./pages/Solutions";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";
import HomeAlternate from "./pages/HomeAlternate";
import IndexAI from "./pages/IndexAI";



import Questionnaire from "./pages/Questionnaire";
import QuizResults from "./pages/QuizResults";


import NotFound from "./pages/NotFound";


const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="light">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />

          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/home-alternate" element={<HomeAlternate />} />
            <Route path="/indexai" element={<IndexAI />} />



            <Route path="/questionnaire" element={<Questionnaire />} />
            <Route path="/quiz-results" element={<QuizResults />} />


            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;