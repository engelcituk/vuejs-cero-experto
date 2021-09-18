import createVuexStore from '../../../mock-data/mock-store'

// para correr la prueba: npm run test:unit auth-module
describe('Vuex - Pruebas en el Auth module', () => {
    
    test('Estado inicial', () => { 
        const store = createVuexStore({
            status: 'authenticating', // 'authenticated' , 'not-authenticated', 'authenticating'
            user: null,
            idToken: null,
            refreshToken: null
        })

        const { status, user, idToken, refreshToken } = store.state.auth
        expect(status).toBe('authenticating')
        expect(user).toBe(null)
        expect(idToken).toBe(null)
        expect(refreshToken).toBe(null)
    })  
    //mutations
    test('Mutation: loginUser', () => { 
        
        const store = createVuexStore({
            status: 'authenticating', // 'authenticated' , 'not-authenticated', 'authenticating'
            user: null,
            idToken: null,
            refreshToken: null
        })

        const payload = {
            user : { name: 'Jonas', email:'jonas@mail.com' },
            idToken: 'ABC-123',
            refreshToken: 'XYZ'
        }

        store.commit('auth/loginUser', payload )

        const { status, user, idToken, refreshToken } = store.state.auth
        expect(status).toBe('authenticated')
        expect(user).toEqual({ name: 'Jonas', email:'jonas@mail.com' })
        expect(idToken).toBe('ABC-123')
        expect(refreshToken).toBe('XYZ')
    }) 

    test('Mutation: logout', () => { 

        localStorage.setItem('idToken','ABC-123')
        localStorage.setItem('refreshToken', 'XYZ')
        
        const store = createVuexStore({
            status: 'authenticated', // 'authenticated' , 'not-authenticated', 'authenticating'
            user: { name: 'Jonas', email:'jonas@mail.com' },
            idToken: 'ABC-123',
            refreshToken: 'XYZ'
        })

        store.commit('auth/logout') //esto limpia las variables de localstorage

        const { status, user, idToken, refreshToken } = store.state.auth
        expect(status).toBe('not-authenticated')
        expect(user).toBeFalsy()
        expect(idToken).toBeFalsy()
        expect(refreshToken).toBeFalsy()
        expect( localStorage.getItem('idToken') ).toBeFalsy()
        expect( localStorage.getItem('refreshToken') ).toBeFalsy()
    })

    //gettters
    test('Getter: username currentState', () => { 

        const store = createVuexStore({
            status: 'authenticated', // 'authenticated' , 'not-authenticated', 'authenticating'
            user: { name: 'Jonas', email:'jonas@mail.com' },
            idToken: 'ABC-123',
            refreshToken: 'XYZ'
        })

        expect( store.getters['auth/currentState']).toBe('authenticated')
        expect( store.getters['auth/username']).toBe('Jonas')
        
    })

    //actions
    test('Actions: createUser - Error, usuario ya existe', async() => { 

        const store = createVuexStore({
            status: 'not-authenticated', // 'authenticated' , 'not-authenticated', 'authenticating'
            user: null,
            idToken: null,
            refreshToken: null
        })

        const newUser = {
            name: 'test user',
            email: 'usertest@gmail.com',
            password: '123456'
        }

        const resp = await store.dispatch('auth/createUser', newUser)
        expect( resp ).toEqual({ ok: false, message: 'EMAIL_EXISTS' })

        const { status, user, idToken, refreshToken } = store.state.auth
        expect(status).toBe('not-authenticated')
        expect(user).toBeFalsy()
        expect(idToken).toBeFalsy()
        expect(refreshToken).toBeFalsy()

    })

})