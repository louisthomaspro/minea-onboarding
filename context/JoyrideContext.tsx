import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { ACTIONS, CallBackProps, EVENTS, STATUS } from "react-joyride";

const JoyrideNoSSR = dynamic(() => import("react-joyride"), { ssr: false });

interface IJoyrideContext {
  joyrideState: {
    run: boolean;
    steps: {
      target: string;
      content: string;
    }[];
  };
  setJoyrideState(data: any): void;
  stepIndex: number;
  setStepIndex(stepIndex: number): void;
}

const JoyrideContext = createContext({} as IJoyrideContext);

export function useJoyride() {
  return useContext(JoyrideContext);
}

function JoyrideProvider({ children }: any) {
  const router = useRouter();

  const [joyrideState, setJoyrideState] = useState({
    run: false,
    steps: [] as any,
  });
  const [stepIndex, setStepIndex] = useState(0);

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { action, index, status, type } = data;

    console.log(index)

    if (([STATUS.FINISHED, STATUS.SKIPPED] as string[]).includes(status)) {
      setJoyrideState({ run: false, steps: joyrideState.steps });
      setStepIndex(0);
    } else if (
      ([EVENTS.STEP_AFTER, EVENTS.TARGET_NOT_FOUND] as string[]).includes(type)
    ) {
      const nextStepIndex = index + (action === ACTIONS.PREV ? -1 : 1);

      if (action === ACTIONS.NEXT) {
        setStepIndex(nextStepIndex);
        console.log(nextStepIndex);
      }
    }
  };

  return (
    <JoyrideContext.Provider
      value={{ joyrideState, setJoyrideState, stepIndex, setStepIndex }}
    >
      <JoyrideNoSSR
        {...joyrideState}
        callback={handleJoyrideCallback}
        continuous
        showProgress
        showSkipButton
        stepIndex={stepIndex}
        spotlightPadding={10}
      />
      {children}
    </JoyrideContext.Provider>
  );
}

export default JoyrideProvider;
