import React, { useState, useEffect } from 'react';

// images and icons
import KeyGreyIcon from '../assets/icons/Icon_Key_Grey.svg';
import KeyGreenIcon from '../assets/icons/Icon_Key_Green.svg';
import KeyRedIcon from '../assets/icons/Icon_Key_Red.svg';

// styles
import styles from './Input.module.scss';

interface InputVerificationCodeProps {
  label: string;
  code: string;
  codeValidate: {
    success: boolean;
    type: string;
  };
  getCode: (value: string) => void;
  size?: string;
}

export const InputVerificationCode = (props: InputVerificationCodeProps) => {
  const { label, code, codeValidate, getCode, size = '' } = props;

  const [isFocusCode, setIsFocusCode] = useState(false);
  return (
    <div className={size !== '' ? styles.smallFormControl : styles.formControl}>
      <label
        htmlFor='code'
        className={`${size !== '' ? styles.smallFormLabel : styles.formLabel} ${
          !codeValidate ? 'font-red-color' : 'font-grey-color'
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
          className={`${!codeValidate ? styles.formInputError : styles.formInput} ${
            size === 'h54' ? styles.h54 : size === 'h40' ? styles.h40 : ''
          } font-primary-medium`}
          placeholder='Enter the verfication code'
          value={code}
          onFocus={() => setIsFocusCode(true)}
          onBlur={() => setIsFocusCode(false)}
          onChange={(event: any) => getCode(event.target.value)}
          autoComplete='off'
        />
        <img
          src={!codeValidate.success ? KeyRedIcon : isFocusCode ? KeyGreenIcon : KeyGreyIcon}
          alt='code'
          className={styles.formIcon}
        />
      </div>
      {!codeValidate.success && codeValidate.type === 'required' && (
        <span className={`${styles.errorMsg} text-right`}>Verification code is required</span>
      )}
      {codeValidate.type === 'pattern' && (
        <span className={`${styles.errorMsg} text-right`}>Incorrect Code. Please try again!</span>
      )}
    </div>
  );
};
