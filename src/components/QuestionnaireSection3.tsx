import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface QuestionnaireSection3Props {
  formData: any;
  setFormData: (data: any) => void;
  handleCheckboxChange: (field: string, value: string, checked: boolean) => void;
}

const QuestionnaireSection3 = ({ formData, setFormData, handleCheckboxChange }: QuestionnaireSection3Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-blue-600">🟦 Section 3: Marketing</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label>Do you run digital marketing campaigns?</Label>
          <RadioGroup
            value={formData.marketingCampaigns}
            onValueChange={(value) => setFormData({...formData, marketingCampaigns: value})}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes-inhouse" id="yes-inhouse" />
              <Label htmlFor="yes-inhouse">Yes, in-house</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes-agency" id="yes-agency" />
              <Label htmlFor="yes-agency">Yes, via agency</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="no-marketing" />
              <Label htmlFor="no-marketing">No</Label>
            </div>
          </RadioGroup>
        </div>
        
        <div>
          <Label className="font-semibold text-gray-700">Please provide your performance metrics for the following KPIs:</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <div>
              <Label htmlFor="websiteTraffic">Website Traffic (# monthly visits):</Label>
              <Input
                id="websiteTraffic"
                type="number"
                value={formData.websiteTraffic}
                onChange={(e) => setFormData({...formData, websiteTraffic: e.target.value})}
                placeholder="e.g., 10000"
              />
            </div>
            <div>
              <Label htmlFor="marketingConversionRate">Conversion Rate (%):</Label>
              <Input
                id="marketingConversionRate"
                type="number"
                value={formData.marketingConversionRate}
                onChange={(e) => setFormData({...formData, marketingConversionRate: e.target.value})}
                placeholder="e.g., 3"
              />
            </div>
            <div>
              <Label htmlFor="emailOpenRate">Email Open Rate (%):</Label>
              <Input
                id="emailOpenRate"
                type="number"
                value={formData.emailOpenRate}
                onChange={(e) => setFormData({...formData, emailOpenRate: e.target.value})}
                placeholder="e.g., 22"
              />
            </div>
            <div>
              <Label htmlFor="costPerLead">Cost per Lead ($):</Label>
              <Input
                id="costPerLead"
                type="number"
                value={formData.costPerLead}
                onChange={(e) => setFormData({...formData, costPerLead: e.target.value})}
                placeholder="e.g., 50"
              />
            </div>
            <div>
              <Label htmlFor="marketingQualifiedLeads">Marketing Qualified Leads (# per month):</Label>
              <Input
                id="marketingQualifiedLeads"
                type="number"
                value={formData.marketingQualifiedLeads}
                onChange={(e) => setFormData({...formData, marketingQualifiedLeads: e.target.value})}
                placeholder="e.g., 100"
              />
            </div>
            <div>
              <Label htmlFor="organicTrafficShare">Organic Traffic Share (%):</Label>
              <Input
                id="organicTrafficShare"
                type="number"
                value={formData.organicTrafficShare}
                onChange={(e) => setFormData({...formData, organicTrafficShare: e.target.value})}
                placeholder="e.g., 40"
              />
            </div>
          </div>
        </div>
        
        <div>
          <Label>Would you benefit from AI tools that help with: (Select all that apply)</Label>
          <div className="space-y-2 mt-2">
            {['Social content creation', 'Ad optimization', 'Email automation', 'SEO/website analysis', 'Graphic design/branding'].map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <Checkbox
                  id={option}
                  checked={(formData.marketingAI as string[]).includes(option)}
                  onCheckedChange={(checked) => handleCheckboxChange('marketingAI', option, checked as boolean)}
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

export default QuestionnaireSection3;
