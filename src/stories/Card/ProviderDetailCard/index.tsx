import React from 'react';

// styles
import styles from './index.module.scss';

interface ProviderDetailCardProps {
  name: string;
  address: string;
  contactInfo: any;
}

export const ProviderDetailCard = (props: ProviderDetailCardProps) => {
  const { name, address, contactInfo } = props;
  return (
    <div className={styles.container}>
      <div className='w-full font-primary-medium text-sm'>Provider Details</div>
      <div className='w-full flex justify-start items-center mt-[30px]'>
        <div className='w-[110px] font-primary-regular font-grey-color text-xs'>Provider Name</div>
        <div className='flex-1 font-primary-regular text-xs'>{name}</div>
      </div>
      <div className='w-full flex justify-start items-center mt-[64px]'>
        <div className='w-[110px] font-primary-regular font-grey-color text-xs'>
          Provider Address
        </div>
        <div className='flex-1 font-primary-regular text-xs'>{address}</div>
      </div>
      <div className='w-full flex justify-start items-center mt-[80px]'>
        <div className='w-[110px] font-primary-regular font-grey-color text-xs'>
          Provider Contact Info
        </div>
        <div className='flex-1 font-primary-regular text-xs'>
          {contactInfo.email} <br /> {contactInfo.phone}
        </div>
      </div>
    </div>
  );
};
