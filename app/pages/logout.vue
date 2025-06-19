<script setup lang="ts">
const supabase = useNuxtApp().$supabase as import('@supabase/supabase-js').SupabaseClient
const router = useRouter()

onMounted(async () => {
  await supabase.auth.signOut()
  router.push('/login')
})
</script>

<template>
  <div class="auth-form">
    <h2>Logging out...</h2>
  </div>
</template>
