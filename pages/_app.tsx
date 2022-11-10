import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <> 
  <Head>
    <title>Marco Pollacci</title>
    <meta name="description" content="Marco Pollacci's personal website" />   
  </Head>
    {/* <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=UA-21222420-1`} />

      <Script id='lazyG' strategy="lazyOnload">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
              });
          `}
      </Script> */}
    <Component {...pageProps} />
    </>
  )
}

