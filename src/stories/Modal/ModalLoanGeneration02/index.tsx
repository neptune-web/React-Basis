import React, { useRef, useState } from 'react';

// storybook components
import { Button } from '../../Button';
import { ScrollContentArea } from '../../ScrollContentArea';

// styles
import styles from './index.module.scss';

interface ModalLoanGeneration02Props {
  open: boolean;
  onClick: () => void;
  title01: string;
  title02: string;
  description01: string;
  description02: string;
  content: any;
}

export const ModalLoanGeneration02: React.FC<ModalLoanGeneration02Props> = (props) => {
  const { open, onClick, title01, title02, description01, description02, content } = props;
  const listInnerRef = useRef<HTMLHeadingElement>(null);
  const [disabled, setDisabled] = useState(true);

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 16) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    }
  };

  return (
    <>
      {open ? (
        <>
          <div className={styles.container}>
            <div className={styles.modal}>
              <div className='w-full flex flex-wrap justify-center'>
                {/* header */}
                <div className='relative flex flex-wrap justify-start lg:justify-center w-full'>
                  <h3 className='text-[22px] lg:text-[32px] font-secondary'>{title01} &nbsp;</h3>
                  <h3 className='w-full lg:w-auto text-[22px] lg:text-[32px] font-secondary-bold font-green-color'>
                    {title02}
                  </h3>
                </div>
                <div className='w-full max-w-[543px] flex justify-center text-start lg:text-center font-grey-color mt-[10px]'>
                  {description01}
                </div>
                <div className='w-full max-w-[543px] flex justify-center text-center font-black-color mt-[47px]'>
                  {description02}
                </div>
                <div
                  className={`w-full mt-6 ${styles.scrollContentArea}`}
                  onScroll={onScroll}
                  ref={listInnerRef}
                >
                  <ScrollContentArea data={content} />
                </div>
                <div className='mt-7 lg:mt-12 max-w-[334px] w-full'>
                  <Button
                    title='Check my Financing Limit'
                    disabled={disabled}
                    fullWidth
                    hasArrow
                    onClick={() => onClick()}
                    height='54px'
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
