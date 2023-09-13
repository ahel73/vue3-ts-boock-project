// Группируем константы в пространство имён.
export namespace ItemsMutationType {
  export const loadItems: string = 'loadItems'
  export const loadingItems: string = 'loadingItems'
  export const loadedItems: string = 'loadedItems'
  export const selectItem: string = 'selectItem'
  // По мере создания новых мутаций в модуль хранилища Items, добавляйте их имена сюда, по аналогии указанными выше.
}