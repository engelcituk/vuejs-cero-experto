<template>
    <div>
        <h1>Buscar pokemon: {{pokemonId}}</h1>
        <form @submit.prevent="onSubmit">
            <input 
                type="number"
                placeholder="número del pokemon"
                v-model="pokemonId"
                ref="txtSearchId"
            >
        </form>
        <br>
        <span>Presione enter para buscar</span>
    </div>
</template>

<script>
    import { ref, onActivated } from 'vue'
    import { useRouter, useRoute } from 'vue-router'

    export default {
        setup(){
            const router = useRouter()
            const pokemonId = ref(1)
            const txtSearchId = ref()

            onActivated( () => {
                // Para mantener el foco en el input
                // txtSearchId.value.focus()
                txtSearchId.value.select() //matiene el foco, pero a la vez selecciona el texto
            })

            return {
                pokemonId,
                txtSearchId,
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