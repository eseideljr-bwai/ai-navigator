import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import { z } from "zod"

const numericInput = z
  .string()
  .trim()
  .refine((value) => value === "" || !Number.isNaN(Number(value)), {
    message: "Enter a valid number",
  })

const questionnaireSchema = z.object({
  businessName: z.string().trim().min(1, "Business name is required"),
  industry: z.string().trim(),
  employees: z.string().trim(),
  location: z.string().trim(),
  currentTools: z.string().trim(),
  leadGeneration: z.array(z.string()),
  customerManagement: z.string().trim(),
  conversionRate: numericInput,
  averageDealSize: numericInput,
  salesCycleLength: numericInput,
  pipelineCoverage: numericInput,
  winRate: numericInput,
  leadResponseTime: numericInput,
  salesAI: z.array(z.string()),
  marketingCampaigns: z.string().trim(),
  websiteTraffic: numericInput,
  marketingConversionRate: numericInput,
  emailOpenRate: numericInput,
  costPerLead: numericInput,
  marketingQualifiedLeads: numericInput,
  organicTrafficShare: numericInput,
  marketingAI: z.array(z.string()),
  bookkeeping: z.string().trim(),
  accountsReceivableAging: numericInput,
  budgetVariance: numericInput,
  costPerInvoice: numericInput,
  operatingCashFlow: numericInput,
  expenseRatio: numericInput,
  forecastAccuracy: numericInput,
  financeAI: z.array(z.string()),
  manualTasks: z.array(z.string()),
  automationHelp: z.string().trim(),
  customerSupport: z.array(z.string()),
  customerSatisfactionScore: numericInput,
  netPromoterScore: numericInput,
  firstResponseTime: numericInput,
  resolutionTime: numericInput,
  ticketBacklog: numericInput,
  costPerTicket: numericInput,
  supportAI: z.array(z.string()),
  hrManagement: z.string().trim(),
  hrAI: z.array(z.string()),
  aiGoal: z.string().trim(),
  implementation: z.string().trim(),
})

export type QuestionnaireFormData = z.infer<typeof questionnaireSchema>
export type QuestionnaireErrors = Partial<Record<keyof QuestionnaireFormData, string>>

type QuestionnaireArrayField = {
  [Key in keyof QuestionnaireFormData]: QuestionnaireFormData[Key] extends string[] ? Key : never
}[keyof QuestionnaireFormData]

interface QuestionnaireContextValue {
  data: QuestionnaireFormData
  errors: QuestionnaireErrors
  updateField: <Key extends keyof QuestionnaireFormData>(
    field: Key,
    value: QuestionnaireFormData[Key]
  ) => void
  toggleOption: (field: QuestionnaireArrayField, option: string, checked: boolean) => void
  validate: () => { success: boolean; errors: QuestionnaireErrors }
  reset: () => void
}

const QuestionnaireContext = createContext<QuestionnaireContextValue | undefined>(undefined)

const createInitialData = (): QuestionnaireFormData => ({
  businessName: "",
  industry: "",
  employees: "",
  location: "",
  currentTools: "",
  leadGeneration: [],
  customerManagement: "",
  conversionRate: "",
  averageDealSize: "",
  salesCycleLength: "",
  pipelineCoverage: "",
  winRate: "",
  leadResponseTime: "",
  salesAI: [],
  marketingCampaigns: "",
  websiteTraffic: "",
  marketingConversionRate: "",
  emailOpenRate: "",
  costPerLead: "",
  marketingQualifiedLeads: "",
  organicTrafficShare: "",
  marketingAI: [],
  bookkeeping: "",
  accountsReceivableAging: "",
  budgetVariance: "",
  costPerInvoice: "",
  operatingCashFlow: "",
  expenseRatio: "",
  forecastAccuracy: "",
  financeAI: [],
  manualTasks: [],
  automationHelp: "",
  customerSupport: [],
  customerSatisfactionScore: "",
  netPromoterScore: "",
  firstResponseTime: "",
  resolutionTime: "",
  ticketBacklog: "",
  costPerTicket: "",
  supportAI: [],
  hrManagement: "",
  hrAI: [],
  aiGoal: "",
  implementation: "",
})

export function QuestionnaireProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<QuestionnaireFormData>(createInitialData)
  const [errors, setErrors] = useState<QuestionnaireErrors>({})

  const updateField: QuestionnaireContextValue["updateField"] = useCallback((field, value) => {
    setData((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => {
      if (!prev[field]) {
        return prev
      }
      const next = { ...prev }
      delete next[field]
      return next
    })
  }, [])

  const toggleOption: QuestionnaireContextValue["toggleOption"] = useCallback((field, option, checked) => {
    setData((prev) => {
      const nextValues = new Set(prev[field])
      if (checked) {
        nextValues.add(option)
      } else {
        nextValues.delete(option)
      }
      return {
        ...prev,
        [field]: Array.from(nextValues) as QuestionnaireFormData[QuestionnaireArrayField],
      }
    })
  }, [])

  const validate: QuestionnaireContextValue["validate"] = useCallback(() => {
    const result = questionnaireSchema.safeParse(data)

    if (!result.success) {
      const validationErrors: QuestionnaireErrors = {}
      for (const issue of result.error.issues) {
        const pathKey = issue.path[0] as keyof QuestionnaireFormData | undefined
        if (pathKey) {
          validationErrors[pathKey] = issue.message
        }
      }
      setErrors(validationErrors)
      return { success: false, errors: validationErrors }
    }

    setErrors({})
    return { success: true, errors: {} }
  }, [data])

  const reset = useCallback(() => {
    setData(createInitialData())
    setErrors({})
  }, [])

  const value = useMemo<QuestionnaireContextValue>(
    () => ({ data, errors, updateField, toggleOption, validate, reset }),
    [data, errors, reset, toggleOption, updateField, validate]
  )

  return <QuestionnaireContext.Provider value={value}>{children}</QuestionnaireContext.Provider>
}

export function useQuestionnaire() {
  const context = useContext(QuestionnaireContext)
  if (!context) {
    throw new Error("useQuestionnaire must be used within a QuestionnaireProvider")
  }
  return context
}
