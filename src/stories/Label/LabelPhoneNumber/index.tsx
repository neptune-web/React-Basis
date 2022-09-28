import React from 'react';

// images and icons
import IconMobileBlack from '../../assets/icons/Icon_Mobile_Black.svg';

// styles
import styles from './index.module.scss';

interface LablePhoneNumberProps {
  phoneNumber: string;
}

export const LabelPhoneNumber = (props: LablePhoneNumberProps) => {
  const { phoneNumber } = props;
  return (
    <div className={styles.container}>
      <div className='w-[10px] h-[17px]'>
        <img src={IconMobileBlack} alt='hands' />
      </div>
      <div className='flex flex-1 justify-between items-start'>
        <div className='block'>
          <div className='font-primary-regular font-black-color text-sm '>{phoneNumber}</div>
        </div>
      </div>
    </div>
  );
};
