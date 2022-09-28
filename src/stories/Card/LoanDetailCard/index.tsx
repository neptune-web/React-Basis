import React from 'react';

// storybook components
import { OutlineButton } from '../../Button/OutlineButton';

import DocumentIcon from '../../assets/icons/Icon_Document.svg';

// styles
import styles from './index.module.scss';

interface LoanDetailCardProps {
  loanID: string;
  loanIssueDate: string;
  loanedAmount: number;
  balance: number;
  onClickViewTila: () => void;
}

export const LoanDetailCard = (props: LoanDetailCardProps) => {
  const { loanID, loanIssueDate, loanedAmount = 0, balance = 0, onClickViewTila } = props;
  return (
    <div className={styles.container}>
      <div className='w-full font-primary-medium text-sm'>Loan Details</div>
      <div className='w-full flex justify-start items-center mt-[30px]'>
        <div className='w-[110px] font-primary-regular font-grey-color text-xs'>Loan ID</div>
        <div className='flex-1 font-primary-regular text-xs'>{loanID}</div>
      </div>
      <div className='w-full flex justify-start items-center mt-[32px]'>
        <div className='w-[110px] font-primary-regular font-grey-color text-xs'>
          Loan Issue Date
        </div>
        <div className='flex-1 font-primary-regular text-xs'>{loanIssueDate}</div>
      </div>
      <div className='w-full flex justify-start items-center mt-[32px]'>
        <div className='w-[110px] font-primary-regular font-grey-color text-xs'>Loaned Amount</div>
        <div className='flex-1 font-primary-regular text-xs'>{`$${(loanedAmount / 100).toFixed(
          2
        )}`}</div>
      </div>
      <div className='w-full flex justify-start items-center mt-[32px]'>
        <div className='w-[110px] font-primary-regular font-grey-color text-xs'>Balance</div>
        <div className='flex-1 font-primary-regular text-xs'>{`$${(balance / 100).toFixed(
          2
        )}`}</div>
      </div>
      <div className='w-full flex justify-center items-center mt-[32px]'>
        <span
          role='button'
          tabIndex={0}
          className='w-full flex justify-center'
          onClick={() => onClickViewTila()}
          onKeyDown={() => onClickViewTila()}
          // style={{ color }}
        >
          <img src={DocumentIcon} alt='' width={12} height={16} />
          <div
            className={`font-primary-regular cursor-pointer ml-[8px] ${styles.tilaAgreementText}`}
          >
            View TILA Agreement
          </div>
        </span>
      </div>
      <div className='w-full flex justify-center items-center mt-[32px]'>
        <div className='w-[268px]'>
          <OutlineButton title='Pay' fullWidth onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};
