import React from 'react';

// third party components
import { useSelector } from 'react-redux';

// storybook components
import { BackgroundLarge } from 'stories/BackgroundLarge';
import { TermsAndConditionsSection } from './TermsAndConditionsSection';

// styles
import styles from './index.module.scss';

const TermsAndConditions = () => {
  const viewport = useSelector((state: any) => state.device.viewport);
  return (
    <div className={styles.container}>
      {/* {viewport !== 'mobile' && <BackgroundLarge />} */}
      <TermsAndConditionsSection />
    </div>
  );
};

export default TermsAndConditions;
