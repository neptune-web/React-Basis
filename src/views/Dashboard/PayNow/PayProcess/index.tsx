import React, { useState } from 'react';

// third party components
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// stories components
import { ButtonBack } from 'stories/Button/ButtonBack';
import { Button } from 'stories/Button';
import { CardTotalRepayment } from 'stories/Card/CardTotalRepayment';
import { CardSelectPaymentMethod } from 'stories/Card/CardSelectPaymentMethod';

// json
import PaymentMethodList from 'stories/assets/json/payment-method-list.json';

// styles
import styles from './index.module.scss';

const PayProcess = () => {
  const navigate = useNavigate();

  const viewport = useSelector((state: any) => state.device.viewport);

  const handleClickBack = () => {
    navigate(-1);
  };

  const [selectedPaymentMethodID, setSelectedPaymentMethodId] = useState(0);

  const [repaymentProcess, setRepaymentProcess] = useState(true);

  return (
    <div className={styles.container}>
      {viewport !== 'mobile' && (
        <div className='absolute top-[76px] left-[60px]'>
          <ButtonBack onClick={() => handleClickBack()} />
        </div>
      )}
      <div className='w-full font-secondary-bold font-primary-blue-color text-[32px] text-center'>
        Pay Now
      </div>
      <div className='w-full mt-8 font-primary-regular text-md text-center'>
        How would you like to repay?
      </div>
      <div className='divider mt-[42px] mb-[56px]' />
      <div className='w-full flex flex-wrap justify-between items-start gap-[46px]'>
        <CardTotalRepayment
          selectedPaymentMethodID={selectedPaymentMethodID}
          loanRepaymentAmount={100}
          viewport={viewport}
        />
        <div className='flex flex-1 flex-wrap'>
          <div className='w-full'>
            <CardSelectPaymentMethod
              paymentMethodList={PaymentMethodList}
              selectedPaymentMethodID={selectedPaymentMethodID}
              onChangePaymentMethod={(item: any) => setSelectedPaymentMethodId(item.id)}
            />
          </div>
          <div className='w-full flex justify-center mt-[42px]'>
            <div className='max-w-[346px] w-full'>
              <Button
                title={`Pay $${selectedPaymentMethodID === 0 ? '103' : '100'}`}
                fullWidth
                onClick={() =>
                  navigate(
                    repaymentProcess
                      ? '/dashboard/pay-now/pay-process-success'
                      : '/dashboard/pay-now/pay-process-failure'
                  )
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayProcess;
