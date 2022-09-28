import React from 'react';

// storybook components
import { OutlineButton } from '../../Button/OutlineButton';

// styles
import styles from './index.module.scss';

interface CardRepaymentAlarmProps {
  label01: string;
  label02: string;
  onClick: () => void;
  viewport: string;
}

export const CardRepaymentAlarm: React.FC<CardRepaymentAlarmProps> = (props) => {
  const { label01, label02, onClick, viewport } = props;

  return viewport !== 'mobile' ? (
    <div className={styles.container}>
      <div className='font-primary-bold font-white-color text-base'>{label01}</div>
      <div className='font-primary-medium font-white-color text-sm'>{label02}</div>
      <div className='min-w-[146px]'>
        <OutlineButton
          title='Pay Now'
          onClick={() => onClick()}
          fullWidth
          height='45px'
          fontSize='16px'
          backgroundColor='#ffffff'
          borderColor='#ffffff'
          borderRadius='24px'
        />
      </div>
    </div>
  ) : (
    <div className={styles.container}>
      <div className='flex flex-wrap gap-y-[27px]'>
        <div className='w-full font-primary-bold font-white-color text-xs'>{label01}</div>
        <div className='w-full font-primary-regular font-white-color text-xs'>{label02}</div>
      </div>
      <div className='min-w-[94px]'>
        <OutlineButton
          title='Pay Now'
          onClick={() => onClick()}
          fullWidth
          height='34px'
          fontSize='12px'
          backgroundColor='#ffffff'
          borderColor='#ffffff'
          borderRadius='24px'
        />
      </div>
    </div>
  );
};
