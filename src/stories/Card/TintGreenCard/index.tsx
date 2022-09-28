import React from 'react';

// styles
import styles from './index.module.scss';

interface TintGreenCardProps {
  label01: string;
  label02: string;
  label03?: string;
}

export const TintGreenCard: React.FC<TintGreenCardProps> = (props) => {
  const { label01, label02, label03 = '' } = props;
  return (
    <div className={styles.container}>
      <div className='font-primary-regular font-grey-color text-xs h-[30px]'>{label01}</div>
      <div className='font-primary-regular font-black-color text-base mt-5'>
        {label02 === '' ? '-' : label02}
      </div>
      <div className='font-primary-regular font-grey-color text-xs mt-1'>{label03}</div>
    </div>
  );
};
