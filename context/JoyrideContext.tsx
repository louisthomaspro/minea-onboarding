import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { ACTIONS, CallBackProps, EVENTS, STATUS } from "react-joyride";
import { Button } from "primereact/button";
import styled from "styled-components";

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

    console.log(index);

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
        tooltipComponent={Tooltip}
        disableOverlayClose={true}
      />
      {children}
    </JoyrideContext.Provider>
  );
}

const Tooltip = ({
  continuous,
  index,
  isLastStep,
  step,
  backProps,
  closeProps,
  primaryProps,
  tooltipProps,
  skipProps,
}: any) => {
  console.log(step)
  return (
    <CustomTooltip {...tooltipProps}>
    {step.title && <h1 className="font-bold text-lg my-3 text-center">{step.title}</h1>}
    <div className="content text-sm">{step.content}</div>
    {/* {!continuous && <Button {...closeProps} label="Close"></Button>} */}
    {step.hideFooter ? null : (
      <div className="footer">
        <div className="flex-1">
          <Button
            {...skipProps}
            label="Skip"
            className="p-button-text"
          ></Button>
        </div>
        {/* {index > 0 && (
          <Button {...backProps} label="Back" className="mr-2"></Button>
        )} */}
        {continuous && <Button {...primaryProps} label={`${isLastStep ? 'Finish' : 'Next'}`}></Button>}
      </div>
    )}
  </CustomTooltip>
  )
}


const CustomTooltip = styled.div`
  background: #fff;
  border-radius: 8px;
  border-radius: 5px;
  box-sizing: border-box;
  color: var(--text-color);
  font-size: 1rem;
  max-width: 100%;
  padding: 15px;
  position: relative;
  width: 380px;

  .content {
    padding: 15px;
  }

  .footer {
    align-items: center;
    display: flex;
    justify-content: flex-end;
    margin-top: 15px;
  }
`;

export default JoyrideProvider;
