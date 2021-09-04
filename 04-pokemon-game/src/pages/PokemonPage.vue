<template>
    <div>
        <h1 v-if="!pokemon">Espere por favor</h1>
        <div class="pokemon-info" v-if="pokemon">
            <h1>¿Quién es este pokemón?</h1>
            <PokemonPicture
                :pokemonId="pokemon.id"
                :showPokemon="showPokemon"
            />
            <PokemonOptions
                :pokemons="pokemonArr"
                @selection="checkAnswer"
            />
            <template v-if="showAnswer">
                <h2 class="fade-in">{{message}}</h2>
                <button class="btn-newgame" @click="newGame">
                    Nuevo juego
                </button>
            </template>
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
                showPokemon: false,
                showAnswer: false,
                message: ''
            }
        },
        methods:{
            async mixPokemonArr(){
                this.pokemonArr = await getPokemonOptions()
                const rndInt = Math.floor( Math.random() * 4 )
                this.pokemon = this.pokemonArr[rndInt]
            },
            checkAnswer(selectedId ){
                this.showPokemon = true
                this.showAnswer = true
                if(selectedId === this.pokemon.id ){
                    this.message = `Correcto, es ${this.pokemon.name}`
                } else {
                    this.message = `Oops, era ${this.pokemon.name}`
                }
                console.log('Hola mundo', this.showPokemon)
            },
            newGame(){
                this.pokemonArr= [],
                this.pokemon= null,
                this.showPokemon= false,
                this.showAnswer= false,
                this.message= ''
                this.mixPokemonArr()
            }
        },
        mounted(){
            this.mixPokemonArr()
        }
    }
</script>

<style scoped>
    
    .btn-newgame{
        padding-block: 1rem; 
        padding-inline: 1.5rem; 
        border: none;
        background: purple;
        border-radius: 5px;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
    }
</style>