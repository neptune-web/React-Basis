import React from 'react';

// third party components
import { useSelector } from 'react-redux';

// storybook components
import { BackgroundSmall } from 'stories/BackgroundSmall';

// custom components
import ForgotPasswordSection from './ForgotPasswordSection';

// styles
import styles from './index.module.scss';

const ForgotPassword = () => {
  const viewport = useSelector((state: any) => state.device.viewport);
  return (
    <div className={styles.container}>
      <BackgroundSmall viewport={viewport} />
      <ForgotPasswordSection />
    </div>
  );
};

export default ForgotPassword;
