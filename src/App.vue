<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="relative min-h-svh bg-brand-secondary p-4">
    <div class="absolute inset-0 bg-brand-primary h-[388px]">
      <div class="absolute inset-0 section-one-child" />
    </div>
    <div class="absolute left-0 bottom-0 h-[calc(100%-388px)] w-full section-two" />
  
    <RouterView />
  </div>
</template>

<style scoped>
.section-one-child {
  background: linear-gradient(132.15deg, #0B0B0F 0%, rgba(26, 26, 34, 0.9) 95.96%);
}

.section-two {
  background: linear-gradient(132.15deg, #211A1A 0%, #212127 95.96%);
}
</style>
