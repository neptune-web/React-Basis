import React from 'react';

// storybook components
import { CardCreditLimit } from '../../Card/CardCreditLimit';
import { OutlineButton } from '../../Button/OutlineButton';

// images and icons
import EmojiCreditLimitSuccess from '../../assets/images/Emoji_Credit_Limit_Success.png';

// styles
import styles from './index.module.scss';

interface ModalLoanGeneration04Props {
  open: boolean;
  onClick: () => void;
  viewport: string;
}

export const ModalLoanGeneration04: React.FC<ModalLoanGeneration04Props> = (props) => {
  const { open, onClick, viewport } = props;

  return (
    <>
      {open ? (
        <>
          <div className={styles.container}>
            <div className={styles.modal}>
              <div className={styles.greenBar} />
              <div className={styles.content}>
                <div className='mt-10 w-full flex flex-wrap justify-center'>
                  <div className='w-[74px] md:w-[90px] h-[74px] md:h-[90px]'>
                    <img
                      src={EmojiCreditLimitSuccess}
                      width={viewport === 'mobile' ? 74 : 90}
                      height={viewport === 'mobile' ? 74 : 90}
                      alt=''
                    />
                  </div>
                  <div className='ml-7 grid justify-center items-center'>
                    <div className='font-secondary-bold font-primary-blue-color text-[22px] lg:text-[32px] text-center'>
                      Congratulations!
                    </div>
                    <div className='font-primary-regular font-black-color text-xs lg:text-lg text-center'>
                      You have received a credit limit
                    </div>
                  </div>
                </div>
                <div className='flex md:hidden divider mt-8 mb-9' />
                <div className='w-full'>
                  <CardCreditLimit
                    onClick={() => {}}
                    viewport={viewport}
                    type='modalLoanGeneration'
                  />
                </div>
                <div className='mt-[89px] md:mt-0 mb-10 w-full flex justify-center'>
                  <div className='max-w-[346px] w-full'>
                    <OutlineButton title='Continue' fullWidth hasArrow onClick={() => onClick()} />
                  </div>
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
