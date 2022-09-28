import React from 'react';

import styles from './index.module.scss';

interface StepperProps {
  currentStep: number;
  readState: boolean;
}

export const Stepper: React.FC<StepperProps> = (props) => {
  const { currentStep, readState } = props;
  return (
    <div className='w-full'>
      <div className={styles.Stepper}>
        <div className={styles.oneStepArea}>
          <div
            className={`${styles.circleButton} ${styles.firstStep} ${
              currentStep >= 1 ? styles.activeBGColor : styles.disableBGColor
            }`}
          />
        </div>
        <div
          className={`${styles.line} ${
            currentStep >= 2 ? styles.activeBGColor : styles.disableBGColor
          }`}
        />
        <div className={styles.oneStepArea}>
          <div
            className={`${styles.circleButton} ${
              currentStep >= 2 ? styles.activeBGColor : styles.disableBGColor
            }`}
          />
        </div>
        <div
          className={`${styles.line} ${
            currentStep >= 3 ? styles.activeBGColor : styles.disableBGColor
          }`}
        />
        <div className={styles.oneStepArea}>
          <div
            className={`${styles.circleButton} ${styles.lastStep} ${
              currentStep >= 3 ? styles.activeBGColor : styles.disableBGColor
            }`}
          />
        </div>
      </div>
      <div className={styles.Stepper}>
        <div
          className={`${styles.stepperText} ${
            currentStep >= 1
              ? readState === true && currentStep === 1
                ? styles.readTextColor
                : styles.activeTextColor
              : styles.disableTextColor
          }`}
        >
          E-Sign Agreement
        </div>
        <div
          className={`${styles.stepperText} ${
            currentStep >= 1
              ? readState === true && currentStep === 2
                ? styles.readTextColor
                : styles.activeTextColor
              : styles.disableTextColor
          }`}
        >
          Privacy Policy
        </div>
        <div
          className={`${styles.stepperText} ${
            currentStep >= 1
              ? readState === true && currentStep === 3
                ? styles.readTextColor
                : styles.activeTextColor
              : styles.disableTextColor
          }`}
        >
          Website Use Policy
        </div>
      </div>
    </div>
  );
};
