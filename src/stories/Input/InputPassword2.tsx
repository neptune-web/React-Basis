import React, { useState } from 'react';

// images and icons
import EyeOffGreyIcon from '../assets/icons/Icon_Eye_Off_Grey.svg';
import EyeOffGreenIcon from '../assets/icons/Icon_Eye_Off_Green.svg';
import EyeOffRedIcon from '../assets/icons/Icon_Eye_Off_Red.svg';
import EyeOnRedIcon from '../assets/icons/Icon_Eye_On_Red.svg';
import EyeOnGreenIcon from '../assets/icons/Icon_Eye_On_Green.svg';
import EyeOnGreyIcon from '../assets/icons/Icon_Eye_On_Grey.svg';

// styles
import styles from './Input.module.scss';

interface InputPasswordProps {
  label: string;
  placeholder: string;
  size?: string;
  errorMessage?: string;
}

export const InputPassword2 = (props: InputPasswordProps) => {
  const { label, placeholder, size = '', errorMessage, ...rest } = props;

  const [showPassword, setShowPassword] = useState(false);
  const [isFocusPassword, setIsFocusPassword] = useState(false);

  const handleClickEyeIcon = (show: boolean) => {
    setShowPassword(show);
  };

  return (
    <div className={size !== '' ? styles.smallFormControl : styles.formControl}>
      <label
        htmlFor='password'
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
          type={showPassword ? 'text' : 'password'}
          className={`${errorMessage ? styles.formInputError : styles.formInput} ${
            size === 'h54' ? styles.h54 : size === 'h40' ? styles.h40 : ''
          } font-primary-medium`}
          placeholder={placeholder}
          onFocus={() => setIsFocusPassword(true)}
          onBlur={() => setIsFocusPassword(false)}
          // onChange={(event: object) => getPassword(event)}
          autoComplete='new-password'
          {...rest}
        />
        {showPassword ? (
          <img
            src={errorMessage ? EyeOnRedIcon : isFocusPassword ? EyeOnGreenIcon : EyeOnGreyIcon}
            alt='eye off'
            className={`${styles.formIcon} cursor-pointer`}
            onClick={() => handleClickEyeIcon(false)}
            onKeyDown={() => handleClickEyeIcon(false)}
          />
        ) : (
          <img
            src={errorMessage ? EyeOffRedIcon : isFocusPassword ? EyeOffGreenIcon : EyeOffGreyIcon}
            alt='eye off'
            className={`${styles.formIcon} cursor-pointer`}
            onClick={() => handleClickEyeIcon(true)}
            onKeyDown={() => handleClickEyeIcon(true)}
          />
        )}
      </div>

      {!!errorMessage && <span className={`${styles.errorMsg} text-right`}>{errorMessage}</span>}
      {/* {errorMessage && passwordErrorType === 'notCurrentPassword' && (
        <span className={`${styles.errorMsg} text-right`}>
          Current password is not matched with old password
        </span>
      )}
      {errorMessage && passwordErrorType === 'notMatched' && (
        <span className={`${styles.errorMsg} text-right`}>
          New password and confirm password are not matched
        </span>
      )} */}
    </div>
  );
};
