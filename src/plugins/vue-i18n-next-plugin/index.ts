import { createI18n, LocaleMessages, VueMessageType } from 'vue-i18n'

interface LocalesDataInterface {
    messages: LocaleMessages<VueMessageType>
}

const data: LocalesDataInterface = {
    messages: {
        'en-US': {
            welcome: 'Welcome: this message is localized in English'
        },
        'it-IT': {
            welcome: 'Benvenuti: this message is localized in Italian'
        },
        'fr-FR': {
            welcome: 'Bienvenue: this message is localized in French'
        },
        'es-ES': {
            welcome: 'Bienvenido: this message is localized in Spanish'
        },
        'ru-RU': {
            welcome: 'Добро пожаловать: это сообщение локализовано на русском языке.'
        }
    }
}

export const i18n = createI18n({
    locale: 'ru-RU',
    fallbackLocale: 'en-US',
    messages: data.messages
})