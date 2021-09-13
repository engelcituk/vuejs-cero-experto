
import { shallowMount } from '@vue/test-utils'
import { createStore } from 'vuex'

import journal from '@/modules/daybook/store/journal'
import EntryList from '@/modules/daybook/components/EntryList'
import { journalState } from './../../../mock-data/test-journal-state'


const createVuexStore = (initialState) => 
createStore({
    modules:{
        journal:{
            ...journal,
            state: { ...initialState }
        }
    }
})
 
describe('Pruebas en el EntryList component', () => {

   /* const journalMockModule = {
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
    })*/

    const store = createVuexStore(journalState)
    const mockRouter = {
        push: jest.fn()
    }

    let wrapper

    beforeEach( () => {
        jest.clearAllMocks()
        wrapper = shallowMount(EntryList, {
            global:{
                mocks:{
                    $router: mockRouter
                },
                plugins:[ store ]
            }
        })
    })

    test('Debe de llamar el getEntriesByTerm sin termino y mostrar dos entradas', ()=> {
        // expect( wrapper.find() ).toMatchSnapshot()
        expect( wrapper.findAll('entry-stub').length ).toBe(2)
        expect( wrapper.html() ).toMatchSnapshot()
    })   

    test('Debe de llamar el getEntriesByTerm sin termino y filtrar las entradas', async ()=> {
        const input = wrapper.find('input')
        await input.setValue('Hola')

        expect( wrapper.findAll('entry-stub').length ).toBe(1)
    }) 

    test('El botón de nuevo debe de redireccionar a /new', ()=> {
        wrapper.find('button').trigger('click')

        expect( mockRouter.push ).toHaveBeenCalledWith( {name:'entry', params: { id: 'new' } } )
    }) 
      
})