import React from 'react';

// styles
import styles from './InputGreenLabel.module.scss';

interface InputGreenLabelNameProps {
  label: string;
  placeholder: string;
  getName: (value: string) => void;
  name: string;
}

export const InputGreenLabelName: React.FC<InputGreenLabelNameProps> = (props) => {
  const { label, placeholder, getName, name } = props;

  return (
    <div className={styles.formControl}>
      <label htmlFor='Legal Name*' className={`${styles.formLabel} font-primary-medium`}>
        {label}
      </label>
      <input
        type='text'
        className={`${styles.formInput} font-primary-medium`}
        placeholder={placeholder}
        value={name}
        onChange={(event: any) => getName(event.target.value)}
        autoComplete='off'
      />
    </div>
  );
};
