import "react-loading-skeleton/dist/skeleton.css";
import { firebaseApp } from "@/lib/clientApp";
import Layout from "@/components/Layout";
import type { AppProps } from "next/app";
import { getAuth } from "firebase/auth";
import "@/styles/globals.css";

export const auth = getAuth(firebaseApp);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
