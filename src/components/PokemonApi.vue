<template>
    <div class="poke">
        <h1> {{prove}}</h1>
        <b-container fluid="sm">
            <b-row class="justify-content-md-center">
                <h2>Pokemon Name</h2>
            </b-row>
            <b-row class="justify-content-md-center">
                <b-col sm="2">
                <b-form-input id="input-small" size="sm" placeholder="Enter Pokemon Name" 
                v-model="pokemonName"
                @change="getPokemonName(pokemonName)">
                </b-form-input>
                </b-col>
            </b-row>
            <b-row class="justify-content-md-center">
                <h3 class="pkm-variable">Pokemon: {{pokemonName}}</h3>
            </b-row>
        <div class="cardMove">
            <b-row class="justify-content-md-center">
                <b-card
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2">
                    <h4>{{pokemonNameApi}}</h4>
                    <h4> Pokedex No: {{pokemonId}}</h4>
                    <img v-bind:src="sprite" class="img-size">
                    <b-card-text>
                        <p> <button
                            src="/assets/logo.jpg" 
                            @click="weakneesType(
                            test = {'type1': pokemonType1, 'type2': pokemonType2})">{{pokemonType1}} {{pokemonType2}}
                            </button><br>
                        Ability: {{abilities}}<br>
                        {{hiddenOrNot}} {{abilities2}}<br>
                        {{hiddenAbilityTxt}} {{hiddenAbilities}}<br>
                        </p>
                    </b-card-text>
                    <b-button href="#" variant="primary">Go somewhere</b-button>
                </b-card>
            </b-row>
        </div>
    </b-container>
    </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapMutations, mapState } from 'vuex'

export default {
  name: 'PokemonAPI',
  props: {
      prove: String
  }, 
  data() {
      return {
          pokemonName: '',
          sprite: null,
          pokemonNameApi: 'Pokemon Name',
          pkmIdPokedex: null,
          abilities: '',
          abilities2: '',
          hiddenAbilities: '',
          hiddenOrNot: '',
          hiddenAbilityTxt: '',
          pokemonType1: '',
          pokemonType2: '',
          pokemonId: ''
      }
  },  
computed: {
    ...mapState("weaknesses", ['grassAndPosion'])
},

methods: {
    ...mapMutations("weaknesses",[
        'grassAndPostionDeb', 'weaknessSinlgeType']),
    
    ...mapActions('weaknesses',[
        'weakneesType'
    ]),

      async getPokemonName(name) {
          let data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
          console.log(data)
          this.pokemonNameApi = data.data.name   
          this.pokemonId = data.data.id     

            /**
            * Abilities Data 
            */ 
          this.abilities = data.data.abilities[0].ability.name
          this.checkHiddenAbilities2 = data.data.abilities[1].is_hidden

        if(this.checkHiddenAbilities2 === false) {
            this.hiddenOrNot = 'Ability 2:'
            this.abilities2 = data.data.abilities[1].ability.name
        }
        else if(this.checkHiddenAbilities2 === true) {
            this.hiddenOrNot = 'Hidden Ability:'
            this.abilities2 = data.data.abilities[1].ability.name
        }
        
        try {
            this.hiddenAbilities = data.data.abilities[2].ability.name
            this.hiddenAbilityTxt = 'Hidden Ability:'
        }
        catch(err) {
            this.hiddenAbilityTxt = ''
            this.hiddenAbilities = null
        }

        /**
         * Pokemon Image
         */
        if(data.data.sprites.other.dream_world.front_default === null) {
            this.sprite = data.data.sprites.front_default
            }
        else {
            this.sprite = data.data.sprites.other.dream_world.front_default 
        }

        /**
         * Pokemon Type 
         */
        try {
            this.pokemonType1 = data.data.types[0].type.name
            this.pokemonType2 = data.data.types[1].type.name

        } catch (error) {
            this.pokemonType1 = data.data.types[0].type.name
            this.pokemonType2 = ''
        }
    },
     capitalizeFirstLetr(str) {
         str = ''
            let capitalized = str.charAt(0).toUpperCase() + str.slice(1);
            return capitalized;
},
  },
  created() {
      this.getPokemonName(name)
  }, 
}
</script>

<style scoped>
.pkm-variable {
    padding-top: 12px;
}
.cardMove {
    padding-top: 30px;
}
.img-size {
    height: 150px;
}
</style>