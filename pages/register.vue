<template>
  <div class="auth-form">
    <h2>Register</h2>
    <form @submit.prevent="register">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Register</button>
      <p v-if="error" class="error">{{ error }}</p>
    </form>
  </div>
</template>
<script setup lang="ts">
const email = ref('')
const password = ref('')
const error = ref('')
const supabase = useNuxtApp().$supabase as import('@supabase/supabase-js').SupabaseClient
const router = useRouter()

async function register() {
  error.value = ''
  const { error: err } = await supabase.auth.signUp({ email: email.value, password: password.value })
  if (err) {
    error.value = err.message
  } else {
    router.push('/login')
  }
}
</script>
<style scoped>
.auth-form { max-width: 400px; margin: 2rem auto; }
.error { color: red; }
</style>
