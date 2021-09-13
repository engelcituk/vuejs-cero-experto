
import { shallowMount } from '@vue/test-utils'
import { createStore } from 'vuex'

import Swal from 'sweetalert2'

import journal from '@/modules/daybook/store/journal'
import EntryView from '@/modules/daybook/views/EntryView'
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

    jest.mock('sweetalert2', ()=> ({
        fire: jest.fn(),
        showLoading: jest.fn(),
        close: jest.fn()
    }))

describe('Pruebas en el EntryView', () => {

    const store = createVuexStore(journalState)
    const mockRouter = {
        push: jest.fn()
    }


    let wrapper

    beforeEach( () => {
        jest.clearAllMocks()
        wrapper = shallowMount(EntryView, {
            props:{
                id: '-MjIFKf-5JWdJFgyqNXA',

            },
            global:{
                mocks:{
                    $router: mockRouter
                },
                plugins:[ store ]
            }
        })
    })

    test('Debe de sacar al usuario porque el id no existe', ()=> {
       const wrapper = shallowMount(EntryView, {
           props:{
               id: 'Este id no existe en el store'
           },
            global:{
                mocks:{
                    $router: mockRouter
                },
                plugins:[ store ]
            }
        })

        expect( mockRouter.push ).toHaveBeenCalledWith({name:'no-entry'})
    })   

    test('Debe de mostrar la entrada correctamente', ()=> {
        expect( wrapper.html() ).toMatchSnapshot()
        expect( mockRouter.push ).not.toHaveBeenCalled()
    })
      
    test('Debe de borrar la entrada y salir', () => {

        Swal.fire.mockReturnValueOnce(  Promise.resolve({ isConfirmed: true }) )

        wrapper.find('.btn-danger').trigger('click')

        expect( Swal.fire ).toHaveBeenCalledWith({
            title: '¿Está seguro?',
            text:'Una vez borrado no podrá recuperarlo',
            showDenyButton: true,
            confirmButtonText: 'Sí borrar',
            denyButtonText: 'Cancelar',
        })

        // setTimeout(() => {
        //     expect( mockRouter.push  ).toHaveBeenCalled()
        //     done()
        // }, 1)

    })
})