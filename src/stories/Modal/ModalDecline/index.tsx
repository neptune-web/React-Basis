import React from 'react';

// storybook components
import { OutlineButton } from '../../Button/OutlineButton';
import { OutlineRedButton } from '../../Button/OutlineRedButton';
import { Button } from '../../Button';

// styles
import styles from './index.module.scss';

interface ModalDeclineProps {
  open: boolean;
  onOkClick?: () => void;
  onCancelClick?: () => void;
}

export const ModalDecline: React.FC<ModalDeclineProps> = (props) => {
  const { open, onOkClick = () => {}, onCancelClick = () => {} } = props;

  return (
    <>
      {open ? (
        <>
          <div className={styles.container}>
            <div className={styles.modal}>
              <div className='w-full flex flex-wrap justify-center text-center'>
                <div className='w-full font-primary-regular font-red-color text-[18px]'>
                  Are you sure you want to <strong>Cancel</strong>
                </div>
              </div>
              <div className='w-full flex flex-wrap justify-center text-center mt-[35px]'>
                <div className='w-full font-primary-regular text-[18px]'>
                  If you cancel, you will need a new invitation from provider to generate a loan.
                </div>
              </div>
              <div className='w-full flex justify-center gap-[23px] mt-[35px]'>
                <div className='w-[120px]'>
                  <OutlineButton
                    title='Yes'
                    fullWidth
                    onClick={() => onOkClick()}
                    height='43px'
                    borderRadius='21px'
                  />
                </div>
                <div className='w-[120px]'>
                  <OutlineRedButton
                    title='No'
                    fullWidth
                    onClick={() => onCancelClick()}
                    height='43px'
                    borderRadius='21px'
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
