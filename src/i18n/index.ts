import i18n from 'i18next'
import { initReactI18next} from 'react-i18next'


import enJson from './translations/en.json'
import ptJson from './translations/pt.json'

i18n
    .use(initReactI18next)
    .init({
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
    resources: {
       en: enJson,
       pt: ptJson,
    },
});

export default i18n;