import { shallowMount } from '@vue/test-utils'
import Navbar from '@/modules/daybook/components/Navbar'
import createVuexStore from '../../../mock-data/mock-store'


// para correr la prueba: npm run test:unit navbar
describe('Pruebas en el componente navBar', () => {
    const store = createVuexStore({
            user :{
                name: 'Juan Carlos',
                email: 'juam@mail.com'
            },
            status: 'authenticated',
            idtoken: 'ABC-123',
            refreshToken: 'XYZ'
    })
    
    test('Debe de mostrar el componente correctament', () => { 
        const wrapper = shallowMount(Navbar, {
            global:{
                plugins:[ store ]
            }
        })
        expect( wrapper.html() ).toMatchSnapshot()
    })
   
})