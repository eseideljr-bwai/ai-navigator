import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface SolutionCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
}

export const SolutionCard: React.FC<SolutionCardProps> = ({ title, description, image, features }) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-blue-100 hover:border-blue-300">
      <CardHeader>
        <div className="w-20 h-20 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 p-4">
          <img src={image} alt={title} className="w-full h-full object-contain" />
        </div>
        <CardTitle className="text-2xl text-gray-900">{title}</CardTitle>
        <CardDescription className="text-base text-gray-600">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-gray-700">
              <span className="text-blue-600 mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>


    </Card>
  );
};
