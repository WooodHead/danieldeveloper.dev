import { Tooltip, IconButton, Text, useColorModeValue } from '@chakra-ui/react';
import { VStack, HStack } from '@chakra-ui/layout';
import { PageTransitions, Header } from '../../../components/Common';
import { useRouter } from 'next/router';
import { Locales, t } from '../../../utils/i18n';

type Icon = {
  tooltip: string;
  iconComponent: React.FC;
  onClick?: () => void;
};
interface PresentationLayoutProps {
  title: string;
  subtitle: string;
  icons?: Icon[];
}

export const PresentationLayout: React.FC<PresentationLayoutProps> = ({
  children,
  title,
  subtitle,
  icons = []
}) => {
  const { locale } = useRouter();

  return (
    <PageTransitions.PageSlideFade>
      <VStack align="start" spacing={3}>
        <HStack justifyContent={'space-between'} width={'100%'}>
          <Header underlineColor="#06b6d4" mt={0} mb={0}>
            {t(title, Locales[locale])}
          </Header>

          <HStack>
            {icons.map((icon) => (
              <Tooltip hasArrow label={icon.tooltip} placement="top">
                <IconButton
                  aria-label={'live'}
                  size="md"
                  colorScheme={'linkedin'}
                  icon={<icon.iconComponent />}
                  onClick={icon.onClick}
                  variant="ghost"
                  isRound
                />
              </Tooltip>
            ))}
          </HStack>
        </HStack>
        <Text
          color={useColorModeValue('gray.500', 'gray.200')}
          textAlign="left"
        >
          {t(subtitle, Locales[locale])}
        </Text>
      </VStack>
      {children}
    </PageTransitions.PageSlideFade>
  );
};
