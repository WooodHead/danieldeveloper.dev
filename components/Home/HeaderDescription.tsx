import Link from 'next/link';
import { Flex, Avatar, Box } from '@chakra-ui/react';
import { Header, MotionBox, MotionFlex } from '../../components/Common';
import { GITHUB } from '../../config/accounts';
import { useRouter } from 'next/router';
import { t, Locales } from '../../utils/i18n';

interface HeaderDescriptionProps {
  animationDuration?: number;
  underlineColor?: string;
}

const HeaderDescription: React.FC<HeaderDescriptionProps> = ({
  animationDuration = 0.5,
  underlineColor = '#ff9400'
}) => {
  const { locale, defaultLocale } = useRouter();

  const currentLocale: Locales = Locales[locale] || Locales[defaultLocale];

  return (
    <Flex direction={['column', 'column', 'row']}>
      <MotionBox
        opacity="0"
        initial={{
          translateX: -150,
          opacity: 0
        }}
        animate={{
          translateX: 0,
          opacity: 1,
          transition: {
            duration: animationDuration
          }
        }}
        m="auto"
        mb={[16, 16, 'auto']}
      >
        <Avatar size={'2xl'} src={GITHUB.avatar} />
      </MotionBox>
      <MotionFlex
        ml={['auto', 'auto', 16]}
        m={['auto', 'initial']}
        w={['90%', '85%', '80%']}
        maxW="800px"
        opacity="0"
        justify="center"
        direction="column"
        initial={{
          opacity: 0,
          translateX: 150
        }}
        animate={{
          opacity: 1,
          translateX: 0,
          transition: {
            duration: animationDuration
          }
        }}
      >
        <Header underlineColor={underlineColor} emoji="👋" mt={0}>
          Hey!
        </Header>
        <Box as="h2" fontSize="2xl" fontWeight="400" textAlign="left">
          {t('My name is', currentLocale)} Daniel Romero{' '}
          {t("and I'm a software developer from Spain", currentLocale)} 🇪🇸
        </Box>
        <Box as="h2" fontSize="2xl" fontWeight="400" mt={5} textAlign="left">
          {t('You can take a look at', currentLocale)}{' '}
          <Link href="/projects">
            {t('my latests projects', currentLocale)}
          </Link>{' '}
          {t('or read my', currentLocale)}{' '}
          <Link href="/blog">{t('blog posts', currentLocale)}</Link>{' '}
          {t(
            'where you might find something useful for you at the moment',
            currentLocale
          )}
          . 💻😁
        </Box>
      </MotionFlex>
    </Flex>
  );
};

export default HeaderDescription;
