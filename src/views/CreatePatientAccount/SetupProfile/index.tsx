import React from 'react';

// storybook components
import { BackgroundSmall } from 'stories/BackgroundSmall';

// third party components
import { useSelector } from 'react-redux';

// custom components
import SetupProfileSection from './SetupProfileSection';

// styles
import styles from './index.module.scss';

const SetupProfile = () => {
  const viewport = useSelector((state: any) => state.device.viewport);

  return (
    <div className={styles.container}>
      {viewport !== 'mobile' && <BackgroundSmall viewport={viewport} />}
      <SetupProfileSection />
    </div>
  );
};

export default SetupProfile;
