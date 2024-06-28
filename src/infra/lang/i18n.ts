import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationPT from './pt.json';

i18n.use(initReactI18next).init({
  resources: {
    pt: {
      translation: translationPT,
    },
  },
  lng: 'pt',
  fallbackLng: 'pt',
  compatibilityJSON: 'v3',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
