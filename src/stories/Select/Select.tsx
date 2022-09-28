import React, { useState } from 'react';

// third party components
import { useForm } from 'react-hook-form';
import Selector from 'react-select';

// styles
import styles from './Select.module.scss';

interface SelectArray {
  value: string;
  label: string;
}

interface validateJSON {
  success: boolean;
}

interface SelectProps {
  list: SelectArray[];
  label: string;
  select: SelectArray;
  placeholder: string;
  validate: validateJSON;
  getSelect: (value: any) => void;
  size?: string;

  errorMessage?: string;
}

export const Select: React.FC<SelectProps> = (props) => {
  const {
    list,
    label,
    select,
    placeholder,
    validate,
    getSelect,
    size = '',
    errorMessage = '',
  } = props;
  const [selectedOption, setSelectedOption] = useState(list[0]);

  const onChangeSelect = (value: any) => {
    setSelectedOption(value);
    getSelect(value);
  };

  const customStyles = {
    option: (provided: any, state: any) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      background: state.isSelected ? '#0ACE5F' : '#ffffff',
      borderRadius: 24,
      width: 'calc(100% - 22px)',
      margin: 11,
    }),
    control: (base: any) => ({
      ...base,
      height: size === 'h54' ? 54 : size === 'h40' ? 40 : 66,
      fontFamily: 'Inter-Medium',
      fontSize: '16px',
      minHeight: 40,
      border: validate.success ? '1px solid #8692a6' : '1px solid #db5c6c',
      borderRadius: '6px',
      borderColor: '#0ace5f',
      boxShadow: 'none',
      '&:hover': {
        borderColor: '#0ace5f',
        boxShadow: 'none',
      },
      '&:active': {
        borderColor: '#0ace5f',
        boxShadow: 'none',
      },
    }),
    singleValue: (base: any) => ({
      ...base,
      color: 'black',
    }),
  };

  return (
    <div className={size !== '' ? styles.smallFormControl : styles.formControl}>
      <label
        htmlFor='Select'
        className={`${size !== '' ? styles.smallFormLabel : styles.formLabel} ${
          !validate.success ? 'font-red-color' : 'font-grey-color'
        } font-primary-medium`}
      >
        {label}
      </label>
      <div
        className={`${styles.iconInput} ${
          size === 'h54' ? styles.h54 : size === 'h40' ? styles.h40 : ''
        }`}
      >
        <Selector
          styles={customStyles}
          defaultValue={selectedOption}
          onChange={(value: any) => onChangeSelect(value)}
          options={list}
          placeholder={placeholder}
          components={{
            IndicatorSeparator: () => null,
          }}
          value={select}
        />

        {!validate.success && <div className={`${styles.errorMsg} text-right`}>{errorMessage}</div>}
      </div>
    </div>
  );
};
