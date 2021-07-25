import es from '../locales/es';

/**
 * We don't need a json file for 'en' translations because is
 * the default language of the application.
 */

export enum Locales {
  'es' = 'es',
  'en' = 'en'
}

export const t = (
  translation: string,
  locale: Locales = Locales.es
): string => {
  const availables = {
    [Locales.es]: es
  };

  // @TODO - Refactor with new optional chaining
  if (availables[locale] && availables[locale][translation]) {
    return availables[locale][translation];
  }

  return translation;
};
