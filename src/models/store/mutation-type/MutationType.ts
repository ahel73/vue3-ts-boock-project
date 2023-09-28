// Группируем константы в пространство имён
import { ItemsMutationType } from '../items/ItemsMutationType';
import { LocalesMutationType } from '../locales/LocalesMutationType';

export namespace MutationType {
  export const items = ItemsMutationType
  export const locales = LocalesMutationType
  // По мере создания новых модулей состояния, добавляйте сюда дополнительные экспортируемые
  // данные, следуя единому соглашению об именовании
}