
import { shallowMount } from '@vue/test-utils'
import PokemonOptions from '@/components/PokemonOptions'
import { pokemons }  from './../mokcs/pokemons.mock'

describe('Pokemon Options component', ()=> {
    let wrapper

    beforeEach( () => {
        wrapper = shallowMount(PokemonOptions,{
            props:{
                pokemons
            }
        }) //monto el PokemonOptions, en cada test, asi si se modifica algo en este se vuelve a su estado inicial
    })

    test('Debe de hacer match con el snapshot', ()=> {
        expect(wrapper.html()).toMatchSnapshot() // toMatchInlineSnapshot
    })
  
})