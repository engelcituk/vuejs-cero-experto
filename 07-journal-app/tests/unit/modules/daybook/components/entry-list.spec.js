
import { shallowMount } from '@vue/test-utils'
import { createStore } from 'vuex'

import EntryList from '@/modules/daybook/components/EntryList'
import { getEntriesByTerm } from '@/modules/daybook/store/journal/getters'
import { journalState } from './../../../mock-data/test-journal-state'

describe('Pruebas en el EntryList component', () => {

    const journalMockModule = {
        namespaced: true,
        getters: {
            getEntriesByTerm
        },
        state: () => ({
            isLoading: true,
            entries: journalState.entries
        })
    }

    const store = createStore({
        modules:{
            journal: { ...journalMockModule }
        }
    })

    const  wrapper = shallowMount(EntryList, {
        global:{
            mocks:{
                // $router:
            },
            plugins:[ store ]
        }
    })
    test('Debe de llamar el getEntriesByTerm sin termino y mostrar dos entradas', ()=> {
        // expect( wrapper.find() ).toMatchSnapshot()
        console.log(wrapper.html())
        
    })   
      
})