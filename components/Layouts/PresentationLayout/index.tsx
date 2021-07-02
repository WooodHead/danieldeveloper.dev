import { Tooltip, IconButton, Text, useColorModeValue } from "@chakra-ui/react";
import { VStack, HStack } from "@chakra-ui/layout";
import { PageTransitions, Header } from "../../../components/Common";

interface PresentationLayoutProps {
  title: string;
  subtitle: string;
}

export const PresentationLayout: React.FC<PresentationLayoutProps> = ({
  children,
  title,
  subtitle,
}) => {
  return (
    <PageTransitions.PageSlideFade>
      <VStack align="start" spacing={3}>
        <HStack justifyContent={"space-between"} width={"100%"}>
          <Header underlineColor="#06b6d4" mt={0} mb={0}>
            {title}
          </Header>
          {/* <HStack>
          <Tooltip hasArrow label="Live github repos" placement="top">
            <IconButton
              aria-label={"live"}
              size="md"
              colorScheme={"linkedin"}
              icon={<RiSignalTowerLine />}
              isActive={activeTab === "live"}
              onClick={() => handleClick("live")}
              {...iconProps}
            />
          </Tooltip>
          <Tooltip hasArrow label="Local github repos" placement="top">
            <IconButton
              aria-label={"live"}
              size="md"
              colorScheme={"linkedin"}
              icon={<RiWifiOffLine />}
              isActive={activeTab === "offline"}
              onClick={() => handleClick("offline")}
              {...iconProps}
            />
          </Tooltip>
        </HStack> */}
        </HStack>
        <Text
          color={useColorModeValue("gray.500", "gray.200")}
          textAlign="left"
        >
          {subtitle}
        </Text>
      </VStack>
      {/* {activeTab === "live" ? (
      <LiveData />
    ) : (
      <OfflineData repositories={repositories} />
    )} */}

      {children}
    </PageTransitions.PageSlideFade>
  );
};
