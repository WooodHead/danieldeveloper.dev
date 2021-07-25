import { Link } from '../types/types';
import { AiTwotoneThunderbolt } from 'react-icons/ai';
import { BsBook } from 'react-icons/bs';
import { MdPermIdentity } from 'react-icons/md';
import { t, Locales } from '../utils/i18n';

export const navbarLinks = (locale: Locales = Locales.es): Link[] => [
  { name: t('Blog', locale), path: '/blog', mobile: true, icon: BsBook },
  {
    name: t('Projects', locale),
    path: '/projects',
    mobile: true,
    icon: MdPermIdentity
  },
  {
    name: t('Tech Stack', locale),
    path: '/tech-stack',
    icon: AiTwotoneThunderbolt,
    mobile: true
  }
];
