import { ItemInterface } from '@/models/items/Item.interface'

/**
* @name ItemsStateInterface
* @description
* Интерфейс состояния Items
*/
export interface ItemsStateInterface {
  loading: boolean
  items: ItemInterface[]
}