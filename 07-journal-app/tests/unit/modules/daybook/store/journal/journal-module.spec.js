import { createStore } from 'vuex'
import journal from '@/modules/daybook/store/journal'
import { journalState } from './../../../../mock-data/test-journal-state'

const createVuexStore = (initialState) => 
    createStore({
        modules:{
            journal:{
                ...journal,
                state: { ...initialState }
            }
        }
    })

describe('Vuex - Pruebas en el Journal module', ()=> {
    
    //basicas
    test('Este es el estado inicial, debe de tener este State', () => { 
        const store = createVuexStore(journalState)
        // console.log(store.state)
        const { isLoading, entries } = store.state.journal
        expect(isLoading).toBeFalsy()
        expect(entries).toEqual(journalState.entries)

    })  
    //mutations
    test('mutation: setEntries', () => { 
        const store = createVuexStore({isLoading: true, entries:[]})
        store.commit('journal/setEntries', journalState.entries)
        expect( store.state.journal.entries.length ).toBe(2)
        expect( store.state.journal.isLoading ).toBeFalsy()

    })   
})