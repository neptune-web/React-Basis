import React from 'react';

// storybook components
import { Button } from '../../Button';

// styles
import styles from './index.module.scss';

interface CardTotalRepaymentProps {
  loanRepaymentAmount: number;
  selectedPaymentMethodID: number;
  viewport: string;
}

export const CardTotalRepayment: React.FC<CardTotalRepaymentProps> = (props) => {
  const { loanRepaymentAmount, selectedPaymentMethodID, viewport } = props;

  return selectedPaymentMethodID === 0 ? (
    <div className={styles.container}>
      <div className='w-full font-primary-semibold text-md'>Total Repayment</div>
      <div className='w-full font-primary-bold font-green-color text-md mt-[25px]'>
        ${(loanRepaymentAmount + loanRepaymentAmount * 0.03).toFixed(2)}
      </div>
      <div className='divider mt-7' />
      <div className='w-full flex flex-wrap justify-between'>
        <div className='lg:w-full'>
          <div className='w-full font-primary-regular font-primary-blue-color text-md mt-7'>
            <i>Loan Payment</i>
          </div>
          <div className='w-full font-primary-bold font-green-color text-md mt-[17px]'>
            ${loanRepaymentAmount.toFixed(2)}
          </div>
        </div>
        <div className='lg:w-full'>
          <div className='w-full font-primary-regular font-primary-blue-color text-md mt-7'>
            <i>Processing Fees</i>
          </div>
          <div className='w-full font-primary-bold font-green-color text-md mt-[17px]'>
            ${(loanRepaymentAmount * 0.03).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className={styles.container}>
      <div className='w-full font-primary-semibold text-md'>Total Repayment</div>
      <div className='w-full font-primary-bold font-green-color text-md mt-[25px]'>
        ${loanRepaymentAmount.toFixed(2)}
      </div>
    </div>
  );
};
