import React from 'react';

// storybook components
import { Button } from '../../Button';

// styles
import styles from './index.module.scss';

interface PrimaryBlueCardProps {
  label01: string;
  label02: string;
}

export const PrimaryBlueCard: React.FC<PrimaryBlueCardProps> = (props) => {
  const { label01, label02 } = props;
  return (
    <div className={styles.container}>
      <div className='font-primary-bold font-white-color text-xl'>{label01}</div>
      <div className='font-primary-regular font-white-color text-sm'>{label02}</div>
      <Button
        title='Apply & Generate Loan'
        onClick={() => {}}
        width='236px'
        minWidth='236px'
        height='45px'
        color='#0ACE5F'
        fontWeight='bold'
        backgroundColor='#ffffff'
        borderColor='none'
        borderRadius='23px'
      />
    </div>
  );
};
