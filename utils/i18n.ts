import es from '../locales/es';
import en from '../locales/en';

export enum Locales {
  'es' = 'es',
  'en' = 'en'
}

export const getTranslation = (
  translationKey: string,
  locale: Locales = Locales.es
): string => mapLocaleTranslations(locale)[translationKey];

const mapLocaleTranslations = (locale: Locales): object => {
  const availables = {
    [Locales.es]: es,
    [Locales.en]: en
  };

  return availables[locale] || es;
};
