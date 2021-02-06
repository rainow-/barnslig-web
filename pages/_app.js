import React from 'react';
import t from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';

const CustomApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Barnslig</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

CustomApp.propTypes = {
  Component: t.func.isRequired,
  pageProps: t.object.isRequired
};

export default CustomApp;
