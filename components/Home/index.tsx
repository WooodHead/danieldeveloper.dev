import HeaderDescription from './HeaderDescription';
import Highlights from './Highlights';
import { highLights } from '../../config/highlights';
import { Flex } from '@chakra-ui/react';
import React from 'react';
import { useRouter } from 'next/router';
import { Locales } from '../../utils/i18n';

export const Home: React.FC = () => {
  const { locale } = useRouter();

  return (
    <Flex direction="column" align="center">
      <HeaderDescription />
      <Highlights highlights={highLights(Locales[locale])} />
    </Flex>
  );
};
