<template>
  <div class="home">
    <PokemonApi/>
    <PokemonWeakCard/>
  </div>
</template>

<script>
import PokemonApi from '@/components/PokemonApi.vue'
import PokemonWeakCard from '@/components/Pokemon_Weak_Card.vue'

export default {
  name: 'Home',
  components: {
    PokemonApi,
    PokemonWeakCard
  }
}
</script>