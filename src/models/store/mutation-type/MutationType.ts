// Группируем константы в пространство имён
import { ItemsMutationType } from '../items/ItemsMutationType';

export namespace MutationType {
  export const items = ItemsMutationType
  // По мере создания новых модулей состояния, добавляйте сюда дополнительные экспортируемые
  // данные, следуя единому соглашению об именовании
}