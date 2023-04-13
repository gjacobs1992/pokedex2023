<template>
  <div>
    <h1>All Pokemon</h1>
    <div v-if="loading">Loading...</div>
    <div v-else class="card-list">
      <poke-card v-for="pokemon in pokemonList" :key="pokemon.name" :pokemon="pokemon"></poke-card>
    </div>
  </div>
</template>

<script>
import PokeService from '../services/PokeService'
import PokeCard from './PokeCard.vue'
export default {
  components: {
    PokeCard
  },
  data() {
    return {
      pokemonList: []
    }
  },
  created() {
    PokeService.getAllPokemon()
      .then((response) => {
        this.pokemonList = response.data.results
      })
      .catch((error) => {
        console.error('Failed to fetch pokemon', error)
      })
  }
}
</script>

<style scoped>
.card-list{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
</style>
