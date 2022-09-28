import React from 'react';

// images and icons
import SquareIcon from '../assets/icons/Icon_Square_Checkbox.svg';
import CheckmarkIcon from '../assets/icons/Icon_Checkmark_Green.svg';
import CrossmarkIcon from '../assets/icons/Icon_Crossmark_Red.svg';

// styles
import styles from './index.module.scss';

export enum Status {
  NONE,
  CHECKED,
  CROSSED,
}

interface StatusCheckboxProps {
  status: Status;
  label: string;
}

export const StatusCheckbox: React.FC<StatusCheckboxProps> = (props) => {
  const { status, label } = props;
  return (
    <div className={styles.container}>
      <img
        src={
          status === Status.NONE
            ? SquareIcon
            : status === Status.CHECKED
            ? CheckmarkIcon
            : CrossmarkIcon
        }
        alt='checkmark'
      />
      <span className='font-grey-color'>{label}</span>
    </div>
  );
};
