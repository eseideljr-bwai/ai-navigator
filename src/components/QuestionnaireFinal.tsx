import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface QuestionnaireFinalProps {
  formData: any;
  setFormData: (data: any) => void;
}

const QuestionnaireFinal = ({ formData, setFormData }: QuestionnaireFinalProps) => {
  return (
    <Card className="border-green-200">
      <CardHeader>
        <CardTitle className="text-green-600">🟩 Final Questions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label>What's your #1 goal with AI?</Label>
          <RadioGroup
            value={formData.aiGoal}
            onValueChange={(value) => setFormData({...formData, aiGoal: value})}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="reduce-costs" id="reduce-costs" />
              <Label htmlFor="reduce-costs">Reduce costs</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="improve-productivity" id="improve-productivity" />
              <Label htmlFor="improve-productivity">Improve productivity</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="enhance-customer" id="enhance-customer" />
              <Label htmlFor="enhance-customer">Enhance customer experience</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="grow-revenue" id="grow-revenue" />
              <Label htmlFor="grow-revenue">Grow revenue</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="future-proof" id="future-proof" />
              <Label htmlFor="future-proof">Future-proof operations</Label>
            </div>
          </RadioGroup>
        </div>
        
        <div>
          <Label>Would you like Bridgeworks engineers to assist with setup and integration?</Label>
          <RadioGroup
            value={formData.implementation}
            onValueChange={(value) => setFormData({...formData, implementation: value})}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="full" id="full" />
              <Label htmlFor="full">Yes, full implementation</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="partial" id="partial" />
              <Label htmlFor="partial">Yes, select parts only</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="recommendations" id="recommendations" />
              <Label htmlFor="recommendations">No, just want the recommendations</Label>
            </div>
          </RadioGroup>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuestionnaireFinal;