import { ProgressBar } from "primereact/progressbar";
import styled from "styled-components";
import { joyrideSteps } from "../contants/joyride_steps";
import { useJoyride } from "../context/JoyrideContext";

interface ITodoItem {
  title: string;
  credits: string;
  completed: boolean;
  onclick?: () => void;
}

const TodoList = () => {
  const { joyrideState, setJoyrideState } = useJoyride();

  const steps: ITodoItem[] = [
    {
      title: "Adspy: Identify performing social media ads",
      credits: "+ 300 credits",
      completed: true,
      onclick: () => {
        handleStartButtonClick();
      },
    },
    {
      title: "Shops:  Analyze shops on your market",
      credits: "+ 300 credits",
      completed: false,
    },
    {
      title: "Business Plan: Create a winning strategy for your brand",
      credits: "+ 300 credits",
      completed: false,
    },
    {
      title:
        "Influence Marketing: Connect with top influencers to grow your brand",
      credits: "+ 300 credits",
      completed: false,
    },
    {
      title: "Get ahead with Minea's Chrome extension",
      credits: "+ 100 credits",
      completed: false,
    },
  ];

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
      <ProgressBar value={progress} className="mb-3" />
      <ListWrapper className="shadow-2 mb-5">
        {steps.map((step, index) => (
          <div
            key={index}
            className="todo-item py-2 flex align-items-center justify-content-between"
            style={{ width: "100%" }}
            onClick={step.onclick}
          >
            <div className="flex align-items-center">
              <div
                className={`step-number flex-shrink-0 mr-4 ${step.completed && "completed"}`}
              >
                {step.completed ? (
                  <i className="completed pi pi-check"></i>
                ) : (
                  <span className="text-sm">{index + 1}</span>
                )}
              </div>
              <span className="p-ml-2 text-sm">{step.title}</span>
            </div>
            <div className="text-sm text-right flex-shrink-0">{step.credits}</div>
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

export default TodoList;
