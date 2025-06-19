import type { User } from '@supabase/supabase-js'

export function useSupabaseUser() {
  const user = useState<User | null>('supabase:user', () => null)
  const loading = useState<boolean>('supabase:user:loading', () => true)
  const nuxtApp = useNuxtApp()

  async function fetchUser() {
    loading.value = true
    const { data } = await nuxtApp.$supabase.auth.getUser()
    user.value = data.user
    loading.value = false
  }

  onMounted(fetchUser)

  return { user, loading, fetchUser }
}
