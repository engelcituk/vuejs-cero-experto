import useAuth from '@/modules/auth/composables/useAuth'

const mockStore = {
    dispatch: jest.fn(),
    commit: jest.fn(),
    getters: {
        'auth/currentState': 'authenticated',
        'auth/username': 'juanito'
    },
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
    
    test('Login Exitoso', async () => { 
        const { loginUser } = useAuth()
        const loginForm = { email:'jonas@mail.com', password:'123456'}
        mockStore.dispatch.mockReturnValue({ ok: true })

        const respuesta = await loginUser( loginForm )
        expect( mockStore.dispatch ).toHaveBeenCalledWith("auth/signInUser", loginForm)
        expect( respuesta ).toEqual({ ok: true})
    }) 

    test('Login Fallido', async () => { 
        const { loginUser } = useAuth()
        const loginForm = { email:'jonas@mail.com', password:'123456'}
        mockStore.dispatch.mockReturnValue({ ok: false, message:'EMAIL/PASSWORD do not exist'})

        const respuesta = await loginUser( loginForm )
        expect( mockStore.dispatch ).toHaveBeenCalledWith("auth/signInUser", loginForm)
        expect( respuesta ).toEqual({ ok: false, message:'EMAIL/PASSWORD do not exist'})
    }) 

    test('checkAuthStatus', async () => { 
        const { checkAuthStatus } = useAuth()
        mockStore.dispatch.mockReturnValue({ ok: true})

        const respuesta = await checkAuthStatus()
        expect( mockStore.dispatch ).toHaveBeenCalledWith("auth/checkAuthentication")
        expect( respuesta ).toEqual({ ok: true})
    })

    test('logout', () => { 
        const { logout } = useAuth()
        logout()
        expect( mockStore.commit ).toHaveBeenCalledWith("auth/logout")
        expect( mockStore.commit ).toHaveBeenCalledWith("journal/clearEntries")
    })

    test('authStatus y username, propiedades computadas', () => { 
        const { authStatus, username } = useAuth()

        expect( authStatus.value ).toBe("authenticated")
        expect( username.value ).toBe("juanito")
        
    })
   
})