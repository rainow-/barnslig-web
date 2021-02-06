import React from "react";
import Head from 'next/head';
import { ThemeProvider } from "styled-components";
import theme from "../theme";

const CustomApp = ({ Component, pageProps }) => {
  return (
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
};

export default CustomApp;
