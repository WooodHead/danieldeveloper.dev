import NextLink from 'next/link';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link as ChakraLink,
  IconButton,
  Tooltip,
  useColorModeValue,
  Select
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { ColorModeSwitcher } from '../../../Common';
import { Link } from '../../../../types/types';
import { NavLinkProps } from './NavLink';
import { StackMenu } from './StackMenu';
import { accounts, GITHUB } from '../../../../config/accounts';
import { useRouter } from 'next/router';
import React from 'react';
import { Locales } from '../../../../utils/i18n';

interface WebMenuProps {
  LinkComponent: React.FC<NavLinkProps>;
  links: Link[];
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const WebMenu: React.FC<WebMenuProps> = ({
  links = [],
  LinkComponent,
  isOpen,
  onOpen,
  onClose
}) => {
  const router = useRouter();

  const changeLanguage = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const locale = event.target.value || router.defaultLocale;

    router.push(router.pathname, router.asPath, { locale });
  };

  const themeBackgroundColor = useColorModeValue('blue.500', 'blue.200');
  const themeColor = useColorModeValue('gray.200', 'gray.900');
  const themeIconBackgroundColor = useColorModeValue('white', 'gray.700');

  return (
    <>
      <IconButton
        id="open-menu"
        size={'md'}
        icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
        aria-label={'Open Menu'}
        display={['inherit', 'inherit', 'none']}
        onClick={isOpen ? onClose : onOpen}
      />
      <HStack spacing={8} alignItems={'center'}>
        <Box>
          <NextLink href={'/'} passHref>
            <Avatar as={ChakraLink} size={'sm'} src={GITHUB.avatar} />
          </NextLink>
        </Box>
        <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
          {links.map((link) => {
            return link.nested ? (
              <StackMenu
                key={link.name}
                menuAttributes={{
                  bg: themeBackgroundColor,
                  color: themeColor
                }}
                links={link.nested}
              />
            ) : (
              <LinkComponent key={link.name} link={link} onClose={onClose} />
            );
          })}
        </HStack>
      </HStack>
      <Flex alignItems={'center'}>
        {accounts.map((account) => (
          <Tooltip
            key={account.key}
            label={account.title}
            aria-label={account.title}
          >
            <IconButton
              id="profile-button"
              as={ChakraLink}
              href={account.profile}
              target="_blank"
              rel="noopener noreferrer"
              fontSize="1.5em"
              size="lg"
              icon={<account.icon />}
              aria-label={account.title}
              bg={themeIconBackgroundColor}
              _hover={{
                textDecoration: 'none',
                bg: themeBackgroundColor
              }}
            />
          </Tooltip>
        ))}

        <ColorModeSwitcher justifySelf="flex-end" />
        <Select
          size="md"
          onChange={changeLanguage}
          defaultValue={router.locale}
        >
          {router.locales.map((locale: string) => (
            <option key={locale} value={locale}>
              {locale.toUpperCase()}
            </option>
          ))}
        </Select>
      </Flex>
    </>
  );
};
