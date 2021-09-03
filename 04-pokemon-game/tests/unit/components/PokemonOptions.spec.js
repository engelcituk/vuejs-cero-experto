
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
  
    test('Debe de mostrar las 4 opciones correctamente', ()=> {
        const [l1, l2, l3, l4] = wrapper.findAll('li')
        expect( l1.text() ).toBe('bulbasaur')
        expect( l2.text() ).toBe('ivysaur')
        expect( l3.text() ).toBe('venusaur')
        expect( l4.text() ).toBe('charmander')

    })


    test('Debe de emitir "selection" con sus respectivos parametros al hacer click', ()=> {
        const [l1, l2, l3, l4] = wrapper.findAll('li')
        l1.trigger('click')
        l2.trigger('click')
        l3.trigger('click')
        l4.trigger('click')

        // console.log(wrapper.emitted('selection'))
        expect( wrapper.emitted('selection').length).toBe(4) // 4 clicks
        expect( wrapper.emitted('selection').[0]).toEqual([1]) //toBe no funciona con arreglos u objetos
        expect( wrapper.emitted('selection').[1]).toEqual([2]) //toBe no funciona con arreglos u objetos
        expect( wrapper.emitted('selection').[2]).toEqual([3]) //toBe no funciona con arreglos u objetos
        expect( wrapper.emitted('selection').[3]).toEqual([4]) //toBe no funciona con arreglos u objetos
        
    })
})