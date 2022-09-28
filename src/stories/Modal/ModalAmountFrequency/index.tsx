import React from 'react';

// storybook components
import { CardCreditLimit } from '../../Card/CardCreditLimit';
import { OutlineButton } from '../../Button/OutlineButton';

// images and icons
import EmojiSlightlySmilingFace from '../../assets/images/Emoji_Slightly_Smiling_Face.png';

// styles
import styles from './index.module.scss';

interface ModalAmountFrequencyProps {
  open: boolean;
  onClick: () => void;
  viewport: string;
}

export const ModalAmountFrequency: React.FC<ModalAmountFrequencyProps> = (props) => {
  const { open, onClick, viewport } = props;

  return (
    <>
      {open ? (
        <>
          <div className={styles.container}>
            <div className={styles.modal}>
              <div className={styles.greenBar} />
              <div className={styles.content}>
                {/* <div className='mt-10 w-full flex flex-wrap justify-center'> */}
                <div className='w-full flex justify-center mt-10'>
                  <img
                    src={EmojiSlightlySmilingFace}
                    width={viewport === 'mobile' ? 57 : 90}
                    height={viewport === 'mobile' ? 57 : 90}
                    alt=''
                  />
                </div>
                <div className='w-full flex flex-wrap justify-center items-center'>
                  <div className='w-full font-secondary-bold font-primary-blue-color text-[22px] lg:text-[32px] text-center pt-4'>
                    Congratulations!
                  </div>
                  <div className='w-full font-primary-regular font-black-color text-xs lg:text-lg text-center mt-[13px] pt-2'>
                    The provider has been notified and we’re waiting on provider to accept the
                    request. They have the option to cancel only till that is pending.
                  </div>
                </div>
                {/* </div> */}
                <div className='w-full flex justify-center py-10'>
                  <div className={styles.greenArea}>
                    <div className='font-primary-light font-black-color text-xs lg:text-md'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames nulla
                      pellentesque lectus pulvinar massa sed. Sem leo faucibus facilisi lorem erat
                      elementum.
                      <br />
                      <br />
                      Vulputate lacus sed eu facilisi. Rhoncus suspendisse volutpat consequat
                      magnis. Vel tempor in sed ut dolor ullamcorper interdum.
                      <br />
                      <br />
                      Eget habitasse tincidunt sit nulla duis. Leo mattis id pellentesque id eget.
                      <br />
                      <br />
                      Urna, non, massa accumsan viverra quis sit porttitor pharetra.
                    </div>
                  </div>
                </div>
                <div className='w-full font-primary-regular font-black-color text-xs lg:text-lg text-center mb-10'>
                  To cancel payment reach out to your provider. This window will close in 2 minutes.
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
