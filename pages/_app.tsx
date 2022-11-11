import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Marco Pollacci</title>
        <meta name="description" content="Marco Pollacci's personal website" />
        <meta name="theme-color" content="#000000" />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons/icons-152x152.png"
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
