// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
  ],
  css: [
    '~/assets/css/main.css'
  ],
  runtimeConfig: {
    public: {
      supabaseUrl: 'https://your-supabase-url.supabase.co',
      supabaseAnonKey: 'your-anon-key'
    }
  },
  plugins: [
    '~/plugins/supabase.client.ts'
  ]
})