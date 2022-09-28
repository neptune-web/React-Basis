import React from 'react';

// third party components
import { useSelector } from 'react-redux';

// storybook components
import { BackgroundSmall } from 'stories/BackgroundSmall';

// custom components
import ResetPasswordSection from './ResetPasswordSection';

// styles
import styles from './index.module.scss';

const ResetPassword = () => {
  const viewport = useSelector((state: any) => state.device.viewport);

  return (
    <div className={styles.container}>
      <BackgroundSmall viewport={viewport} />
      <ResetPasswordSection />
    </div>
  );
};

export default ResetPassword;
