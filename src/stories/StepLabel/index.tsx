import React from 'react';

// styles
import styles from './index.module.scss';

interface StepLabelProps {
  stepLabel: string;
  stepTitle: string;
}

export const StepLabel: React.FC<StepLabelProps> = (props) => {
  const { stepLabel, stepTitle } = props;

  return (
    <div className={styles.container}>
      <span className='font-primary-medium font-grey-color text-sm'>{stepLabel}</span>
      <span className='font-primary-semibold font-grey-color'>{stepTitle}</span>
    </div>
  );
};
