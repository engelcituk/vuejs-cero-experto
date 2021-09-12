
import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home'

describe('Pruebas en el Home View', ()=> {
    
    test('Debe de hacer match con el snapshot', ()=> {
        const wrapper = shallowMount(Home)
        expect(wrapper.html()).toMatchSnapshot()
    })    
  
    test('Hacer click en un botón debe de redireccionar  a no-entry', ()=> {
        const mockRouter = {
            push: jest.fn(),
        } 

        const wrapper = shallowMount(Home,{
            global: {
                mocks:{
                    $router: mockRouter
                }
            }
        })

        wrapper.find('button').trigger('click')
        expect(mockRouter.push).toHaveBeenCalled()
        expect(mockRouter.push).toHaveBeenCalledWith({name:'no-entry'}) // se evalue igual sus argumentos


    })

})