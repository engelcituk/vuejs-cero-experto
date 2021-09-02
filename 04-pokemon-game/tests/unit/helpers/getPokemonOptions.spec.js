
import { shallowMount } from '@vue/test-utils'
import { getPokemons } from '@/helpers/getPokemonOptions'

describe('get Pokemon Options helpers', ()=> {

    test('Debe de regresar un arreglo de números ', ()=> {
        const pokemons = getPokemons()
        expect(pokemons.length).toBe(650)
        expect(pokemons[0]).toBe(1) //espero que en su posicion 1,tenga el valor de 1

    })


    test('Debe de retornar un arreglo de cuatro elementos con nombres de pokemons', ()=> {

    })

    test('getPokemonOptions Debe de retornar un arreglo mezclado ', () => {

    })
})