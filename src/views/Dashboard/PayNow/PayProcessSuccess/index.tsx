import React from 'react';

// third party components
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// storybook components
import { Button } from 'stories/Button';

// images and icons
import EmojiSlightlySmilingFace from 'stories/assets/images/Emoji_Slightly_Smiling_Face.png';

// styles
import styles from './index.module.scss';

const PayProcessSuccess = () => {
  const viewport = useSelector((state: any) => state.device.viewport);
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.greenBar} />
        <div className={styles.content}>
          <div className='mt-10 w-full flex flex-wrap justify-center'>
            <div className='w-[74px] md:w-[90px] h-[74px] md:h-[90px]'>
              <img
                src={EmojiSlightlySmilingFace}
                width={viewport === 'mobile' ? 74 : 90}
                height={viewport === 'mobile' ? 74 : 90}
                alt=''
              />
            </div>
          </div>
          <div className='w-full flex flex-wrap justify-center items-center'>
            <div className='w-full font-secondary-bold font-primary-blue-color text-[22px] lg:text-[32px] text-center'>
              Congratulations!
            </div>
            <div className='w-full font-primary-regular font-black-color text-xs lg:text-lg text-center'>
              Your repayment has been successfully processed
            </div>
          </div>
          <div className='w-full flex justify-center items-center'>
            <div className={styles.tintGreenArea}>
              <div className='w-full font-primary-light text-md text-center'>
                Your Next Repayment Date is
              </div>
              <div className='w-full font-secondary-bold font-green-color text-lg text-center'>
                15 Mar, 2022
              </div>
            </div>
          </div>
          <div className='w-full flex justify-center'>
            <div className='max-w-[109px] w-full'>
              <Button
                title='Pay Now'
                fullWidth
                onClick={() => navigate('/dashboard/pay-now/success')}
                height='48px'
                borderRadius='14px'
              />
            </div>
          </div>
          <div className='w-full font-primary-regular font-black-color text-xs lg:text-lg text-center mb-10'>
            To cancel payment reach out to your provider. This window will close in 2 minutes.
          </div>
        </div>
        <div className={styles.greenBar} />
      </div>
    </div>
  );
};

export default PayProcessSuccess;
