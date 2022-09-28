import React from 'react';

// styles
import styles from './index.module.scss';

interface DarkGreenCardProps {
  label01: string;
  label02?: string;
}

export const DarkGreenCard: React.FC<DarkGreenCardProps> = (props) => {
  const { label01, label02 = '' } = props;
  return (
    <div className={styles.container}>
      <div className='font-primary-regular font-white-color text-xs h-[30px]'>{label01}</div>
      <div className='font-primary-regular font-green-color text-base mt-5'>
        {label02 === '' ? '-' : label02}
      </div>
    </div>
  );
};
