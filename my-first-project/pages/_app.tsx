import Layout from "@/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AlunosProvider } from "../components/layout/context/AlunosContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AlunosProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AlunosProvider>
  );
}
