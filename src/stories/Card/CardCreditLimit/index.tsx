import React from 'react';

// storybook components
import { OutlineButton } from '../../Button/OutlineButton';

// styles
import styles from './index.module.scss';

interface CardCreditLimitProps {
  onClick: () => void;
  viewport: string;
  type?: string;
}

export const CardCreditLimit: React.FC<CardCreditLimitProps> = (props) => {
  const { onClick, viewport, type = '' } = props;

  return viewport === 'mobile' && type === 'modalLoanGeneration' ? (
    <div className={styles.mobileContainer}>
      <div className='block justify-center py-5 px-[30px]'>
        <div className='flex justify-center font-secondary-bold font-white-color text-[44px]'>
          $850
        </div>
        <div className='flex justify-center font-primary-light font-white-color text-xs'>
          Credit Limit
        </div>
        <div className='flex justify-center font-primary-medium font-white-color text-xs mt-6'>
          22 June, 2022
        </div>
        <div className='flex justify-center font-primary-light font-white-color text-[10px] mt-2'>
          Valid till (7 days as of now)
        </div>
      </div>
      <div className={styles.bottomArea}>
        <div className='flex justify-center font-primary-bold font-white-color text-sm'>
          BANK OF CHICAGO
        </div>
        <div className='flex justify-center items-center font-primary-medium font-white-color text-xs mt-2'>
          &#8226;&#8226;&#8226;&#8226; &#8226;&#8226;&#8226;&#8226;
          &#8226;&#8226;&#8226;&#8226;&nbsp;6562
        </div>
        <div className='flex justify-center font-primary-light font-white-color text-xs mt-[30px]'>
          <OutlineButton
            title='Change Bank Account'
            onClick={() => onClick()}
            fullWidth
            color='#ffffff'
            borderColor='#ffffff'
            height='41px'
            fontSize='12px'
          />
        </div>
      </div>
    </div>
  ) : viewport !== 'mobile' && type === 'modalLoanGeneration' ? (
    <div className={styles.loanContainer}>
      <div className='w-full grid grid-cols-12 z-10'>
        <div className='col-span-6 flex flex-col justify-between'>
          <div>
            <div className='font-secondary-bold font-white-color text-[64px]'>$850</div>
          </div>
          <div>
            <div className='font-primary-regular font-white-color text-sm'>
              This limit is valid till
            </div>
            <div className='font-primary-bold font-white-color text-lg'>22 June, 2022</div>
          </div>
        </div>
        <div className='col-span-6 flex flex-col justify-between'>
          <div className='w-full grid justify-end'>
            <div className='flex justify-end font-primary-regular font-white-color text-[20px]'>
              For
            </div>
            <div className='flex justify-end font-primary-bold font-white-color text-[20px]'>
              <strong>BANK OF CHICAGO</strong>
            </div>
            <div className='flex justify-end items-center font-primary-medium font-white-color text-[18px]'>
              &#8226;&#8226;&#8226;&#8226; &#8226;&#8226;&#8226;&#8226;
              &#8226;&#8226;&#8226;&#8226;&nbsp;6562
            </div>
          </div>
          <div className='w-full grid justify-end'>
            <div className='flex justify-end font-primary-light font-white-color text-xs'>
              <OutlineButton
                title='Change Bank Account'
                onClick={() => onClick()}
                color='#ffffff'
                borderColor='#ffffff'
                height='36px'
                fontSize='12px'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className={styles.container}>
      <div className='w-full grid grid-cols-12 z-10'>
        <div className='col-span-6 flex flex-col justify-between'>
          <div>
            <div className='font-secondary-bold font-white-color text-[32px]'>$850</div>
            <div className='font-primary-light font-white-color text-sm'>Credit Limit</div>
          </div>
          <div>
            <div className='font-primary-medium font-white-color text-sm'>22 June, 2022</div>
            <div className='font-primary-light font-white-color text-xs'>
              Valid till (7 days as of now)
            </div>
          </div>
        </div>
        <div className='col-span-6 flex flex-col justify-between'>
          <div className='w-full grid justify-end'>
            <div className='flex justify-end font-primary-semibold font-white-color text-sm'>
              BANK OF CHICAGO
            </div>
            <div className='flex justify-end items-center font-primary-medium font-white-color text-sm'>
              &#8226;&#8226;&#8226;&#8226; &#8226;&#8226;&#8226;&#8226;
              &#8226;&#8226;&#8226;&#8226;&nbsp;6562
            </div>
          </div>
          <div className='w-full grid justify-end'>
            <div className='flex justify-end font-primary-light font-white-color text-xs'>
              <OutlineButton
                title='Change Bank Account'
                onClick={() => onClick()}
                color='#ffffff'
                borderColor='#ffffff'
                height='36px'
                fontSize='12px'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
