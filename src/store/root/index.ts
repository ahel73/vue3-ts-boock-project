import { createStore, StoreOptions } from 'vuex';
import { RootStateInterface, RootStoreModel } from '@/models/store';
import { initialRootState } from './initialState';
// Импортируем каждый Vuex-модуль.
import { itemsState } from '@/store/items/module'

// Опции хранилища Vuex для создания модульного хранилища с пространством имён
const storeOptions: StoreOptions<RootStateInterface> = {
    state: initialRootState,

    modules: {
        itemsState
        // Новые дополнительные модули добавляйте сюда, по аналогии с itemsState.
    }
}

// Экземпляр корневого хранилища Vuex.
export const rootStore: RootStoreModel<RootStateInterface> = <any>createStore(storeOptions)

// Закрытая вспомогательная функция для отправки действия в Vuex-модуль, 
// поэтому формируем его при помощи строковой интерполяции `${moduleName}/${actionName}`.
export function dispatchModuleAction<T>(
    moduleName: string,
    actionName: string,
    params?: T
): void {
    // Переименуем store.dispatch в rootStore.dispatch
    rootStore.dispatch(`${moduleName}/${actionName}`, params)
}