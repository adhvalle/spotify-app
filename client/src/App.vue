<template>
  <div>
    <div v-if="accessToken">
      <p>Logged in</p>
      <button @click="logout">log out</button>
    </div>
    <div v-else>
      <a href="http://localhost:8888/login">Log in to Spotify</a>
    </div>
  </div>
</template>

<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import { accessToken, logout } from '@/use/spotify.js'
</script>


