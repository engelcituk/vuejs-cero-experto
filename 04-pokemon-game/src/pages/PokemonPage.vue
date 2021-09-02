<template>
    <div>
        <h1 v-if="!pokemon">Espere por favor</h1>
        <div v-if="pokemon">
            <h1>¿Quién es este pokemón?</h1>
            <PokemonPicture
                :pokemonId="pokemon.id"
                :showPokemon="showPokemon"
            />
            <PokemonOptions
                :pokemons="pokemonArr"
                @selection="checkAnswer"
            />
        </div>
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
                pokemonArr: [],
                pokemon: null,
                showPokemon: false
            }
        },
        methods:{
            async mixPokemonArr(){
                this.pokemonArr = await getPokemonOptions()
                const rndInt = Math.floor( Math.random() * 4 )
                this.pokemon = this.pokemonArr[rndInt]
            },
            checkAnswer(pokemonId ){
                this.showPokemon = true
                console.log('pokemon page llamado', pokemonId)
            }
        },
        mounted(){
            this.mixPokemonArr()
        }
    }
</script>

<style lang="scss" scoped>

</style>