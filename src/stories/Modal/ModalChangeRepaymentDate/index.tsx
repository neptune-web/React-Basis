import React, { useEffect, useRef } from 'react';

// storybook components
import { Button } from '../../Button';

// styles
import styles from './index.module.scss';

interface ModalChangeRepaymentDateProps {
  open: boolean;
  close: (bool: boolean) => void;
  onClick: () => void;
}

export const ModalChangeRepaymentDate: React.FC<ModalChangeRepaymentDateProps> = (props) => {
  const { open, close, onClick } = props;

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
                <div className='w-full flex flex-wrap justify-between'>
                  <div className='block mb-10 lg:mb-0'>
                    <div className='font-primary-regular text-[16px] lg:text-[18px]'>
                      Your current repayment frequency is
                    </div>
                    <div className='font-secondary-bold font-primary-blue-color text-[18px] lg:text-[24px] mt-3'>
                      Semi - Monthly
                    </div>
                  </div>
                  <div className='block'>
                    <div className='font-primary-regular text-[16px] lg:text-[18px]'>
                      Your next repayment date is
                    </div>
                    <div className='font-secondary-bold font-primary-blue-color text-[18px] lg:text-[24px] mt-3'>
                      02 / 02 / 2022
                    </div>
                  </div>
                </div>
                {/* tint green card part */}
                <div className={styles.tintGreenPart}>
                  <div className='text-center text-left font-primary-light text-[16px] lg:text-[18px]'>
                    This deduction is scheduled for&nbsp;
                    <span className='font-secondary-bold font-green-color text-[18px]'>
                      10 / 10 / 2022
                    </span>
                    &nbsp;from Chase accounr 4002.
                  </div>
                </div>
                <div className='w-full'>
                  <div className='w-full flex justify-center font-primary-regular font-black-color text-md text-center mb-4'>
                    This date cannot be changed at this time.
                  </div>
                  <div className='w-full flex justify-center font-primary-regular font-black-color text-md text-center'>
                    <p>
                      You should be able to change this repayment after&nbsp;
                      <span className='font-secondary-bold font-primary-blue-color'>
                        01 / 01 / 2022
                      </span>
                    </p>
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
