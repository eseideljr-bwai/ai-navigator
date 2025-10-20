import { BridgeworksLogo } from '@/components/BridgeworksLogo';
import OverallScoreSummary from '@/components/OverallScoreSummary';
import DepartmentResult from '@/components/DepartmentResult';
import { useQuestionnaire } from '@/context/QuestionnaireContext';
import { useKpiResults } from '@/context/KpiResultsContext';
import type { KpiResultsState } from '@/context/KpiResultsContext';

const QuizResults = () => {
  const { data } = useQuestionnaire();
  const { results } = useKpiResults();
  const salesMetrics = [
    { metric: 'Conversion Rate', yourValue: `${data.conversionRate}%`, target: '15%', direction: 'higher' as const },
    { metric: 'Average Deal Size', yourValue: `$${data.averageDealSize}`, target: '$5,000', direction: 'higher' as const },
    { metric: 'Sales Cycle Length', yourValue: `${data.salesCycleLength} days`, target: '30 days', direction: 'lower' as const },
    { metric: 'Pipeline Coverage', yourValue: `${data.pipelineCoverage}x`, target: '3.0x', direction: 'higher' as const },
    { metric: 'Win Rate', yourValue: `${data.winRate}%`, target: '25%', direction: 'higher' as const },
    { metric: 'Lead Response Time', yourValue: `${data.leadResponseTime} hrs`, target: '1 hr', direction: 'lower' as const }
  ];

  const marketingMetrics = [
    { metric: 'Website Traffic', yourValue: `${data.websiteTraffic} / mo`, target: '25,000 / mo', direction: 'higher' as const },
    { metric: 'Conversion Rate', yourValue: `${data.marketingConversionRate}%`, target: '4%', direction: 'higher' as const },
    { metric: 'Email Open Rate', yourValue: `${data.emailOpenRate}%`, target: '30%', direction: 'higher' as const },
    { metric: 'Cost Per Lead', yourValue: `$${data.costPerLead}`, target: '$50', direction: 'lower' as const },
    { metric: 'Marketing Qualified Leads', yourValue: `${data.marketingQualifiedLeads}% growth`, target: '10% growth', direction: 'higher' as const },
    { metric: 'Organic Traffic Share', yourValue: `${data.organicTrafficShare}%`, target: '50%', direction: 'higher' as const }
  ];

  const customerServiceMetrics = [
    { metric: 'Customer Satisfaction', yourValue: `${data.customerSatisfactionScore}%`, target: '85%', direction: 'higher' as const },
    { metric: 'Net Promoter Score (NPS)', yourValue: `${data.netPromoterScore}`, target: '+50', direction: 'higher' as const },
    { metric: 'First Response Time', yourValue: `${data.firstResponseTime} hrs`, target: '1 hr', direction: 'lower' as const },
    { metric: 'Resolution Time', yourValue: `${data.resolutionTime} hrs`, target: '24 hrs', direction: 'lower' as const },
    { metric: 'Ticket Backlog', yourValue: `${data.ticketBacklog}`, target: '10', direction: 'lower' as const },
    { metric: 'Cost per Ticket', yourValue: `$${data.costPerTicket}`, target: '$10', direction: 'lower' as const }
  ];

  const financeMetrics = [
    { metric: 'Accounts Receivable Aging', yourValue: `${data.accountsReceivableAging} days`, target: '30 days', direction: 'lower' as const },
    { metric: 'Budget Variance', yourValue: `${data.budgetVariance}`, target: '±5%', direction: 'lower' as const },
    { metric: 'Cost per Invoice', yourValue: `$${data.costPerInvoice}`, target: '$3', direction: 'lower' as const },
    { metric: 'Operating Cash Flow', yourValue: `$${data.operatingCashFlow}`, target: 'Positive trend', direction: 'higher' as const },
    { metric: 'Expense Ratio', yourValue: `${data.expenseRatio}`, target: '30%', direction: 'lower' as const },
    { metric: 'Forecast Accuracy', yourValue: `${data.forecastAccuracy}`, target: '90%', direction: 'higher' as const }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <BridgeworksLogo className="h-16 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Your AI Navigator Results</h1>
          <p className="text-xl text-gray-600">Generated from your performance metrics. Updated in real time to reflect your business performance across Sales, Marketing, Customer Service, and Finance.</p>
        </div>


        <div className="max-w-6xl mx-auto">
          <OverallScoreSummary
            grade="B"
            summary="Your business is performing above average, with strong lead generation and stable customer satisfaction. The biggest gains can be achieved by automating repetitive workflows, improving personalization, and tightening cash flow processes."
            opportunities={[
              'Faster lead follow-up',
              'Website personalization',
              'Invoice automation'
            ]}
            primaryGoal="Improve Productivity"
          />

          <h2 className="text-3xl font-bold mb-6">Department Results</h2>

          <DepartmentResult
            title="Sales"
            grade="B-"
            gradeColor="text-yellow-600"
            metrics={salesMetrics}
            summary={renderSummary(results.sales)}
            recommendations={[
              'Automate lead follow-ups within one hour.',
              'Score and prioritize leads by engagement level.',
              'Use AI to identify early buying signals.'
            ]}
            suggestedTool="Lead Scoring & Follow-Up Automation"
            toolDescription="Focus your reps on the highest-probability deals and reduce time to close."
          />

          <DepartmentResult
            title="Marketing"
            grade="C+"
            gradeColor="text-orange-600"
            metrics={marketingMetrics}
            summary={renderSummary(results.marketing)}
            recommendations={[
              'Personalize content for top traffic sources.',
              'Test new value propositions on landing pages.',
              'Launch an AI-driven nurture campaign for low-engagement leads.'
            ]}
            suggestedTool="AI Personalization & Conversion Optimization"
            toolDescription="Increase engagement and reduce wasted ad spend with smarter targeting."
          />

          <DepartmentResult
            title="Customer Service"
            grade="C"
            gradeColor="text-orange-600"
            metrics={customerServiceMetrics}
            summary={renderSummary(results.customerService)}
            recommendations={[
              'Add an AI-powered chat agent to handle FAQs and route tickets.',
              'Track customer sentiment in real time.',
              'Summarize support interactions into your CRM automatically.'
            ]}
            suggestedTool="AI Agents (Chat, Voice & Virtual)"
            toolDescription="Boost service quality with 24/7 intelligent support automation."
          />

          <DepartmentResult
            title="Finance"
            grade="C"
            gradeColor="text-orange-600"
            metrics={financeMetrics}
            summary={renderSummary(results.finance)}
            recommendations={[
              'Automate invoice follow-ups and reminders.',
              'Use AI tools to track budget variance trends.',
              'Schedule recurring forecast updates to improve accuracy.'
            ]}
            suggestedTool="AR Tracking & Expense Automation"
            toolDescription="Automate collections and reporting for more predictable cash flow."
          />
        </div>
      </div>
    </div>
  );
};

export default QuizResults;

function renderSummary(entry: KpiResultsState[keyof KpiResultsState]) {
  if (!entry || entry.status === 'idle') {
    return 'No data submitted yet.';
  }

  if (entry.status === 'loading') {
    return 'Generating summary...';
  }

  if (entry.status === 'error') {
    return entry.error ?? 'Unable to fetch KPI evaluation.';
  }

  if (entry.status === 'success' && entry.data) {
    const content = entry.data.summary || entry.data.prompt || JSON.stringify(entry.data, null, 2);
    return (
      <p className="whitespace-pre-wrap break-words text-sm text-gray-700">{content}</p>
    );
  }

  return 'Awaiting evaluation results.';
}
