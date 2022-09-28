/* eslint-disable react/display-name */
import React, { useState } from 'react';

// images and icons
import EmailGreyIcon from '../assets/icons/Icon_Email_Grey.svg';
import EmailGreenIcon from '../assets/icons/Icon_Email_Green.svg';
import EmailRedIcon from '../assets/icons/Icon_Email_Red.svg';

// styles
import styles from './Input.module.scss';

interface InputEmailProps {
  label: string;
  size?: string;
  errorMessage?: string;
}

export const InputEmail2 = React.forwardRef<HTMLInputElement, InputEmailProps>(
  (props: InputEmailProps, ref) => {
    const { size, label, errorMessage, ...rest } = props;

    const [isFocusEmail, setIsFocusEmail] = useState(false);

    return (
      <div className={size !== '' ? styles.smallFormControl : styles.formControl}>
        <label
          htmlFor='email'
          className={`${size !== '' ? styles.smallFormLabel : styles.formLabel} ${
            errorMessage ? 'font-red-color' : 'font-grey-color'
          } font-primary-medium`}
        >
          {label}
        </label>
        <div
          className={`${styles.iconInput} ${
            size === 'h54' ? styles.h54 : size === 'h40' ? styles.h40 : ''
          }`}
        >
          <input
            type='text'
            className={`${errorMessage ? styles.formInputError : styles.formInput} ${
              size === 'h54' ? styles.h54 : size === 'h40' ? styles.h40 : ''
            } font-primary-medium`}
            placeholder='Enter email address'
            autoComplete='off'
            ref={ref}
            onFocus={() => setIsFocusEmail(true)}
            onBlur={() => setIsFocusEmail(false)}
            {...rest}
          />
          <img
            src={errorMessage ? EmailRedIcon : isFocusEmail ? EmailGreenIcon : EmailGreyIcon}
            alt='email'
            className={styles.formIcon}
          />
          {!!errorMessage && <div className={`${styles.errorMsg} text-right`}>{errorMessage}</div>}
        </div>
      </div>
    );
  }
);
