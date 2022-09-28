import React from 'react';

// storybook components
import { OutlineButton } from '../../Button/OutlineButton';
import { OutlineRedButton } from '../../Button/OutlineRedButton';

// images and icons
import LogoHospitalIcon from '../../assets/icons/Icon_Logo_Hospital.svg';
import AddressGreyIcon from '../../assets/icons/Icon_Address_Grey.svg';
import CalendarGreyIcon from '../../assets/icons/Icon_Calendar_Grey.svg';

// styles
import styles from './index.module.scss';

interface JsonObject {
  id: number;
  title: string;
  address: string;
  created: string;
  description: string;
  status: number;
}

interface CardInvitationProps {
  data: JsonObject;
  onOkClick?: () => void;
  onCancelClick?: () => void;
}

export const CardInvitation: React.FC<CardInvitationProps> = (props) => {
  const { data, onOkClick = () => {}, onCancelClick = () => {} } = props;

  return (
    <div className={styles.container}>
      <div className='w-full flex flex-wrap'>
        <img src={LogoHospitalIcon} alt='' />
        <div className='flex-1 ml-3 flex flex-wrap'>
          <div className={`w-full font-primary-bold text-base ${styles.title}`}>{data.title}</div>
          <div className='w-full flex flex-wrap justify-start items-center mt-[5px]'>
            <div className='flex'>
              <img src={AddressGreyIcon} width={16} alt='' />
              <div className='font-primary-regular font-grey-color text-xs mr-3'>
                {data.address}
              </div>
            </div>
            <div className='flex'>
              <img src={CalendarGreyIcon} width={12} alt='' />
              <div className='font-primary-regular font-grey-color text-xs ml-1'>
                {data.created}
              </div>
            </div>
          </div>
        </div>
        <div className='w-full font-primary-regular font-grey-color text-xs mt-4'>
          {data.description}
        </div>
      </div>
      <div className='w-full flex justify-start gap-2 mt-7'>
        <div className=''>
          <OutlineButton
            title='Accept'
            onClick={() => onOkClick()}
            height='27px'
            fontSize='12px'
            borderRadius='15px'
          />
        </div>
        <div className=''>
          <OutlineRedButton
            title='Decline'
            onClick={() => onCancelClick()}
            height='27px'
            fontSize='12px'
            borderRadius='15px'
          />
        </div>
      </div>
    </div>
  );
};
