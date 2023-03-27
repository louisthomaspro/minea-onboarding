import { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Steps } from "primereact/steps";
import styled from "styled-components";
import BusinessSvg from "../public/icons/svgs/business.svg";
import NoBusinessSvg from "../public/icons/svgs/no-business.svg";

const themeList = [
  { label: "Fashion and accessories" },
  { label: "Beauty and personal care" },
  { label: "Home and interior decoration" },
  { label: "Health and wellness" },
  { label: "Technology and innovation" },
  { label: "Automotive and transportation" },
  { label: "Education and learning" },
  { label: "Business and entrepreneurship" },
  { label: "Finance and investing" },
  { label: "Food and drink" },
  { label: "Art and culture" },
  { label: "Pets and pet care" },
  { label: "Environment and sustainability" },
  { label: "Sports and fitness" },
  { label: "Travel and tourism" },
  { label: "Other" },
];

export const Welcome = () => {
  const [visible, setVisible] = useState(true);
  const [activeStep, setActiveStep] = useState(0);

  const showDialog = () => {
    setVisible(true);
  };

  const hideDialog = () => {
    setVisible(false);
  };

  const footer = (
    <div>
      {activeStep > 0 && (
        <Button
          label="Back"
          icon="pi pi-chevron-left"
          className="absolute left-0 bottom-0 m-3"
          onClick={() => setActiveStep(0)}
        />
      )}
      <Button
        label="Skip"
        className="p-button-text absolute right-0 bottom-0 m-3"
        onClick={hideDialog}
      />
      <Steps
        model={[{ label: "" }, { label: "" }]}
        activeIndex={activeStep}
        readOnly={true}
        className="mx-auto mt-5"
        style={{ maxWidth: "50px" }}
      />
    </div>
  );

  return (
    <div>
      {/* <Button label="Show Dialog" onClick={showDialog} /> */}
      <Dialog
        visible={visible}
        onHide={hideDialog}
        footer={footer}
        style={{ minWidth: "600px", minHeight: "400px", margin: "1rem" }}
      >
        {activeStep === 0 && (
          <div>
            <h2 className="font-bold text-xl mb-4 text-center">
              Welcome to Minea
            </h2>
            <h3 className="text- mb-4 text-center">
              Do you already have a business ?
            </h3>
            <div className="grid">
              <div className="col">
                <BusinessButton onClick={() => setActiveStep(1)}>
                  <div className="icon">
                    <BusinessSvg />
                  </div>
                  <div className="text">Yes, and I am looking to expand</div>
                </BusinessButton>
              </div>
              <div className="col">
                <BusinessButton onClick={() => setActiveStep(1)}>
                  <div className="icon">
                    <NoBusinessSvg />
                  </div>
                  <div className="text">
                    No, I&apos;m still in the idea phase
                  </div>
                </BusinessButton>
              </div>
            </div>
          </div>
        )}
        {activeStep === 1 && (
          <div>
            <h2 className="font-bold text-xl mb-6 text-center">
              Welcome to Minea
            </h2>
            <div className="grid mb-3">
              {themeList.map((theme, index) => (
                <div className="col-3" key={index}>
                  <ThemeButton onClick={hideDialog}>{theme.label}</ThemeButton>
                </div>
              ))}
            </div>
          </div>
        )}
      </Dialog>
    </div>
  );
};

const BusinessButton = styled.button`
  background-color: var(--background-color);
  cursor: pointer;
  height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid var(--background-color);

  &:hover {
    border: 1px solid var(--primary-color);
  }

  .icon {
    width: 100px;
  }

  .text {
    text-align: center;
  }
`;

const ThemeButton = styled.button`
  background-color: var(--background-color);
  cursor: pointer;
  width: 100%;
  display: flex;
  padding: 2rem;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  height: 60px;
  max-width: 200px;
  border: 1px solid var(--background-color);
  text-align: center;

  &:hover {
    border: 1px solid var(--primary-color);
  }
`;
