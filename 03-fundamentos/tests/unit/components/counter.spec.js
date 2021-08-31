
import { shallowMount } from '@vue/test-utils';
import Counter from '@/components/Counter'
import { exportAllDeclaration, exportSpecifier } from '@babel/types';

describe('Counter Component', ()=> {
    let wrapper

    beforeEach( () => {
        wrapper = shallowMount(Counter) //monto el counter, en cada test, asi si se modifica algo en este se vuelve a su estado inicial
    })
    // test('Debe de hacer match con el snapshot', () => {
    //     
    //     expect(wrapper.html() ).toMatchSnapshot()
    // })

    test('H2 debe de tener el valor por defecto "Counter" ', ()=> {
        // expect(wrapper.find('h2').exists()).toBe(true)
        expect(wrapper.find('h2').exists()).toBeTruthy()

        const h2Value = wrapper.find('h2').text()
        // console.log(h2.text())
        expect(h2Value).toBe('Counter')
    })

    test('El valor por defecto debe ser 100 en el parrafo', ()=> {
        // const pTags = wrapper.findAll('p')
        const value = wrapper.find('[data-test-id="counter"]').text()

        // expect(pTags[1].text()).toBe('100')
        expect(value).toBe('100')
    })

    test('Debe de incrementar y decrementar en 1 el contador', async ()=> {

        const [increaseBtn, decreaseBtn] = wrapper.findAll('button')

        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')

        const value = wrapper.find('[data-test-id="counter"]').text()

        expect(value).toBe('101')
    })

    test('Debe de establecer el valor por defecto', () => {
        const { start } = wrapper.props()
        const value = wrapper.find('[data-test-id="counter"]').text()
        expect(Number(value)).toBe( start )
    })

})