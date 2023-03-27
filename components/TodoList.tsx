import { ProgressBar } from "primereact/progressbar";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { joyrideSteps } from "../constants/joyride_steps";
import { useJoyride } from "../context/JoyrideContext";
import Lottie from "lottie-react";
import successfulAnimation from "../public/lootie/successful.json";
import { AnimatePresence, m } from "framer-motion";
import { useTodo } from "../context/TodoContext";

const TodoList = () => {
  const { joyrideState, setJoyrideState } = useJoyride();

  const {
    steps,
    setSteps,
    completeStep,
    successfulVisible,
    setSuccessfulVisible,
  } = useTodo();

  function startJoyride() {
    setJoyrideState({
      run: true,
      steps: joyrideSteps,
    });
  }

  const progress =
    (steps.filter((step: any) => step.completed).length / steps.length) * 100;

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
        {steps.map((step: any, index: any) => (
          <div
            key={index}
            className={`todo-item py-2 flex align-items-center justify-content-between ${
              step.completed && "completed"
            }`}
            onClick={() => {
              if (!steps[index].completed) {
                completeStep(index);
                if (index === 0) startJoyride();
              }
            }}
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
    width: 100%;

    &.completed {
      color: #aeaeae !important;
      cursor: default;

      .step-title,
      .step-credits {
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
