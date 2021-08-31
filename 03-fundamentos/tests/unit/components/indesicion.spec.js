
import { shallowMount } from '@vue/test-utils';
import Indecision from '@/components/Indecision'

describe('Indecision Component', ()=> {
    let wrapper
    let clgSpy

    beforeEach( () => {
        wrapper = shallowMount(Indecision) //monto el counter, en cada test, asi si se modifica algo en este se vuelve a su estado inicial
        clgSpy = jest.spyOn(console, 'log')
        jest.clearAllMocks()
    })

    test('Debe de hacer match con el snapshot', () => {
        
        expect( wrapper.html() ).toMatchSnapshot()
    })

    test('Escribir en el input no debe de disparar nada, (console.log())', async () => {
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')
        const input = wrapper.find('input')
        await input.setValue('Hola mundo')
        expect(clgSpy).toHaveBeenCalledTimes(1)
        // expect(getAnswerSpy).toHaveBeenCalledTimes(0)
        expect(getAnswerSpy).not.toHaveBeenCalled()
        // console.log(wrapper.vm)

    })

    test('Al escribir el simbolo de "?" debe de disparar el getAnswer', async () => {
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')
        const input = wrapper.find('input')
        await input.setValue('Hola mundo?')
        expect(clgSpy).toHaveBeenCalledTimes(1)
        expect(getAnswerSpy).toHaveBeenCalled()  
    })

    test('Pruebas en getAnswer', () => {
        
        
    })

    test('Pruebas en getAnswer - Fallo en API', () => {
        
        
    })
    
})