<template>
    <div>
        <h1>Buscar pokemon: {{pokemonId}}</h1>
        <form @submit.prevent="onSubmit">
            <input 
                type="number"
                placeholder="número del pokemon"
                autofocus
                v-model="pokemonId"
            >
        </form>
        <br>
        <span>Presione enter para buscar</span>
    </div>
</template>

<script>
    import { ref } from 'vue'
    import { useRouter, useRoute } from 'vue-router'

    export default {
        setup(){
            const router = useRouter()
            const pokemonId = ref(1)

            return {
                pokemonId,
                onSubmit: () => {
                    // console.log('Pokemon a buscar: ', pokemonId.value)
                    router.push({name:'pokemon-id', params:{ id: pokemonId.value }})
                }
            }
        }
    }
</script>

<style scoped>

</style>