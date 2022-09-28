import React, { useState } from 'react';

// third party components
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// images and icons
import CalendarGreyIcon from '../assets/icons/Icon_Calendar_Grey.svg';

// styles
import styles from './Input.module.scss';

interface InputCalendarProps {
  date: Date;
  dateValidate: boolean;
  selectDate: (date: Date) => void;
  height?: string;
}

export const InputCalendar = (props: InputCalendarProps) => {
  const { date, dateValidate, selectDate, height = '' } = props;

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
  const [visibleCalendar, setVisibleCalendar] = useState(false);
  const changeDate = (value: any) => {
    setVisibleCalendar(false);
    selectDate(value);
  };

  return (
    <div className={styles.formControl}>
      <div
        className={styles.iconInput}
        onClick={() => setVisibleCalendar(true)}
        aria-hidden='true'
        style={{ height }}
      >
        {visibleCalendar && (
          <div className={styles.calendarArea}>
            <Calendar onChange={(value: any) => changeDate(value)} value={new Date(date)} />
          </div>
        )}

        <input
          type='text'
          className={`${styles.commonInput} font-primary-medium`}
          value={`${new Date(date).getDate()} ${monthNames[new Date(date).getMonth()]}, ${new Date(
            date
          ).getFullYear()}`}
          onChange={() => {}}
          autoComplete='off'
          style={{ height }}
        />
        <img src={CalendarGreyIcon} alt='' className={styles.formIcon} />
      </div>
      {!dateValidate && <span className={`${styles.errorMsg} text-right`}>Invalid Date</span>}
    </div>
  );
};
