<template>
  <div class="home">
    <PokemonApi/>
    <Pokemon_Weak_Card/>
  </div>
</template>

<script>
import PokemonApi from '@/components/PokemonApi.vue'
import Pokemon_Weak_Card from '@/components/Pokemon_Weak_Card.vue'

export default {
  name: 'Home',
  components: {
    PokemonApi,
    Pokemon_Weak_Card
  }
}
</script>