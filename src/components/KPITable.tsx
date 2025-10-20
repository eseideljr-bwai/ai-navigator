import { ArrowUp, ArrowDown } from 'lucide-react';

interface KPIMetric {
  metric: string;
  yourValue: string;
  target: string;
  direction: 'higher' | 'lower';
}

interface KPITableProps {
  metrics: KPIMetric[];
}

const KPITable = ({ metrics }: KPITableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left p-3 border">Metric</th>
            <th className="text-left p-3 border">Your Value</th>
            <th className="text-left p-3 border">Target</th>
            <th className="text-left p-3 border">Direction</th>
          </tr>
        </thead>
        <tbody>
          {metrics.map((metric, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="p-3 border font-medium">{metric.metric}</td>
              <td className="p-3 border">{metric.yourValue}</td>
              <td className="p-3 border">{metric.target}</td>
              <td className="p-3 border">
                <div className="flex items-center gap-1">
                  {metric.direction === 'higher' ? (
                    <ArrowUp className="w-4 h-4 text-green-600" />
                  ) : (
                    <ArrowDown className="w-4 h-4 text-blue-600" />
                  )}
                  <span className="text-sm">
                    {metric.direction === 'higher' ? 'Higher is better' : 'Lower is better'}
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default KPITable;
