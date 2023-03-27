import { useRouter } from "next/router";
import { Button } from "primereact/button";
import { useEffect } from "react";
import { SimpleSkeleton } from "../components/SimpleSkeleton";
import { useJoyride } from "../context/JoyrideContext";

export default function Adspy() {
  const { setStepIndex } = useJoyride();
  const router = useRouter();

  useEffect(() => {
    setStepIndex(2);
  }, [router.pathname]);

  return (
    <>
      <h2 className="font-bold text-xl mb-4" id="target-3">
        Find winning products on Facebook
      </h2>
      <SimpleSkeleton className="w-full h-20rem" />
    </>
  );
}
