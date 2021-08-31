
import { shallowMount } from '@vue/test-utils';
import Indecision from '@/components/Indecision'

describe('Indecision Component', ()=> {
    let wrapper
    let clgSpy

    // mock de fetch api, genero un mock de fetch por node no lo tiene
    global.fetch = jest.fn( () => Promise.resolve({
        json: () => Promise.resolve({
            answer: 'yes',
            forced: false,
            image: 'https://yesno.wtf/assets/yes/2.gif'
        })
    }))

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

    test('Pruebas en getAnswer', async () => {
        await wrapper.vm.getAnswer()
        // console.log(wrapper.vm.img)
        // console.log(wrapper.vm.answer)
        const img = wrapper.find('img')
        expect(img.exists() ).toBeTruthy()
        expect(wrapper.vm.img ).toBe('https://yesno.wtf/assets/yes/2.gif')
        expect(wrapper.vm.answer).toBe('yes')

    })

    test('Pruebas en getAnswer - Fallo en API', () => {
        
        
    })
    
})