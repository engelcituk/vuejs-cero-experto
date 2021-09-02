<template>
    <div>
        <h1>¿Quién es este pokemón?</h1>
        <PokemonPicture :pokemonId="251" :showPokemon="true" />
        <PokemonOptions :pokemons="pokemonArr" />
    </div>
</template>

<script>
    import PokemonPicture from '@/components/PokemonPicture'
    import PokemonOptions from '@/components/PokemonOptions'
    import getPokemonOptions from '@/helpers/getPokemonOptions'

    getPokemonOptions()
    export default {
        components:{
            PokemonPicture,
            PokemonOptions
        },
        data(){
            return {
                pokemonArr: []
            }
        },
        methods:{
            async mixPokemonArr(){
                this.pokemonArr = await getPokemonOptions()
                console.log(this.pokemonArr)
            }
        },
        mounted(){
            this.mixPokemonArr()
        }
    }
</script>

<style lang="scss" scoped>

</style>