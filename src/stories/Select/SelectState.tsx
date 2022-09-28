import React, { useEffect, useState } from 'react';

// third party components
import { IState } from 'country-state-city/dist/lib/interface';
import AsyncSelect from 'react-select/async';

// styles
import styles from './Select.module.scss';

interface StateJSON {
  value: string;
  label: string;
}

interface StateValidateJSON {
  success: boolean;
}

interface SelectStateProps {
  list: IState[];
  label: string;
  state: StateJSON;
  stateValidate: StateValidateJSON;
  getState: (value: any) => void;
  size?: string;
}

export const SelectState: React.FC<SelectStateProps> = (props) => {
  const { list, label, state, stateValidate, getState, size = '' } = props;

  interface StateListArray {
    value: string;
    label: string;
    isoCode: string;
  }
  const [stateList, setStateList] = useState<StateListArray[]>([]);

  useEffect(() => {
    const array: any = [];
    list.map((item) => {
      const object = { value: '', label: '', isoCode: '' };
      object.value = item.name !== undefined ? item.name : '';
      object.label = item.name !== undefined ? item.name : '';
      object.isoCode = item.isoCode;
      array.push(object);
      return array;
    });
    setStateList(array);
  }, [list]);

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
      border: stateValidate.success ? '1px solid #8692a6' : '1px solid #db5c6c',
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

  const filterStates = (inputValue: string) => {
    return stateList.filter((i) => i.label.toLowerCase().includes(inputValue.toLowerCase()));
  };

  const promiseOptions = (inputValue: string) =>
    new Promise<StateListArray[]>((resolve) => {
      setTimeout(() => {
        resolve(filterStates(inputValue));
      }, 10);
    });

  return (
    <div className={size !== '' ? styles.smallFormControl : styles.formControl}>
      <label
        htmlFor='Mobile Number*'
        className={`${size !== '' ? styles.smallFormLabel : styles.formLabel} ${
          !stateValidate.success ? 'font-red-color' : 'font-grey-color'
        } font-primary-medium`}
      >
        {label}
      </label>
      <div
        className={`${!stateValidate.success ? styles.formInputError : styles.formInput} ${
          styles.iconInput
        } ${size === 'h54' ? styles.h54 : size === 'h40' ? styles.h40 : ''}`}
      >
        <AsyncSelect
          styles={customStyles}
          placeholder='Select your state'
          components={{
            IndicatorSeparator: () => null,
          }}
          cacheOptions
          value={state}
          defaultOptions={stateList}
          loadOptions={promiseOptions}
          onChange={(value: any) => getState(value)}
        />
        {!stateValidate.success && (
          <div className={`${styles.errorMsg} text-right`}>Please select your state!</div>
        )}
      </div>
    </div>
  );
};
