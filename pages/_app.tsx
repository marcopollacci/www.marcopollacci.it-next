import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Marco Pollacci</title>
        <meta name="description" content="Marco Pollacci's personal website" />
        <noscript>Plese activate Javascript</noscript>
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
