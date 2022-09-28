import React, { useEffect, useState } from 'react';

// third party components
import { ICity } from 'country-state-city/dist/lib/interface';
import AsyncSelect from 'react-select/async';

// styles
import styles from './Select.module.scss';

interface SuburbJSON {
  value: string;
  label: string;
}

interface SuburbValidateJSON {
  success: boolean;
}

interface SelectSuburbProps {
  list: ICity[];
  label: string;
  suburb: SuburbJSON;
  suburbValidate: SuburbValidateJSON;
  getSuburb: (value: any) => void;
  size?: string;
}

export const SelectSuburb: React.FC<SelectSuburbProps> = (props) => {
  const { list, label, suburb, suburbValidate, getSuburb, size = '' } = props;

  interface SuburbListArray {
    value: string;
    label: string;
  }

  const [suburbList, setSuburbList] = useState<SuburbListArray[]>([]);

  useEffect(() => {
    const array: any = [];
    list.map((item) => {
      const object = { value: '', label: '' };
      object.value = item.name !== undefined ? item.name : '';
      object.label = item.name !== undefined ? item.name : '';
      array.push(object);
      return array;
    });
    setSuburbList(array);
  }, [list]);

  const customStyles = {
    option: (provided: any, suburb: any) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      background: suburb.isSelected ? '#0ACE5F' : '#ffffff',
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
      border: suburbValidate.success ? '1px solid #8692a6' : '1px solid #db5c6c',
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

  const filterSuburbs = (inputValue: string) => {
    return suburbList.filter((i) => i.label.toLowerCase().includes(inputValue.toLowerCase()));
  };

  const promiseOptions = (inputValue: string) =>
    new Promise<SuburbListArray[]>((resolve) => {
      setTimeout(() => {
        resolve(filterSuburbs(inputValue));
      }, 10);
    });

  return (
    <div className={size !== '' ? styles.smallFormControl : styles.formControl}>
      <label
        htmlFor='Mobile Number*'
        className={`${size !== '' ? styles.smallFormLabel : styles.formLabel} ${
          !suburbValidate.success ? 'font-red-color' : 'font-grey-color'
        } font-primary-medium`}
      >
        {label}
      </label>
      <div
        className={`${styles.iconInput} ${
          size === 'h54' ? styles.h54 : size === 'h40' ? styles.h40 : ''
        }`}
      >
        <AsyncSelect
          styles={customStyles}
          placeholder='Select your suburb'
          components={{
            IndicatorSeparator: () => null,
          }}
          cacheOptions
          value={suburb}
          defaultOptions={suburbList}
          loadOptions={promiseOptions}
          onChange={(value: any) => getSuburb(value)}
        />
        {!suburbValidate.success && (
          <div className={`${styles.errorMsg} text-right`}>Please select your suburb!</div>
        )}
      </div>
    </div>
  );
};
