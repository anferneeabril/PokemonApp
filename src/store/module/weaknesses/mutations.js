export default {
    weakActions(state, weak) {
        if (weak.resistantWeak) {
            state.grassAndPosion.type = weak.doubleWeak
            state.grassAndPosion.resistantWeak = weak.resistantWeak
            state.grassAndPosion.strongAganist = weak.strongAganist
            state.grassAndPosion.notEfectiveAganist = weak.notEfectiveAganist
        }
        else {
            state.grassAndPosion.resistantWeak = weak.resistantWeak
            state.grassAndPosion.type = weak.doubleWeak 
            state.grassAndPosion.strongAganist = weak.strongAganist
            state.grassAndPosion.notEfectiveAganist = weak.notEfectiveAganist
        }
    },
}
  