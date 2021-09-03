
import { shallowMount, mount } from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage'

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
  
})