<template>
  <div>
    <div v-if="accessToken">
      <p>Logged in</p>
      <button @click="logout">log out</button>
      <pre>{{ profile }}</pre>
      <h1>{{ profile.display_name }}</h1>
      <p>{{ profile.follower.total }} followers</p>
      <img
        v-if="profile.images.length" 
        :src="profile.images[0].url"
      />
    </div>
    <div v-else>
      <a href="http://localhost:8888/login">Log in to Spotify</a>
    </div>
  </div>
</template>

<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import { computed } from 'vue';
import { accessToken, logout, getCurrentUserProfile } from '@/use/spotify.js'

const { data } = await getCurrentUserProfile()
const profile = computed(() => data)

console.log('data', data)
console.log('profile', profile)

</script>


