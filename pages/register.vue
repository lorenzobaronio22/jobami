<script setup lang="ts">

definePageMeta({ layout: 'auth' })

const nuxtApp = useNuxtApp()
const form = ref({ email: '', password: '' })
const loading = ref(false)
const error = ref('')
const success = ref(false)

async function onRegister() {
  loading.value = true
  error.value = ''
  const { error: registerError } = await nuxtApp.$supabase.auth.signUp({
    email: form.value.email,
    password: form.value.password
  })
  loading.value = false
  if (registerError) {
    error.value = registerError.message
  } else {
    success.value = true
  }
}
</script>

<template>
  <UCard>
    <template #header>
      <h2 class="text-xl font-bold mb-2 text-center">Sign Up</h2>
    </template>
    <div class="flex justify-center">
      <div class="w-full max-w-md">
        <template v-if="success">
          <UAlert color="primary" variant="soft" class="mb-4">
            Registration successful! Please check your email for a confirmation link and follow the instructions.
          </UAlert>
          <UButton color="primary" to="/" block>Go to Home</UButton>
        </template>
        <template v-else>
          <UForm @submit.prevent="onRegister" :state="form" class="flex flex-col gap-2">
            <UFormGroup label="Email" name="email">
              <UInput v-model="form.email" type="email" required autocomplete="email" class="w-full" placeholder="Enter your email address" />
            </UFormGroup>
            <UFormGroup label="Password" name="password">
              <UInput v-model="form.password" type="password" required autocomplete="new-password" class="w-full" placeholder="Create a password" />
            </UFormGroup>
            <div class="h-6"></div>
            <UButton type="submit" color="primary" :loading="loading" block class="mt-2">Sign Up</UButton>
            <UAlert v-if="error" color="error" variant="soft" class="mt-4">{{ error }}</UAlert>
          </UForm>
        </template>
      </div>
    </div>
  </UCard>
</template>
