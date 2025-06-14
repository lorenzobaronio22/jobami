<script setup lang="ts">
import { computed } from 'vue'
import { useSupabaseUser } from '@/composables/useSupabaseUser'
import { useRouter } from 'vue-router'

const { user, loading } = useSupabaseUser()
const router = useRouter()

const displayName = computed(() => {
  if (user.value) {
    return user.value.user_metadata?.display_name || user.value.email
  }
  return ''
})

function handleReviewExperiences() {
  // Navigate to the review experiences page
  router.push('/review-experiences')
}
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-[60vh]">
    <template v-if="loading">
      <div class="flex flex-col items-center">
        <div class="animate-pulse h-8 w-48 rounded mb-4" />
        <div class="animate-pulse h-6 w-32 rounded" />
      </div>
    </template>
    <template v-else-if="user">
      <h1 class="text-4xl font-bold mb-2 text-primary">Welcome, {{ displayName }}!</h1>
      <p class="text-lg text-gray-600 mb-8">We're glad to have you back.</p>
      <div class="w-full max-w-md rounded-lg shadow p-6 flex flex-col items-center gap-4">
        <h2 class="text-2xl font-semibold mb-2 text-primary">Menu</h2>
        <UButton color="primary" size="lg" @click="handleReviewExperiences">
          Review Experiences
        </UButton>
      </div>
    </template>
    <template v-else>
      <h1 class="text-4xl font-bold mb-4 text-primary">Welcome to Jobami</h1>
      <p class="text-lg text-gray-600 mb-8">Your job search, simplified.</p>
      <UButton color="primary" to="/register" size="lg">Get Started</UButton>
    </template>
  </div>
</template>

