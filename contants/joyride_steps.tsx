import { Step } from "react-joyride";

export const joyrideSteps: Step[] = [
  {
    title: "Welcome to Adspy",
    content: (
      <div className="text-center">
        <div className="mb-4">
          <i
            className="pi pi-eye"
            style={{
              fontSize: "42px",
              color: "var(--primary-color)",
            }}
          ></i>
        </div>
        <div>
          Welcome to Adspy, a powerful tool that helps you identify
          top-performing social media ads.
          <br />
          <br />
          Let&apos;s get started!
        </div>
      </div>
    ),
    placement: "center",
    target: "body",
  },
  {
    content: <div>Let’s try with Facebook</div>,
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
    content: (
      <div>
        The next steps could be : The user would be prompted to enter a search
        query into the app&apos;s search bar. Based on their previously selected
        preferences, the app could provide relevant search examples.
      </div>
    ),
  },
];
