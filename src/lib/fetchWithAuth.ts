import type { Session } from "@supabase/supabase-js"
import { supabase } from "./supabaseClient"

const AUTH_HEADER = "Authorization"

async function ensureSession(): Promise<Session | null> {
  const { data, error } = await supabase.auth.getSession()
  if (error) {
    console.error("[fetchWithAuth] Failed to getSession", error)
  }

  if (data.session) {
    return data.session
  }

  const email = import.meta.env.VITE_DEV_AUTH_EMAIL
  const password = import.meta.env.VITE_DEV_AUTH_PASSWORD

  if (email && password) {
    console.info("[fetchWithAuth] No active session, attempting development sign-in")
    const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({ email, password })
    if (signInError) {
      console.error("[fetchWithAuth] Development sign-in failed", signInError)
      return null
    }

    return signInData.session ?? null
  }

  return null
}

async function ensureToken(): Promise<string | undefined> {
  const session = await ensureSession()
  return session?.access_token ?? undefined
}

export async function fetchWithAuth(url: string, options: RequestInit = {}) {
  let token = await ensureToken()

  const headers = new Headers(options.headers ?? {})
  if (import.meta.env.VITE_SUPABASE_ANON_KEY) {
    headers.set("apikey", import.meta.env.VITE_SUPABASE_ANON_KEY)
  }

  if (token) {
    headers.set(AUTH_HEADER, `Bearer ${token}`)
  }

  let response = await fetch(url, { ...options, headers })

  if (response.status === 401) {
    console.warn("[fetchWithAuth] Received 401, attempting token refresh")
    const refreshResult = await supabase.auth.refreshSession()
    if (refreshResult.error) {
      console.error("[fetchWithAuth] Token refresh failed", refreshResult.error)
      token = await ensureToken()
    } else {
      token = refreshResult.data.session?.access_token
    }

    if (import.meta.env.VITE_SUPABASE_ANON_KEY) {
      headers.set("apikey", import.meta.env.VITE_SUPABASE_ANON_KEY)
    }

    if (token) {
      headers.set(AUTH_HEADER, `Bearer ${token}`)
      response = await fetch(url, { ...options, headers })
    }
  }

  return response
}
