import React from "react";

import "../styles/globals.css";
import "../styles/gs001.scss";
import "../styles/ps001.scss";
import "../styles/ts001.scss";
import "../styles/select001.scss";

import type {AppProps} from "next/app";
import Head from "next/head";

const App = ({Component, pageProps}: AppProps): JSX.Element => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
