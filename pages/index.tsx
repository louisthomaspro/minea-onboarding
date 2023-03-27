import { Button } from "primereact/button";
import { joyrideSteps } from "../contants/joyride_steps";
import { useJoyride } from "../context/JoyrideContext";

export default function Home() {
  const { joyrideState, setJoyrideState } = useJoyride();

  function handleStartButtonClick() {
    console.log(joyrideState);
    setJoyrideState({
      run: true,
      steps: joyrideSteps,
    });
  }
  return (
    <>
      <Button label="Button" onClick={handleStartButtonClick} />
    </>
  );
}
