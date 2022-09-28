import React from 'react';

// styles
import styles from './index.module.scss';

interface CardValueDetailProps {
  value: string;
  detail: string;
}

export const CardValueDetail = (props: CardValueDetailProps) => {
  const { value, detail } = props;
  return (
    <div className={styles.container}>
      <div className='w-full flex justify-center font-secondary-bold font-green-color text-xl'>
        {value}
      </div>
      <div className='w-full flex justify-center font-primary-regular items-center text-xs mt-xs'>
        {detail}
      </div>
    </div>
  );
};
