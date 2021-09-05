<template>
    <div>
        <h1>Pokemon Page <span>#{{id}}</span></h1>
        <div v-if="pokemon">
            <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
        </div>
    </div>
</template>

<script>
export default {
    props:{
        id:{
            type: Number,
            required: true
        },
        
    },
    created(){
        // const { id } = this.$route.params
        // this.id = id
        // console.log(this.$attrs)
        this.getPokemon()
    } ,
    data(){
        return {    
            // id : null
            pokemon: null
        }
    },
    methods:{
        async getPokemon(){
            try {
                const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then( r => r.json() )
                // console.log(pokemon)
                this.pokemon = pokemon
            } catch (error) {
                // console.log(error)  
                this.$router.push('/')
                console.log('no hay nada que hacer aquí')
            }
            
        }
    },
    watch:{
        id(){
            this.getPokemon()
        }
    }
}
</script>
