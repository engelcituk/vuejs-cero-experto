import store from '@/store' //tiene que ser del rootStore, no del modulo

const isAuthenticatedGuard = async (to, from, next) => {

    const { ok } = await store.dispatch('auth/checkAuthentication')

    if ( ok ) next()
    else next( {name: 'login'} )

}

export default isAuthenticatedGuard