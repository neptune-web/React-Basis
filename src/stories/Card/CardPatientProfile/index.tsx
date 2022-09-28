import React from 'react';

// storybook components
import { LabelEmailAddress } from 'stories/Label/LabelEmailAddress';
import { LabelPhoneNumber } from 'stories/Label/LabelPhoneNumber';

// string constants
import { StringConstatnts } from '../../../utils/stringConstants';

// styles
import styles from './index.module.scss';

interface CardPatientProfileProps {
  name: string;
  birthday: string;
  address: string;
  phoneNumber: string;
  email: string;
  createdDate: string;
}

export const CardPatientProfile: React.FC<CardPatientProfileProps> = (props) => {
  const { name, birthday, address, phoneNumber, email, createdDate } = props;

  return (
    <div className={styles.card}>
      <div className={styles.division} />
      <div className={styles.container}>
        <div className='font-primary-regular text-xs font-grey-color'>{StringConstatnts.NAME}</div>
        <div className='font-primary-regular font-primary-color text-sm mt-4'>{name}</div>
        <div className='font-primary-regular text-xs font-grey-color mt-10'>
          {StringConstatnts.BIRTHDAY}
        </div>
        <div className='font-primary-regular font-black-color text-sm mt-4'>{birthday}</div>
        <div className='font-primary-regular text-xs font-grey-color mt-10'>
          {StringConstatnts.ADDRESS}
        </div>
        <div className='font-primary-regular font-black-color text-sm mt-4'>{address}</div>
        <div className='font-primary-regular text-xs font-grey-color mt-10'>
          {StringConstatnts.CONTACT_INFO}
        </div>
        <div className='font-primary-regular font-black-color text-sm mt-4'>
          <LabelPhoneNumber phoneNumber={phoneNumber} />
        </div>
        <div className='font-primary-regular font-black-color text-sm mt-5'>
          <LabelEmailAddress emailAddress={email} />
        </div>
        <div className='font-primary-regular text-xs font-grey-color mt-10'>
          {StringConstatnts.BASIS_MEMBER_SINCE}
        </div>
        <div className='font-primary-regular font-black-color text-sm mt-4'>{createdDate}</div>
      </div>
      <div className={styles.division} />
    </div>
  );
};
