import React from "react";

import "../styles/globals.css";
import "../styles/gs001.scss";

import type {AppProps} from "next/app";

const App = ({Component, pageProps}: AppProps): JSX.Element => <Component {...pageProps} />;

export default App;
