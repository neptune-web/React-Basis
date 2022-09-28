import React from 'react';

// storybook components
import { Button } from '../../Button';

// images and icons
import EmojiSlightlySmilingFace from '../../assets/images/Emoji_Slightly_Smiling_Face.png';

// styles
import styles from './index.module.scss';

interface ModalLoanGeneration03Props {
  open: boolean;
  onClickDecline: () => void;
  onClickError: () => void;
  onClickApprove: () => void;
}

export const ModalLoanGeneration03: React.FC<ModalLoanGeneration03Props> = (props) => {
  const { open, onClickDecline, onClickError, onClickApprove } = props;

  return (
    <>
      {open ? (
        <>
          <div className={styles.container}>
            <div className={styles.modal}>
              <div className={styles.greenBar} />
              <div className={styles.content}>
                <div className='mt-10'>
                  <img src={EmojiSlightlySmilingFace} width={90} height={90} alt='' />
                </div>
                <div className='font-secondary-bold font-primary-blue-color text-[32px]'>
                  Please wait!
                </div>
                <div className='font-primary-regular font-black-color text-sm'>
                  We are generating your credit limit
                </div>
                <div className={styles.progressBar} />
                <div className='w-full flex flex-wrap justify-between gap-5 md:gap-20 mb-10'>
                  <Button title='Decline' onClick={() => onClickDecline()} />
                  <Button title='Error' onClick={() => onClickError()} />
                  <Button title='Approve' onClick={() => onClickApprove()} />
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
