import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;