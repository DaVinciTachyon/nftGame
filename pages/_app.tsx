import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Fragment } from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return <Fragment>
    <Head>
      <title>NFT Game</title>
      <meta name="description" content="nft game" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div
      style={{
        display: 'grid',
        alignItems: 'center',
        justifyItems: 'center',
        paddingRight: '10vw',
        paddingLeft: '10vw',
        paddingTop: '5vh'
      }}
    >
      <Component {...pageProps} />
    </div>
  </Fragment>
}

export default MyApp
