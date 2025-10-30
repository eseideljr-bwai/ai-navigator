import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

interface QuestionnaireSection6Props {
  formData: any;
  setFormData: (data: any) => void;
  handleCheckboxChange: (field: string, value: string, checked: boolean) => void;
}

const QuestionnaireSection6 = ({ formData, setFormData, handleCheckboxChange }: QuestionnaireSection6Props) => {
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
                  checked={(formData.customerSupport as string[]).includes(option)}
                  onCheckedChange={(checked) => handleCheckboxChange('customerSupport', option, checked as boolean)}
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
                value={formData.customerSatisfactionScore}
                onChange={(e) => setFormData({...formData, customerSatisfactionScore: e.target.value})}
                placeholder="e.g., 85"
              />
            </div>
            <div>
              <Label htmlFor="netPromoterScore">Net Promoter Score (NPS):</Label>
              <Input
                id="netPromoterScore"
                type="number"
                value={formData.netPromoterScore}
                onChange={(e) => setFormData({...formData, netPromoterScore: e.target.value})}
                placeholder="e.g., 50"
              />
            </div>
            <div>
              <Label htmlFor="firstResponseTime">First Response Time (hours):</Label>
              <Input
                id="firstResponseTime"
                type="number"
                value={formData.firstResponseTime}
                onChange={(e) => setFormData({...formData, firstResponseTime: e.target.value})}
                placeholder="e.g., 2"
              />
            </div>
            <div>
              <Label htmlFor="resolutionTime">Resolution Time (hours):</Label>
              <Input
                id="resolutionTime"
                type="number"
                value={formData.resolutionTime}
                onChange={(e) => setFormData({...formData, resolutionTime: e.target.value})}
                placeholder="e.g., 24"
              />
            </div>
            <div>
              <Label htmlFor="ticketBacklog">Ticket Backlog (# unresolved tickets):</Label>
              <Input
                id="ticketBacklog"
                type="number"
                value={formData.ticketBacklog}
                onChange={(e) => setFormData({...formData, ticketBacklog: e.target.value})}
                placeholder="e.g., 15"
              />
            </div>
            <div>
              <Label htmlFor="costPerTicket">Cost per Ticket ($):</Label>
              <Input
                id="costPerTicket"
                type="number"
                value={formData.costPerTicket}
                onChange={(e) => setFormData({...formData, costPerTicket: e.target.value})}
                placeholder="e.g., 25"
              />
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
                  checked={(formData.supportAI as string[]).includes(option)}
                  onCheckedChange={(checked) => handleCheckboxChange('supportAI', option, checked as boolean)}
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
