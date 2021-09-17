
import authApi from '@/api/authApi'

export const createUser = async ({commit}, user) => {

    const { email, password } = user

    try {

        const { data } = await authApi.post(`:signUp`, {email, password, returnSecureToken: true})
        console.log(data)
        console.log(commit)

        return { ok: true, }

    } catch (error) {
        console.log( error.response )
        return { ok: false, message: error.response.data.error.message}
    }
}

// export const deleteEntry = async ({commit}, id) => {
//     commit('setLoading', true)
//     await journalApi.delete(`/entries/${id}.json`)
//     commit('deleteEntry', id)
//     commit('setLoading', false)
// }