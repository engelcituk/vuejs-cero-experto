
import { shallowMount } from '@vue/test-utils';
import Counter from '@/components/Counter'
import { exportAllDeclaration, exportSpecifier } from '@babel/types';

describe('Counter Component', ()=> {
    // test('Debe de hacer match con el snapshot', () => {
    //     const wrapper = shallowMount(Counter)
    //     expect(wrapper.html() ).toMatchSnapshot()
    // })

    test('H2 debe de tener el valor por defecto "Counter" ', ()=> {
        const wrapper = shallowMount(Counter)
        // expect(wrapper.find('h2').exists()).toBe(true)
        expect(wrapper.find('h2').exists()).toBeTruthy()

        const h2Value = wrapper.find('h2').text()
        // console.log(h2.text())
        expect(h2Value).toBe('Counter')
    })

    test('El valor por defecto debe ser 100 en el parrafo', ()=> {
        const wrapper = shallowMount(Counter)

        // const pTags = wrapper.findAll('p')
        const value = wrapper.find('[data-test-id="counter"]').text()

        // expect(pTags[1].text()).toBe('100')

        expect(value).toBe('100')
    })

    test('Debe de incrementar y decrementar en 1 el contador', async ()=> {
        const wrapper = shallowMount(Counter)

        const increaseBtn = wrapper.find('button')

        await increaseBtn.trigger('click')

        let value = wrapper.find('[data-test-id="counter"]').text()

        expect(value).toBe('101')

        const decreaseBtn = wrapper.find('[data-test-dec="decrease"]')
        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')
        value = wrapper.find('[data-test-id="counter"]').text()
        expect(value).toBe('99')
    })

})