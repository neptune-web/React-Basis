import React from 'react';

// storybook components
import { OutlineButton } from '../../Button/OutlineButton';
import { OutlineRedButton } from '../../Button/OutlineRedButton';
import { Button } from '../../Button';

// styles
import styles from './index.module.scss';

interface ModalDisclaimer01Props {
  open: boolean;
  onOkClick?: () => void;
  onCancelClick?: () => void;
}

export const ModalDisclaimer01: React.FC<ModalDisclaimer01Props> = (props) => {
  const { open, onOkClick = () => {}, onCancelClick = () => {} } = props;

  return (
    <>
      {open ? (
        <>
          <div className={styles.container}>
            <div className={styles.modal}>
              <div className='w-full flex flex-wrap justify-center text-center'>
                <div className='w-full font-secondary-bold font-dark-green-color text-[32px]'>
                  Disclaimer
                </div>
                <div className='w-full font-primary-regular font-grey-color text-lg mt-5'>
                  Please read the complete disclaimer in order to proceed.
                </div>
              </div>
              <div className='w-full flex flex-wrap justify-center text-center'>
                <div className='w-full font-primary-regular text-[16px]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus scelerisque
                  elementum donec at dignissim.
                </div>
              </div>
              <div className='w-full flex flex-wrap justify-center text-center'>
                <div className='w-full font-primary-regular text-lg'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus scelerisque
                  elementum donec at dignissim.
                </div>
              </div>
              <div className='w-full grid grid-cols-2 gap-x-[112px] gap-y-3'>
                <div className='col-span-2 lg:col-span-1'>
                  <Button
                    title='Yes, Continue To Loan Generation'
                    fullWidth
                    onClick={() => onOkClick()}
                  />
                </div>
                <div className='col-span-2 lg:col-span-1'>
                  <OutlineRedButton
                    title='No, I Do Not Have The Final Amount'
                    fullWidth
                    onClick={() => onCancelClick()}
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
