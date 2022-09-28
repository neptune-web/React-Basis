import React, { useEffect, useRef } from 'react';

// images and icons
import ExportIcon from '../../assets/icons/Icon_Expert_Black.svg';
import EmailIcon from '../../assets/icons/Icon_Email.svg';
import DownloadIcon from '../../assets/icons/Icon_Download_Black.svg';

// storybook components
import { IconButton } from '../../Button/IconButton';
import { ScrollContentArea } from '../../ScrollContentArea';
import { ButtonBack } from '../../Button/ButtonBack';

// styles
import styles from './index.module.scss';

interface ModalFooterProps {
  viewport: string;
  open: boolean;
  close: (bool: boolean) => void;
  title01: string;
  title02: string;
  description: string;
  content: any;
}

export const ModalFooter: React.FC<ModalFooterProps> = (props) => {
  const { viewport, open, close, title01, title02, description, content } = props;
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
              {/* close button */}
              {viewport === 'desktop' && (
                <button type='button' className={styles.closeButton} onClick={() => close(false)}>
                  <div className='-mt-[5px]'>×</div>
                </button>
              )}
              {/* content */}
              <div>
                {/* header */}
                <div className='relative flex flex-wrap justify-center w-full'>
                  <h3 className='text-[32px] font-secondary'>{title01} &nbsp;</h3>
                  <h3 className='text-[32px] font-secondary-bold font-green-color'>{title02}</h3>
                </div>
                <div className='w-full flex justify-center'>
                  <div className='max-w-[431px] text-center font-grey-color mt-[10px]'>
                    {description}
                  </div>
                </div>
                {/* button group area part */}
                <div className='w-full flex justify-between mt-[42px]'>
                  {viewport !== 'desktop' ? (
                    <div className='flex items-center'>
                      <ButtonBack onClick={() => close(false)} />
                    </div>
                  ) : (
                    <div />
                  )}
                  <div className='flex justify-end text-center font-grey-color'>
                    {/* <IconButton icon={ExportIcon} onClick={() => {}} /> */}
                    <IconButton icon={EmailIcon} onClick={() => {}} />
                    <IconButton icon={DownloadIcon} onClick={() => {}} />
                  </div>
                </div>
                <div className={`w-full mt-6 pr-[15px] ${styles.scrollContentArea}`}>
                  <div className={styles.scrollContentRealArea}>
                    <ScrollContentArea data={content} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
