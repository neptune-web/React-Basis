import React from 'react';

// storybook components
import { OutlineButton } from '../../Button/OutlineButton';
import { OutlineRedButton } from '../../Button/OutlineRedButton';
import { Button } from '../../Button';

// styles
import styles from './index.module.scss';

interface ModalDisclaimer02Props {
  open: boolean;
  onOkClick?: () => void;
}

export const ModalDisclaimer02: React.FC<ModalDisclaimer02Props> = (props) => {
  const { open, onOkClick = () => {} } = props;

  return (
    <>
      {open ? (
        <>
          <div className={styles.container}>
            <div className={styles.modal}>
              <div className='w-full flex flex-wrap justify-center text-center'>
                <div className='font-secondary-bold font-dark-green-color text-[32px]'>
                  Why Can’t You&nbsp;
                </div>
                <div className='font-secondary-bold font-green-color text-[32px]'>Move Forward</div>
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
              <div className='w-full flex justify-center'>
                <div className='max-w-[346px] w-full'>
                  <Button
                    title='Go to Fin Calculator'
                    fullWidth
                    hasArrow
                    onClick={() => onOkClick()}
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
