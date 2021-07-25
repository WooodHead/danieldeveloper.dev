import { Link } from '../types/types';
import { AiTwotoneThunderbolt } from 'react-icons/ai';
import { BsBook } from 'react-icons/bs';
import { MdPermIdentity } from 'react-icons/md';
import { getTranslation, Locales } from '../utils/i18n';

export const navbarLinks = (locale: Locales = Locales.es): Link[] => [
  { name: getTranslation('blog'), path: '/blog', mobile: true, icon: BsBook },
  {
    name: getTranslation('projects', locale),
    path: '/projects',
    mobile: true,
    icon: MdPermIdentity
  },
  {
    name: getTranslation('techstack', locale),
    path: '/tech-stack',
    icon: AiTwotoneThunderbolt,
    mobile: true
  }
];
