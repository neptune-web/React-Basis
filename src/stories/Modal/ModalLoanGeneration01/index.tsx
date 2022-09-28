import React from 'react';

// storybook components
import { Button } from '../../Button';
import { CardFinancingLimit } from '../../Card/CardFinancingLimit';

// styles
import styles from './index.module.scss';

interface ModalLoanGeneration01Props {
  open: boolean;
  onClick: () => void;
  title01: string;
  title02: string;
  description: string;
}

export const ModalLoanGeneration01: React.FC<ModalLoanGeneration01Props> = (props) => {
  const { open, onClick, title01, title02, description } = props;

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
                  {description}
                </div>
                <div className='w-full hidden lg:flex justify-start text-start mt-[43px]'>
                  Here are some tips on choosing the best bank account for Basis:
                </div>
                <div className='w-full grid grid-cols-12 gap-[17px] lg:gap-7 mt-[37px]'>
                  <div className='col-span-12 lg:col-span-6'>
                    <CardFinancingLimit
                      title='Paycheck Deposits'
                      description='We strongly recommend connecting the account into which you deposit paychecks. Accounts that have regular deposits are more likely to be approved for higher financing limits.'
                      color='#0ACE5F'
                      backgroundColor='#E1F8EC'
                    />
                  </div>
                  <div className='col-span-12 lg:col-span-6'>
                    <CardFinancingLimit
                      title='Old Account'
                      description='In order to qualify, the bank account must be over 90 days old.'
                      color='#FDBC64'
                      backgroundColor='#F6E5D6'
                    />
                  </div>
                  <div className='col-span-12 lg:col-span-6'>
                    <CardFinancingLimit
                      title='U.S. Based'
                      description='Only U.S. based bank accounts are eligible for financing with Basis.'
                      color='#0C1B80'
                      backgroundColor='#E5E7FE'
                    />
                  </div>
                  <div className='col-span-12 lg:col-span-6'>
                    <CardFinancingLimit
                      title='Higher Balances'
                      description='Choose an account where you have a high account balance, as this is likely to be eligible for larger financing limit.'
                      color='#F6B7CE'
                      backgroundColor='#fdf1f5'
                    />
                  </div>
                </div>
                <div className='mt-5 lg:mt-12 max-w-[334px] w-full'>
                  <Button
                    title='Check my Financing Limit'
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
