import React from 'react';

// styles
import styles from './index.module.scss';

interface CardFinancingLimitProps {
  title: string;
  description: string;
  color: string;
  backgroundColor: string;
}

export const CardFinancingLimit: React.FC<CardFinancingLimitProps> = (props) => {
  const { title, description, color, backgroundColor } = props;

  return (
    <div className={styles.container} style={{ backgroundColor }}>
      <div className='font-primary-semibold text-lg' style={{ color }}>
        {title}
      </div>
      <div className='font-primary-regular font-black-color text-base mt-6'>{description}</div>
    </div>
  );
};
