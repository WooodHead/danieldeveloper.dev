import { Locales, t } from '../utils/i18n';

export type HighLight = {
  href: string;
  title: string;
  badge?: {
    color: string;
    text: string;
  };
};

export const highLights = (locale: Locales = Locales.es): HighLight[] => [
  {
    href: '/tech-stack',
    title: t('Tech Stack', locale),
    badge: {
      color: 'green',
      text: 'New'
    }
  },
  {
    href: '/projects',
    title: t('Open Source Projects', locale)
  }
];
