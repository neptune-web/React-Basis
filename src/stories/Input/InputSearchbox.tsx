import React, { useState } from 'react';

// images and icons
import SearchGrayIcon from '../assets/icons/Icon_Search_Gray.svg';

// styles
import styles from './InputSearchbox.module.scss';

interface InputSearchboxProps {
  placeholder: string;
  getValue: (value: string) => void;
  value: string;
}

export const InputSearchbox: React.FC<InputSearchboxProps> = (props) => {
  const { placeholder, getValue, value } = props;

  return (
    <div className={styles.inputArea}>
      <img src={SearchGrayIcon} alt='search' className={styles.formIcon} />
      <input
        type='text'
        className={`${styles.formInput} font-primary-medium`}
        placeholder={placeholder}
        value={value}
        onChange={(event: any) => getValue(event.target.value)}
        autoComplete='off'
      />
    </div>
  );
};
