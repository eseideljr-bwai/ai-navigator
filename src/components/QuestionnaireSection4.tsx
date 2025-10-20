import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useQuestionnaire } from '@/context/QuestionnaireContext';

const QuestionnaireSection4 = () => {
  const { data, updateField, toggleOption, errors } = useQuestionnaire();
  const getError = (field: keyof typeof data) => errors[field];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-blue-600">🟦 Section 4: Finance & Bookkeeping</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label>How do you currently manage bookkeeping/accounting?</Label>
          <RadioGroup
            value={data.bookkeeping}
            onValueChange={(value) => updateField('bookkeeping', value)}
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
                value={data.accountsReceivableAging}
                onChange={(event) => updateField('accountsReceivableAging', event.target.value)}
                placeholder="e.g., 45"
              />
              {getError('accountsReceivableAging') ? (
                <p className="text-sm text-destructive mt-1">{getError('accountsReceivableAging')}</p>
              ) : null}
            </div>
            <div>
              <Label htmlFor="budgetVariance">Budget Variance (%):</Label>
              <Input
                id="budgetVariance"
                type="number"
                value={data.budgetVariance}
                onChange={(event) => updateField('budgetVariance', event.target.value)}
                placeholder="e.g., 10"
              />
              {getError('budgetVariance') ? (
                <p className="text-sm text-destructive mt-1">{getError('budgetVariance')}</p>
              ) : null}
            </div>
            <div>
              <Label htmlFor="costPerInvoice">Cost per Invoice ($):</Label>
              <Input
                id="costPerInvoice"
                type="number"
                value={data.costPerInvoice}
                onChange={(event) => updateField('costPerInvoice', event.target.value)}
                placeholder="e.g., 15"
              />
              {getError('costPerInvoice') ? (
                <p className="text-sm text-destructive mt-1">{getError('costPerInvoice')}</p>
              ) : null}
            </div>
            <div>
              <Label htmlFor="operatingCashFlow">Operating Cash Flow ($):</Label>
              <Input
                id="operatingCashFlow"
                type="number"
                value={data.operatingCashFlow}
                onChange={(event) => updateField('operatingCashFlow', event.target.value)}
                placeholder="e.g., 50000"
              />
              {getError('operatingCashFlow') ? (
                <p className="text-sm text-destructive mt-1">{getError('operatingCashFlow')}</p>
              ) : null}
            </div>
            <div>
              <Label htmlFor="expenseRatio">Expense Ratio (%):</Label>
              <Input
                id="expenseRatio"
                type="number"
                value={data.expenseRatio}
                onChange={(event) => updateField('expenseRatio', event.target.value)}
                placeholder="e.g., 65"
              />
              {getError('expenseRatio') ? (
                <p className="text-sm text-destructive mt-1">{getError('expenseRatio')}</p>
              ) : null}
            </div>
            <div>
              <Label htmlFor="forecastAccuracy">Forecast Accuracy (%):</Label>
              <Input
                id="forecastAccuracy"
                type="number"
                value={data.forecastAccuracy}
                onChange={(event) => updateField('forecastAccuracy', event.target.value)}
                placeholder="e.g., 85"
              />
              {getError('forecastAccuracy') ? (
                <p className="text-sm text-destructive mt-1">{getError('forecastAccuracy')}</p>
              ) : null}
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
                  checked={data.financeAI.includes(option)}
                  onCheckedChange={(checked) => toggleOption('financeAI', option, Boolean(checked))}
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
