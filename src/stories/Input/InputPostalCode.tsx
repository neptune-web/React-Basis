import React from 'react';

// styles
import styles from './Input.module.scss';

interface PostalCodeValidateJSON {
  success: boolean;
  type: string;
}

interface InputPostalCodeProps {
  label: string;
  postalCode: string;
  postalCodeValidate: PostalCodeValidateJSON;
  getPostalCode: (value: string) => void;
  size?: string;
}

export const InputPostalCode = (props: InputPostalCodeProps) => {
  const { label, postalCode, postalCodeValidate, getPostalCode, size = '' } = props;

  return (
    <div className={size !== '' ? styles.smallFormControl : styles.formControl}>
      <label
        htmlFor='Postal Code*'
        className={`${size !== '' ? styles.smallFormLabel : styles.formLabel} ${
          !postalCodeValidate.success ? 'font-red-color' : 'font-grey-color'
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
          className={`${!postalCodeValidate.success ? styles.formInputError : styles.formInput} ${
            size === 'h54' ? styles.h54 : size === 'h40' ? styles.h40 : ''
          } font-primary-medium`}
          placeholder='Enter your postal code'
          value={postalCode}
          onChange={(event: any) => getPostalCode(event.target.value)}
          autoComplete='off'
        />
      </div>
      {!postalCodeValidate.success && postalCodeValidate.type === 'required' && (
        <span className={`${styles.errorMsg} text-right`}>Postal code is required</span>
      )}
      {postalCodeValidate.type === 'pattern' && (
        <span className={`${styles.errorMsg} text-right`}>
          Incorrect postal code. Please try again!
        </span>
      )}
    </div>
  );
};
