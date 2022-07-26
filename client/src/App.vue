<template>
  <Suspense>
    <RouterView />
  </Suspense>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
