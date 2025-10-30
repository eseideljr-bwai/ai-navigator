import { BridgeworksLogo } from '@/components/BridgeworksLogo';
import OverallScoreSummary from '@/components/OverallScoreSummary';
import DepartmentResult from '@/components/DepartmentResult';

const QuizResults = () => {
  const salesMetrics = [
    { metric: 'Conversion Rate', yourValue: '5%', target: '15%', direction: 'higher' as const },
    { metric: 'Average Deal Size', yourValue: '$2,000', target: '$5,000', direction: 'higher' as const },
    { metric: 'Sales Cycle Length', yourValue: '60 days', target: '30 days', direction: 'lower' as const },
    { metric: 'Pipeline Coverage', yourValue: '1.0x', target: '3.0x', direction: 'higher' as const },
    { metric: 'Win Rate', yourValue: '10%', target: '25%', direction: 'higher' as const },
    { metric: 'Lead Response Time', yourValue: '5 hrs', target: '1 hr', direction: 'lower' as const }
  ];

  const marketingMetrics = [
    { metric: 'Website Traffic', yourValue: '12,000 / mo', target: '25,000 / mo', direction: 'higher' as const },
    { metric: 'Conversion Rate', yourValue: '1%', target: '4%', direction: 'higher' as const },
    { metric: 'Email Open Rate', yourValue: '15%', target: '30%', direction: 'higher' as const },
    { metric: 'Cost Per Lead', yourValue: '$100', target: '$50', direction: 'lower' as const },
    { metric: 'Marketing Qualified Leads', yourValue: '3% growth', target: '10% growth', direction: 'higher' as const },
    { metric: 'Organic Traffic Share', yourValue: '20%', target: '50%', direction: 'higher' as const }
  ];

  const customerServiceMetrics = [
    { metric: 'Customer Satisfaction', yourValue: '60%', target: '85%', direction: 'higher' as const },
    { metric: 'Net Promoter Score (NPS)', yourValue: '-10', target: '+50', direction: 'higher' as const },
    { metric: 'First Response Time', yourValue: '4 hrs', target: '1 hr', direction: 'lower' as const },
    { metric: 'Resolution Time', yourValue: '48 hrs', target: '24 hrs', direction: 'lower' as const },
    { metric: 'Ticket Backlog', yourValue: '20', target: '10', direction: 'lower' as const },
    { metric: 'Cost per Ticket', yourValue: '$20', target: '$10', direction: 'lower' as const }
  ];

  const financeMetrics = [
    { metric: 'Accounts Receivable Aging', yourValue: '60 days', target: '30 days', direction: 'lower' as const },
    { metric: 'Budget Variance', yourValue: '10%', target: '±5%', direction: 'lower' as const },
    { metric: 'Cost per Invoice', yourValue: '$6', target: '$3', direction: 'lower' as const },
    { metric: 'Operating Cash Flow', yourValue: '$3,000', target: 'Positive trend', direction: 'higher' as const },
    { metric: 'Expense Ratio', yourValue: '45%', target: '30%', direction: 'lower' as const },
    { metric: 'Forecast Accuracy', yourValue: '60%', target: '90%', direction: 'higher' as const }
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
            summary="Your team has consistent deal flow but slow response times and long sales cycles are reducing win rates."
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
            summary="You're generating good awareness but not converting efficiently. Campaigns and pages lack optimization and automation."
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
            summary="Support quality is steady but constrained by delayed first responses and manual routing. AI assistance can relieve pressure and speed up turnaround."
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
            summary="Strong revenue but cash flow delays and expense inefficiencies are limiting growth capacity."
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
