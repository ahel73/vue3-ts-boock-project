import { ItemsStateInterface } from '../items/ItemsState.interface'
/**
* @name RootStoreInterface
* @description
* Корневой интерфейс, включающий интерфейсы модулей хранилища в одном месте.
*/
export interface RootStoreInterface {
    itemsState: ItemsStateInterface
    // в следующих главах добавим сюда новые интерфейсы модулей, связанные с конкретными областями
}