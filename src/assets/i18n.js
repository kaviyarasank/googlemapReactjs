import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import eng from "./eng.json"
import greak from "./greak.json";

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    // language resources
    resources: {
      en: {
        translation:eng
      },
      vn: {
        translation:greak
      },
    }
  });

export default i18n;