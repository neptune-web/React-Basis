import React from 'react';

// storybook components
import { BackgroundSmall } from 'stories/BackgroundSmall';

// third party components
import { useSelector } from 'react-redux';

// custom components
import ResetPasswordCongratsSection from './ResetPasswordCongratsSection';

// styles
import styles from './index.module.scss';

const ResetPasswordCongrats = () => {
  const viewport = useSelector((state: any) => state.device.viewport);

  return (
    <div className={styles.container}>
      {viewport !== 'mobile' && <BackgroundSmall viewport={viewport} />}
      <ResetPasswordCongratsSection />
    </div>
  );
};

export default ResetPasswordCongrats;
