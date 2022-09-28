import React from 'react';

// images and icons
import BackgroundImage from '../../assets/images/background.svg';
import CheckboxGreenIcon from '../../assets/icons/Icon_Checkbox_Green.svg';

// styles
import styles from './index.module.scss';

interface JSONObject {
  id: number;
  cardName: string;
  cardNumber: string;
  userName: string;
  backgroundColor: string;
  type: string;
  checked: boolean;
}

interface CardBankProps {
  data: JSONObject;
  onClick: (id: number) => void;
}

export const CardBank: React.FC<CardBankProps> = (props) => {
  const { data, onClick } = props;

  return (
    <div
      role='button'
      tabIndex={0}
      className={styles.container}
      style={{ backgroundColor: data.backgroundColor }}
      onClick={() => onClick(data.id)}
      onKeyDown={() => onClick(data.id)}
    >
      <div className={styles.imageArea}>
        <img src={BackgroundImage} alt='' />
      </div>
      <div className='flex justify-end font-primary-medium font-white-color text-xs'>
        {data.cardName}
      </div>
      <div className='flex justify-end font-primary-medium font-white-color text-xs'>
        {data.cardNumber}
      </div>
      <div className='mt-[22px] font-primary-semibold font-white-color text-xs'>
        {data.userName}
      </div>
      <div className='font-primary-medium font-white-color text-xs'>{data.type}</div>
      {data.checked && (
        <div className={styles.checked}>
          <img src={CheckboxGreenIcon} alt='' />
        </div>
      )}
    </div>
  );
};
