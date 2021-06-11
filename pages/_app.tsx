import '../styles/main.scss'
import * as React from 'react';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
