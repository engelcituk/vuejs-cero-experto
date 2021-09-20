import { shallowMount } from '@vue/test-utils'
import Login from '@/modules/auth/views/Login'
import createVuexStore from '../../../mock-data/mock-store'


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


    test('Debe de mostar el view correctamente ', async () => { 
        const wrapper = shallowMount(Login, {
            global: {
                plugins:[ store ]
            }
        })
        expect( wrapper.html() ).toMatchSnapshot()
    })
   
})