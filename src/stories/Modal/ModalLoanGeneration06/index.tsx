import React from 'react';

// images and icons
import EmojiCreditLimitFailure from '../../assets/images/Emoji_Credit_Limit_Failure.png';

// styles
import styles from './index.module.scss';

interface ModalLoanGeneration06Props {
  open: boolean;
  viewport: string;
}

export const ModalLoanGeneration06: React.FC<ModalLoanGeneration06Props> = (props) => {
  const { open, viewport } = props;

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
                <div>
                  <div className='font-secondary-bold font-primary-blue-color text-[22px] lg:text-[32px] text-center'>
                    Something Went Wrong!
                  </div>
                  <div className='flex md:hidden font-primary-regular font-black-color text-sm mx-[8px] lg:mx-[150px] text-center mt-2'>
                    Payment initiated to provider on your behalf
                  </div>
                </div>
                <div className='font-primary-regular font-black-color text-sm mx-[16px] lg:mx-[150px] text-center'>
                  While generating the financing limit. We are looking into it, please be patient.
                </div>
                <div className='mb-10 font-primary-regular font-black-color text-sm text-center'>
                  Have questions? Contact us at support@hellobasis.com or use the widget in your
                  dashboard.
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
