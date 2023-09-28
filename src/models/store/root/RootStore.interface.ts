import { ItemsStateInterface } from '../items/ItemsState.interface'
import { LocalesStateInterface } from '../locales/LocalesState.interface'
/**
* @name RootStoreInterface
* @description
* Корневой интерфейс, включающий интерфейсы модулей хранилища в одном месте.
*/
export interface RootStoreInterface {
    itemsState: ItemsStateInterface
    localesState: LocalesStateInterface
    // в следующих главах добавим сюда новые интерфейсы модулей, связанные с конкретными областями
}