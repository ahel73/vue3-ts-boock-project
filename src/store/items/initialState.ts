import { ItemsStateInterface } from '@/models/store'
/**
* @name initialItemsState
* @description
* Экземпляр состояния Items с начальными значениями по умолчанию.
*/
export const initialItemsState: ItemsStateInterface = {
    loading: false,
    items: []
}