
import { shallowMount } from '@vue/test-utils'
import Entry from '@/modules/daybook/components/Entry'

describe('Pruebas en el Entry component', ()=> {
    
    test('Debe de hacer match con el snapshot', ()=> {
        const wrapper = shallowMount( Entry )
        
    })   
      
    test('Debe de redireccionar al hacer click en el entry-container', ()=> {
        const wrapper = shallowMount( Entry )
        
    }) 

    test('Pruebas en las propiedades computadas', ()=> {
        const wrapper = shallowMount( Entry )
        
    }) 
})