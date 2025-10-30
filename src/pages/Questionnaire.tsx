import { useState } from 'react';
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

const Questionnaire = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    businessName: '',
    industry: '',
    employees: '',
    location: '',
    currentTools: '',
    leadGeneration: [],
    customerManagement: '',
    // Sales KPIs
    conversionRate: '',
    averageDealSize: '',
    salesCycleLength: '',
    pipelineCoverage: '',
    winRate: '',
    leadResponseTime: '',
    salesAI: [],
    // Marketing
    marketingCampaigns: '',
    websiteTraffic: '',
    marketingConversionRate: '',
    emailOpenRate: '',
    costPerLead: '',
    marketingQualifiedLeads: '',
    organicTrafficShare: '',
    marketingAI: [],
    // Finance
    bookkeeping: '',
    accountsReceivableAging: '',
    budgetVariance: '',
    costPerInvoice: '',
    operatingCashFlow: '',
    expenseRatio: '',
    forecastAccuracy: '',
    financeAI: [],
    // Operations
    manualTasks: [],
    automationHelp: '',
    // Customer Service
    customerSupport: [],
    customerSatisfactionScore: '',
    netPromoterScore: '',
    firstResponseTime: '',
    resolutionTime: '',
    ticketBacklog: '',
    costPerTicket: '',
    supportAI: [],
    // HR
    hrManagement: '',
    hrAI: [],
    // Final
    aiGoal: '',
    implementation: ''
  });


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate('/quiz-results');
  };


  const handleCheckboxChange = (field: string, value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...(prev[field] as string[]), value]
        : (prev[field] as string[]).filter(item => item !== value)
    }));
  };

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
                  value={formData.businessName}
                  onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                  placeholder="Enter your business name"
                />
              </div>
              
              <div>
                <Label htmlFor="industry">Industry/Sector:</Label>
                <Input
                  id="industry"
                  value={formData.industry}
                  onChange={(e) => setFormData({...formData, industry: e.target.value})}
                  placeholder="e.g., Healthcare, Retail, Manufacturing"
                />
              </div>
              
              <div>
                <Label htmlFor="employees">Number of Employees:</Label>
                <Input
                  id="employees"
                  value={formData.employees}
                  onChange={(e) => setFormData({...formData, employees: e.target.value})}
                  placeholder="e.g., 1-10, 11-50, 51-200"
                />
              </div>
              
              <div>
                <Label>Do you operate from one location or multiple?</Label>
                <RadioGroup
                  value={formData.location}
                  onValueChange={(value) => setFormData({...formData, location: value})}
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
                  value={formData.currentTools}
                  onChange={(e) => setFormData({...formData, currentTools: e.target.value})}
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
                        checked={(formData.leadGeneration as string[]).includes(option)}
                        onCheckedChange={(checked) => handleCheckboxChange('leadGeneration', option, checked as boolean)}
                      />
                      <Label htmlFor={option}>{option}</Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <Label>How do you manage customer information?</Label>
                <RadioGroup
                  value={formData.customerManagement}
                  onValueChange={(value) => setFormData({...formData, customerManagement: value})}
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
                      value={formData.conversionRate}
                      onChange={(e) => setFormData({...formData, conversionRate: e.target.value})}
                      placeholder="e.g., 15"
                    />
                  </div>
                  <div>
                    <Label htmlFor="averageDealSize">Average Deal Size ($):</Label>
                    <Input
                      id="averageDealSize"
                      type="number"
                      value={formData.averageDealSize}
                      onChange={(e) => setFormData({...formData, averageDealSize: e.target.value})}
                      placeholder="e.g., 5000"
                    />
                  </div>
                  <div>
                    <Label htmlFor="salesCycleLength">Sales Cycle Length (days):</Label>
                    <Input
                      id="salesCycleLength"
                      type="number"
                      value={formData.salesCycleLength}
                      onChange={(e) => setFormData({...formData, salesCycleLength: e.target.value})}
                      placeholder="e.g., 30"
                    />
                  </div>
                  <div>
                    <Label htmlFor="pipelineCoverage">Pipeline Coverage (ratio):</Label>
                    <Input
                      id="pipelineCoverage"
                      type="number"
                      step="0.1"
                      value={formData.pipelineCoverage}
                      onChange={(e) => setFormData({...formData, pipelineCoverage: e.target.value})}
                      placeholder="e.g., 3.5"
                    />
                  </div>
                  <div>
                    <Label htmlFor="winRate">Win Rate (%):</Label>
                    <Input
                      id="winRate"
                      type="number"
                      value={formData.winRate}
                      onChange={(e) => setFormData({...formData, winRate: e.target.value})}
                      placeholder="e.g., 25"
                    />
                  </div>
                  <div>
                    <Label htmlFor="leadResponseTime">Lead Response Time (hours):</Label>
                    <Input
                      id="leadResponseTime"
                      type="number"
                      value={formData.leadResponseTime}
                      onChange={(e) => setFormData({...formData, leadResponseTime: e.target.value})}
                      placeholder="e.g., 2"
                    />
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
                        checked={(formData.salesAI as string[]).includes(option)}
                        onCheckedChange={(checked) => handleCheckboxChange('salesAI', option, checked as boolean)}
                      />
                      <Label htmlFor={option}>{option}</Label>
                    </div>
                  ))}
                </div>
              </div>

            </CardContent>
          </Card>

          <QuestionnaireSection3 formData={formData} setFormData={setFormData} handleCheckboxChange={handleCheckboxChange} />
          <QuestionnaireSection4 formData={formData} setFormData={setFormData} handleCheckboxChange={handleCheckboxChange} />
          <QuestionnaireSection5 formData={formData} setFormData={setFormData} handleCheckboxChange={handleCheckboxChange} />
          <QuestionnaireSection6 formData={formData} setFormData={setFormData} handleCheckboxChange={handleCheckboxChange} />

          <QuestionnaireSection7 formData={formData} setFormData={setFormData} handleCheckboxChange={handleCheckboxChange} />
          <QuestionnaireFinal formData={formData} setFormData={setFormData} />

          <div className="text-center">
            <Button type="submit" size="lg" className="bg-blue-600 hover:bg-blue-700">
              Submit My AI Navigator Assessment
            </Button>
            <p className="text-gray-500 mt-2">Your personalized AI Blueprint will be ready soon!</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Questionnaire;