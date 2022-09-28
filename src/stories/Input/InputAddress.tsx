import React, { useState } from 'react';

// third party components
import Autocomplete from 'react-google-autocomplete';

// images and icons
import AddressGreyIcon from '../assets/icons/Icon_Address_Grey.svg';
import AddressGreenIcon from '../assets/icons/Icon_Address_Green.svg';
import AddressRedIcon from '../assets/icons/Icon_Address_Red.svg';

// styles
import styles from './Input.module.scss';

interface InputAddressProps {
  label: string;
  address: any;
  addressValidate: boolean;
  getAddress: (value: any) => void;
  size?: string;
}

export const InputAddress = (props: InputAddressProps) => {
  const { label, address, addressValidate, getAddress, size = '' } = props;
  const [isFocusAddress, setIsFocusAddress] = useState(false);
  console.log('address validate', addressValidate);

  return (
    <div className={size !== '' ? styles.smallFormControl : styles.formControl}>
      <label
        htmlFor='Address*'
        className={`${size !== '' ? styles.smallFormLabel : styles.formLabel} ${
          !addressValidate ? 'font-red-color' : 'font-grey-color'
        } font-primary-medium`}
      >
        {label}
      </label>
      <div
        className={`${styles.iconInput} ${
          size === 'h54' ? styles.h54 : size === 'h40' ? styles.h40 : ''
        }`}
      >
        <Autocomplete
          apiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}
          onPlaceSelected={(place) => {
            getAddress(place);
          }}
          onFocus={() => setIsFocusAddress(true)}
          onBlur={() => setIsFocusAddress(false)}
          placeholder='Enter your address'
          className={`${!addressValidate ? styles.formInputError : styles.formInput} ${
            size === 'h54' ? styles.h54 : size === 'h40' ? styles.h40 : ''
          } font-primary-medium`}
          options={{
            fields: ['address_components'],
            types: ['address'],
            componentRestrictions: { country: 'us' },
          }}
          defaultValue={address}
        />
        <img
          src={
            !addressValidate ? AddressRedIcon : isFocusAddress ? AddressGreenIcon : AddressGreyIcon
          }
          alt='address'
          className={styles.formIcon}
        />
      </div>
      {!addressValidate && (
        <span className={`${styles.errorMsg} text-right`}>Enter your address</span>
      )}
    </div>
  );
};
