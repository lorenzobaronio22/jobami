// Supabase client plugin for Nuxt 3
import { createClient } from '@supabase/supabase-js'
import type { SupabaseClient } from '@supabase/supabase-js'

declare module '#app' {
  interface NuxtApp {
    $supabase: SupabaseClient
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const supabaseUrl = config.public.supabaseUrl
  const supabaseKey = config.public.supabaseAnonKey
  console.log('Supabase URL:', supabaseUrl)
  console.log('Supabase Key:', supabaseKey)
  const supabase = createClient(supabaseUrl, supabaseKey)
  nuxtApp.provide('supabase', supabase)
})
