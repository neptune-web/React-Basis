import React from 'react';

// styles
import styles from './index.module.scss';

interface CardLeftLineProps {
  label: string;
  value: string;
}

export const CardLeftLine: React.FC<CardLeftLineProps> = (props) => {
  const { label, value } = props;

  return (
    <div className={styles.container}>
      <div className={styles.greenBar} />
      <div className='flex-1 flex-wrap justify-start items-center my-[6px]'>
        <div className='font-primary-medium font-grey-color text-sm'>{label}</div>
        <div className='font-primary-bold text-2xl mt-8'>{value}</div>
      </div>
    </div>
  );
};
