import { useRouter } from "next/router";
import { Button } from "primereact/button";
import { useEffect } from "react";
import { useJoyride } from "../context/JoyrideContext";

export default function Adspy() {
  const { setStepIndex } = useJoyride();
  const router = useRouter();

  useEffect(() => {
    setStepIndex(2);
  }, [router.pathname]);

  return (
    <>
      <h1 className="font-bold underline" id="target-3">
        AdSpy
      </h1>
    </>
  );
}
