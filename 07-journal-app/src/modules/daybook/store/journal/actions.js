
import journalApi from '@/api/journalApi'
/*
export const myAction = async ({commit}) => {

}
*/

export const loadEntries = async ({commit}) => {
   const { data } = await journalApi.get(`/entries.json`)
   const entries = []
   for(let id of Object.keys(data)){
       entries.push({
           id,
           ...data[id]
       })
   }
   commit('setEntries', entries)
}

export const updateEntry = async ({commit}, entry) => {
    const { id, date, picture, text } = entry
    const dataToSave = { date, picture, text }
    commit('setLoading', true)
    await journalApi.put(`/entries/${id}.json`, dataToSave)
    commit('updateEntry', {...entry})
    commit('setLoading', false)
}

export const createEntry = async ({commit}, entry) => {
    const { date, picture, text } = entry
    const dataToSave = { date, picture, text }
    commit('setLoading', true)
    const { data } = await journalApi.post(`/entries.json`, dataToSave)
    dataToSave.id = data.name
    console.log(dataToSave)
    commit('addEntry', dataToSave)
    commit('setLoading', false)
    return data.name
}