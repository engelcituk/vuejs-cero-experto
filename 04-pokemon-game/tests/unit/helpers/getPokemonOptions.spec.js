
import getPokemonOptions, { getPokemons, getPokemonNames } from '@/helpers/getPokemonOptions'

describe('get Pokemon Options helpers', ()=> {

    test('Debe de regresar un arreglo de números ', ()=> {
        const pokemons = getPokemons()
        expect(pokemons.length).toBe(650)
        expect(pokemons[0]).toBe(1) //espero que en su posicion 1,tenga el valor de 1

    })


    test('Debe de retornar un arreglo de cuatro elementos con nombres de pokemons', async ()=> {
        
        const pokemons = await getPokemonNames([1,2,3,4])

        expect(pokemons).toEqual([
            { name: 'bulbasaur', id: 1 },
            { name: 'ivysaur', id: 2 },
            { name: 'venusaur', id: 3 },
            { name: 'charmander', id: 4 }
        ]) 
    })

    test('getPokemonOptions Debe de retornar un arreglo mezclado ', async () => {
        const pokemons = await getPokemonOptions()
        
        expect(pokemons.length ).toBe(4)

        expect(pokemons).toEqual([
            {
                name: expect.any(String),
                id: expect.any(Number) 
            },
            { 
                name: expect.any(String), 
                id: expect.any(Number)  
            },
            { 
                name: expect.any(String), 
                id: expect.any(Number)  
            },
            { 
                name: expect.any(String), 
                id: expect.any(Number)  
            }
        ])

    })
})