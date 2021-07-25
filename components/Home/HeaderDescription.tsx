import Link from 'next/link';
import { Flex, Avatar, Box } from '@chakra-ui/react';
import { Header, MotionBox, MotionFlex } from '../../components/Common';
import { GITHUB } from '../../config/accounts';
import { useRouter } from 'next/router';
import { getTranslation, Locales } from '../../utils/i18n';

interface HeaderDescriptionProps {
  animationDuration?: number;
  underlineColor?: string;
}

const HeaderDescription: React.FC<HeaderDescriptionProps> = ({
  animationDuration = 0.5,
  underlineColor = '#ff9400'
}) => {
  const { locale } = useRouter();

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
          {getTranslation('my-name', Locales[locale])} Daniel Romero and I am a
          Software Developer from Spain 🇪🇸
        </Box>
        <Box as="h2" fontSize="2xl" fontWeight="400" mt={5} textAlign="left">
          You can take a look at my{' '}
          <Link href="/projects">latest projects</Link> or read my{' '}
          <Link href="/blog">blog posts</Link> where you might find something
          interesting for you at the moment. 💻😁{' '}
        </Box>
      </MotionFlex>
    </Flex>
  );
};

export default HeaderDescription;
