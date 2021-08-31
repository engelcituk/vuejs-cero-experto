
import { shallowMount } from '@vue/test-utils';
import Indecision from '@/components/Indecision'

describe('Indecision Component', ()=> {
    let wrapper

    beforeEach( () => {
        wrapper = shallowMount(Indecision) //monto el counter, en cada test, asi si se modifica algo en este se vuelve a su estado inicial
    })
    test('Debe de hacer match con el snapshot', () => {
        
        expect( wrapper.html() ).toMatchSnapshot()
    })

    
})