import React from 'react';

// storybook components
import { OutlineButton } from '../../Button/OutlineButton';

// styles
import styles from './index.module.scss';

interface RepaymentDetailCardProps {
  frequency: string;
  method: string;
  date: string;
  deduction: number;
  account: string;
  onClick?: () => void;
}

export const RepaymentDetailCard = (props: RepaymentDetailCardProps) => {
  const { frequency, method, date, deduction, account, onClick = () => {} } = props;
  return (
    <div className={styles.container}>
      <div className='w-full font-primary-medium text-sm'>Repayment Details</div>
      <div className='w-full flex justify-start items-center mt-[30px]'>
        <div className='w-[140px] font-primary-regular font-grey-color text-xs'>
          Repayment Frequency
        </div>
        <div className='flex-1 font-primary-regular text-xs'>{frequency}</div>
      </div>
      <div className='w-full flex justify-start items-center mt-[32px]'>
        <div className='w-[140px] font-primary-regular font-grey-color text-xs'>
          Repayment Method
        </div>
        <div className='flex-1 font-primary-regular text-xs'>{method}</div>
      </div>
      <div className='w-full flex justify-start items-center mt-[32px]'>
        <div className='w-[140px] font-primary-regular font-grey-color text-xs'>Repayment Date</div>
        <div className='flex-1 font-primary-regular text-xs'>{date}</div>
      </div>
      <div className='w-full flex justify-start items-center mt-[32px]'>
        <div className='w-[140px] font-primary-regular font-grey-color text-xs'>
          Number of Dedcutions
        </div>
        <div className='flex-1 font-primary-regular text-xs'>{deduction}</div>
      </div>
      <div className='w-full flex justify-start items-center mt-[32px]'>
        <div className='w-[140px] font-primary-regular font-grey-color text-xs'>
          Repayment Account
        </div>
        <div className='flex-1 font-primary-regular text-xs'>{account}</div>
      </div>
      <div className='w-full flex justify-center items-center mt-[36px]'>
        <div className='w-[268px]'>
          <OutlineButton title='Change Repayment Method' fullWidth onClick={() => onClick()} />
        </div>
      </div>
    </div>
  );
};
