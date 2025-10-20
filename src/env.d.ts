interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string
  readonly VITE_SUPABASE_ANON_KEY: string
  readonly VITE_DEV_AUTH_EMAIL?: string
  readonly VITE_DEV_AUTH_PASSWORD?: string
  readonly VITE_SUPABASE_EDGE_PATH?: string
  readonly VITE_SUPABASE_AUTH_PATH?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
