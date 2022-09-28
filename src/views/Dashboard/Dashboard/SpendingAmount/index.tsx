import React, { useState } from 'react';

// third party components
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RepaymentCycle } from 'utils/commonEnums';

// storybook components
import { CardAddress } from 'stories/Card/CardAddress';
import { ButtonBack } from 'stories/Button/ButtonBack';
import { StepLabel } from 'stories/StepLabel';
import { Input } from 'stories/Input/Input';
import { RadioGroup } from 'stories/Radio/RadioGroup';
import { Button } from 'stories/Button';
import { InputCalendar } from 'stories/Input/InputCalendar';

// styles
import styles from './index.module.scss';

const SpendingAmount = () => {
  const viewport = useSelector((state: any) => state.device.viewport);

  const navigate = useNavigate();

  const center = {
    lat: 41.8936,
    lng: -87.6722,
  };

  const handleClickBack = () => {
    navigate(-1);
  };

  // spend value
  const [spendValue, setSpendValue] = useState('');

  const RepaymentMethodList = [
    { id: 0, value: RepaymentCycle.SEMI_MONTHLY, label: 'Semi-Monthly (Twice a Month)' },
    { id: 1, value: RepaymentCycle.BI_WEEKLY, label: 'Bi-Weekly (Every Two Weeks)' },
    { id: 2, value: RepaymentCycle.MONTHLY, label: 'Monthly (Once a Month)' },
  ];

  const [repaymentMethodId, setRepaymentMethodId] = useState(0);

  const handleChangeValue = (item: any) => {
    setRepaymentMethodId(item.id);
  };

  const [deduction01, setDeduction01] = useState(new Date());
  const [deduction02, setDeduction02] = useState(new Date());

  return viewport !== 'mobile' ? (
    <div className={styles.container}>
      <div className={styles.modal}>
        {/* left part */}
        <CardAddress viewport={viewport} center={center} />
        {/* right part */}
        <div className={styles.rightArea}>
          <div className='w-full flex justify-between'>
            <ButtonBack onClick={() => handleClickBack()} />
            <StepLabel stepLabel='STEP 01/04' stepTitle='Spending Amount' />
          </div>
          <div className='w-full flex font-primary-medium text-sm mt-[42px]'>
            How much would you like to spend?
          </div>
          <div className='w-full mt-[22px]'>
            <div className='max-w-[334px]'>
              <Input
                placeholder=''
                value={spendValue}
                onChange={(value) => setSpendValue(value)}
                fullWidth
                height='50px'
              />
            </div>
          </div>
          <div className='w-full flex font-primary-medium text-sm mt-[56px]'>
            How frequently would you like the deductions to take place?
          </div>
          <div className={`${styles.tipCard} mt-4`}>
            <p className='font-primary-light text-sm'>
              <span className='font-primary-medium font-green-color'>Tip:&nbsp;</span>Line your
              repayments with your payroll cycle deposit frequency to ensure timely transactions
            </p>
          </div>
          <div className='mt-6'>
            <RadioGroup
              data={RepaymentMethodList}
              checkedId={repaymentMethodId}
              onChange={(item: any) => handleChangeValue(item)}
            />
          </div>

          <div className='w-full flex font-primary-medium text-sm mt-[56px]'>
            How frequently would you like the deductions to take place?
          </div>
          <div className='w-full flex mt-[30px] gap-[60px]'>
            <div className='max-w-[192px]'>
              <InputCalendar
                date={deduction01}
                dateValidate
                selectDate={(date) => setDeduction01(date)}
                height='50px'
              />
            </div>
            {repaymentMethodId === 0 && (
              <div className='max-w-[192px]'>
                <InputCalendar
                  date={deduction02}
                  dateValidate
                  selectDate={(date) => setDeduction02(date)}
                  height='50px'
                />
              </div>
            )}
          </div>
          <div className='w-full flex justify-end pt-[62px]'>
            <div className='w-full max-w-[318px]'>
              <Button
                title='View Repayment Schedule'
                hasArrow
                fullWidth
                height='58px'
                onClick={() => navigate('/dashboard/repayment-amount')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className={styles.mobileContainer}>
      {/* left part */}
      <CardAddress viewport={viewport} center={center} onClick={() => handleClickBack()} />
      {/* right part */}
      <div className='w-full flex justify-center py-5 mt-5 border-t border-b border-gray-400'>
        <StepLabel stepLabel='STEP 01/04' stepTitle='Spending Amount' />
      </div>
      <div className={styles.mobileRightArea}>
        <div className='w-full flex font-primary-medium text-sm'>
          How much would you like to spend?
        </div>
        <div className='w-full mt-[22px]'>
          <div className='max-w-[334px]'>
            <Input
              placeholder=''
              value={spendValue}
              onChange={(value) => setSpendValue(value)}
              fullWidth
              height='50px'
            />
          </div>
        </div>
        <div className='w-full flex font-primary-medium text-s40px]'>
          How frequently would you like the deductions to take place?
        </div>
        <div className={`${styles.tipCard} mt-4`}>
          <p className='font-primary-light text-sm'>
            <span className='font-primary-medium font-green-color'>Tip:&nbsp;</span>Line your
            repayments with your payroll cycle deposit frequency to ensure timely transactions
          </p>
        </div>
        <div className='mt-6 w-full flex justify-center'>
          <div className='max-w-[242px]'>
            <RadioGroup
              data={RepaymentMethodList}
              checkedId={repaymentMethodId}
              onChange={(item: any) => handleChangeValue(item)}
            />
          </div>
        </div>

        <div className='w-full flex font-primary-medium text-sm mt-[40px]'>
          How frequently would you like the deductions to take place?
        </div>
        <div className='w-full flex flex-wrap justify-center mt-[40px]'>
          <div className='max-w-[192px]'>
            <InputCalendar
              date={deduction01}
              dateValidate
              selectDate={(date) => setDeduction01(date)}
              height='50px'
            />
          </div>
          {repaymentMethodId === 0 && (
            <div className='max-w-[192px]'>
              <InputCalendar
                date={deduction02}
                dateValidate
                selectDate={(date) => setDeduction02(date)}
                height='50px'
              />
            </div>
          )}
        </div>
        <div className='w-full flex justify-end pt-[30px]'>
          <div className='w-full max-w-[318px]'>
            <Button
              title='View Repayment Schedule'
              hasArrow
              fullWidth
              height='58px'
              onClick={() => navigate('/dashboard/repayment-amount')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpendingAmount;
