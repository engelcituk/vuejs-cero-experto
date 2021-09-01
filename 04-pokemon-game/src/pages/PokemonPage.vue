<template>
    <div>
        <h1>¿Quién es este pokemón?</h1>
        <PokemonPicture/>
        <PokemonOptions/>
    </div>
</template>

<script>
    import PokemonPicture from '@/components/PokemonPicture';
    import PokemonOptions from '@/components/PokemonOptions';

    export default {
        components:{
            PokemonPicture,
PokemonOptions
        }
    }
</script>

<style lang="scss" scoped>

</style>