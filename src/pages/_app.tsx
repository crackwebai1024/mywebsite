import React from "react";
import { AppProps } from "next/app";

import { Layout } from "../components/Layout";
import "../styles/globals.css";
import "../styles/project.scss";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
