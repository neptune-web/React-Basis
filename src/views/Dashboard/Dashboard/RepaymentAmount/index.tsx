import React, { useState } from 'react';

// third party components
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// storybook components
import { CardAddress } from 'stories/Card/CardAddress';
import { ButtonBack } from 'stories/Button/ButtonBack';
import { StepLabel } from 'stories/StepLabel';
import { Button } from 'stories/Button';

// json
import RepaymentAmountList from 'stories/assets/json/repayment-amount.json';

// styles
import styles from './index.module.scss';

const RepaymentAmount = () => {
  const viewport = useSelector((state: any) => state.device.viewport);

  const navigate = useNavigate();

  const center = {
    lat: 41.8936,
    lng: -87.6722,
  };

  const handleClickBack = () => {
    navigate(-1);
  };

  return viewport !== 'mobile' ? (
    <div className={styles.container}>
      <div className={styles.modal}>
        {/* left part */}
        <CardAddress viewport={viewport} center={center} />
        {/* right part */}
        <div className={styles.rightArea}>
          <div className='w-full flex justify-between'>
            <ButtonBack onClick={() => handleClickBack()} />
            <StepLabel stepLabel='STEP 02/04' stepTitle='Repayment Amount' />
          </div>
          <div className='w-full flex font-primary-medium text-sm mt-[42px]'>
            Based on your deposite frequency, your repayment will be:
          </div>
          <div className='w-full flex justify-center'>
            <div className='w-full flex flex-wrap max-w-[342px] gap-[34px] mt-10'>
              <div className='w-full flex justify-between gap-4'>
                <div className='font-primary-regular text-sm'>Total Repayment Amount</div>
                <div className='font-primary-semibold font-green-color text-md'>$1000.00</div>
              </div>
              <div className='w-full flex justify-between gap-4'>
                <div className='font-primary-regular text-sm'>Amount Per Dedcution</div>
                <div className='font-primary-semibold font-green-color text-md'>$100.00</div>
              </div>
              <div className='w-full flex justify-between gap-4'>
                <div className='font-primary-regular text-sm'>Repayment Term</div>
                <div className='font-primary-semibold font-green-color text-md'>5 Months</div>
              </div>
              <div className='w-full flex justify-between gap-4'>
                <div className='font-primary-regular text-sm'>Number Of Deductions</div>
                <div className='font-primary-semibold font-green-color text-md'>10</div>
              </div>
            </div>
          </div>
          <div className='w-full flex justify-center'>
            <div className='w-full flex flex-wrap max-w-[342px] mt-[52px]'>
              <div className='w-full font-primary-semibold text-sm'>Repayment Table</div>
              <div className='w-full flex font-primary-semibold text-[10px] text-center mt-4 rounded-tl-md rounded-tr-md'>
                <div
                  className={`w-[120px] pt-[18px] pb-[12px] ${styles.tableGreenArea} rounded-tl-md rounded-tr-md`}
                >
                  Date
                </div>
                <div className='flex flex-1 justify-center'>Amount</div>
              </div>
              <div className='w-full max-h-[120px] overflow-y-auto rounded-bl-md rounded-br-md'>
                {RepaymentAmountList.map((item, index) => (
                  <div
                    className='w-full flex font-primary-medium text-[10px] text-center'
                    key={index}
                  >
                    <div className={`w-[120px] py-3 ${styles.tableGreenArea}`}>{item.date}</div>
                    <div className='flex flex-1 py-3 justify-center'>${item.amount.toFixed(2)}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='w-full flex justify-end pt-[62px]'>
            <div className='w-full max-w-[318px]'>
              <Button
                title='Continue'
                hasArrow
                fullWidth
                height='58px'
                onClick={() => navigate('/dashboard/spending-method')}
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
        <StepLabel stepLabel='STEP 02/04' stepTitle='Repayment Amount' />
      </div>
      <div className={styles.mobileRightArea}>
        <div className='w-full flex font-primary-medium text-sm'>
          Based on your deposite frequency, your repayment will be:
        </div>
        <div className='w-full flex justify-center'>
          <div className='w-full flex flex-wrap max-w-[342px] gap-[28px] mt-[52px]'>
            <div className='w-full flex justify-between gap-4'>
              <div className='font-primary-regular text-sm'>Total Repayment Amount</div>
              <div className='font-primary-semibold font-green-color text-md'>$1000.00</div>
            </div>
            <div className='w-full flex justify-between gap-4'>
              <div className='font-primary-regular text-sm'>Amount Per Dedcution</div>
              <div className='font-primary-semibold font-green-color text-md'>$100.00</div>
            </div>
            <div className='w-full flex justify-between gap-4'>
              <div className='font-primary-regular text-sm'>Repayment Term</div>
              <div className='font-primary-semibold font-green-color text-md'>5 Months</div>
            </div>
            <div className='w-full flex justify-between gap-4'>
              <div className='font-primary-regular text-sm'>Number Of Deductions</div>
              <div className='font-primary-semibold font-green-color text-md'>10</div>
            </div>
          </div>
        </div>
        <div className='w-full flex justify-center'>
          <div className='w-full flex flex-wrap max-w-[342px] mt-[52px]'>
            <div className='w-full font-primary-semibold text-sm'>Repayment Table</div>
            <div className='w-full flex font-primary-semibold text-[10px] text-center mt-4 rounded-tl-md rounded-tr-md'>
              <div
                className={`w-[120px] pt-[18px] pb-[12px] ${styles.tableGreenArea} rounded-tl-md rounded-tr-md`}
              >
                Date
              </div>
              <div className='flex flex-1 justify-center'>Amount</div>
            </div>
            <div className='w-full max-h-[155px] overflow-y-auto rounded-bl-md rounded-br-md'>
              {RepaymentAmountList.map((item, index) => (
                <div
                  className='w-full flex font-primary-medium text-[10px] text-center'
                  key={index}
                >
                  <div className={`w-[120px] py-3 ${styles.tableGreenArea}`}>{item.date}</div>
                  <div className='flex flex-1 py-3 justify-center'>${item.amount.toFixed(2)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='w-full flex justify-end pt-[52px]'>
          <div className='w-full max-w-[318px]'>
            <Button
              title='Continue'
              hasArrow
              fullWidth
              height='58px'
              onClick={() => navigate('/dashboard/spending-method')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepaymentAmount;
