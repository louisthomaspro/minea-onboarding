import { createContext, useContext, useEffect, useState } from "react";
import { todoSteps } from "../constants/todo_steps";

interface ITodoContext {
  steps: ITodoItem[];
  setSteps(steps: ITodoItem[]): void;
  completeStep(index: number): void;
  successfulVisible: boolean;
  setSuccessfulVisible(visible: boolean): void;
}

export interface ITodoItem {
  title: string;
  credits: string;
  completed: boolean;
  onclick?: () => void;
}

const TodoContext = createContext({} as ITodoContext);

export function useTodo() {
  return useContext(TodoContext);
}

function TodoProvider({ children }: any) {
  const [steps, setSteps] = useState<ITodoItem[]>(todoSteps);

  const [successfulVisible, setSuccessfulVisible] = useState(false);
  const [allCompleted, setAllCompleted] = useState(false);

  const completeStep = (index: number) => {
    if (allCompleted) return;

    const newSteps = [...steps];
    newSteps[index].completed = true;
    setSteps(newSteps);

    // Check if all steps are completed
    if (newSteps.every((step) => step.completed)) {
      setSuccessfulVisible(true);
      setAllCompleted(true);
    }
  };

  return (
    <TodoContext.Provider
      value={{
        steps,
        setSteps,
        completeStep,
        successfulVisible,
        setSuccessfulVisible,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;
