import React from 'react';

// storybook component
import { ButtonBack } from '../../Button/ButtonBack';

// images and icons
import EmojiCreditLimitFailure from '../../assets/images/Emoji_Credit_Limit_Failure.png';

// styles
import styles from './index.module.scss';

interface CardIssueRefundFailProps {
  refundAmount: number;
  viewport: string;
  onClick?: () => void;
}

export const CardIssueRefundFail: React.FC<CardIssueRefundFailProps> = (props) => {
  const { refundAmount, viewport, onClick = () => {} } = props;

  return (
    <div className={styles.container}>
      <div className={styles.greenBar} />
      {viewport !== 'mobile' && (
        <div className='w-full ml-8 mt-[78px]'>
          <ButtonBack onClick={() => onClick()} viewport={viewport} />
        </div>
      )}
      <div className={styles.content}>
        <div className='w-full flex justify-center'>
          <div className='w-[74px] md:w-[90px] h-[74px] md:h-[90px] mt-[48px] lg:mt-1'>
            <img
              src={EmojiCreditLimitFailure}
              width={viewport === 'mobile' ? 74 : 90}
              height={viewport === 'mobile' ? 74 : 90}
              alt=''
            />
          </div>
        </div>
        <div className='w-full block text-center mt-[26px]'>
          <div className='font-secondary-bold font-primary-blue-color text-[22px] lg:text-[32px] text-center '>
            Oops!
          </div>
          <div className='font-primary-regular font-black-color text-sm lg:text-lg text-center mt-2 lg:mt-3'>
            The refund was unsuccessful
          </div>
        </div>
        <div className='w-full max-w-[471px] px-5 lg:px-40 py-11 lg:py-[29px] bg-[#DB5C6C]/[.15] rounded-[7px] mt-[58px] md:mt-[38px]'>
          <div className='font-primary-regular font-black-color text-base text-center'>
            Refund Failed
          </div>
          <div className='font-secondary-bold font-red-color text-base text-center mt-[18px]'>
            ${refundAmount.toFixed(2)}
          </div>
        </div>
        <div className='font-primary-regular font-black-color text-sm lg:text-lg text-center mt-[58px] md:mt-[85px] mb-[52px]'>
          Please reach out to your provider. This window will close in 2 minutes.
        </div>
      </div>
      <div className={styles.greenBar} />
    </div>
  );
};
