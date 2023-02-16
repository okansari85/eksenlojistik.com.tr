import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import tr from './locales/tr.json'

const messages = {
    en: en,
    tr: tr,
}

const i18n = createI18n({
    locale: 'tr', // set locale
    fallbackLocale: 'tr', // set fallback locale
    messages, // set locale messages
    warnHtmlInMessage: false
});



export default i18n

