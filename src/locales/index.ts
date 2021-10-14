import { createI18n } from 'vue-i18n'; // import from runtime only

import elementEnLocale from 'element-plus/lib/locale/lang/en';
import elementZhLocale from 'element-plus/lib/locale/lang/zh-cn';

// User defined lang
import enLocale from './en/index';
import zhLocale from './zh-cn/index';

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale,
  },
  'zh-cn': {
    ...zhLocale,
    ...elementZhLocale,
  },
};

export const getLocale = (): string => {
  let appLanguage = localStorage.getItem('lang');
  if (!appLanguage) {
    const language = navigator.language.toLowerCase();
    const locales = Object.keys(messages);
    for (const locale of locales) {
      if (language.indexOf(locale) > -1) {
        appLanguage = locale;
      }
    }
  }

  appLanguage = appLanguage || 'zh-cn';
  // Default language is chinese
  return appLanguage;
};

const i18n = createI18n({
  locale: getLocale(),
  messages: messages,
  // close console warning
  silentTranslationWarn: true,
  globalInjection: true,
});

export default i18n;
