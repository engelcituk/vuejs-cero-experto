import useAuth from '@/modules/auth/composables/useAuth'

const mockStore = {
    dispatch: jest.fn(),
}

jest.mock('vuex', () => ({
    useStore: () => mockStore
}))
// para correr la prueba: npm run test:unit useAuth
describe('Pruebas en el useAuth', () => {
    
    beforeEach( () => jest.clearAllMocks() )

    test('createUser exitoso', async () => { 
        const { createUser } = useAuth()
        const newUser = { name: 'Jonas', email:'jonas@mail.com' }
        mockStore.dispatch.mockReturnValue({ok: true})

        const respuesta = await createUser( newUser )
        expect( mockStore.dispatch ).toHaveBeenCalledWith("auth/createUser", {"email": "jonas@mail.com", "name": "Jonas"})
        expect( respuesta ).toEqual({ok: true})
    })  

    test('createUser fallido porque el email ya existe', async () => { 
        const { createUser } = useAuth()
        const newUser = { name: 'Jonas', email:'jonas@mail.com' }
        mockStore.dispatch.mockReturnValue({ ok: false, message: 'EMAIL_EXISTS' })

        const respuesta = await createUser( newUser )
        expect( mockStore.dispatch ).toHaveBeenCalledWith("auth/createUser", newUser)
        expect( respuesta ).toEqual({ ok: false, message: 'EMAIL_EXISTS' })
    }) 
   
})