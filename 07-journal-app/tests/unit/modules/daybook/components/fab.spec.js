
import { shallowMount } from '@vue/test-utils'
import Fab from '@/modules/daybook/components/Fab'

describe('Pruebas en el Fab component', ()=> {
    
    test('Debe de mostrar el icono por defecto fa-plus', ()=> {
        const wrapper = shallowMount( Fab )
        const iTag = wrapper.find('i')
        expect( iTag.classes('fa-plus') ).toBeTruthy()
    })   
    
    test('Debe de mostrar el icono por argumento :fa-save', ()=> {
        const wrapper = shallowMount( Fab,{
            props:{
                icon: 'fa-save'
            }
        })
        const iTag = wrapper.find('i')
        expect( iTag.classes('fa-save') ).toBeTruthy()    
    })
    
    test('Debe de emitir el evento save-entry cuando se hace click en btn', ()=> {
        const wrapper = shallowMount( Fab )      
        wrapper.find('button').trigger('click')
        expect( wrapper.emitted('save-entry') ).toHaveLength(1)    
    }) 

  
})