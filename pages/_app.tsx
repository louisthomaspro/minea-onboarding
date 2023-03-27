import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { Inter } from "next/font/google";
import JoyrideProvider from "../context/JoyrideContext";
import { Welcome } from "../components/Welcome";
import { LazyMotion } from "framer-motion";
const inter = Inter({ subsets: ["latin"] });
const loadFeatures = () =>
  import("../utils/feature").then((res) => res.default);

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
      <LazyMotion features={loadFeatures}>
        <JoyrideProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </JoyrideProvider>
      </LazyMotion>
    </>
  );
}
