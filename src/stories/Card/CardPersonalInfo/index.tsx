import React from 'react';

// string constants
import { StringConstatnts } from '../../../utils/stringConstants';

// styles
import styles from './index.module.scss';

interface CardPersonalInfoProps {
  providerName: string;
  location: string;
  phoneNumber: string;
  role: string;
  admin: string;
  description: string;
  backgroundColor: string;
  color: string;
}

export const CardPersonalInfo: React.FC<CardPersonalInfoProps> = (props) => {
  const { providerName, location, phoneNumber, role, admin, description, backgroundColor, color } =
    props;

  return (
    <div className={styles.container} style={{ backgroundColor }}>
      <div className='font-primary-semibold text-sm' style={{ color }}>
        {StringConstatnts.PROVIDER_NAME}
      </div>
      <div className='font-primary-regular font-black-color text-sm mt-2'>{providerName}</div>
      <div className='font-primary-semibold text-sm mt-7' style={{ color }}>
        {StringConstatnts.LOCATION}
      </div>
      <div className='font-primary-regular font-black-color text-sm mt-2'>{location}</div>
      <div className='font-primary-semibold text-sm mt-7' style={{ color }}>
        {StringConstatnts.PHONE_NUMBER}
      </div>
      <div className='font-primary-regular font-black-color text-xs mt-1'>
        (This is the phone number provided to patints tocontact your location)
      </div>
      <div className='font-primary-regular font-black-color text-sm mt-3'>{phoneNumber}</div>
      <div className='font-primary-semibold text-sm mt-7' style={{ color }}>
        {StringConstatnts.YOUR_ROLE}
      </div>
      <div className='font-primary-regular font-black-color text-sm mt-2'>{role}</div>
      <div className='font-primary-semibold text-sm mt-7' style={{ color }}>
        {StringConstatnts.ACCOUNT_ADMIN}
      </div>
      <div className='font-primary-regular font-black-color text-sm mt-2'>{admin}</div>
      <div className='font-primary-regular font-black-color text-sm mt-7'>{description}</div>
    </div>
  );
};
