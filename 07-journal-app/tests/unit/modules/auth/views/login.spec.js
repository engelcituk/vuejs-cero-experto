import { shallowMount } from '@vue/test-utils'
import Login from '@/modules/auth/views/Login'
import createVuexStore from '../../../mock-data/mock-store'
import Swal from 'sweetalert2'

jest.mock('sweetalert2', () => ({
    fire: jest.fn(),
    showLoading: jest.fn(),
    close: jest.fn()
}))


import {
    VueRouterMock,
    createRouterMock,
    injectRouterMock,
  } from 'vue-router-mock'

  import { config } from '@vue/test-utils'
  
  // create one router per test file
  const router = createRouterMock()
  beforeEach(() => {
    injectRouterMock(router)
  })
  
  // Add properties to the wrapper
  config.plugins.VueWrapper.install(VueRouterMock)

// para correr la prueba: npm run test:unit login
describe('Pruebas en el View Login', () => {
    
    const store = createVuexStore({
        status: 'not-authenticated', // 'authenticated' , 'not-authenticated', 'authenticating'
        user: null,
        idToken: null,
        refreshToken: null
    })

    store.dispatch = jest.fn()

    beforeEach( () => jest.clearAllMocks() )

    test('Debe de mostar el view correctamente ', async () => { 
        const wrapper = shallowMount(Login, {
            global: {
                plugins:[ store ]
            }
        })
        expect( wrapper.html() ).toMatchSnapshot()
    })

    test('Credenciales incorrectas, dispara el error Sweetalert ', async () => { 

        store.dispatch.mockReturnValueOnce( {ok: true, message: 'Error con las credenciales' } )

        const wrapper = shallowMount( Login, {
            global: {
                plugins:[ store ]
            }
        })
        await wrapper.find('form').trigger('submit')

        expect( store.dispatch ).toHaveBeenCalledWith('auth/signInUser', { email: '', password: ''})
        // expect( Swal.fire ).toHaveBeenCalledWith( "Error", "Error con las credenciales", "error" )
    })

    test('Credenciales correctas, debe de redirigir a la ruta no-entry ', async () => { 

        store.dispatch.mockReturnValueOnce( {ok: true } )

        const wrapper = shallowMount( Login, {
            global: {
                plugins:[ store ]
            }
        })
        
        const [ txtEmail, txtPassword ] = wrapper.findAll('input')
        await txtEmail.setValue('juanit@mail.com')
        await txtPassword.setValue('12425252523')

        await wrapper.find('form').trigger('submit')

        expect( store.dispatch ).toHaveBeenCalledWith('auth/signInUser', { email: 'juanit@mail.com', password: '12425252523'})        
        expect( wrapper.router.push ).toHaveBeenCalledWith({ name:'no-entry' })        

    })
   
}) 