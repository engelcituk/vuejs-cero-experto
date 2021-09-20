import axios from 'axios'
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

    test('Actions: createUser signInUser, Crea el usuario', async() => { 

        const store = createVuexStore({
            status: 'not-authenticated', // 'authenticated' , 'not-authenticated', 'authenticating'
            user: null,
            idToken: null,
            refreshToken: null
        })

        const newUser = {
            name: 'test user',
            email: 'testuser2@mail.com',
            password: '123456'
        }
        //signIn
        await store.dispatch('auth/signInUser', newUser)
        const { idToken } = store.state.auth 

        //borrar el usuario
        const deleteResp = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:delete?key=AIzaSyBW8oQFVE5x1KJJX4xBbfN7qfrcdk5-v1A`,{
            idToken
        })
        //creación del usuario
        const resp = await store.dispatch('auth/createUser', newUser)
        expect( resp ).toEqual({ ok: true, message: 'Registro exitoso' })

        const { status, user, idToken:token, refreshToken } = store.state.auth
        expect(status).toBe('authenticated')
        expect(user).toMatchObject({ name: 'testuser', email: 'testuser2@mail.com'})
        expect( typeof token).toBe('string')
        expect( typeof refreshToken ).toBe('string')
    })

    test('Actions: checkAutentication - Positiva', async() => { 

        const store = createVuexStore({
            status: 'not-authenticated', // 'authenticated' , 'not-authenticated', 'authenticating'
            user: null,
            idToken: null,
            refreshToken: null
        })

        //signIn
        await store.dispatch('auth/signInUser', {name: 'test user', email: 'usertest@gmail.com', password: '123456'})
        const { idToken } = store.state.auth 
        store.commit('auth/logout')
        
        localStorage.setItem('idToken',idToken )

        const checkResp = await store.dispatch('auth/checkAuthentication')
        const { status, user, idToken:token, refreshToken } = store.state.auth

        expect( checkResp ).toEqual({ ok: true, message: 'Verificación de autenticación válida' })
        expect( status ).toBe('authenticated')
        expect( user ).toMatchObject({ name: 'User Test', email: 'usertest@gmail.com'})
        expect( typeof token).toBe('string')
    })

    test('Actions: checkAutentication - Negativa', async() => { 

        const store = createVuexStore({
            status: 'authenticating', // 'authenticated' , 'not-authenticated', 'authenticating'
            user: null,
            idToken: null,
            refreshToken: null
        })

        localStorage.removeItem('idToken')
        const checkResp1 = await store.dispatch('auth/checkAuthentication')

        expect( checkResp1 ).toEqual({ ok: false, message: 'No hay token' })
        expect( store.state.auth.status  ).toBe('not-authenticated')
        expect( store.state.auth.idToken  ).toBeFalsy()

        localStorage.setItem('idToken','ABC-123' )
        const checkResp2 = await store.dispatch('auth/checkAuthentication')

        expect( checkResp2 ).toEqual({ ok: false, message: 'INVALID_ID_TOKEN' })
        expect( store.state.auth.status  ).toBe('not-authenticated')        
    })

})