export default {
    weakneesType: ( { commit }, payload) => {
        let type1 = payload.type1
        let type2 = payload.type2
        
        /**
         * Evalualte weakness if the pokemon only have 1 type 
         */
        switch(type1) {
            case 'electric':
                const WeakElectric = {
                    doubleWeak: ['Ground'],
                    resistantWeak: ['Electric', 'Flying', 'Steel'],
                    strongAganist: ['Flying', 'Water'],
                    notEfectiveAganist: ['Dragon', 'Electric', 'Grass', 'Ground(Immume)']
                }
                    commit('weakActions', WeakElectric)
            break;

            case 'psychic':
                const WeakPsychic = {
                    doubleWeak: ['Bug', 'Dark', 'Ghost'],
                    resistantWeak: ['Fighting', 'Psychic'],
                    strongAganist: ['Fighting', 'Poison'],
                    notEfectiveAganist: ['Psychic', 'Steel', 'Dark(Immume)']
                }
                commit('weakActions', WeakPsychic)
                break;
                
            case 'bug':
                const WeakBug = {
                    doubleWeak: ['Fire', 'Flying', 'Rock'],
                    resistantWeak: ['Fighting', 'Grass', 'Ground'],
                    strongAganist: ['Dark', 'Grass', 'Psychic'],
                    notEfectiveAganist: ['Fairy', 'Fire', 'Flying', 'Fighting', 
                                        'Ghost', 'Poison', 'Steel']
                }
                commit('weakActions', WeakBug)
                break;

            case 'grass':
                const WeakGrass = {
                    doubleWeak: ['Bug', 'Fire', 'Flying', 'Ice', 'Poison'],
                    resistantWeak: ['Water', 'Grass', 'Electric'],
                    strongAganist: ['Ground', 'Rock', 'Water'],
                    notEfectiveAganist: ['Flying', 'Poison', 'Bug', 'Steel', 'Fire', 'Grass']
                }
                commit('weakActions', WeakGrass)
                break;

            case 'fighting':
                const WeakFighting = {
                    doubleWeak: ['Flying', 'Psychic', 'Fairy'],
                    resistantWeak: ['Rock', 'Bug', 'Dark'],
                    strongAganist: ['Normal', 'Rock', 'Steel', 'Ice', 'Dark'],
                    notEfectiveAganist: ['Flying', 'Poison', 'Bug', 'Psychic', 'Ghost(Immune)']
                }
                commit('weakActions', WeakFighting)
                break;

                case 'normal':
                const WeakNormal = {
                    doubleWeak: ['Fighting'],
                    resistantWeak: ['Ghost'],
                    strongAganist: ['Nothing'],
                    notEfectiveAganist: ['Rock', 'Steel', 'Ghost']
                }
                commit('weakActions', WeakNormal)
                break;

            case 'flying':
                const WeakFlying = {
                    doubleWeak: ['Rock', 'Electric', 'Ice'],
                    resistantWeak: ['Ground', 'Fighting', 'Bug', 'Grass'],
                    strongAganist: ['Fighting', 'Bug', 'Grass', 'Fairy'],
                    notEfectiveAganist: ['Rock', 'Steel', 'Electric']
                }
                commit('weakActions', WeakFlying)
                break;
            
            case 'poison':
                const WeakPoison = {
                    doubleWeak: ['Ground', 'Psychic'],
                    resistantWeak: ['Fighting', 'Poison', 'Bug', 'Grass', 'Fairy'],
                    strongAganist: ['Grass', 'Fairy'],
                    notEfectiveAganist: ['Poison', 'Ground', 'Rock', 'Ghost']
                }
                commit('weakActions', WeakPoison)
                break;

            case 'ground':
                const WeakGround = {
                    doubleWeak: ['Water', 'Grass', 'Ice'],
                    resistantWeak: ['Poison', 'Rock'],
                    strongAganist: ['Poison', 'Rock', 'Steel', 'Fire', 'Electric'],
                    notEfectiveAganist: ['Bug', 'Grass']
                }
                commit('weakActions', WeakGround)
                break;
            
            case 'rock':
                const WeakRock = {
                    doubleWeak: ['Water', 'Grass', 'Ice'],
                    resistantWeak: ['Poison', 'Rock'],
                    strongAganist: ['Flying', 'Bug', 'Fire', 'Ice'],
                    notEfectiveAganist: ['Fighting', 'Ground', 'Steel']
                }
                commit('weakActions', WeakRock)
                break;
            
            case 'ghost':
                const WeakGhost = {
                    doubleWeak: ['Ghost', 'Dark'],
                    resistantWeak: ['Normal', 'Fighting', 'Poison', 'Bug'],
                    strongAganist: ['Ghost', 'Psychic'],
                    notEfectiveAganist: ['Dark']
                }
                commit('weakActions', WeakGhost)
                break;
            
            case 'steel':
                const WeakSteel = {
                    doubleWeak: ['Fighting', 'Fire', 'Poison'],
                    resistantWeak: ['Normal', 'Flying', 'Poison', 'Rock', 'Bug', 'Steel', 'Grass', 'Psychic', 'Ice', 'Dragon', 'Fairy'],
                    strongAganist: ['Rock', 'Ice', 'Fairy'],
                    notEfectiveAganist: ['Steel', 'Fire', 'Water', 'Electric']
                }
                commit('weakActions', WeakSteel)
                break;
            
            case 'fire':
                const WeakFire = {
                    doubleWeak: ['Ground', 'Rock', 'Water'],
                    resistantWeak: ['Bug', 'Steel', 'Fire', 'Grass', 'Ice', 'Fairy'],
                    strongAganist: ['Bug', 'Steel', 'Grass', 'Ice'],
                    notEfectiveAganist: ['Rock', 'Fire', 'Water', 'Dragon']
                }
                commit('weakActions', WeakFire)
                break;

            case 'water':
                const WeakWater = {
                    doubleWeak: ['Grass', 'Electric'],
                    resistantWeak: ['Steel', 'Fire', 'Water', 'Ice'],
                    strongAganist: ['Ground', 'Rock', 'Fire'],
                    notEfectiveAganist: ['Water', 'Grass', 'Dragon']
                }
                commit('weakActions', WeakWater)
                break;

            case 'ice':
                const WeakIce = {
                    doubleWeak: ['Fighting', 'Rock', 'Steel', 'Fire'],
                    resistantWeak: ['Ice'],
                    strongAganist: ['Flying', 'Ground', 'Grass', 'Dragon'],
                    notEfectiveAganist: ['Steel', 'Fire', 'Water', 'Ice']
                }
                commit('weakActions', WeakIce)
                break;

            case 'dragon':
                const WeakDragon = {
                    doubleWeak: ['Ice', 'Dragon', 'Fairy'],
                    resistantWeak: ['Fire', 'Water', 'Grass', 'Electric'],
                    strongAganist: ['Dragon'],
                    notEfectiveAganist: ['Steel']
                }
                commit('weakActions', WeakDragon)
                break;

            case 'dark':
                const WeakDark = {
                    doubleWeak: ['Fighting', 'Bug', 'Fairy'],
                    resistantWeak: ['Ghost', 'Psychic', 'Dark'],
                    strongAganist: ['Ghost', 'Psychic'],
                    notEfectiveAganist: ['Fighting', 'Dark', 'Fairy']
                }
                commit('weakActions', WeakDark)
                break;
            
            case 'fairy':
                const WeakFairy = {
                    doubleWeak: ['Poison', 'Ghost', 'Dragon'],
                    resistantWeak: ['Fighting', 'Bug', 'Dark'],
                    strongAganist: ['Fighting', 'Dragon', 'Dark'],
                    notEfectiveAganist: ['Poison', 'Steel', 'Fire']
                }
                commit('weakActions', WeakFairy)
                break;
        } 

        /**
         * Evaluate weakness for the pokemon have 2 types
         */
        switch(type1 && type2) {
            // Normal Type
            case 'normal' && 'fighting' :
                const WeakNrmFigt = {
                    doubleWeak: ['Fighting', 'Flying', 'Psychic', 'Fairy', ],
                    resistantWeak: ['Bug', 'Rock', 'Dark', 'Ghost(INMUNE)'],
                    strongAganist: [],
                    notEfectiveAganist: []
                }   
                commit('weakActions', WeakNrmFigt);
                break;

            case 'normal' && 'flying' :
                const WeakNrmFly = {
                    doubleWeak: ['Electric', 'Ice', 'Rock'],
                    resistantWeak: ['Grass', 'Bug', 'Ground(INMUNE)', 'Ghost(INMUNE)'],
                    strongAganist: [],
                    notEfectiveAganist: []
                }   
                commit('weakActions', WeakNrmFly);
                break;

            case 'normal' && 'ground' :
                const WeakNrmGrn = {
                    doubleWeak: ['Water', 'Grass', 'Ice', 'Fighting'],
                    resistantWeak: ['Poison', 'Rock', 'Electric(INMUNE)', 'Ghost(INMUNE)'],
                    strongAganist: [],
                    notEfectiveAganist: []
                }   
                commit('weakActions', WeakNrmGrn);
                break;

            case 'fire' && 'normal' :
                const WeakNrmFire = {
                    doubleWeak: ['Water', 'Fighting', 'Ground', 'Rock'],
                    resistantWeak: ['Fire', 'Grass', 'Ice', 'Bug', 'Steel', 'Fairy', 'Ghost(INMUNE)'],
                    strongAganist: [],
                    notEfectiveAganist: []
                }   
                commit('weakActions', WeakNrmFire);
                break;

            case 'normal' && 'water' :
                const WeakNrmWater = {
                    doubleWeak: ['Electric', 'Grass', 'Fighting'],
                    resistantWeak: ['Fire', 'Water', 'Ice', 'Steel','Ghost(INMUNE)'],
                    strongAganist: [],
                    notEfectiveAganist: []
                }   
                commit('weakActions', WeakNrmWater);
                break;

            case 'electric' && 'normal' :
                const WeakNrmElec = {
                    doubleWeak: ['Fighting', 'Ground'],
                    resistantWeak: ['Electric', 'Flying', 'Steel', 'Ghost(INMUNE)'],
                    strongAganist: [],
                    notEfectiveAganist: []
                }   
                commit('weakActions', WeakNrmElec);
                break;

            case 'normal' && 'grass' :
                const WeakNrmGrss = {
                    doubleWeak: ['Fire', 'Ice', 'Fighting', 'Poison', 'Flying', 'Bug'],
                    resistantWeak: ['Water', 'Electric', 'Grass', 'Ground', 'Ghost(INMUNE)'],
                    strongAganist: [],
                    notEfectiveAganist: []
                }   
                commit('weakActions', WeakNrmGrss);
                break;

            case 'normal' && 'psychic' :
                const WeakNrmPsy = {
                    doubleWeak: ['Bug', 'Dark'],
                    resistantWeak: ['Psychic', 'Ghost(INMUNE)'],
                    strongAganist: [],
                    notEfectiveAganist: []
                }   
                commit('weakActions', WeakNrmPsy);
                break;

            case 'normal' && 'dragon' :
                const WeakNrmDra = {
                    doubleWeak: ['Ice', 'Fighting', 'Dragon', 'Fairy'],
                    resistantWeak: ['Fire', 'Water', 'Electric', 'Grass', 'Ghost(INMUNE)'],
                    strongAganist: [],
                    notEfectiveAganist: []
                }   
                commit('weakActions', WeakNrmDra);
                break;

            case 'dark' && 'normal' :
                const WeakNrmDrk = {
                    doubleWeak: ['Fighting', 'Bug', 'Fairy'],
                    resistantWeak: ['Dark', 'Ghost(INMUNE)', 'Psychic(INMUNE)'],
                    strongAganist: [],
                    notEfectiveAganist: []
                }   
                commit('weakActions', WeakNrmDrk);
                break;

            case 'normal' && 'fairy' :
                const WeakNrmFry = {
                    doubleWeak: ['Poison', 'Steel'],
                    resistantWeak: ['Bug', 'Dark', 'Ghost(INMUNE)', 'Dragon(INMUNE)'],
                    strongAganist: [],
                    notEfectiveAganist: []
                }   
                commit('weakActions', WeakNrmFry);
                break;

            case type1 == 'fighting' && type2 == 'flying':
                const WeakFightFly = {
                    doubleWeak: ['Poison', 'Steel'],
                    resistantWeak: ['Bug', 'Dark', 'Ghost(INMUNE)', 'Dragongff(INMUNE)'],
                    strongAganist: [],
                    notEfectiveAganist: []
                }   
                commit('weakActions', WeakFightFly);
                break;

                // const WeakObj = {
                //     doubleWeak: ['Bug', 'Fire', 'Flying', 'Ice', 'poison'],
                //     resistantWeak: ['Posion', 'Ground', 'Bug'],
                //     strongAganist: [],
                //     notEfectiveAganist: []
                // }   
                // commit('weakActions', WeakObj);
                // break;
                
            case 'bug' && 'flying':
                 const weakBF = { 
                    doubleWeak: ['Fire', 'Flying', 
                'Electric', 'Ice', 'Rock x4']
            }
                commit('weakActions', weakBF)
                break;
            }
    }
}