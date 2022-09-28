import React from 'react';

// storybook components
import { Button } from '../../Button';

// styles
import styles from './index.module.scss';

interface CardLoanSummaryProps {
  outstandingBalance: number;
  repaymentsRemaining: number;
  repaymentAmount: number;
  nextRepaymentDate: string;
  onClick: () => void;
}

export const CardLoanSummary: React.FC<CardLoanSummaryProps> = (props) => {
  const { outstandingBalance, repaymentsRemaining, repaymentAmount, nextRepaymentDate, onClick } =
    props;

  return (
    <div className={styles.container}>
      <div className='font-primary-regular text-md'>
        Once you pay this amount your loan summary will be:
      </div>
      <div className={styles.card}>
        <div className='w-full grid grid-cols-2 lg:grid-cols-5 divide-x'>
          <div className='w-full flex flex-wrap justify-center items-center text-center gap-[18px]'>
            <div className='w-full font-primary-regular font-grey-color text-sm'>
              Outstanding Balance
            </div>
            <div className='w-full font-primary-regular text-md'>
              ${outstandingBalance.toFixed(2)}
            </div>
          </div>
          <div className='w-full flex flex-wrap justify-center items-center text-center gap-[18px]'>
            <div className='w-full font-primary-regular font-grey-color text-sm'>
              Repayments Remaining
            </div>
            <div className='w-full font-primary-regular text-md'>{repaymentsRemaining}</div>
          </div>
          <div className='w-full flex flex-wrap justify-center items-center text-center gap-[18px]'>
            <div className='w-full font-primary-regular font-grey-color text-sm'>
              Repayment Amount
            </div>
            <div className='w-full font-primary-regular text-md'>${repaymentAmount.toFixed(2)}</div>
          </div>
          <div className='w-full flex flex-wrap justify-center items-center text-center gap-[18px]'>
            <div className='w-full font-primary-regular font-grey-color text-sm'>
              Next Repayment Date
            </div>
            <div className='w-full font-primary-regular text-md'>{nextRepaymentDate}</div>
          </div>
          <div className='w-full hidden lg:flex flex-wrap justify-center items-center text-center gap-[18px]'>
            <div className='max-w-[187px] w-full'>
              <Button
                title={`Pay $${repaymentAmount}`}
                fullWidth
                height='50px'
                onClick={() => onClick()}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex lg:hidden flex-wrap justify-center items-center text-center mt-[42px]'>
        <div className='max-w-[187px] w-full'>
          <Button
            title={`Pay $${repaymentAmount}`}
            fullWidth
            height='50px'
            onClick={() => onClick()}
          />
        </div>
      </div>
    </div>
  );
};
