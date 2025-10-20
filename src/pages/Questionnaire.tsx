import { Button } from '@/components/ui/button';
import { BridgeworksLogo } from '@/components/BridgeworksLogo';
import { Link, useNavigate } from 'react-router-dom';
import { usePageMeta } from '@/hooks/usePageMeta';

import { ArrowLeft } from 'lucide-react';
import QuestionnaireSection3 from '@/components/QuestionnaireSection3';
import QuestionnaireSection4 from '@/components/QuestionnaireSection4';
import QuestionnaireSection5 from '@/components/QuestionnaireSection5';
import QuestionnaireSection6 from '@/components/QuestionnaireSection6';
import QuestionnaireSection7 from '@/components/QuestionnaireSection7';
import QuestionnaireFinal from '@/components/QuestionnaireFinal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { KpiSchema } from '@/api/kpi/kpiSchema';
import { useQuestionnaire } from '@/context/QuestionnaireContext';
import { useKpiResults, type KpiLabel } from '@/context/KpiResultsContext';

const Questionnaire = () => {
  const navigate = useNavigate();
  const { data, updateField, toggleOption, errors, validate } = useQuestionnaire();
  const { evaluate: evaluateKpi, reset: resetKpiResults, results } = useKpiResults();

  usePageMeta({
    title: "Bridgeworks AI Navigator Questionnaire",
    description: "Tell us about your operations so we can tailor AI recommendations to your team.",
    keywords: "AI questionnaire, Bridgeworks AI Navigator, business automation survey",
  });

  const parseNumber = (value: string) => {
    if (value.trim() === '') {
      return undefined;
    }
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : undefined;
  };
  const addIfValid = (entries: Array<[string, number]>, key: string, value: string) => {
    const parsed = parseNumber(value);
    if (parsed !== undefined) {
      entries.push([key, parsed]);
    }
  };

  const buildSalesPayload = (): Record<string, number> => {
    const entries: Array<[string, number]> = [];
  addIfValid(entries, 'conversion_rate', data.conversionRate);
    addIfValid(entries, 'average_deal_size', data.averageDealSize);
    addIfValid(entries, 'sales_cycle_length', data.salesCycleLength);
    addIfValid(entries, 'pipeline_coverage', data.pipelineCoverage);
  addIfValid(entries, 'win_rate', data.winRate);
    addIfValid(entries, 'lead_response_time', data.leadResponseTime);

    return Object.fromEntries(entries) as Record<string, number>;
  };

  const buildMarketingPayload = (): Record<string, number> => {
    const entries: Array<[string, number]> = [];
    addIfValid(entries, 'website_traffic', data.websiteTraffic);
  addIfValid(entries, 'conversion_rate', data.marketingConversionRate);
  addIfValid(entries, 'email_open_rate', data.emailOpenRate);
    addIfValid(entries, 'cost_per_lead', data.costPerLead);
    addIfValid(entries, 'marketing_qualified_leads', data.marketingQualifiedLeads);
  addIfValid(entries, 'organic_traffic', data.organicTrafficShare);

    return Object.fromEntries(entries) as Record<string, number>;
  };

  const buildCustomerServicePayload = (): Record<string, number> => {
    const entries: Array<[string, number]> = [];
    addIfValid(entries, 'customer_satisfaction_score', data.customerSatisfactionScore);
    addIfValid(entries, 'nps', data.netPromoterScore);
    addIfValid(entries, 'first_response_time', data.firstResponseTime);
    addIfValid(entries, 'resolution_time', data.resolutionTime);
    addIfValid(entries, 'ticket_backlog', data.ticketBacklog);
    addIfValid(entries, 'cost_per_ticket', data.costPerTicket);

    return Object.fromEntries(entries) as Record<string, number>;
  };

  const buildFinancePayload = (): Record<string, number> => {
    const entries: Array<[string, number]> = [];
    addIfValid(entries, 'accounts_receivable_aging', data.accountsReceivableAging);
  addIfValid(entries, 'budget_variance', data.budgetVariance);
    addIfValid(entries, 'cost_per_invoice', data.costPerInvoice);
    addIfValid(entries, 'operating_cash_flow', data.operatingCashFlow);
    addIfValid(entries, 'expense_ratio', data.expenseRatio);
    addIfValid(entries, 'forecast_accuracy', data.forecastAccuracy);

    return Object.fromEntries(entries) as Record<string, number>;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationResult = validate();
    if (!validationResult.success) {
      console.warn('Please resolve the highlighted validation errors before submitting.', validationResult.errors);
      return;
    }

    const salesPayload = buildSalesPayload();
    const marketingPayload = buildMarketingPayload();
    const customerServicePayload = buildCustomerServicePayload();
    const financePayload = buildFinancePayload();

    if (
      Object.keys(salesPayload).length === 0 &&
      Object.keys(marketingPayload).length === 0 &&
      Object.keys(customerServicePayload).length === 0 &&
      Object.keys(financePayload).length === 0
    ) {
      console.warn('No KPI values provided; skipping requests');
      return;
    }

    const kpiValidation = KpiSchema.safeParse({
      sales: salesPayload,
      marketing: marketingPayload,
      customerService: customerServicePayload,
      finance: financePayload,
    });

    if (!kpiValidation.success) {
      console.warn('KPI inputs failed schema validation', kpiValidation.error.flatten().fieldErrors);
      return;
    }

    const { sales = {}, marketing = {}, customerService = {}, finance = {} } = kpiValidation.data;

    resetKpiResults();

    const queue: Array<[KpiLabel, Record<string, number>]> = [];
    if (Object.keys(sales).length > 0) {
      queue.push(['sales', sales]);
    }
    if (Object.keys(marketing).length > 0) {
      queue.push(['marketing', marketing]);
    }
    if (Object.keys(customerService).length > 0) {
      queue.push(['customerService', customerService]);
    }
    if (Object.keys(finance).length > 0) {
      queue.push(['finance', finance]);
    }

    queue.forEach(([label, payload]) => {
      void evaluateKpi(label, payload);
    });

    console.info('KPI evaluations started. Redirecting to results.');
    navigate('/quiz-results');
  };

  const isSubmitting = Object.values(results).some((entry) => entry.status === 'loading');


  const getError = (field: keyof typeof data) => errors[field];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <BridgeworksLogo className="h-16 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">🧠 Bridgeworks AI Navigator</h1>
          <p className="text-xl text-gray-600">Business Task Questionnaire</p>
          <p className="text-gray-500 mt-2">Help us understand your operations so we can match you with the right AI tools.</p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
          {/* Section 1: Company Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-600">🟦 Section 1: Company Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="businessName">Business Name:</Label>
                <Input
                  id="businessName"
                  value={data.businessName}
                  onChange={(event) => updateField('businessName', event.target.value)}
                  placeholder="Enter your business name"
                />
                {getError('businessName') ? (
                  <p className="text-sm text-destructive mt-1">{getError('businessName')}</p>
                ) : null}
              </div>

              <div>
                <Label htmlFor="industry">Industry/Sector:</Label>
                <Input
                  id="industry"
                  value={data.industry}
                  onChange={(event) => updateField('industry', event.target.value)}
                  placeholder="e.g., Healthcare, Retail, Manufacturing"
                />
              </div>

              <div>
                <Label htmlFor="employees">Number of Employees:</Label>
                <Input
                  id="employees"
                  value={data.employees}
                  onChange={(event) => updateField('employees', event.target.value)}
                  placeholder="e.g., 1-10, 11-50, 51-200"
                />
              </div>

              <div>
                <Label>Do you operate from one location or multiple?</Label>
                <RadioGroup
                  value={data.location}
                  onValueChange={(value) => updateField('location', value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="one" id="one" />
                    <Label htmlFor="one">One location</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="multiple" id="multiple" />
                    <Label htmlFor="multiple">Multiple locations</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="remote" id="remote" />
                    <Label htmlFor="remote">Fully remote</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="currentTools">What software/tools do you currently use? (CRM, accounting, HR, etc.)</Label>
                <Textarea
                  id="currentTools"
                  value={data.currentTools}
                  onChange={(event) => updateField('currentTools', event.target.value)}
                  placeholder="List your current tools and software"
                />
              </div>
            </CardContent>
          </Card>

          {/* Section 2: Sales & CRM */}
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-600">🟦 Section 2: Sales & Customer Relationship Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>How do you currently generate leads? (Select all that apply)</Label>
                <div className="space-y-2 mt-2">
                  {['Manual outreach', 'Online ads', 'Website form submissions', 'Cold calling/email', 'Referrals'].map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <Checkbox
                        id={option}
                        checked={data.leadGeneration.includes(option)}
                        onCheckedChange={(checked) => toggleOption('leadGeneration', option, Boolean(checked))}
                      />
                      <Label htmlFor={option}>{option}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label>How do you manage customer information?</Label>
                <RadioGroup
                  value={data.customerManagement}
                  onValueChange={(value) => updateField('customerManagement', value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="spreadsheets" id="spreadsheets" />
                    <Label htmlFor="spreadsheets">Spreadsheets</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="crm" id="crm" />
                    <Label htmlFor="crm">CRM software</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="paper" id="paper" />
                    <Label htmlFor="paper">Paper files</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="none" id="none" />
                    <Label htmlFor="none">None</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="font-semibold text-gray-700">Please provide your performance metrics for the following KPIs:</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                  <div>
                    <Label htmlFor="conversionRate">Conversion Rate (%):</Label>
                    <Input
                      id="conversionRate"
                      type="number"
                      value={data.conversionRate}
                      onChange={(event) => updateField('conversionRate', event.target.value)}
                      placeholder="e.g., 15"
                    />
                    {getError('conversionRate') ? (
                      <p className="text-sm text-destructive mt-1">{getError('conversionRate')}</p>
                    ) : null}
                  </div>
                  <div>
                    <Label htmlFor="averageDealSize">Average Deal Size ($):</Label>
                    <Input
                      id="averageDealSize"
                      type="number"
                      value={data.averageDealSize}
                      onChange={(event) => updateField('averageDealSize', event.target.value)}
                      placeholder="e.g., 5000"
                    />
                    {getError('averageDealSize') ? (
                      <p className="text-sm text-destructive mt-1">{getError('averageDealSize')}</p>
                    ) : null}
                  </div>
                  <div>
                    <Label htmlFor="salesCycleLength">Sales Cycle Length (days):</Label>
                    <Input
                      id="salesCycleLength"
                      type="number"
                      value={data.salesCycleLength}
                      onChange={(event) => updateField('salesCycleLength', event.target.value)}
                      placeholder="e.g., 30"
                    />
                    {getError('salesCycleLength') ? (
                      <p className="text-sm text-destructive mt-1">{getError('salesCycleLength')}</p>
                    ) : null}
                  </div>
                  <div>
                    <Label htmlFor="pipelineCoverage">Pipeline Coverage (ratio):</Label>
                    <Input
                      id="pipelineCoverage"
                      type="number"
                      step="0.1"
                      value={data.pipelineCoverage}
                      onChange={(event) => updateField('pipelineCoverage', event.target.value)}
                      placeholder="e.g., 3.5"
                    />
                    {getError('pipelineCoverage') ? (
                      <p className="text-sm text-destructive mt-1">{getError('pipelineCoverage')}</p>
                    ) : null}
                  </div>
                  <div>
                    <Label htmlFor="winRate">Win Rate (%):</Label>
                    <Input
                      id="winRate"
                      type="number"
                      value={data.winRate}
                      onChange={(event) => updateField('winRate', event.target.value)}
                      placeholder="e.g., 25"
                    />
                    {getError('winRate') ? (
                      <p className="text-sm text-destructive mt-1">{getError('winRate')}</p>
                    ) : null}
                  </div>
                  <div>
                    <Label htmlFor="leadResponseTime">Lead Response Time (hours):</Label>
                    <Input
                      id="leadResponseTime"
                      type="number"
                      value={data.leadResponseTime}
                      onChange={(event) => updateField('leadResponseTime', event.target.value)}
                      placeholder="e.g., 2"
                    />
                    {getError('leadResponseTime') ? (
                      <p className="text-sm text-destructive mt-1">{getError('leadResponseTime')}</p>
                    ) : null}
                  </div>
                </div>
              </div>

              <div>
                <Label>Would you benefit from AI tools that help with: (Select all that apply)</Label>
                <div className="space-y-2 mt-2">
                  {['Lead scoring', 'Automated follow-ups', 'Appointment scheduling', 'Predicting churn', 'Upsell/cross-sell suggestions'].map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <Checkbox
                        id={option}
                        checked={data.salesAI.includes(option)}
                        onCheckedChange={(checked) => toggleOption('salesAI', option, Boolean(checked))}
                      />
                      <Label htmlFor={option}>{option}</Label>
                    </div>
                  ))}
                </div>
              </div>

            </CardContent>
          </Card>

          <QuestionnaireSection3 />
          <QuestionnaireSection4 />
          <QuestionnaireSection5 />
          <QuestionnaireSection6 />

          <QuestionnaireSection7 />
          <QuestionnaireFinal />

          <div className="text-center">
            <Button
              type="submit"
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit My AI Navigator Assessment'}
            </Button>
            <p className="text-gray-500 mt-2">Your personalized AI Blueprint will be ready soon!</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Questionnaire;