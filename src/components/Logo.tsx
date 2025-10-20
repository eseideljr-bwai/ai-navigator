import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16'
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
          <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
            <div className="w-3 h-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full"></div>
          </div>
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
      </div>
      <div className="flex flex-col">
        <span className={`font-bold text-gray-900 ${size === 'lg' ? 'text-2xl' : size === 'md' ? 'text-xl' : 'text-lg'}`}>
          Bridgeworks
        </span>
        <span className={`text-blue-600 font-medium ${size === 'lg' ? 'text-sm' : 'text-xs'} -mt-1`}>
          AI
        </span>
      </div>
    </div>
  );
};

export default Logo;