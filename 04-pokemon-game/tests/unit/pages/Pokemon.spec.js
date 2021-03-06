
import { shallowMount, mount } from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage'
import {pokemons} from './../mokcs/pokemons.mock'

describe('Pokemon Page component', ()=> {
    let wrapper
    let mixPokemonArrSpy 

    beforeEach( () => {
        mixPokemonArrSpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArr')
        wrapper = shallowMount(PokemonPage) //monto el PokemonPage, en cada test, asi si se modifica algo en este se vuelve a su estado inicial
    })

    test('Debe de hacer match con el snapshot', ()=> {
        expect(wrapper.html()).toMatchSnapshot() // toMatchInlineSnapshot
    })

    test('Debe de llamar a mixPokemonArr al montar',  () => {
        const mixPokemonArrSpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArr')
        expect(mixPokemonArrSpy).toHaveBeenCalled() 

    })

    test('Debe de hacer match con el snapshot cuando cargan los pokemons',  () => {
        const wrapper = shallowMount( PokemonPage, {
            data(){
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        expect( wrapper.html() ).toMatchSnapshot()
    })

    test('Debe de mostrar los componentes de PokemonPicture y PokemonOptions',  () => {

        const wrapper = shallowMount( PokemonPage, {
            data(){
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        const picture = wrapper.find('pokemon-picture-stub') 
        const options = wrapper.find('pokemon-options-stub') 

        expect( picture.exists() ).toBeTruthy()
        expect( options.exists() ).toBeTruthy()

        expect( picture.attributes('pokemonid') ).toBe('1')
        expect( options.attributes('pokemons') ).toBeTruthy()

    })

    test('Pruebas con checkAnswer',  async () => {

        const wrapper = shallowMount( PokemonPage, {
            data(){
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        await wrapper.vm.checkAnswer(1)

        expect(wrapper.find('h2').exists() ).toBeTruthy()
        expect(wrapper.vm.showPokemon ).toBeTruthy()
        expect(wrapper.find('h2').text() ).toBe(`Correcto, es ${pokemons[0].name}`)
        await wrapper.vm.checkAnswer(10)`Oops, era ${pokemons[0].name}`)
        console.log( wrapper.find('h2').text() )
        expect(wrapper.vm.message ).toBe('Oops, era ${pokemons[0].name}')

    })
  
})