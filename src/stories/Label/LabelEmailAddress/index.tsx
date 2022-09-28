import React from 'react';

// images and icons
import IconEmail from '../../assets/icons/Icon_Email.svg';

// styles
import styles from './index.module.scss';

interface LableEmailAddressProps {
  emailAddress: string;
}

export const LabelEmailAddress = (props: LableEmailAddressProps) => {
  const { emailAddress } = props;
  return (
    <div className={styles.container}>
      <div className='w-[15px] h-3'>
        <img src={IconEmail} alt='hands' />
      </div>
      <div className='flex flex-1 justify-between items-start'>
        <div className='block'>
          <div className='font-primary-regular font-black-color text-sm '>{emailAddress}</div>
        </div>
      </div>
    </div>
  );
};
