import React from 'react';
import styles from './index.module.scss';

interface CheckboxCircleProps {
  label: React.ReactNode;
  onChange: (bool: boolean) => void;
  disabled?: boolean;
  value?: boolean;
}

export const CheckboxCircle = ({
  label,
  onChange,
  disabled = false,
  value,
  ...props
}: CheckboxCircleProps) => (
  <label className={styles.container}>
    {label}
    <input
      type='checkbox'
      checked={value}
      className={styles.checkbox}
      onChange={(event: any) => onChange(event.target.checked)}
      disabled={disabled}
    />
    <span className={styles.checkmark} />
  </label>
);
