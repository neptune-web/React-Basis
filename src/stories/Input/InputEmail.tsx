import React, { useState } from 'react';

// images and icons
import EmailGreyIcon from '../assets/icons/Icon_Email_Grey.svg';
import EmailGreenIcon from '../assets/icons/Icon_Email_Green.svg';
import EmailRedIcon from '../assets/icons/Icon_Email_Red.svg';

// styles
import styles from './Input.module.scss';

interface EmailValidateJSON {
  success: boolean;
  type: string;
}

interface InputEmailProps {
  label: string;
  email: string;
  emailValidate: EmailValidateJSON;
  getEmail: (event: any) => void;
  size?: string;
}

export const InputEmail = (props: InputEmailProps) => {
  const { label, email, emailValidate, getEmail, size = '' } = props;

  const [isFocusEmail, setIsFocusEmail] = useState(false);

  return (
    <div className={size !== '' ? styles.smallFormControl : styles.formControl}>
      <label
        htmlFor='email'
        className={`${size !== '' ? styles.smallFormLabel : styles.formLabel} ${
          !emailValidate.success ? 'font-red-color' : 'font-grey-color'
        } font-primary-medium`}
      >
        {label}
      </label>
      <div
        className={`${styles.iconInput} ${
          size === 'h54' ? styles.h54 : size === 'h40' ? styles.h40 : ''
        }`}
        onFocusCapture={() => setIsFocusEmail(true)}
        onFocus={() => setIsFocusEmail(true)}
      >
        <input
          type='text'
          className={`${!emailValidate.success ? styles.formInputError : styles.formInput} ${
            size === 'h54' ? styles.h54 : size === 'h40' ? styles.h40 : ''
          } font-primary-medium`}
          placeholder='Enter email address'
          onFocus={() => setIsFocusEmail(true)}
          onBlur={() => setIsFocusEmail(false)}
          value={email}
          onChange={(event: object) => getEmail(event)}
          autoComplete='off'
        />
        <img
          src={
            !emailValidate.success ? EmailRedIcon : isFocusEmail ? EmailGreenIcon : EmailGreyIcon
          }
          alt='email'
          className={styles.formIcon}
        />
      </div>
      {!emailValidate.success && emailValidate.type === 'required' && (
        <span className={`${styles.errorMsg} text-right`}>Email is required</span>
      )}
      {emailValidate.type === 'pattern' && (
        <span className={`${styles.errorMsg} text-right`}>Incorrect Email. Please try again!</span>
      )}
    </div>
  );
};
