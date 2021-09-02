<template>
    <div class="pokemon-container">
        <img class="hidden-pokemon" :src="imsSrc" alt="Pokemon">
        <img v-if="showPokemon" class="fade-in" :src="imsSrc" alt="Pokemon">
    </div>
</template>

<script>
    export default {
        props:{
            pokemonId:{
                type: Number,
                required: true
            },
            showPokemon:{
                type: Boolean,
                required: true,
                default: false
            }
        },
        computed:{
            imsSrc(){
                return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
            }
        }
    }
</script>

<style scoped>
/* Pokemon Picture */
.pokemon-container {
    height: 200px;
}
img {
    height: 200px;
    position: absolute;
    right: 44%;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}
.hidden-pokemon {
    filter: brightness(0);
}

</style>