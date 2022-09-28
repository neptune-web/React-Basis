import React from 'react';

// images and icons
import IconElmHands from '../../assets/icons/Icon_Elm_Hands.svg';

// styles
import styles from './index.module.scss';

interface CardPatientNotificationProps {
  title: string;
  detail: string;
  dateInfo: string;
}

export const CardPatientNotification = (props: CardPatientNotificationProps) => {
  const { title, detail, dateInfo } = props;
  return (
    <div className={styles.container}>
      <div className='w-10 h-10'>
        <img src={IconElmHands} alt='hands' />
      </div>
      <div className='flex flex-1 justify-between items-start mt-2'>
        <div className='block'>
          <div className='font-primary-bold font-dark-green-color text-base '>{title}</div>
          <div className='font-primary-regular font-grey-color text-sm mt-[10px]'>{detail}</div>
        </div>
        <div className='font-primary-regular font-grey-color text-xs'>{dateInfo}</div>
      </div>
    </div>
  );
};
