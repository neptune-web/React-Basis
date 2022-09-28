import React, { useState } from 'react';

// storybook components
import { OutlineButton } from '../../Button/OutlineButton';
import { OutlineRedButton } from '../../Button/OutlineRedButton';

// styles
import styles from './index.module.scss';

interface ModalInputTypeDeclineProps {
  open: boolean;
  onOkClick?: () => void;
  onCancelClick?: () => void;
}

export const ModalInputTypeDecline: React.FC<ModalInputTypeDeclineProps> = (props) => {
  const [value, setValue] = useState('');
  const { open, onOkClick = () => {}, onCancelClick = () => {} } = props;

  const handleInputChange = (e: any) => {
    setValue(e.target.value);
  };

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
                <div className='w-full font-primary-regular mt-[33px]'>
                  <textarea
                    className={styles.emailaddr}
                    value={value}
                    placeholder='Type Here...'
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
              </div>
              <div className='w-full flex justify-center gap-[23px] mt-[30px]'>
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
