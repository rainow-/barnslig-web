import React from 'react';
import t from 'prop-types';
import Head from 'next/head';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from '../theme';

const addFontFaces = ({ fontFaces }) =>
  Object.keys(fontFaces).reduce((fontFacesCss, fontFace) => {
    const { name, url, format } = fontFaces[fontFace];
    return `
      ${fontFacesCss}
      @font-face {
        font-family: "${name}";
        src: url("${url}") format("${format}");
        font-display: fallback;
      }`;
  }, '');

const GlobalStyle = createGlobalStyle`
  ${addFontFaces}

  html,
  body {
    /* width: 100%;
    height: 100%; */
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    margin: 0;
    padding: 0;
    background-color: #ffa1d8/* rgba(34,109,121,1) */;

    font-size: 16px;
    font-family: ${({ fonts }) => fonts.body};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ fonts }) => fonts.heading};
  }

  :focus:not(:focus-visible) {
    outline: none;
  }
`;

const CustomApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Barnslig</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <GlobalStyle fontFaces={theme.fontFaces} fonts={theme.fonts} />
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
