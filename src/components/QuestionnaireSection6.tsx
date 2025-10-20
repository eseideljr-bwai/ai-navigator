import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useQuestionnaire } from '@/context/QuestionnaireContext';

const QuestionnaireSection6 = () => {
  const { data, updateField, toggleOption, errors } = useQuestionnaire();
  const getError = (field: keyof typeof data) => errors[field];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-blue-600">🟦 Section 6: Customer Service & Support</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label>How do customers typically reach you for support? (Select all that apply)</Label>
          <div className="space-y-2 mt-2">
            {['Phone', 'Email', 'Website chat', 'Social media', 'In-person'].map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <Checkbox
                  id={option}
                  checked={data.customerSupport.includes(option)}
                  onCheckedChange={(checked) => toggleOption('customerSupport', option, Boolean(checked))}
                />
                <Label htmlFor={option}>{option}</Label>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <Label className="font-semibold text-gray-700">Please provide your performance metrics for the following KPIs:</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <div>
              <Label htmlFor="customerSatisfactionScore">Customer Satisfaction Score (%):</Label>
              <Input
                id="customerSatisfactionScore"
                type="number"
                value={data.customerSatisfactionScore}
                onChange={(event) => updateField('customerSatisfactionScore', event.target.value)}
                placeholder="e.g., 85"
              />
              {getError('customerSatisfactionScore') ? (
                <p className="text-sm text-destructive mt-1">{getError('customerSatisfactionScore')}</p>
              ) : null}
            </div>
            <div>
              <Label htmlFor="netPromoterScore">Net Promoter Score (NPS):</Label>
              <Input
                id="netPromoterScore"
                type="number"
                value={data.netPromoterScore}
                onChange={(event) => updateField('netPromoterScore', event.target.value)}
                placeholder="e.g., 50"
              />
              {getError('netPromoterScore') ? (
                <p className="text-sm text-destructive mt-1">{getError('netPromoterScore')}</p>
              ) : null}
            </div>
            <div>
              <Label htmlFor="firstResponseTime">First Response Time (hours):</Label>
              <Input
                id="firstResponseTime"
                type="number"
                value={data.firstResponseTime}
                onChange={(event) => updateField('firstResponseTime', event.target.value)}
                placeholder="e.g., 2"
              />
              {getError('firstResponseTime') ? (
                <p className="text-sm text-destructive mt-1">{getError('firstResponseTime')}</p>
              ) : null}
            </div>
            <div>
              <Label htmlFor="resolutionTime">Resolution Time (hours):</Label>
              <Input
                id="resolutionTime"
                type="number"
                value={data.resolutionTime}
                onChange={(event) => updateField('resolutionTime', event.target.value)}
                placeholder="e.g., 24"
              />
              {getError('resolutionTime') ? (
                <p className="text-sm text-destructive mt-1">{getError('resolutionTime')}</p>
              ) : null}
            </div>
            <div>
              <Label htmlFor="ticketBacklog">Ticket Backlog (# unresolved tickets):</Label>
              <Input
                id="ticketBacklog"
                type="number"
                value={data.ticketBacklog}
                onChange={(event) => updateField('ticketBacklog', event.target.value)}
                placeholder="e.g., 15"
              />
              {getError('ticketBacklog') ? (
                <p className="text-sm text-destructive mt-1">{getError('ticketBacklog')}</p>
              ) : null}
            </div>
            <div>
              <Label htmlFor="costPerTicket">Cost per Ticket ($):</Label>
              <Input
                id="costPerTicket"
                type="number"
                value={data.costPerTicket}
                onChange={(event) => updateField('costPerTicket', event.target.value)}
                placeholder="e.g., 25"
              />
              {getError('costPerTicket') ? (
                <p className="text-sm text-destructive mt-1">{getError('costPerTicket')}</p>
              ) : null}
            </div>
          </div>
        </div>
        
        <div>
          <Label>Would you benefit from AI tools that help with: (Select all that apply)</Label>
          <div className="space-y-2 mt-2">
            {['24/7 chatbot', 'Auto-routing/ticketing', 'Sentiment analysis', 'AI-generated FAQs', 'Post-interaction summaries'].map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <Checkbox
                  id={option}
                  checked={data.supportAI.includes(option)}
                  onCheckedChange={(checked) => toggleOption('supportAI', option, Boolean(checked))}
                />
                <Label htmlFor={option}>{option}</Label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuestionnaireSection6;
