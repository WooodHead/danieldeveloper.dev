import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false
};

const theme = extendTheme({
  ...config,
  fonts: {
    heading:
      'Playfair Display, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol',
    body: 'Source Sans Pro, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol'
  },
  styles: {
    global: (props) => ({
      html: {
        minWidth: '360px',
        scrollBehavior: 'smooth',
        textSizeAdjust: '100%'
      },
      body: {
        color: mode('gray.700', 'whiteAlpha.900')(props),
        bg: mode('gray.50', 'gray.900')(props),
        fontSize: '1.15em',
        '.deleted': {
          color: '#ff8383 !important',
          fontStyle: 'normal !important'
        },
        '.inserted': {
          color: '#b5f4a5 !important',
          fontStyle: 'normal !important'
        }
      },
      '#__next': {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      },
      a: {
        color: mode('blue.500', 'blue.200')(props),
        transition: 'color 0.15s',
        transitionTimingFunction: 'ease-out',
        fontWeight: '500',
        _hover: {
          color: mode('blue.600', 'blue.300')(props)
        }
      },
      '.remark-code-title': {
        borderTopLeftRadius: '0.25rem',
        borderTopRightRadius: '0.25rem',
        borderWith: '1px 1px 0',
        borderColor: mode('rgba(229,231,235,1)', 'gray.700')(props),
        backgroundColor: mode('rgba(229,231,235,1)', 'gray.700')(props),
        padding: ' .75rem 1.25rem',
        fontSize: '.875rem',
        lineHeight: '1.25rem',
        fontWeight: '700',
        color: mode('rgba(31,41,55,1)', 'white.200')(props),
        '+ pre': {
          marginTop: 0,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0
        }
      },
      pre: {
        borderWidth: '1px',
        borderColor: mode('rgba(229,231,235,1)', 'gray.800')(props),
        backgroundColor: mode('rgba(249,250,251,1)', 'gray.800')(props),
        overflowX: 'auto',
        fontSize: ' .875em',
        lineHeight: '1.7142857',
        marginTop: '1.7142857em',
        marginBottom: '1.7142857em',
        borderRadius: '.375rem',
        borderTopLeftRadius: '0.375rem',
        borderTopRightRadius: '0.375rem',
        padding: '.8571429em 1.1428571em'
      },
      code: {
        backgroundColor: 'transparent',
        borderWidth: '0',
        borderRadius: '0',
        padding: '0',
        fontWeight: '400',
        color: 'inherit',
        fontSize: 'inherit',
        fontFamily: 'inherit',
        lineHeight: 'inherit'
      }
    })
  }
});

export default theme;
