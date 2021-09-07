<template>
    <div>
        <h1>Counter - Vuex </h1>
        <h2>Direct Access: {{$store.state.count}}</h2>
        <!-- <h2>Computed: {{countComputed}}</h2> -->

        <button @click="increment">+1</button>
        <button @click="incrementBy">+5</button>
        <button>Random </button>

        <h1>mapState</h1>
        <h2>count: {{count}}</h2>
        <h2>lastMutation: {{lastMutation}}</h2>


    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        // computed: mapState(['count']), 
        computed:{
            countComputed(){
                return this.$store.state.count
            },
            ...mapState(['count','lastMutation'])
            // ...mapState({
            //     count: state => state.count,
            //     lastMutation: state => state.lastMutation,
            // })
        },
        methods:{
            increment(){
                this.$store.commit('increment')
            },
            incrementBy(){
                this.$store.commit('incrementBy', 5)
            },
            
        }
    }
</script>

