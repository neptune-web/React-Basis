import React, { useEffect, useState } from 'react';

// storybook components
import { Ranger } from 'stories/Ranger';
import { RadioGroup } from 'stories/Radio/RadioGroup';
import { DarkGreenCard } from 'stories/Card/DarkGreenCard';
import { TintGreenCard } from 'stories/Card/TintGreenCard';
import { OutlineGreenCard } from 'stories/Card/OutlineGreenCard';
import { PrimaryBlueCard } from 'stories/Card/PrimaryBlueCard';

// styles
import { RepaymentCycle } from 'utils/commonEnums';
import _ from 'lodash';
import styles from './index.module.scss';

const LoanCalculator = require('@hellobasis/loanAmortization');

const { LoanAmortizationFactory } = LoanCalculator;

const loanAmortizationFactory = new LoanAmortizationFactory();

const RepaymentMethodList = [
  { id: 0, value: RepaymentCycle.SEMI_MONTHLY, label: 'Semi-Monthly (Twice a Month)' },
  { id: 1, value: RepaymentCycle.BI_WEEKLY, label: 'Bi-Weekly (Every Two Weeks)' },
  { id: 2, value: RepaymentCycle.MONTHLY, label: 'Monthly (Once a Month)' },
];

interface LoanAmortization {
  totalRepaymentAmount: number;
  amountPerDeduction: number;
  numberOfDeductions: number;
  repaymentTerm: string;
  repaymentTable: { id: number; label: string; value: string }[];
}

function dateDiffInMonths(date1: Date, date2: Date) {
  return date2.getMonth() - date1.getMonth() + 12 * (date2.getFullYear() - date1.getFullYear());
}

const Calculator = () => {
  const maxValue = 10000;
  const minValue = 100;

  // Stored in Dollars
  const [principalAmount, setPrincipalAmount] = useState(5600);

  const handleChangeRange = (value: number) => {
    setPrincipalAmount(value);
  };

  const [repaymentCycleId, setRepaymentCycleId] = useState(0);
  const [repaymentCycle, setRepaymentCycle] = useState(RepaymentCycle.SEMI_MONTHLY);

  const handleChangeValue = (item: any) => {
    setRepaymentCycleId(item.id);
    setRepaymentCycle(item.value);
  };

  const [loanAmortization, setLoanAmortization] = useState({} as LoanAmortization);

  useEffect(() => {
    const firstInstallmentDate = new Date();

    let secondInstallmentDate;

    if (repaymentCycle === RepaymentCycle.SEMI_MONTHLY) {
      if (firstInstallmentDate.getDate() > 15) {
        secondInstallmentDate = new Date(firstInstallmentDate).setDate(
          firstInstallmentDate.getDate() - 15
        );
        secondInstallmentDate = new Date(secondInstallmentDate).setMonth(
          new Date(secondInstallmentDate).getMonth() + 1
        );
      } else {
        secondInstallmentDate = new Date(firstInstallmentDate).setDate(
          firstInstallmentDate.getDate() + 15
        );
      }
    }

    const loanAmortizationValue = loanAmortizationFactory.generateAmortization({
      repaymentCycle,
      principal: principalAmount * 100,
      APR: 0,
      initialInstallmentDates: {
        firstInstallmentDate,
        secondInstallmentDate,
      },
    });

    const repaymentTable = [...(loanAmortizationValue.amortizationTable || [])].map(
      (item: any, index) => ({
        id: index,
        label: `EMI${item.installmentNumber + 1}`,
        value: new Date(item.installmentDate).toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        }),
        date: new Date(item.installmentDate),
      })
    );

    const repaymentTerm = `${
      loanAmortizationValue &&
      loanAmortizationValue.repaymentMonths &&
      !Number.isNaN(loanAmortizationValue.repaymentMonths)
        ? loanAmortizationValue.repaymentMonths
        : 0
    } Months`;

    setLoanAmortization({
      totalRepaymentAmount: loanAmortizationValue.totalPrincipal,
      amountPerDeduction: loanAmortizationValue.EMI,
      numberOfDeductions: loanAmortizationValue.totalInstallments,
      repaymentTable,
      repaymentTerm,
    });
  }, [principalAmount, repaymentCycle]);

  if (_.isEmpty(loanAmortization)) {
    return <div />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        {/* first green bar */}
        <div className={`hidden lg:flex ${styles.greenBar}`} />
        {/* content part */}
        <div className='block justify-center items-center font-secondary-bold font-primary-blue-color text-2xl text-center mt-[39px] lg:mt-[49px]'>
          Sample Repayment
        </div>
        <div className='w-full flex flex-wrap justify-between items-center mt-[85px] lg:mt-[42px] gap-y-[25px]'>
          <div className='w-full lg:w-auto text-center font-primary-regular font-primary-color text-base'>
            How much would you like to spend?
          </div>
          <div className='w-full lg:w-auto flex justify-end font-primary-bold font-green-color text-2xl'>
            ${principalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </div>
        </div>
        <div className='w-full mt-[22px] lg:mt-10'>
          <Ranger
            minValue={minValue}
            maxValue={maxValue}
            currentValue={principalAmount}
            onChange={(value: number) => handleChangeRange(value)}
          />
        </div>
        <div className='font-primary-regular font-primary-color text-base mt-[68px]'>
          How frequenctly would you like the deductions to take place?
        </div>
        <div className='w-full mt-9'>
          <RadioGroup
            data={RepaymentMethodList}
            checkedId={repaymentCycleId}
            onChange={(item: any) => handleChangeValue(item)}
          />
        </div>
        <div className='text-center lg:text-start font-primary-regular font-primary-color text-base mt-[68px]'>
          How much would you like to spend?
        </div>
        <div className='grid grid-cols-12 gap-x-4 gap-y-6 mt-[34px]'>
          <div className='col-span-6 md:col-span-4 xl:col-span-2'>
            <DarkGreenCard
              label01='Total Repayment Amount'
              label02={`$${(loanAmortization.totalRepaymentAmount / 100).toFixed(2)}`}
            />
          </div>
          <div className='col-span-6 md:col-span-4 xl:col-span-2'>
            <TintGreenCard
              label01='Amount'
              label02={`$${(loanAmortization.amountPerDeduction / 100).toFixed(2)}`}
              label03='Per Deduction'
            />
          </div>
          <div className='col-span-6 md:col-span-4 xl:col-span-2'>
            <TintGreenCard
              label01='Number of Deductions'
              label02={loanAmortization.numberOfDeductions.toString()}
            />
          </div>
          <div className='col-span-6 md:col-span-4 xl:col-span-2'>
            <TintGreenCard label01='Repayment Term' label02={loanAmortization.repaymentTerm} />
          </div>
          <div className='col-span-12 md:col-span-8 xl:col-span-4'>
            <OutlineGreenCard title='Repayment Table' data={loanAmortization.repaymentTable} />
          </div>
        </div>
        <div className='w-full mt-10 lg:mt-[67px] mb-[55px]'>
          <PrimaryBlueCard
            label01='Tip'
            label02='You have an invitation pending from ABC Dental. If this is your final amount, would you like to proceed with loan ganeration?'
          />
        </div>
        {/* last green bar */}
        <div className={`hidden lg:flex ${styles.greenBar}`} />
      </div>
    </div>
  );
};

export default Calculator;
