import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Marco Pollacci</title>
        <meta name="description" content="Marco Pollacci's personal website" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
