
import { shallowMount } from '@vue/test-utils'
import PokemonPicture from '@/components/PokemonPicture'

describe('Pokemon Picture component', ()=> {

    test('Debe de hacer match con el snapshot', ()=> {
        const wrapper = shallowMount(PokemonPicture, {
            props:{
                pokemonId: 1,
                showPokemon: false
            }
        }) 
        expect( wrapper.html() ).toMatchSnapshot()

    })

    test('Debe de hacer match con el snapshot', ()=> {
        
    })

    test('Debe de mostrar la imagen oculta y el pokemon 100', ()=> {
        
    })

    test('Debe de mostrar el pokemon si showPokemon=true', ()=> {
        
    })
  
})