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

})