// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app';
import { MDXProvider } from '@mdx-js/react';
import { ChakraProvider } from '@chakra-ui/react';
import { BasicLayout } from '../components/Layouts/BasicLayout';
import MDXComponents from '../components/MDX';
import NextNProgress from 'nextjs-progressbar';
import theme from '../styles/theme';
import Fonts from '../styles/Fonts';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <NextNProgress options={{ easing: 'ease', speed: 500 }} />
      <MDXProvider components={MDXComponents}>
        <BasicLayout>
          <Component {...pageProps} />
        </BasicLayout>
      </MDXProvider>
    </ChakraProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
