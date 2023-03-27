import { ReactNode } from "react";
import Header from "./Header";
import SidePanel from "./SidePanel";
interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <main>
        <div className="grid grid-nogutter">
          <div className="col-fixed flex  overflow-y-auto w-18rem">
            <SidePanel />
          </div>
          <div className="col flex flex-column h-screen">
            <div className="w-full z-1 relative">
              <Header />
            </div>

            <div
              className="p-5 h-full overflow-y-auto"
              style={{ backgroundColor: "#F8F9FA" }}
            >
              {children}
              {/* <div style={{ height: "2000px" }}></div> */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
