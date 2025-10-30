import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';

interface QuestionnaireSection5Props {
  formData: any;
  setFormData: (data: any) => void;
  handleCheckboxChange: (field: string, value: string, checked: boolean) => void;
}

const QuestionnaireSection5 = ({ formData, setFormData, handleCheckboxChange }: QuestionnaireSection5Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-blue-600">🟦 Section 5: Operations & Productivity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label>Do you have recurring manual tasks that take significant time each week? (Select all that apply)</Label>
          <div className="space-y-2 mt-2">
            {['Data entry', 'Inventory management', 'Scheduling/shifts', 'Document creation (contracts, proposals, etc.)', 'Status reporting', 'Internal communication/collaboration'].map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <Checkbox
                  id={option}
                  checked={(formData.manualTasks as string[]).includes(option)}
                  onCheckedChange={(checked) => handleCheckboxChange('manualTasks', option, checked as boolean)}
                />
                <Label htmlFor={option}>{option}</Label>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <Label>Would you like help automating these tasks or getting recommendations?</Label>
          <RadioGroup
            value={formData.automationHelp}
            onValueChange={(value) => setFormData({...formData, automationHelp: value})}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="automation-yes" />
              <Label htmlFor="automation-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="automation-no" />
              <Label htmlFor="automation-no">No</Label>
            </div>
          </RadioGroup>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuestionnaireSection5;