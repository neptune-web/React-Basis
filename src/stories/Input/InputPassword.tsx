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

interface PasswordValidateJSON {
  success: boolean;
  type: string;
}

interface InputPasswordProps {
  label: string;
  placeholder: string;
  password: string;
  passwordValidate: PasswordValidateJSON;
  getPassword: (event: any) => void;
  size?: string;
}

export const InputPassword = (props: InputPasswordProps) => {
  const { label, placeholder, password, passwordValidate, getPassword, size = '' } = props;

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
          !passwordValidate.success ? 'font-red-color' : 'font-grey-color'
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
          className={`${!passwordValidate.success ? styles.formInputError : styles.formInput} ${
            size === 'h54' ? styles.h54 : size === 'h40' ? styles.h40 : ''
          } font-primary-medium`}
          placeholder={placeholder}
          onFocus={() => setIsFocusPassword(true)}
          onBlur={() => setIsFocusPassword(false)}
          value={password}
          onChange={(event: object) => getPassword(event)}
          autoComplete='new-password'
        />
        {showPassword ? (
          <img
            src={
              !passwordValidate.success
                ? EyeOnRedIcon
                : isFocusPassword
                ? EyeOnGreenIcon
                : EyeOnGreyIcon
            }
            alt='eye off'
            className={`${styles.formIcon} cursor-pointer`}
            onClick={() => handleClickEyeIcon(false)}
            onKeyDown={() => handleClickEyeIcon(false)}
          />
        ) : (
          <img
            src={
              !passwordValidate.success
                ? EyeOffRedIcon
                : isFocusPassword
                ? EyeOffGreenIcon
                : EyeOffGreyIcon
            }
            alt='eye off'
            className={`${styles.formIcon} cursor-pointer`}
            onClick={() => handleClickEyeIcon(true)}
            onKeyDown={() => handleClickEyeIcon(true)}
          />
        )}
      </div>
      {!passwordValidate.success && passwordValidate.type === 'required' && (
        <span className={`${styles.errorMsg} text-right`}>Password is required</span>
      )}

      {!passwordValidate.success && passwordValidate.type === 'pattern' && (
        <span className={`${styles.errorMsg} text-right`}>
          Incorrect Password Format. Please try again!
        </span>
      )}
      {!passwordValidate.success && passwordValidate.type === 'notCurrentPassword' && (
        <span className={`${styles.errorMsg} text-right`}>
          Current password is not matched with old password
        </span>
      )}
      {!passwordValidate.success && passwordValidate.type === 'notMatched' && (
        <span className={`${styles.errorMsg} text-right`}>
          New password and confirm password are not matched
        </span>
      )}
    </div>
  );
};
