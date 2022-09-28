import React from 'react';
import styles from './index.module.scss';

interface CheckboxOutlineProps {
  label: string;
  onChange: (bool: boolean) => void;
  disabled?: boolean;
}

export const CheckboxOutline = ({
  label,
  onChange,
  disabled = false,
  ...props
}: CheckboxOutlineProps) => (
  <label className={styles.container}>
    {label}
    <input
      type='checkbox'
      className={styles.checkbox}
      onChange={(event: any) => onChange(event.target.checked)}
      disabled={disabled}
    />
    <span className={styles.checkmark} />
  </label>
);
