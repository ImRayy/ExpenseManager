import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { getAuth } from 'firebase/auth'
import { firebaseApp } from '@/lib/clientApp'
import Layout from '@/components/Layout'

export const auth = getAuth(firebaseApp)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
