import React from 'react';

// storybook components
import { Button } from '../../Button';

// images and icons
import EmojiCreditLimitFailure from '../../assets/images/Emoji_Credit_Limit_Failure.png';

// styles
import styles from './index.module.scss';

interface ModalLoanGeneration05Props {
  open: boolean;
  onClick: () => void;
  viewport: string;
}

export const ModalLoanGeneration05: React.FC<ModalLoanGeneration05Props> = (props) => {
  const { open, onClick, viewport } = props;

  return (
    <>
      {open ? (
        <>
          <div className={styles.container}>
            <div className={styles.modal}>
              <div className={styles.greenBar} />
              <div className={styles.content}>
                <div className='mt-10'>
                  <div className='w-[74px] md:w-[90px] h-[74px] md:h-[90px]'>
                    <img
                      src={EmojiCreditLimitFailure}
                      width={viewport === 'mobile' ? 74 : 90}
                      height={viewport === 'mobile' ? 74 : 90}
                      alt=''
                    />
                  </div>
                </div>
                <div className='font-secondary-bold font-primary-blue-color text-[22px] lg:text-[32px]'>
                  Oh no!
                </div>
                <p className='font-primary-regular font-black-color text-sm mx-[16px] lg:mx-[150px] text-center'>
                  Your <span className='font-green-color'>ABC BANK</span> account ending in&nbsp;
                  <span className='font-green-color'>1001</span> is currently ineligible for basis
                  financing due to XYZ reason’ when generating financing limit.
                </p>
                <div className='mx-[68px] font-primary-regular font-black-color text-sm text-center'>
                  User can try again using another bank account.
                </div>
                <div className='mb-10 max-w-[334px] w-full'>
                  <Button
                    title='Check my Financing Limit'
                    fullWidth
                    hasArrow
                    onClick={() => onClick()}
                    height='54px'
                  />
                </div>
              </div>
              <div className={styles.greenBar} />
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
