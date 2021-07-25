import { highLights } from '../../config/highlights';
import { Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Locales } from '../../utils/i18n';
import { NowPlaying } from '../Spotify';
import HeaderDescription from './HeaderDescription';
import Highlights from './Highlights';

export const Home: React.FC = () => {
  const { locale } = useRouter();

  return (
    <Flex direction="column" align="center">
      <HeaderDescription />
      <Highlights highlights={highLights(Locales[locale])} />
      <NowPlaying />
    </Flex>
  );
};
