<template>
    <div>
        <h1>Counter vue</h1>
        <h2>{{counter}}</h2>
        <button @click="decrease">-1</button>
        <button @click="increase">+1</button>

    </div>
</template>
<script>
    import { ref } from 'vue' 

    export default {
        name:'Counter',
        props:{},
        emits:[],
        setup () {

            const counter = ref(5)
            
            /*
            innecesario
            const increase = () => {
                counter.value ++
            }

            const decrease = () => {
                counter.value --
            }
            */
            return {
                //objetos reactivos
                counter,
                //métodos
                decrease: () => counter.value --,
                increase: () => counter.value ++,
            }
        }
    }
</script>

<style scoped>

</style>