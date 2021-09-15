<template>
    <div>
        <h1 v-if="!pokemon && !erroMsg">Buscando</h1>
        <h1 v-else-if="erroMsg">{{erroMsg}}</h1>
        <template v-else>
            <h3>{{pokemon.name}}</h3>
            <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
            <br>
            <router-link :to="{name: 'pokemon-search'}">Regresar</router-link>
        </template>   
    </div>
</template>

<script>
    import { useRoute } from 'vue-router'
    import usePokemon from './../composables/usePokemon'
    
    export default {
        setup(){
            
            const route = useRoute()
            const { erroMsg, isLoading, pokemon } = usePokemon( route.params.id )
            return { erroMsg, isLoading, pokemon }

        }
    }
</script>
