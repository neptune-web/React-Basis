import React from 'react';

// styles
import styles from './index.module.scss';

interface ButtonProps {
  disabled?: boolean;
  icon: any;
  onClick?: () => void;
  size?: string;
  backgroundColor?: string;
}

export const IconButton: React.FC<ButtonProps> = (props) => {
  const { disabled = false, icon, onClick = () => {}, size = '', backgroundColor = '' } = props;
  return (
    <button
      type='button'
      className={`${styles.button} ${size === 'h32' ? styles.h32 : ''}`}
      style={{ backgroundColor }}
      disabled={disabled}
      onClick={onClick}
    >
      <img src={icon} alt='' width={24} height={24} />
    </button>
  );
};
