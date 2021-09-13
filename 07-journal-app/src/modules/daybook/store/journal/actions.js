
import journalApi from '@/api/journalApi'
/*
export const myAction = async ({commit}) => {

}
*/

export const loadEntries = async ({commit}) => {
   const { data } = await journalApi.get(`/entries.json`)
   
   const entries = []

   if( !data ){
       commit('setEntries', entries)
       return
    }

   for(let id of Object.keys(data)){
       entries.push({
           id,
           ...data[id]
       })
   }
//    console.log(entries)
   commit('setEntries', entries)
}

export const updateEntry = async ({commit}, entry) => {
    const { id, date, picture, text } = entry
    const dataToSave = { date, picture, text }
    commit('setLoading', true)
    await journalApi.put(`/entries/${id}.json`, dataToSave)
    dataToSave.id = entry.id 
    commit('updateEntry', {...dataToSave})
    commit('setLoading', false)
}

export const createEntry = async ({commit}, entry) => {
    const { date, picture, text } = entry
    const dataToSave = { date, picture, text }
    commit('setLoading', true)
    const { data } = await journalApi.post(`/entries.json`, dataToSave)
    dataToSave.id = data.name
    commit('addEntry', dataToSave)
    commit('setLoading', false)
    return data.name
}

export const deleteEntry = async ({commit}, id) => {
    commit('setLoading', true)
    await journalApi.delete(`/entries/${id}.json`)
    commit('deleteEntry', id)
    commit('setLoading', false)
}