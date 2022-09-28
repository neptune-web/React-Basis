import React from 'react';

// styles
import styles from './InputGreenLabel.module.scss';

interface InputGreenLabelCardSecurityCodeProps {
  label: string;
  placeholder: string;
  getCardSecurityCode: (value: string) => void;
  cardSecurityCode: string;
}

export const InputGreenLabelCardSecurityCode: React.FC<InputGreenLabelCardSecurityCodeProps> = (
  props
) => {
  const { label, placeholder, getCardSecurityCode, cardSecurityCode } = props;

  return (
    <div className={styles.formControl}>
      <label htmlFor='Expiration Date' className={`${styles.formLabel} font-primary-medium`}>
        {label}
      </label>
      <input
        type='password'
        className={`${styles.formInput} font-primary-medium`}
        placeholder={placeholder}
        value={cardSecurityCode}
        onChange={(event: any) => getCardSecurityCode(event.target.value)}
        autoComplete='off'
      />
    </div>
  );
};
