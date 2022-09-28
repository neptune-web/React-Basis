import React from 'react';

// styles
import styles from './InputGreenLabel.module.scss';

interface InputGreenLabelDateProps {
  label: string;
  placeholder: string;
  getDate: (value: string) => void;
  date: string;
}

export const InputGreenLabelDate: React.FC<InputGreenLabelDateProps> = (props) => {
  const { label, placeholder, getDate, date } = props;

  return (
    <div className={styles.formControl}>
      <label htmlFor='Expiration Date' className={`${styles.formLabel} font-primary-medium`}>
        {label}
      </label>
      <input
        type='text'
        className={`${styles.formInput} font-primary-medium`}
        placeholder={placeholder}
        value={date}
        onChange={(event: any) => getDate(event.target.value)}
        autoComplete='off'
      />
    </div>
  );
};
