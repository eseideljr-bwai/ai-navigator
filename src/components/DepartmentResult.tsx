import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import KPITable from './KPITable';

interface KPIMetric {
  metric: string;
  yourValue: string;
  target: string;
  direction: 'higher' | 'lower';
}

interface DepartmentResultProps {
  title: string;
  grade: string;
  gradeColor: string;
  metrics: KPIMetric[];
  summary: string;
  recommendations: string[];
  suggestedTool: string;
  toolDescription: string;
}

const DepartmentResult = ({
  title,
  grade,
  gradeColor,
  metrics,
  summary,
  recommendations,
  suggestedTool,
  toolDescription
}: DepartmentResultProps) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-2xl">{title}</CardTitle>
          <span className={`text-3xl font-bold ${gradeColor}`}>{grade}</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="font-semibold text-lg mb-3">KPI Snapshot</h4>
          <KPITable metrics={metrics} />
        </div>
        
        <div>
          <h4 className="font-semibold text-lg mb-2">Summary</h4>
          <p className="text-gray-700">{summary}</p>
        </div>
        
        <div>
          <h4 className="font-semibold text-lg mb-2">Recommendations</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {recommendations.map((rec, idx) => (
              <li key={idx}>{rec}</li>
            ))}
          </ul>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold text-lg mb-2">{suggestedTool}</h4>
          <p className="text-gray-700 mb-3">{toolDescription}</p>
          <div className="flex gap-3">
            <Button variant="outline">See Setup Steps</Button>
            <Button>Save to Plan</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DepartmentResult;
