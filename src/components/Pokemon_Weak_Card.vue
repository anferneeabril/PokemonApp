<template>
    <div class="weakAlert">
        <!-- <h1 v-for="weak in grassAndPosion" :key="weak.type">  -->
            <!-- </h1> -->
            <button @click="windowWeak(grassAndPosion)">test</button>
            
    </div>
</template>

<script>
import { mapState } from 'vuex'
import swal from 'sweetalert';
import VueAlertify from 'vue-alertify';

export default {
    name: 'Pokemon_Weak_Card',

    data() {
        return {
            test: 'grassAndPosion'
            } 
    },

    computed: {
        ...mapState("weaknesses", ['grassAndPosion']),
    },

    methods:{
        windowWeak: (types) => {
            this.$alertify.success('test')

            // for (const [key, value] of Object.entries(types)) {
            //     console.log(`${value}`)
            //     swal({
            //         text: `${value}`,
            //         text: 'res'
            //     })
            // }
        }
    }
}
</script>