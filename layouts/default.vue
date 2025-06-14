<script setup lang="ts">
</script>

<template>
  <div>
    <nav class="fixed top-0 left-0 w-full border-b z-50 shadow-sm">
      <div class="container mx-auto flex items-center justify-between h-16 px-4">
        <Logo />
        <UserManagement />
      </div>
    </nav>
    <main class="pt-20 min-h-screen">
      <slot />
    </main>
  </div>
</template>
