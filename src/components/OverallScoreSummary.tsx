import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Mail, Link as LinkIcon } from 'lucide-react';

interface OverallScoreSummaryProps {
  grade: string;
  summary: string;
  opportunities: string[];
  primaryGoal: string;
}

const OverallScoreSummary = ({ grade, summary, opportunities, primaryGoal }: OverallScoreSummaryProps) => {
  return (
    <Card className="mb-8 bg-gradient-to-br from-blue-50 to-indigo-100">
      <CardContent className="p-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-2">Overall Grade</h2>
          <div className="text-7xl font-bold text-blue-600">{grade}</div>
        </div>
        
        <div className="space-y-4 mb-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">Summary</h3>
            <p className="text-gray-700">{summary}</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-2">Top Opportunities</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {opportunities.map((opp, idx) => (
                <li key={idx}>{opp}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-2">Primary Goal</h3>
            <p className="text-gray-700 font-medium">{primaryGoal}</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-3 justify-center">
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Download PDF
          </Button>
          <Button variant="outline" className="gap-2">
            <Mail className="w-4 h-4" />
            Email Results
          </Button>
          <Button variant="outline" className="gap-2">
            <LinkIcon className="w-4 h-4" />
            Copy Link
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default OverallScoreSummary;
