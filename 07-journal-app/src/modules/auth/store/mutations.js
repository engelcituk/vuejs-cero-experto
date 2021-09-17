

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

export const addEntry =  (state, entry) => {
    // state.entries = state.entries.unshift( entry )
    state.entries = [entry, ...state.entries] // coloca la nueva entrada al principio, mas lo que hay antes
}


export const deleteEntry =  (state, id) => {
    // state.entries = state.entries.unshift( entry )
    state.entries = state.entries.filter( entry => entry.id !== id )
}