<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
function goBack() {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push('/')
  }
}
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <UButton icon="i-heroicons-arrow-left" color="primary" variant="soft" class="mb-8 mt-4" @click="goBack">
      Back
    </UButton>
    <div class="w-full max-w-md mx-auto">
      <slot />
    </div>
  </div>
</template>
