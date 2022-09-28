import React, { useState } from 'react';

// images and icons
// import UserGreyIcon from './assets/icons/Icon_User_Grey.svg';
// import UserGreenIcon from './assets/icons/Icon_User_Green.svg';
// import UserRedIcon from './assets/icons/Icon_User_Red.svg';

// styles
import styles from './Input/Input.module.scss';

interface NameValidateJSON {
  success: boolean;
  type: string;
}

interface InputAddress1Props {
  label: string;
  placeholder: string;
  getName: (value: string) => void;
  name: string;
  nameValidate?: NameValidateJSON;
  size?: string;

  errorMessage?: string;
}

export const InputAddress1: React.FC<InputAddress1Props> = (props) => {
  const { label, placeholder, getName, name, nameValidate, size, errorMessage = '' } = props;

  const [isFocusName, setIsFocusName] = useState(false);

  return (
    <div className={size === 'small' ? styles.smallFormControl : styles.formControl}>
      <label
        htmlFor='Address Line 1*'
        className={`${size === 'small' ? styles.smallFormLabel : styles.formLabel} ${
          !nameValidate?.success ? 'font-red-color' : 'font-grey-color'
        } font-primary-medium`}
      >
        {label}
      </label>
      <div
        className={size === 'small' ? styles.smallIconInput : styles.iconInput}
        onFocusCapture={() => setIsFocusName(true)}
        onFocus={() => setIsFocusName(true)}
      >
        <input
          type='text'
          className={`${
            !nameValidate?.success
              ? size === 'small'
                ? styles.smallFormInputError
                : styles.formInputError
              : size === 'small'
              ? styles.smallFormInput
              : styles.formInput
          } font-primary-medium`}
          placeholder={placeholder}
          onFocus={() => setIsFocusName(true)}
          onBlur={() => setIsFocusName(false)}
          value={name}
          onChange={(event: any) => getName(event.target.value)}
        />
      </div>
      {!nameValidate?.success && nameValidate?.type === 'required' && (
        <span className={`${styles.errorMsg} text-right`}>{errorMessage}</span>
      )}
    </div>
  );
};
