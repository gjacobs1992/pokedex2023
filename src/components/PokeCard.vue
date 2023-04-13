<template>
  <div class="pokemon-card">
    <h2>{{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }}</h2>
    <p>Type: {{ formattedTypes }}</p>
    <img :src="spriteUrl" />
    <!-- Other card details -->
  </div>
</template>

<script>
import PokeService from '../services/PokeService'
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
    formattedTypes() {
      if (this.pokemonInfo.types) {
        return this.pokemonInfo.types
          .map((type) => type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1))
          .join(', ')
      }
      return ''
    },
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
