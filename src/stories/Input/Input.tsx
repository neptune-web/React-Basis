import React from 'react';

// styles
import styles from './Input.module.scss';

interface InputProps {
  placeholder: string;
  onChange: (value: string) => void;
  value: string;
  fullWidth?: boolean;
  width?: string;
  height?: string;
}

export const Input: React.FC<InputProps> = (props) => {
  const { placeholder, value, onChange, fullWidth, width, height } = props;

  return (
    <div className={styles.commonControl}>
      <input
        type='text'
        className={styles.commonInput}
        style={{ width: fullWidth ? '100%' : width, height }}
        placeholder={placeholder}
        value={value}
        onChange={(event: any) => onChange(event.target.value)}
        autoComplete='off'
      />
    </div>
  );
};
