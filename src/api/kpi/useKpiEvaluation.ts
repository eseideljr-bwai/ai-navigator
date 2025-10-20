import { useMutation, type UseMutationResult } from "@tanstack/react-query"
import { fetchWithAuth } from "@/lib/fetchWithAuth"

export interface KPIEvaluatorRequest {
  label: string
  payload: Record<string, number>
}

export interface KPIRecommendation {
  metric: string
  tool: string
  reason: string
}

export interface KPIEvaluatorResponse {
  success: boolean
  label: string
  score: number
  grade: string
  recommendations: KPIRecommendation[]
  data: Record<string, number>
  prompt?: string
  summary?: string
}

function buildEdgeUrl(): string {
  const baseUrl = import.meta.env.VITE_SUPABASE_URL?.replace(/\/$/, "")
  if (!baseUrl) {
    throw new Error("Missing VITE_SUPABASE_URL environment variable")
  }

  const edgePath = import.meta.env.VITE_SUPABASE_EDGE_PATH || "/functions/v1/kpi-evaluator-model"
  return `${baseUrl}${edgePath.startsWith("/") ? edgePath : `/${edgePath}`}`
}

export async function postKpiEvaluation(body: KPIEvaluatorRequest): Promise<KPIEvaluatorResponse> {
  const url = buildEdgeUrl()
  const response = await fetchWithAuth(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })

  if (!response.ok) {
    const errorText = await response.text().catch(() => response.statusText)
    throw new Error(`KPI evaluation failed: ${response.status} ${errorText}`)
  }

  return response.json() as Promise<KPIEvaluatorResponse>
}

export function useKpiEvaluation(): UseMutationResult<
  KPIEvaluatorResponse,
  Error,
  KPIEvaluatorRequest
> {
  return useMutation({
    mutationKey: ["kpi", "evaluate"],
    mutationFn: postKpiEvaluation,
  })
}
