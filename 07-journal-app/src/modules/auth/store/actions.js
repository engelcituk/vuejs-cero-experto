
import authApi from '@/api/authApi'

export const createUser = async ({commit}, user) => {

    const { email, password, name } = user

    try {

        const { data } = await authApi.post(`:signUp`, { email, password, returnSecureToken: true})
        const { idToken, refreshToken } = data

        await authApi.post(`:update`, {displayName: name, idToken})
        delete user.password

        commit('loginUser', { user, idToken, refreshToken })
        return { ok: true, message: 'Registro exitoso'}

    } catch (error) {
        console.log( error.response )
        return { ok: false, message: error.response.data.error.message}
    }
}

export const signInUser = async ({commit}, user) => {

    const { email, password } = user

    try {

        const { data } = await authApi.post(`:signInWithPassword`, { email, password, returnSecureToken: true })
        const { idToken, refreshToken, displayName } = data
        user.name = displayName
        commit('loginUser', { user, idToken, refreshToken })
        return { ok: true, message: 'Login exitoso'}

    } catch (error) {
        console.log( error.response )
        return { ok: false, message: error.response.data.error.message}
    }
}