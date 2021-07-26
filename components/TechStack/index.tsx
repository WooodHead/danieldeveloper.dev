import { useState } from 'react';
import {
  Icon,
  VStack,
  HStack,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorModeValue,
  SimpleGrid
} from '@chakra-ui/react';
import { AiTwotoneThunderbolt } from 'react-icons/ai';
import { BiDesktop, BiMeteor, BiServer } from 'react-icons/bi';
import { MotionBox, PageTransitions, Header } from '../Common';
import Section from './Section';
import SkillCard from './SkillCard';
import { SkillList, SkillType, TechSkill } from '../../config/skills';
import { IconType } from 'react-icons';
import { Locales, t } from '../../utils/i18n';
import { useRouter } from 'next/router';

interface TechStackProps {
  skills: SkillList;
}

export const TechStack: React.FC<TechStackProps> = ({ skills }) => {
  const tabs: SkillType[] = Object.values(SkillType).filter(
    (type) => skills[type].length > 0
  );

  const iconTabMapper = (tab: string): IconType => {
    const icons = {
      [SkillType.GENERAL]: BiDesktop,
      [SkillType.BACKEND]: BiServer,
      [SkillType.FRONTEND]: BiMeteor
    };

    return icons[tab] || BiDesktop;
  };

  const { locale } = useRouter();

  const themeColor = useColorModeValue('gray.500', 'gray.200');
  const themeBackgroundColor = useColorModeValue('gray.100', 'gray.800');
  const themeBackgroundColorOnSelected = useColorModeValue(
    'gray.900',
    'gray.100'
  );

  return (
    <>
      <PageTransitions.PageSlideFade>
        <VStack spacing={8}>
          <Section>
            <VStack>
              <Header mt={0} mb={1}>
                Tech Stack
              </Header>
              <Text
                fontSize={'xl'}
                color={themeColor}
                maxW="lg"
                textAlign="center"
              >
                {t(
                  'A list of my favorite tools and technologies',
                  Locales[locale]
                )}
              </Text>
            </VStack>
          </Section>
          <Section>
            <Tabs
              variant="soft-rounded"
              colorScheme="blue"
              align="center"
              w="100%"
            >
              <TabList display="flex" flexWrap="wrap">
                <Tab
                  bg={themeBackgroundColor}
                  color={themeColor}
                  _selected={{
                    color: 'green.800',
                    bg: 'green.100'
                  }}
                  mr={2}
                  mt={2}
                >
                  <HStack spacing={1}>
                    <Icon as={AiTwotoneThunderbolt} />
                    <Text>All</Text>
                  </HStack>
                </Tab>
                {tabs.map((tab) => (
                  <Tab
                    key={tab}
                    bg={themeBackgroundColor}
                    color={themeColor}
                    _selected={{
                      color: themeBackgroundColor,
                      bg: themeBackgroundColorOnSelected
                    }}
                    mr={2}
                    mt={2}
                  >
                    <HStack spacing={1}>
                      <Icon as={iconTabMapper(tab)} />
                      <Text>{tab}</Text>
                    </HStack>
                  </Tab>
                ))}
              </TabList>
              <TabPanels minHeight={'45vh'}>
                <TabPanel px={0} key="all-tab-panel">
                  <MotionBox
                    variants={PageTransitions.container}
                    initial="hidden"
                    animate="visible"
                  >
                    <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={8}>
                      {Object.values(skills)
                        .flat()
                        .map((skill: TechSkill) => (
                          <SkillCard key={skill.name} {...skill} />
                        ))}
                    </SimpleGrid>
                  </MotionBox>
                </TabPanel>
                {tabs.map((tab) => (
                  <TabPanel px={0} key={`${tab}-panel`}>
                    <MotionBox
                      variants={PageTransitions.container}
                      initial="hidden"
                      animate="visible"
                    >
                      <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={8}>
                        {skills[tab].map((skill: TechSkill) => (
                          <SkillCard key={skill.name} {...skill} />
                        ))}
                      </SimpleGrid>
                    </MotionBox>
                  </TabPanel>
                ))}
              </TabPanels>
            </Tabs>
          </Section>
        </VStack>
      </PageTransitions.PageSlideFade>
    </>
  );
};
