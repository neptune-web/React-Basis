import React from 'react';

// storybook components
import { BackgroundSmall } from 'stories/BackgroundSmall';

// third party components
import { useSelector } from 'react-redux';

// custom components
import JoinUsSection from './JoinUsSection';

// styles
import styles from './index.module.scss';

const JoinUs = () => {
  const viewport = useSelector((state: any) => state.device.viewport);

  return (
    <div className={styles.container}>
      <BackgroundSmall viewport={viewport} />
      <JoinUsSection />
    </div>
  );
};

export default JoinUs;
