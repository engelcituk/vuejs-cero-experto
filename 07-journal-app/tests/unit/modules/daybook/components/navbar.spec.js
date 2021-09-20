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
            idToken: 'ABC-123',
            refreshToken: 'XYZ'
    })

    beforeEach( () => jest.clearAllMocks() )
    
    test('Debe de mostrar el componente correctament', () => { 
        const wrapper = shallowMount(Navbar, {
            global:{
                plugins:[ store ]
            }
        })
        expect( wrapper.html() ).toMatchSnapshot()
    })

    test('Click en logout debe de cerrar sesión y redireccionar ', async () => { 
        const wrapper = shallowMount(Navbar, {
            global:{
                plugins:[ store ]
            }
        })
        await wrapper.find('button').trigger('click')
        expect( store.state.auth ).toEqual( { user: null, status: 'not-authenticated', idToken: null, refreshToken: null} )
        expect( wrapper.router.push ).toHaveBeenCalledWith( {name: 'login' } )
    })
   
})