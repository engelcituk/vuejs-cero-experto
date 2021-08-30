
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

})