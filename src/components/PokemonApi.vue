<template>
    <div class="poke">
        <h1> {{prove}}</h1>
        <b-container fluid="sm">
            <b-row class="justify-content-md-center">
                <h2>Pokemon Name or Pokedex Number</h2>
            </b-row>
            <b-row class="justify-content-md-center">
                <b-col sm="2">
                <b-form-input id="input-small" size="sm" placeholder="Enter Pokemon Name or Pokedex Number" value="123" 
                v-model="pokemonName"
                @change="getPokemonName(pokemonName)">
                </b-form-input>
                </b-col>
            </b-row>
            <b-row class="justify-content-md-center">
                <h3 class="pkm-variable">Pokemon: {{pokemonName}}</h3>
            </b-row>
        <div class="cardMove">
            <b-row md="4">
            <!-- <b-row class="justify-content-md-center card-height"> -->
                <b-col md="3" offset-md="2">
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
                        <p> <b-button
                            class="lov"
                            src="/assets/logo.jpg" 
                            @click=" showDismissibleAlerts=true;  weakneesType(
                            test = {'type1': pokemonType1, 'type2': pokemonType2}); emptyArrWeakCard(); ">{{pokemonType1}} {{pokemonType2}}
                            </b-button><br>
                        Ability: {{abilities}}<br>
                        {{hiddenOrNot}} {{abilities2}}<br>
                        {{hiddenAbilityTxt}} {{hiddenAbilities}}<br>
                        </p>
                    </b-card-text>
                </b-card>
                </b-col>
                <b-col md="3" offset-md="2">
                     <div class="alertWeak">
                    <b-alert 
                    variant="danger"
                    dismissible
                    fade
                    :show="showDismissibleAlerts"
                    @dismissed="showDismissibleAlerts=false"
                    class="alert-position">
                    <h4 class="move-weakness">Weakness</h4>
                    {{grassAndPosion.type[0]}} {{grassAndPosion.type[1]}} {{grassAndPosion.type[2]}} {{grassAndPosion.type[3]}} {{grassAndPosion.type[4]}}
                    {{grassAndPosion.type[5]}}
                    <h4 class="move-weakness">Resistant Weak</h4>
                    {{grassAndPosion.resistantWeak[0]}} {{grassAndPosion.resistantWeak[1]}} {{grassAndPosion.resistantWeak[2]}} {{grassAndPosion.resistantWeak[3]}} {{grassAndPosion.resistantWeak[4]}} 
                    {{grassAndPosion.resistantWeak[5]}} {{grassAndPosion.resistantWeak[6]}} {{grassAndPosion.resistantWeak[7]}} {{grassAndPosion.resistantWeak[8]}} {{grassAndPosion.resistantWeak[9]}}
                    {{grassAndPosion.resistantWeak[10]}}
                    <h4 class="move-weakness">{{ strongTxt }}</h4>
                    {{grassAndPosion.strongAganist[0]}} {{grassAndPosion.strongAganist[1]}} {{grassAndPosion.strongAganist[2]}} {{grassAndPosion.strongAganist[3]}} {{grassAndPosion.strongAganist[4]}} 
                    {{grassAndPosion.strongAganist[5]}}
                    <h4 class="move-weakness">{{ notEfectiveTxt }}</h4>
                    {{grassAndPosion.notEfectiveAganist[0]}} {{grassAndPosion.notEfectiveAganist[1]}} {{grassAndPosion.notEfectiveAganist[2]}} {{grassAndPosion.notEfectiveAganist[3]}} {{grassAndPosion.notEfectiveAganist[4]}} 
                    {{grassAndPosion.notEfectiveAganist[5]}} {{grassAndPosion.notEfectiveAganist[6]}}
                    </b-alert>
                </div>
                </b-col>
            </b-row>
        </div>
    </b-container>
    <a class="testing" href="http://">A ver</a>
    <!-- <a href="https://www.w3schools.com">Visit W3Schools.com!</a> -->

    {{ divAlert }}
    <h1 class="justify-content-md-center">{{ grassAndPosion.type }}</h1>

    
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
          hiddenAbilities1: '',
          hiddenAbilities: '',
          hiddenOrNot: '',
          hiddenAbilityTxt: '',
          pokemonType1: '',
          pokemonType2: '',
          pokemonId: '',
          divAlert: '',
          strongTxt: '',
          notEfectiveTxt: '',
          showDismissibleAlerts: false
      }
  },  
computed: {
    ...mapState("weaknesses", ['grassAndPosion']),
    
},
    
methods: {
    ...mapMutations("weaknesses",[
        'grassAndPostionDeb', 'weaknessSinlgeType']),
    
    ...mapActions('weaknesses',[
        'weakneesType'
    ]),

    /**
     * When the Weakness alert table not have Strong and not Effective exsits 
     * the text change
     */
    emptyArrWeakCard() {
        if(this.grassAndPosion.strongAganist[0] == undefined && this.grassAndPosion.notEfectiveAganist[0] == undefined ) {
            this.strongTxt = ''
            this.notEfectiveTxt = ''
        }
        else {
            this.strongTxt = 'Strong Aganist'
            this.notEfectiveTxt = 'Not Very Efective Aganist'
        }
    },
      async getPokemonName(name) {
          let data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
          console.log(data)
          console.log(data.data.abilities[0].is_hidden)
          console.log(data.data.abilities[0].ability.name)
          this.pokemonNameApi = data.data.name   
          this.pokemonId = data.data.id     

            /**
            * Abilities Data 
            */ 
            this.abilities = data.data.abilities[0].ability.name    
            
            /**
             * Check if the second abillites is hidden or not
             */
            // try {
            //     this.checkHiddenAbilities2 = data.data.abilities[1].is_hidden
            // } catch (error) {
            //     console.log('not Hidden')
            // }

            /**
             * Check if the api data in the second array is a abilily hidden or not
             */
            try {
                if(this.checkHiddenAbilities2 = data.data.abilities[1].is_hidden === false) {
                    this.hiddenOrNot = 'Ability 2:'
                    this.abilities2 = data.data.abilities[1].ability.name
                }
                 else if(this.checkHiddenAbilities2 = data.data.abilities[1].is_hidden === true) {
                    this.hiddenOrNot = 'Hidden Ability:'
                    this.abilities2 = data.data.abilities[1].ability.name
                }
                
            } catch (error) {
                this.hiddenOrNot = ''
                this.abilities2 = ''
            }
        
        /**
         * Check if the pokemon have second ability
         */
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

        console.log(this.pokemonType1, '', this.pokemonType2)
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

.lov:active {
    background: black;
}

.pkm-variable {
    padding-top: 12px;
}

.cardMove {
    padding-top: 30px;
}
a {
    color:red;
}
a:visited {
    color: black;
}

.img-size {
    height: 150px;
}

.card-height {
    height: 0x;
    
}

.WeakPopup {
    width: 200px;
}

.alertWeak {
    /* display: none; */
}
div.alert.alert-position{
    height: 400px;
    width: 370px;
    margin-left: 0px;
}

h4.move-weakness {
    margin-top: 20px;
}

</style>