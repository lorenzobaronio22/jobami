import { ref, onNuxtReady } from '#imports'

/**
 * Provides a reactive state that becomes true when Nuxt is ready.
 * Useful for enabling user input after hydration.
 */
export function useAllowUserInput() {
  const allowUserInput = ref(false)
  onNuxtReady(() => { allowUserInput.value = true })
  return { allowUserInput }
}
