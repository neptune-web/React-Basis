import React from 'react';

// third party components
import { useSelector } from 'react-redux';

// storybook components
import { BackgroundSmall } from 'stories/BackgroundSmall';
import SignInSection from './SignInSection';

// styles
import styles from './index.module.scss';

const Signin = () => {
  const viewport = useSelector((state: any) => state.device.viewport);

  return (
    <div className={styles.container}>
      <BackgroundSmall viewport={viewport} />
      <SignInSection />
    </div>
  );
};

export default Signin;
