<template>
  <div>
    这是子应用的APP
    <button @click="goHome">跳转home</button>
    <button @click="goAbout">跳转about</button>
    <button @click="goPanter">跳转panter</button>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push({
    path: '/partent/app1/home'
  })
}
const goAbout = () => {
  router.push({
    path: '/partent/app1/about'
  })
}
const goPanter = () => {
  const container = document.getElementById('micro-app-container')
  window.open(container?.dataset.backpath || '/partent', '_self')
}

</script>

<style scoped>

</style>