import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import commonEN from './locales/en/common.json';
import homeEN from './locales/en/home.json';
import aboutEN from './locales/en/about.json';
import governorEN from './locales/en/governor.json';
import projectsEN from './locales/en/projects.json';
import visitEN from './locales/en/visit.json';
import investEN from './locales/en/invest.json';
import newsEN from './locales/en/news.json';

import commonAR from './locales/ar/common.json';
import homeAR from './locales/ar/home.json';
import aboutAR from './locales/ar/about.json';
import governorAR from './locales/ar/governor.json';
import projectsAR from './locales/ar/projects.json';
import visitAR from './locales/ar/visit.json';
import investAR from './locales/ar/invest.json';
import newsAR from './locales/ar/news.json';

const resources = {
  en: {
    common: commonEN,
    home: homeEN,
    about: aboutEN,
    governor: governorEN,
    projects: projectsEN,
    visit: visitEN,
    invest: investEN,
    news: newsEN,
  },
  ar: {
    common: commonAR,
    home: homeAR,
    about: aboutAR,
    governor: governorAR,
    projects: projectsAR,
    visit: visitAR,
    invest: investAR,
    news: newsAR,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common', 'home', 'about', 'governor', 'projects', 'visit', 'invest', 'news'],
    
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false,
    },
  });

export default i18n;
