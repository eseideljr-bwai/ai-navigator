import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useQuestionnaire } from '@/context/QuestionnaireContext';

const QuestionnaireSection7 = () => {
  const { data, updateField, toggleOption } = useQuestionnaire();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-blue-600">🟦 Section 7: Human Resources</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label>Do you manage employee recruitment or training in-house?</Label>
          <RadioGroup
            value={data.hrManagement}
            onValueChange={(value) => updateField('hrManagement', value)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="hr-yes" />
              <Label htmlFor="hr-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="partially" id="hr-partially" />
              <Label htmlFor="hr-partially">Partially</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="hr-no" />
              <Label htmlFor="hr-no">No</Label>
            </div>
          </RadioGroup>
        </div>
        
        <div>
          <Label>Would you benefit from AI tools that help with: (Select all that apply)</Label>
          <div className="space-y-2 mt-2">
            {['Resume screening', 'Interview scheduling', 'Training content generation', 'Employee performance analytics', 'Onboarding documentation'].map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <Checkbox
                  id={option}
                  checked={data.hrAI.includes(option)}
                  onCheckedChange={(checked) => toggleOption('hrAI', option, Boolean(checked))}
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

export default QuestionnaireSection7;