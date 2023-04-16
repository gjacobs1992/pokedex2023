<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue';
import PokeList from './components/PokeList.vue';
import PokeFilter from './components/PokeFilter.vue';
</script>

<template>
  <div>
    <TheHeader />
    <poke-filter/>
    <PokeList />
    <RouterView />
  </div>
</template>

<style scoped>


@media (min-width: 1024px) {
  
}
</style>
