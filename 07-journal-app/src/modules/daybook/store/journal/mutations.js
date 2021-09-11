/*
    export const myMuttation =  (state) => {
        return state.something
    }
*/

export const setLoading =  (state, bool) => {
    state.isLoading = bool
}

export const setEntries =  (state, entries) => {
  state.entries = [...state.entries, ...entries] // crear un arreglo con los valoes antiguos y los nuevos entries
  state.isLoading = false
}

export const updateEntry =  (state, entry) => {
    const idx = state.entries.map( e => e.id ).indexOf(entry.id)
    state.entries[idx] = entry
}

export const addEntry =  (/*state*/) => {
    // return state.something
}