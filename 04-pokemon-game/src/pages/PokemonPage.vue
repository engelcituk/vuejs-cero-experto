<template>
    <div>
        <h1>¿Quién es este pokemón?</h1>
        <PokemonPicture :pokemonId="251" :showPokemon="true" />
        <PokemonOptions/>
    </div>
</template>

<script>
    import getPokemonOptions from '@/helpers/getPokemonOptions'
    import PokemonPicture from '@/components/PokemonPicture'
    import PokemonOptions from '@/components/PokemonOptions'

    getPokemonOptions()
    export default {
        components:{
            PokemonPicture,
            PokemonOptions
        }
    }
</script>

<style lang="scss" scoped>

</style>