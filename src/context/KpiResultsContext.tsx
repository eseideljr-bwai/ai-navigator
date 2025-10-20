import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import type { KPIEvaluatorResponse } from "@/api/kpi/useKpiEvaluation"
import { postKpiEvaluation, type KPIEvaluatorRequest } from "@/api/kpi/useKpiEvaluation"

export type KpiLabel = KPIEvaluatorRequest["label"]

type KpiResult = {
  status: "idle" | "loading" | "success" | "error"
  data?: KPIEvaluatorResponse
  error?: string
}

export type KpiResultsState = Record<KpiLabel, KpiResult>

interface KpiResultsContextValue {
  results: KpiResultsState
  evaluate: (label: KpiLabel, payload: Record<string, number>) => Promise<void>
  reset: () => void
}

const createInitialState = (): KpiResultsState => ({
  sales: { status: "idle" },
  marketing: { status: "idle" },
  customerService: { status: "idle" },
  finance: { status: "idle" },
})

const KpiResultsContext = createContext<KpiResultsContextValue | undefined>(undefined)

export function KpiResultsProvider({ children }: { children: ReactNode }) {
  const [results, setResults] = useState<KpiResultsState>(() => createInitialState())

  const evaluate = useCallback(async (label: KpiLabel, payload: Record<string, number>) => {
    setResults((prev) => ({
      ...prev,
      [label]: { status: "loading" },
    }))

    try {
      const response = await postKpiEvaluation({ label, payload })
      setResults((prev) => ({
        ...prev,
        [label]: { status: "success", data: response },
      }))
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unexpected error while evaluating KPIs"
      setResults((prev) => ({
        ...prev,
        [label]: { status: "error", error: message },
      }))
    }
  }, [])

  const reset = useCallback(() => {
    setResults(createInitialState())
  }, [])

  const value = useMemo<KpiResultsContextValue>(
    () => ({ results, evaluate, reset }),
    [evaluate, reset, results]
  )

  return <KpiResultsContext.Provider value={value}>{children}</KpiResultsContext.Provider>
}

export function useKpiResults() {
  const context = useContext(KpiResultsContext)
  if (!context) {
    throw new Error("useKpiResults must be used within a KpiResultsProvider")
  }
  return context
}
