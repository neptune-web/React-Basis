import React, { useState } from 'react';

// third party components
import Phone from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

// images and icons
import MobileGreyIcon from '../assets/icons/Icon_Mobile_Grey.svg';
import MobileGreenIcon from '../assets/icons/Icon_Mobile_Green.svg';
import MobileRedIcon from '../assets/icons/Icon_Mobile_Red.svg';

// styles
import styles from './Input.module.scss';

interface PhoneValidateJSON {
  success: boolean;
  type: string;
}

interface InputPhoneProps {
  label: string;
  phone: string;
  phoneValidate: PhoneValidateJSON;
  getPhone: (value: string) => void;
  size?: string;
}

export const InputPhoneInvitePatient = (props: InputPhoneProps) => {
  const { label, phone, phoneValidate, getPhone, size = '' } = props;
  const [isFocusMobile, setIsFocusMobile] = useState(false);

  const phoneCountryList = ['us'];
  const changePhone = (value: string) => {
    getPhone(value);
  };

  return (
    <div className={size === 'mobile' ? styles.smallFormControlInvite : styles.formControlInvite}>
      <label
        htmlFor='Mobile Number*'
        className={`${size === 'mobile' ? styles.smallFormLabel : styles.formLabelInvite} ${
          !phoneValidate.success ? 'font-red-color' : 'font-grey-color'
        } font-secondary-regular`}
      >
        {label}
      </label>
      <div
        className={`${styles.iconInput} ${
          size === 'h54' ? styles.h54 : size === 'h40' ? styles.h40 : ''
        }`}
      >
        <div
          className={`flex items-center ${
            !phoneValidate.success ? styles.formInputError : styles.formInputInvite
          } ${
            size === 'h54' ? styles.h54 : size === 'h40' ? styles.h40 : ''
          } font-secondary-regular`}
        >
          <Phone
            inputStyle={{
              width: '100%',
              border: 'none',
              fontFamily: 'font-secondary-regular',
              fontSize: '14px',
            }}
            buttonStyle={{ border: 'none' }}
            dropdownStyle={{ minWidth: '250px', width: 'auto', maxWidth: '300px' }}
            country='us'
            onlyCountries={phoneCountryList}
            placeholder='1234567890'
            value={phone}
            onChange={(value: string) => changePhone(value)}
            disableSearchIcon
            onFocus={() => setIsFocusMobile(true)}
            onBlur={() => setIsFocusMobile(false)}
          />
        </div>
        <img
          src={
            !phoneValidate.success
              ? MobileRedIcon
              : isFocusMobile
              ? MobileGreenIcon
              : MobileGreyIcon
          }
          alt='mobile'
          className={styles.formIcon}
        />
      </div>
      {!phoneValidate.success && phoneValidate.type === 'required' && (
        <span className={`${styles.errorMsg} text-right`}>Phone number is required</span>
      )}
      {phoneValidate.type === 'pattern' && (
        <span className={`${styles.errorMsg} text-right`}>
          Incorrect phone number. Please try again!
        </span>
      )}
    </div>
  );
};
