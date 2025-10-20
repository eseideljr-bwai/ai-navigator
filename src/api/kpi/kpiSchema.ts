import { z } from "zod"

const percentage = (min = 0, max = 100) => z.number().min(min).max(max)
const nonNegative = () => z.number().min(0)

export const KpiSchema = z.object({
  sales: z
    .object({
      conversion_rate: percentage(),
      average_deal_size: nonNegative(),
      sales_cycle_length: z.number().positive(),
      pipeline_coverage: percentage(),
      win_rate: percentage(),
      lead_response_time: nonNegative(),
    })
    .partial()
    .default({}),
  marketing: z
    .object({
      website_traffic: nonNegative(),
      conversion_rate: percentage(),
      email_open_rate: percentage(),
      cost_per_lead: nonNegative(),
      marketing_qualified_leads: nonNegative(),
      organic_traffic: percentage(),
    })
    .partial()
    .default({}),
  customerService: z
    .object({
      customer_satisfaction_score: percentage(),
      nps: z.number().min(-100).max(100),
      first_response_time: nonNegative(),
      resolution_time: nonNegative(),
      ticket_backlog: nonNegative(),
      cost_per_ticket: nonNegative(),
    })
    .partial()
    .default({}),
  finance: z
    .object({
      accounts_receivable_aging: nonNegative(),
      budget_variance: z.number(),
      cost_per_invoice: nonNegative(),
      operating_cash_flow: z.number(),
      expense_ratio: percentage(),
      forecast_accuracy: percentage(),
    })
    .partial()
    .default({}),
})

export type KpiSchemaInput = z.infer<typeof KpiSchema>
