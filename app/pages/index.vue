import { Icon } from '../.nuxt/components';
<script setup lang="ts">

const { user, loading } = useSupabaseUser()
const router = useRouter()

const displayName = computed(() => {
  if (user.value) {
    return user.value.user_metadata?.display_name || user.value.email
  }
  return ''
})

const fileInputRef = ref<HTMLInputElement | null>(null)
const showArchiveInfoModal = ref(false)

function handleReviewExperiences() {
  // Navigate to the review experiences page
  router.push('/review-experiences')
}

function handleUploadClick() {
  fileInputRef.value?.click()
}

function handleFileChange(event: Event) {
  const files = (event.target as HTMLInputElement).files
  if (files && files.length > 0) {
    const file = files[0]
    if ((file && file.type === 'application/zip') || (file && file.name.endsWith('.zip'))) {
      console.log('Uploaded ZIP file size:', file.size, 'bytes')
    } else {
      alert('Please upload a ZIP file.')
    }
  }
}

function openArchiveInfoModal() {
  showArchiveInfoModal.value = true
}
function closeArchiveInfoModal() {
  showArchiveInfoModal.value = false
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
      <p class="text-lg mb-8">We're glad to have you back.</p>
      <div class="w-full max-w-md rounded-lg shadow p-6 flex flex-col items-start gap-4">
        <h2 class="text-2xl font-semibold mb-2 text-primary">Menu</h2>
        <UButton color="primary" size="lg" @click="handleReviewExperiences">
          Review Experiences
        </UButton>
        <div class="flex flex-row gap-2">
          <UButton color="primary" size="lg" @click="handleUploadClick">
            Upload LinkedIn Archive
          </UButton>
          <UModal title="How to Download and Upload Your LinkedIn Data" description="How to Download and Upload Your LinkedIn Data" close-icon="i-lucide-x" variant="subtle">
            <UButton color="info" variant="subtle" icon="i-lucide-info" />
            <template #body>
                <ol class="list-decimal list-inside space-y-2">
                  <li>
                    <b>Go to LinkedIn's <a href="https://www.linkedin.com/mypreferences/d/download-my-data" target="_blank" class="text-primary underline">Export your data</a> page</b>.<br>
                    If the link doesn't work, open LinkedIn, go to <b>Settings</b> &gt; <b>Data Privacy</b> &gt; <b>Get a copy of your data</b>.
                  </li>
                  <li>
                    <b>Select:</b> “Download larger data archive, including connections, verifications, contacts, account history, and information we infer about you.”<br>
                    <span class="text-sm text-gray-500">(This is required to get your work experience and education data.)</span>
                  </li>
                  <li>
                    <b>Wait for LinkedIn's email</b> (usually 10–20 minutes), then download the ZIP archive from the link provided.
                  </li>
                  <li>
                    <b>Check the ZIP contents</b> if you wish. Jobami only reads files like <code>Profile.csv</code>, <code>Education.csv</code>, <code>Positions.csv</code>, etc. Other files are ignored.
                  </li>
                  <li>
                    <b>Return here and click the upload button</b> to select your ZIP file.
                  </li>
                </ol>
                <b>Jobami only uses your data to help you. Your archive is never shared.</b>
            </template>
          </UModal>
        </div>
        <input ref="fileInputRef" type="file" accept=".zip,application/zip" class="hidden" @change="handleFileChange" />
      </div>
    </template>
    <template v-else>
      <h1 class="text-4xl font-bold mb-4 text-primary">Welcome to Jobami</h1>
      <p class="text-lg mb-8">Your job search, simplified.</p>
      <UButton data-testid="btn-call-to-action" color="primary" to="/register" size="lg">Get Started</UButton>
    </template>
  </div>
</template>

