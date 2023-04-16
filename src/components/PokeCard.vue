<template>
  <div class="pokemon-card">
    <h2>{{ capitalizeFirstChar(pokemon.name) }}</h2>
    <p>Type: {{ formattedTypes }}</p>
    <img :src="spriteUrl" />
    <!-- Other card details -->
  </div>
</template>

<script>
import PokeService from '../services/PokeService'
import Mixins from '../mixins/mixins'
export default {
  data() {
    return {
      pokemonInfo: []
    }
  },
  props: {
    pokemon: {
      type: Object,
      required: true
    }
  },
  mixins: [Mixins,],
  mounted() {
    this.getPokemonInfo(this.pokemon.name)
  },
  methods: {
    getPokemonInfo(name) {
      return PokeService.getPokemon(name).then((response) => {
        this.pokemonInfo = response.data
      })
    }
  },
  computed: {
    spriteUrl() {
      if (this.pokemonInfo.sprites) {
        return this.pokemonInfo.sprites.front_default
      } else {
        return ''
      }
    }
  }
}
</script>

<style scoped>
    .pokemon-card{
        border: 1px solid var(--color-text);
        border-radius: 10px;
        text-align: center;
        width: 200px;
    }
</style>
