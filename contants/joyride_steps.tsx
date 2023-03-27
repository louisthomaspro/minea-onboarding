import { Step } from "react-joyride";

export const joyrideSteps: Step[] = [
  {
    content: <h2>Target 1</h2>,
    placement: "center",
    target: "body",
  },
  {
    content: <div>Target 2</div>,
    disableBeacon: true,
    hideCloseButton: true,
    hideFooter: true,
    placement: "right",
    spotlightClicks: true,
    // styles: {
    //   options: {
    //     zIndex: 10000,
    //   },
    // },
    target: "#target-2",
  },
  {
    target: "#target-3",
    hideBackButton: true,
    content: <div>Target 3</div>,
  },
];
