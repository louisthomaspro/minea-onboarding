import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { Inter } from "next/font/google";
import JoyrideProvider from "../context/JoyrideContext";
import { Welcome } from "../components/Welcome";
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          font-family: ${inter.style.fontFamily};
          --font-family: ${inter.style.fontFamily};
        }
      `}</style>

      <Welcome />

      <JoyrideProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </JoyrideProvider>
    </>
  );
}
