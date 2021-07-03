export default {
    weakneesType: ( { commit }, payload) => {
        let type1 = payload.type1
        let type2 = payload.type2

        switch(type1 && type2) {
            case 'grass' && 'poison' :
                let weak = ['Fire', 'Flying']
                commit('weakActions', weak);
                break;

            case 'bug' && 'flying':
                 weak = ['Fire', 'Flying', 
                'Electric', 'Ice', 'Rock x4']
                commit('weakActions', weak)
                break;
            }
    }
}