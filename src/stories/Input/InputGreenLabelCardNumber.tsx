import React from 'react';

// images and icons
import CheckboxGreenIcon from '../assets/icons/Icon_Checkbox_Green.svg';

// styles
import styles from './InputGreenLabel.module.scss';

interface InputGreenLabelCardNumberProps {
  label: string;
  placeholder: string;
  getCardNumber: (value: string) => void;
  cardNumber: string;
}

export const InputGreenLabelCardNumber: React.FC<InputGreenLabelCardNumberProps> = (props) => {
  const { label, placeholder, getCardNumber, cardNumber } = props;

  // const newCardNumber = cardNumber.match(/\d{4}/g)!.join(' ');

  return (
    <div className={styles.formControl}>
      <label htmlFor='Legal Name*' className={`${styles.formLabel} font-primary-medium`}>
        {label}
      </label>
      <input
        type='text'
        className={`${styles.formInput} font-primary-medium`}
        placeholder={placeholder}
        value={cardNumber}
        onChange={(event: any) => getCardNumber(event.target.value)}
        autoComplete='off'
        // inputMode='numeric'
        // pattern='[0-9\s]{13,19}'
      />
      {cardNumber.length === 19 && (
        <img src={CheckboxGreenIcon} alt='' className={styles.formIcon} />
      )}
    </div>
  );
};
