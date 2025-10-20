import React from 'react';

interface BridgeworksLogoWhiteProps {
  className?: string;
}

export const BridgeworksLogoWhite: React.FC<BridgeworksLogoWhiteProps> = ({ className = "h-8" }) => {
  return (
    <img 
      src="https://d64gsuwffb70l.cloudfront.net/685071830dd0eeadcb87ae15_1759417481264_2cac208b.png" 
      alt="Bridgeworks Logo" 
      className={className}
    />
  );
};
