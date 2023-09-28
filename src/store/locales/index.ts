import { rootStore, dispatchModuleAction } from '../root'
import { MutationType, StoreModuleNames, LocalesStateInterface } from '@/models/store'
import { LocalStorageKeys } from '@/models/local-storage/LocalStorageKeys'

/**
 * @name localesStore
 * @description
 *  Обёртка над хранилищем локалей, возвращающая localesState и предоставляет обобщённый метод action<T>
 */
const localesStore = {
  get state(): LocalesStateInterface {
    return rootStore.state.localesState
  },
  action<T>(actionName: string, params?: T): void {
    dispatchModuleAction(StoreModuleNames.localesState, actionName, params)
  }
}

// Экспортируем обёртку по правилам именования Composition API (т.е. useXYZ)
export const useLocalesStore = () => {
    return localesStore
}