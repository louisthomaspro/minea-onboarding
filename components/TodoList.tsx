import { ProgressBar } from "primereact/progressbar";
import { useState } from "react";
import styled from "styled-components";
import { joyrideSteps } from "../contants/joyride_steps";
import { useJoyride } from "../context/JoyrideContext";
import Lottie from "lottie-react";
import successfulAnimation from "../public/lootie/successful.json";
import { AnimatePresence, m } from "framer-motion";

interface ITodoItem {
  title: string;
  credits: string;
  completed: boolean;
  onclick?: () => void;
}

const TodoList = () => {
  const { joyrideState, setJoyrideState } = useJoyride();
  const [successfulVisible, setSuccessfulVisible] = useState(false);
  const [allCompleted, setAllCompleted] = useState(false);

  const [steps, setSteps] = useState<ITodoItem[]>([
    {
      title: "Adspy: Identify performing social media ads",
      credits: "+ 300 credits",
      completed: false,
      onclick: () => {
        handleStartButtonClick();
        completeStep(0);
      },
    },
    {
      title: "Shops:  Analyze shops on your market",
      credits: "+ 300 credits",
      completed: false,
      onclick: () => {
        completeStep(1);
      },
    },
    {
      title: "Business Plan: Create a winning strategy for your brand",
      credits: "+ 300 credits",
      completed: false,
      onclick: () => {
        completeStep(2);
      },
    },
    {
      title:
        "Influence Marketing: Connect with top influencers to grow your brand",
      credits: "+ 300 credits",
      completed: false,
      onclick: () => {
        completeStep(3);
      },
    },
    {
      title: "Get ahead with Minea's Chrome extension",
      credits: "+ 100 credits",
      completed: false,
      onclick: () => {
        completeStep(4);
      },
    },
  ]);

  const completeStep = (index: number) => {
    if (allCompleted) return;

    const newSteps = [...steps];
    newSteps[index].completed = true;
    setSteps(newSteps);

    // Check if all steps are completed
    if (newSteps.every((step) => step.completed)) {
      setSuccessfulVisible(true);
    }
  };

  function handleStartButtonClick() {
    console.log(joyrideState);
    setJoyrideState({
      run: true,
      steps: joyrideSteps,
    });
  }

  const progress =
    (steps.filter((step) => step.completed).length / steps.length) * 100;

  return (
    <>
      <div className="text-xs ml-auto text-right mb-1">
        {progress.toFixed(0)} %
      </div>
      <AnimatePresence>
        {successfulVisible && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LottieContainer>
              <Lottie
                animationData={successfulAnimation}
                loop={false}
                onComplete={() => {
                  setSuccessfulVisible(false);
                }}
              />
            </LottieContainer>
          </m.div>
        )}
      </AnimatePresence>

      <ProgressBar value={progress} className="mb-3" />
      <ListWrapper className="shadow-2 mb-5">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`todo-item py-2 flex align-items-center justify-content-between ${
              step.completed && "completed"
            }`}
            style={{ width: "100%" }}
            onClick={step.onclick}
          >
            <div className="flex align-items-center">
              <div
                className={`step-number flex-shrink-0 mr-4 ${
                  step.completed && "completed"
                }`}
              >
                {step.completed ? (
                  <i className="completed pi pi-check"></i>
                ) : (
                  <span className="text-sm">{index + 1}</span>
                )}
              </div>
              <span className="step-title p-ml-2 text-sm">{step.title}</span>
            </div>
            <div className="step-credits text-sm text-right flex-shrink-0">
              {step.credits}
            </div>
          </div>
        ))}
      </ListWrapper>
    </>
  );
};

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;

  .todo-item {
    display: flex;
    flex-direction: row;
    cursor: pointer;
    background-color: white;
    padding-left: 14px;
    padding-right: 14px;

    &.completed {
      color: #aeaeae !important;
      cursor: default;

      .step-title, .step-credits {
        text-decoration: line-through;
      }

      &:hover {
        background-color: white;
      }
    }

    &:not(:last-child) {
      border-bottom: 1px solid #e5e7eb;
    }

    &:hover {
      background-color: #f3f3f3;
    }

    .step-number {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      border: 1.5px solid #ccc;
      width: 30px;
      height: 30px;
      text-decoration: none !important;

      &.completed {
        background-color: #ff8906;
        border-color: #ff8906;
        color: white;
        padding: 1px;
      }

      i {
        font-size: 14px;
      }
    }
  }
`;

const LottieContainer = styled.div`
  > div {
    width: 90vw;
    height: 90vh;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    margin-left: auto;
    margin-right: auto;
  }
`;

export default TodoList;
