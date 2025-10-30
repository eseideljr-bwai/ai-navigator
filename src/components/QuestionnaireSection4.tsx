import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface QuestionnaireSection4Props {
  formData: any;
  setFormData: (data: any) => void;
  handleCheckboxChange: (field: string, value: string, checked: boolean) => void;
}

const QuestionnaireSection4 = ({ formData, setFormData, handleCheckboxChange }: QuestionnaireSection4Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-blue-600">🟦 Section 4: Finance & Bookkeeping</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label>How do you currently manage bookkeeping/accounting?</Label>
          <RadioGroup
            value={formData.bookkeeping}
            onValueChange={(value) => setFormData({...formData, bookkeeping: value})}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="quickbooks" id="quickbooks" />
              <Label htmlFor="quickbooks">QuickBooks/software</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="outsourced" id="outsourced" />
              <Label htmlFor="outsourced">Outsourced accountant</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="manual" id="manual" />
              <Label htmlFor="manual">Manual/spreadsheets</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="not-managed" id="not-managed" />
              <Label htmlFor="not-managed">Not managed</Label>
            </div>
          </RadioGroup>
        </div>
        
        <div>
          <Label className="font-semibold text-gray-700">Please provide your performance metrics for the following KPIs:</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <div>
              <Label htmlFor="accountsReceivableAging">Accounts Receivable Aging (days outstanding):</Label>
              <Input
                id="accountsReceivableAging"
                type="number"
                value={formData.accountsReceivableAging}
                onChange={(e) => setFormData({...formData, accountsReceivableAging: e.target.value})}
                placeholder="e.g., 45"
              />
            </div>
            <div>
              <Label htmlFor="budgetVariance">Budget Variance (%):</Label>
              <Input
                id="budgetVariance"
                type="number"
                value={formData.budgetVariance}
                onChange={(e) => setFormData({...formData, budgetVariance: e.target.value})}
                placeholder="e.g., 10"
              />
            </div>
            <div>
              <Label htmlFor="costPerInvoice">Cost per Invoice ($):</Label>
              <Input
                id="costPerInvoice"
                type="number"
                value={formData.costPerInvoice}
                onChange={(e) => setFormData({...formData, costPerInvoice: e.target.value})}
                placeholder="e.g., 15"
              />
            </div>
            <div>
              <Label htmlFor="operatingCashFlow">Operating Cash Flow ($):</Label>
              <Input
                id="operatingCashFlow"
                type="number"
                value={formData.operatingCashFlow}
                onChange={(e) => setFormData({...formData, operatingCashFlow: e.target.value})}
                placeholder="e.g., 50000"
              />
            </div>
            <div>
              <Label htmlFor="expenseRatio">Expense Ratio (%):</Label>
              <Input
                id="expenseRatio"
                type="number"
                value={formData.expenseRatio}
                onChange={(e) => setFormData({...formData, expenseRatio: e.target.value})}
                placeholder="e.g., 65"
              />
            </div>
            <div>
              <Label htmlFor="forecastAccuracy">Forecast Accuracy (%):</Label>
              <Input
                id="forecastAccuracy"
                type="number"
                value={formData.forecastAccuracy}
                onChange={(e) => setFormData({...formData, forecastAccuracy: e.target.value})}
                placeholder="e.g., 85"
              />
            </div>
          </div>
        </div>
        
        <div>
          <Label>Would you benefit from AI tools that help with: (Select all that apply)</Label>
          <div className="space-y-2 mt-2">
            {['Automated invoicing', 'Categorizing expenses', 'Cash flow forecasting', 'Payroll management', 'Financial reporting/dashboards'].map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <Checkbox
                  id={option}
                  checked={(formData.financeAI as string[]).includes(option)}
                  onCheckedChange={(checked) => handleCheckboxChange('financeAI', option, checked as boolean)}
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

export default QuestionnaireSection4;
