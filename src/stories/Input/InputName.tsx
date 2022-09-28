import React, { useState } from 'react';

// images and icons
import UserGreyIcon from '../assets/icons/Icon_User_Grey.svg';
import UserGreenIcon from '../assets/icons/Icon_User_Green.svg';
import UserRedIcon from '../assets/icons/Icon_User_Red.svg';

// styles
import styles from './Input.module.scss';

interface NameValidateJSON {
  success: boolean;
  type: string;
}

interface InputNameProps {
  label: string;
  placeholder: string;
  getName: (value: string) => void;
  name: string;
  nameValidate: NameValidateJSON;
  size?: string;
}

export const InputName: React.FC<InputNameProps> = (props) => {
  const { label, placeholder, getName, name, nameValidate, size = '' } = props;

  const [isFocusName, setIsFocusName] = useState(false);

  return (
    <div className={size !== '' ? styles.smallFormControl : styles.formControl}>
      <label
        htmlFor='Legal Name*'
        className={`${size !== '' ? styles.smallFormLabel : styles.formLabel} ${
          !nameValidate.success ? 'font-red-color' : 'font-grey-color'
        } font-primary-medium`}
      >
        {label}
      </label>
      <div
        className={`${styles.iconInput} ${
          size === 'h54' ? styles.h54 : size === 'h40' ? styles.h40 : ''
        }`}
        onFocusCapture={() => setIsFocusName(true)}
        onFocus={() => setIsFocusName(true)}
      >
        <input
          type='text'
          className={`${!nameValidate.success ? styles.formInputError : styles.formInput} ${
            size === 'h54' ? styles.h54 : size === 'h40' ? styles.h40 : ''
          } font-primary-medium`}
          placeholder={placeholder}
          onFocus={() => setIsFocusName(true)}
          onBlur={() => setIsFocusName(false)}
          value={name}
          onChange={(event: any) => getName(event.target.value)}
          autoComplete='off'
        />
        <img
          src={!nameValidate.success ? UserRedIcon : isFocusName ? UserGreenIcon : UserGreyIcon}
          alt='name'
          className={styles.formIcon}
        />
      </div>
      {!nameValidate.success && nameValidate.type === 'required' && (
        <span className={`${styles.errorMsg} text-right`}>Name is required</span>
      )}
      {nameValidate.type === 'pattern' && (
        <span className={`${styles.errorMsg} text-right`}>Incorrect Name. Please try again!</span>
      )}
    </div>
  );
};
