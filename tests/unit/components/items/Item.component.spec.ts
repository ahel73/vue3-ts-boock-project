import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import ItemComponent from '@/components/items/children/Item.component.vue'
import { ItemInterface } from '@/models/items/Item.interface'

describe('Item.component.vue', () => {
    it('Проверяем вывод текста в диве задачи', () => {
        const model: ItemInterface = {
            id: 1,
            name: 'Unit test item 1',
            selected: false
        }
        const wrapper = shallowMount(ItemComponent, {
            props: {
                model: model
            }
        })
        
        // простая проверка, что в выводе компонента есть
        // строка 'Unit test item 1', но это не очень правильно
        expect(wrapper.text()).to.include('Unit test item 1');
        
        // это более правильный подход: сначала находим нужный
        // элемент (div с классом `name`), а затем проверяем,
        // содержится ли в нём нужный текст
        let domEl = wrapper.find('div.name')
        expect(domEl.text()).to.equal('Unit test item 1')
    })

    it('проверяем что есть класс item и отсуствует класс selected', () => {

        const model: ItemInterface = {
            id: 2,
            name: 'Unit test item 2',
            selected: false
        }

        const wrapper = shallowMount(ItemComponent, {
            props: {
                model: model
            }
        })

        // проверка списка CSS-классов в компоненте
        const classes = wrapper.classes()
        expect(classes).to.be.an('array')
            .that.includes('item');
        expect(classes).to.be.an('array')
            .that.does.not.includes('selected');
    })

    it('проверяем что есть классы item и selected', () => {
        const model: ItemInterface = {
            id: 3,
            name: 'Unit test item 3',
            selected: true /* setting selected = true here */
        }

        const wrapper = shallowMount(ItemComponent, {
            props: {
                model: model
            }
        })
        // check component css classes list
        const classes = wrapper.classes()
        expect(classes).to.be.an('array')
            .that.includes('item');
        expect(classes).to.be.an('array')
            .that.includes('selected');
    })
});

