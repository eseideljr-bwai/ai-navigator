import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useQuestionnaire } from '@/context/QuestionnaireContext';

const QuestionnaireSection3 = () => {
  const { data, updateField, toggleOption, errors } = useQuestionnaire();
  const getError = (field: keyof typeof data) => errors[field];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-blue-600">🟦 Section 3: Marketing</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label>Do you run digital marketing campaigns?</Label>
          <RadioGroup
            value={data.marketingCampaigns}
            onValueChange={(value) => updateField('marketingCampaigns', value)}
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
                value={data.websiteTraffic}
                onChange={(event) => updateField('websiteTraffic', event.target.value)}
                placeholder="e.g., 10000"
              />
              {getError('websiteTraffic') ? (
                <p className="text-sm text-destructive mt-1">{getError('websiteTraffic')}</p>
              ) : null}
            </div>
            <div>
              <Label htmlFor="marketingConversionRate">Conversion Rate (%):</Label>
              <Input
                id="marketingConversionRate"
                type="number"
                value={data.marketingConversionRate}
                onChange={(event) => updateField('marketingConversionRate', event.target.value)}
                placeholder="e.g., 3"
              />
              {getError('marketingConversionRate') ? (
                <p className="text-sm text-destructive mt-1">{getError('marketingConversionRate')}</p>
              ) : null}
            </div>
            <div>
              <Label htmlFor="emailOpenRate">Email Open Rate (%):</Label>
              <Input
                id="emailOpenRate"
                type="number"
                value={data.emailOpenRate}
                onChange={(event) => updateField('emailOpenRate', event.target.value)}
                placeholder="e.g., 22"
              />
              {getError('emailOpenRate') ? (
                <p className="text-sm text-destructive mt-1">{getError('emailOpenRate')}</p>
              ) : null}
            </div>
            <div>
              <Label htmlFor="costPerLead">Cost per Lead ($):</Label>
              <Input
                id="costPerLead"
                type="number"
                value={data.costPerLead}
                onChange={(event) => updateField('costPerLead', event.target.value)}
                placeholder="e.g., 50"
              />
              {getError('costPerLead') ? (
                <p className="text-sm text-destructive mt-1">{getError('costPerLead')}</p>
              ) : null}
            </div>
            <div>
              <Label htmlFor="marketingQualifiedLeads">Marketing Qualified Leads (# per month):</Label>
              <Input
                id="marketingQualifiedLeads"
                type="number"
                value={data.marketingQualifiedLeads}
                onChange={(event) => updateField('marketingQualifiedLeads', event.target.value)}
                placeholder="e.g., 100"
              />
              {getError('marketingQualifiedLeads') ? (
                <p className="text-sm text-destructive mt-1">{getError('marketingQualifiedLeads')}</p>
              ) : null}
            </div>
            <div>
              <Label htmlFor="organicTrafficShare">Organic Traffic Share (%):</Label>
              <Input
                id="organicTrafficShare"
                type="number"
                value={data.organicTrafficShare}
                onChange={(event) => updateField('organicTrafficShare', event.target.value)}
                placeholder="e.g., 40"
              />
              {getError('organicTrafficShare') ? (
                <p className="text-sm text-destructive mt-1">{getError('organicTrafficShare')}</p>
              ) : null}
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
                  checked={data.marketingAI.includes(option)}
                  onCheckedChange={(checked) => toggleOption('marketingAI', option, Boolean(checked))}
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
