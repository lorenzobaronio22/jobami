<script setup lang="ts">
import { useAllowUserInput } from '~/composables/useAllowUserInput'

definePageMeta({ layout: 'auth' })

const router = useRouter()
const nuxtApp = useNuxtApp()
const { allowUserInput } = useAllowUserInput()
const form = ref({ email: '', password: '' })
const loading = ref(false)
const error = ref('')


async function onLogin() {
  loading.value = true
  error.value = ''
  const { error: loginError } = await nuxtApp.$supabase.auth.signInWithPassword({
    email: form.value.email,
    password: form.value.password
  })
  loading.value = false
  if (loginError) {
    error.value = loginError.message
  } else {
    router.push('/')
  }
}
</script>

<template>
  <UCard>
    <template #header>
      <h2 class="text-xl font-bold mb-2 text-center">Sign In</h2>
    </template>
    <div class="flex justify-center">
      <div class="w-full max-w-md">
        <UForm @submit.prevent="onLogin" :state="form" class="flex flex-col gap-2">
          <div class="flex flex-col gap-1 mb-2">
            <label for="login-email" class="font-medium mb-1">Email</label>
            <UInput :disabled="!allowUserInput" id="login-email" v-model="form.email" type="email" required autocomplete="email" class="w-full" placeholder="Enter your email" />
          </div>
          <div class="flex flex-col gap-1 mb-2">
            <label for="login-password" class="font-medium mb-1">Password</label>
            <UInput :disabled="!allowUserInput" id="login-password" v-model="form.password" type="password" required autocomplete="current-password" class="w-full" placeholder="Enter your password" />
          </div>
          <div class="h-6"></div>
          <UButton :disabled="!allowUserInput" type="submit" color="primary" :loading="loading" block class="mt-2">Sign In</UButton>
          <UAlert v-if="error" color="error" variant="soft" class="mt-4">{{ error }}</UAlert>
        </UForm>
      </div>
    </div>
  </UCard>
</template>

<style scoped>
.auth-form { max-width: 400px; margin: 2rem auto; }
.error { color: red; }
</style>
