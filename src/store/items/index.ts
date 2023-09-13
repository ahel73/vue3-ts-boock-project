import { rootStore, dispatchModuleAction } from '../root'
import { StoreModuleNames, ItemsStateInterface } from '@/models/store';

/**
* @name itemsStore
* @description
* Обёртка над хранилищем элементов, которая возвращает itemsState и обобщённый мето\
д action<T>.
*/
const itemsStore = {
    get state(): ItemsStateInterface {
        return rootStore.state.itemsState
    },
    action<T>(actionName: string, params?: T): void {
        dispatchModuleAction(StoreModuleNames.itemsState, actionName, params)
    }
};

// Экспортируем обёртку по правилам Composition API (т.е. как useXYZ).
export const useItemsStore = () => {
    return itemsStore
}