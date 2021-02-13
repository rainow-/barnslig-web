import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

// TODO: Page title
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preload" href="/fonts/Inter-Regular.woff2" as="font" type="font/woff2" crossOrigin="true" />
          <link rel="preload" href="/fonts/Inter-SemiBold.woff2" as="font" type="font/woff2" crossOrigin="true" />
          <link rel="preload" href="/fonts/Inter-Italic.woff2" as="font" type="font/woff2" crossOrigin="true" />
          <link rel="preload" href="/fonts/Inter-Light.woff2" as="font" type="font/woff2" crossOrigin="true" />
          <link rel="preload" href="/fonts/Inter-MediumItalic.woff2" as="font" type="font/woff2" crossOrigin="true" />
          <link rel="stylesheet" href="/normalize.css" />
          <link rel="stylesheet" href="/reset.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
