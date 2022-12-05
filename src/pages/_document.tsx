import React from "react";
import {Html, Main, NextScript, Head} from "next/document";

const MyDocument = (): JSX.Element => (
  <Html lang="en">
    <Head>
      <meta charSet="utf-8" />

      <meta name="author" content="Nexi" />
      <meta name="copyright" content="Nexi" />

      <meta name="application-name" content="Nexi" />
      <meta name="apple-mobile-web-app-title" content="Nexi" />

      <meta property="og:type" content="website" />

      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-config" content="/icons/browserconfig.xml" />
      <meta name="msapplication-TileColor" content="#123D93" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#123D93" />

      <link rel="manifest" href="/manifest.json" />
      <link rel="shortcut icon" href="/favicon.png" />

      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500;600;700&family=Roboto:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <body className="antialiased">
      <div id="page-transition" />
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
