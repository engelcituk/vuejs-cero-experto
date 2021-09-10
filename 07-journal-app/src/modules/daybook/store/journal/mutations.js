/*
    export const myMuttation =  (state) => {
        return state.something
    }
*/

export const setEntries =  (state, entries) => {
  state.entries = [...state.entries, ...entries] // crear un arreglo con los valoes antiguos y los nuevos entries
  state.isLoading = false
}

export const updateEntry =  (/*state*/) => {
    // return state.something
}

export const addEntry =  (/*state*/) => {
    // return state.something
}