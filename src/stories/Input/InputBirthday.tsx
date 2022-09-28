import React, { useState } from 'react';

// third party components
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// images and icons
import CalendarGreyIcon from '../assets/icons/Icon_Calendar_Grey.svg';
import CalendarGreenIcon from '../assets/icons/Icon_Calendar_Green.svg';
import CalendarRedIcon from '../assets/icons/Icon_Calendar_Red.svg';

// styles
import styles from './Input.module.scss';

interface InputBirthdayProps {
  label: string;
  birthday?: Date;
  birthdayValidate: boolean;
  selectBirthday: (date: Date) => void;
  size?: string;
}

export const InputBirthday = (props: InputBirthdayProps) => {
  const { label, birthday, birthdayValidate, selectBirthday, size = '' } = props;

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const [isFocusCalendar, setIsFocusCalendar] = useState(false);
  const [visibleCalendar, setVisibleCalendar] = useState(false);
  const changeDate = (value: any) => {
    setVisibleCalendar(false);
    selectBirthday(value);
  };

  return (
    <div className={size !== '' ? styles.smallFormControl : styles.formControl}>
      <label
        htmlFor='Date of Birth*'
        className={`${size !== '' ? styles.smallFormLabel : styles.formLabel} ${
          !birthdayValidate ? 'font-red-color' : 'font-grey-color'
        } font-primary-medium`}
      >
        {label}
      </label>
      <div
        className={`${styles.iconInput} ${
          size === 'h54' ? styles.h54 : size === 'h40' ? styles.h40 : ''
        }`}
        onClick={() => setVisibleCalendar(true)}
        aria-hidden='true'
      >
        {visibleCalendar && (
          <div className={styles.calendarArea}>
            <Calendar
              onChange={(value: any) => changeDate(value)}
              value={birthday ? new Date(birthday) : undefined}
            />
          </div>
        )}

        <input
          type='text'
          className={`${!birthdayValidate ? styles.formInputError : styles.formInput} ${
            size === 'h54' ? styles.h54 : size === 'h40' ? styles.h40 : ''
          } font-primary-medium`}
          onFocus={() => setIsFocusCalendar(true)}
          onBlur={() => setIsFocusCalendar(false)}
          value={
            birthday
              ? `${new Date(birthday).getDate()} ${
                  monthNames[new Date(birthday).getMonth()]
                }, ${new Date(birthday).getFullYear()}`
              : ''
          }
          onChange={() => {}}
          autoComplete='off'
        />
        <img
          src={
            !birthdayValidate
              ? CalendarRedIcon
              : isFocusCalendar
              ? CalendarGreenIcon
              : CalendarGreyIcon
          }
          alt='name'
          className={styles.formIcon}
        />
      </div>
      {!birthdayValidate && (
        <span className={`${styles.errorMsg} text-right`}>Invalid DOB. Must be older than 18</span>
      )}
    </div>
  );
};
