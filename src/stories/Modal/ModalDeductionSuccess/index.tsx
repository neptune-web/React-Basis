import React, { useEffect, useRef } from 'react';

// storybook components
import { Button } from '../../Button';

// images and icons
import EmojiCreditLimitSuccess from '../../assets/images/Emoji_Credit_Limit_Success.png';

// styles
import styles from './index.module.scss';

interface ModalDeductionSuccessProps {
  open: boolean;
  close: (bool: boolean) => void;
  onClick: () => void;
  viewport: string;
}

export const ModalDeductionSuccess: React.FC<ModalDeductionSuccessProps> = (props) => {
  const { open, close, onClick, viewport } = props;
  const closeRef = useRef<HTMLHeadingElement>(null);

  const useOnClickOutside = (ref: any, handler: any) => {
    useEffect(() => {
      const listener = (event: any) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);
      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    }, [ref, handler]);
  };

  useOnClickOutside(closeRef, () => close(false));

  return (
    <>
      {open ? (
        <>
          <div className={styles.container}>
            <div className={styles.modal} ref={closeRef}>
              <button type='button' className={styles.closeButton} onClick={() => close(false)}>
                <div className='-mt-[5px]'>×</div>
              </button>
              <div className={styles.greenBar} />
              <div className={styles.content}>
                <div className='w-full flex flex-wrap justify-center gap-[22px]'>
                  <div className='w-[74px] md:w-[90px] h-[74px] md:h-[90px]'>
                    <img
                      src={EmojiCreditLimitSuccess}
                      width={viewport === 'mobile' ? 74 : 90}
                      height={viewport === 'mobile' ? 74 : 90}
                      alt=''
                    />
                  </div>

                  <div className='w-full font-primary-regular text-lg text-center'>
                    This deduction was repaid successfully!
                  </div>
                </div>

                <div className='w-full flex flex-wrap gap-[22px]'>
                  <div className='w-full flex justify-start lg:justify-center gap-[18px]'>
                    <div className='font-primary-regular text-sm text-center whitespace-nowrap'>
                      Payment Amount:
                    </div>
                    <div className='font-secondary-bold font-primary-blue-color text-sm text-center'>
                      $1,000.00
                    </div>
                  </div>
                  <div className='w-full flex justify-start lg:justify-center gap-[18px]'>
                    <div className='font-primary-regular text-sm text-center whitespace-nowrap'>
                      Payment Account:
                    </div>
                    <div className='font-secondary-bold font-primary-blue-color text-sm text-center'>
                      Bank of America Account Ending 4002
                    </div>
                  </div>
                </div>

                <div className='w-full flex flex-wrap gap-[22px]'>
                  <div className='w-full flex justify-start lg:justify-center gap-[18px]'>
                    <div className='font-primary-regular text-sm text-center whitespace-nowrap'>
                      Payment Initiated On:
                    </div>
                    <div className='font-secondary-bold font-primary-blue-color text-sm text-center'>
                      01 / 01 / 2022
                    </div>
                  </div>
                  <div className='w-full flex justify-start lg:justify-center gap-[18px]'>
                    <div className='font-primary-regular text-sm text-center whitespace-nowrap'>
                      Payment Completed On:
                    </div>
                    <div className='font-secondary-bold font-primary-blue-color text-sm text-center'>
                      01 / 01 / 2022
                    </div>
                  </div>
                </div>

                <div className='max-w-[236px] w-full'>
                  <Button title='I Understand' fullWidth onClick={() => onClick()} height='52px' />
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
