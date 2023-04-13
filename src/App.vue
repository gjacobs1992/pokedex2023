<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue';
import PokeList from './components/PokeList.vue';
</script>

<template>
  <div>
    <TheHeader />
    <PokeList />
    <RouterView />
  </div>
</template>

<style scoped>


@media (min-width: 1024px) {
  
}
</style>
