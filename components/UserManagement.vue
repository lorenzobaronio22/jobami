<script setup lang="ts">

const { user, loading, fetchUser } = useSupabaseUser()
const nuxtApp = useNuxtApp()
const router = useRouter()

const displayName = computed(() => {
  if (user.value) {
    return user.value.user_metadata?.display_name || user.value.email
  }
  return ''
})

async function logout() {
  await nuxtApp.$supabase.auth.signOut()
  await fetchUser()
  router.push('/')
}
</script>

<template>
  <div class="flex items-center gap-3">
    <template v-if="loading">
      <UIcon name="i-heroicons-user" class="animate-pulse" />
      <USkeleton class="h-6 w-24 rounded" />
    </template>
    <template v-else-if="user">
      <span class="font-medium">{{ displayName }}</span>
      <UButton color="primary" variant="soft" @click="logout">Logout</UButton>
    </template>
    <template v-else>
      <UButton color="primary" variant="soft" to="/login">Sign In</UButton>
      <UButton color="primary" variant="outline" to="/register">Sign Up</UButton>
    </template>
  </div>
</template>
