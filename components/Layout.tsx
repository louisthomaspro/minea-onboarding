import { LazyMotion } from "framer-motion";
import { ReactNode } from "react";
import Header from "./Header";
import SidePanel from "./SidePanel";

const loadFeatures = () =>
  import("../utils/feature.js").then((res) => res.default);

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <main>
        <Header />
        <SidePanel />
        <LazyMotion features={loadFeatures}>{children}</LazyMotion>
      </main>
    </>
  );
}