import React from 'react';

// images and icons
import IconElmHands from '../../assets/icons/Icon_Elm_Hands.svg';

// styles
import styles from './index.module.scss';

interface CardPatientHistoryProps {
  title: string;
  detail: string;
  dateInfo: string;
}

export const CardPatientHistory = (props: CardPatientHistoryProps) => {
  const { title, detail, dateInfo } = props;
  return (
    <div className={styles.container}>
      <div className='w-[30px] h-[30px]'>
        <img src={IconElmHands} alt='hands' />
      </div>
      <div className='flex flex-1 justify-between items-center'>
        <div className='block'>
          <div className='font-primary-bold font-dark-green-color text-xs '>{title}</div>
          <div className='font-primary-regular font-grey-color text-xs mt-2'>{detail}</div>
        </div>
        <div className='font-primary-regular font-grey-color text-xs '>{dateInfo}</div>
      </div>
    </div>
  );
};
