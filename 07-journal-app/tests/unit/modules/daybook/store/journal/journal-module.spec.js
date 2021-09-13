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

    test('mutation: updateEntry', () => { 

        const store = createVuexStore(journalState)
        const entries = store.state.journal.entries
        
        const updatedEntry = {
            id: "-MjIFKf-5JWdJFgyqNXA",
            date: 1631336874263,
            picture: "https://res.cloudinary.com/di3qzyeke/image/upload/v1631340833/q0yw6icrapvwcbw8kgxx.jpg",
            text: "Hola mundo desde pruebas"
        }

        store.commit('journal/updateEntry', updatedEntry)
        expect( entries.length ).toBe(2)
        expect(
            entries.find( entry => entry.id === updatedEntry.id)
        ).toEqual(updatedEntry)
    }) 

    test('mutation: addEntry y deleteEntry', () => { 

        const store = createVuexStore(journalState)      
        store.commit('journal/addEntry', {id:'ABC-123', text:'Hola mundo'})

        const entries = store.state.journal.entries

        expect( entries.length ).toBe(3)
        expect( entries.find( e => e.id === 'ABC-123') ).toBeTruthy()
        expect( entries.find( e => e.id === 'ABC-123').id ).toBe('ABC-123')


        store.commit('journal/deleteEntry', 'ABC-123')
        expect( store.state.journal.entries.length ).toBe(2)
        expect( store.state.journal.entries.find( e => e.id === 'ABC-123') ).toBeFalsy()


    }) 
})