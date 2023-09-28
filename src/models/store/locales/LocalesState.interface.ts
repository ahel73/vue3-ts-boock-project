import { LocaleInfoInterface } from '@/models/localization/LocaleInfo.interface';

/**
* @name LocalesStateInterface
* @description
* Интерфейс для состояния локалей
*/
export interface LocalesStateInterface {
    availableLocales: LocaleInfoInterface[]
}