import { ref } from 'vue'
import axios from 'axios'

const usePokemon = ( pokemonId = '1' ) => {
    
    const pokemon = ref()
    const isLoading = ref(false)
    const erroMsg = ref()

    const searchPokemon = async (id) => {
        if( !id ) return 
        isLoading.value = true
        pokemon.value = null

        try {
            const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            pokemon.value = data
            erroMsg.value = null
            // console.log(data)
        } catch (error) {
            erroMsg.value = 'No se pudo cargar ese pokemon '+ error 
        }
        isLoading.value = false
    }

    searchPokemon( pokemonId ) // en el primer llamado agarra un por defecto

    return {
        erroMsg,
        isLoading,
        pokemon,
        searchPokemon
    }

}

export default usePokemon