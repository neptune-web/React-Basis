import React, { useState } from 'react';

// third party components
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// storybook components
import { CardAddress } from 'stories/Card/CardAddress';
import { ButtonBack } from 'stories/Button/ButtonBack';
import { StepLabel } from 'stories/StepLabel';
import { Radio } from 'stories/Radio';
import { Button } from 'stories/Button';
import { CardBank } from 'stories/Card/CardBank';
import { ButtonOutlineIconLabel } from 'stories/Button/ButtonOutlineIconLabel';

// images and icons
import IconAddGreen from 'stories/assets/icons/Icon_Add_Green.svg';
import IconAddWhite from 'stories/assets/icons/Icon_Add_White.svg';

// json
import BankInfoList from 'stories/assets/json/bank-info.json';

// styles
import styles from './index.module.scss';

interface BankInfoPropsArray {
  id: number;
  cardName: string;
  cardNumber: string;
  userName: string;
  type: string;
  backgroundColor: string;
  checked: boolean;
}

const SpendingMethod = () => {
  const viewport = useSelector((state: any) => state.device.viewport);

  const navigate = useNavigate();

  const center = {
    lat: 41.8936,
    lng: -87.6722,
  };

  const handleClickBack = () => {
    navigate(-1);
  };

  const SpendingMethodList = [
    { id: 0, value: 'Bank ACH Transfer', label: 'Bank ACH Transfer' },
    { id: 1, value: 'Check Transfer', label: 'Check Transfer' },
  ];

  const [paymentMethod, setPaymentMethod] = useState(-1);

  const handleChangeValue = (item: any) => {
    setPaymentMethod(item.id);
  };

  const [bankInfo, setBankInfo] = useState<BankInfoPropsArray[]>([]);

  const handleAddBankInfo = () => {
    const array: any = [...bankInfo];
    if (array.length < 4) {
      const object: any = BankInfoList[array.length];
      array.push(object);
      setBankInfo(array);
    }
  };

  const handleSelectBank = (id: number) => {
    const array: any = [...bankInfo];
    array.forEach((item: any) => {
      if (item.id === id) {
        item.checked = true;
      } else {
        item.checked = false;
      }
    });
    setBankInfo(array);
  };

  return viewport !== 'mobile' ? (
    <div className={styles.container}>
      <div className={styles.modal}>
        {/* left part */}
        <CardAddress viewport={viewport} center={center} />
        {/* right part */}
        <div className={styles.rightArea}>
          <div className='w-full flex flex-wrap flex-column justify-between'>
            <div className='w-full'>
              <div className='w-full flex justify-between'>
                <ButtonBack onClick={() => handleClickBack()} />
                <StepLabel stepLabel='STEP 03/04' stepTitle='Spending Method' />
              </div>
              <div className='w-full flex font-primary-medium text-sm mt-[42px]'>
                How would you like to Repay?
              </div>
              <div className='mt-6 w-full'>
                <Radio
                  data={SpendingMethodList[0]}
                  checkedId={paymentMethod}
                  onChange={(item: any) => handleChangeValue(item)}
                />
                {paymentMethod === 0 && (
                  <div className='w-full max-w-[488px] flex flex-wrap justify-end gap-x-[30px] gap-y-4 mt-10'>
                    {bankInfo.map((item, index) => (
                      <CardBank
                        data={item}
                        key={index}
                        onClick={(id: number) => handleSelectBank(id)}
                      />
                    ))}

                    <div className='w-full max-w-[229px] flex justify-end mt-5'>
                      <ButtonOutlineIconLabel
                        title='Add New'
                        icon1={IconAddGreen}
                        icon2={IconAddWhite}
                        onClick={() => handleAddBankInfo()}
                        height='45px'
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className='w-full mt-9'>
                <Radio
                  data={SpendingMethodList[1]}
                  checkedId={paymentMethod}
                  onChange={(item: any) => handleChangeValue(item)}
                />
                {paymentMethod === 1 && (
                  <div className='flex justify-end'>
                    <div className={styles.greenArea}>
                      <p className='font-primary-light text-sm'>
                        &#8220;Please send a voided check to
                        <br />
                        <br />
                        <span className='font-green-color'>
                          Aiuto LLC
                          <br />
                          NYC - 261 Madison, 9th Floor,
                          <br />
                          New York, NY 10016.
                        </span>
                        <br />
                        <br />
                        We'll reach out to you once we've received your voided check.
                        <br />
                        <br />
                        Alternatively, for immediate financing, please use the&nbsp;
                        <strong>ACH bank transfer</strong> option above.&#8221;
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className='w-full flex justify-end items-end pt-[62px]'>
              <div className='w-full max-w-[318px]'>
                <Button
                  title={
                    paymentMethod === -1 || paymentMethod === 0
                      ? 'Continue'
                      : 'Yes, I will send a voided check'
                  }
                  hasArrow
                  fullWidth
                  height='58px'
                  onClick={() => navigate('/dashboard/terms-conditions')}
                />
              </div>
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
        <StepLabel stepLabel='STEP 03/04' stepTitle='Spending Method' />
      </div>
      <div className={styles.mobileRightArea}>
        <div className='w-full flex flex-wrap flex-column justify-between'>
          <div className='w-full flex font-primary-medium text-sm'>
            How would you like to Repay?
          </div>
          <div className='mt-[56px] w-full'>
            <Radio
              data={SpendingMethodList[0]}
              checkedId={paymentMethod}
              onChange={(item: any) => handleChangeValue(item)}
            />
            {paymentMethod === 0 && (
              <div className='w-full max-w-[488px] flex flex-wrap justify-center gap-x-[30px] gap-y-4 mt-10'>
                {bankInfo.map((item, index) => (
                  <CardBank
                    data={item}
                    key={index}
                    onClick={(id: number) => handleSelectBank(id)}
                  />
                ))}

                <div className='w-full max-w-[229px] flex justify-center mt-5'>
                  <ButtonOutlineIconLabel
                    title='Add New'
                    icon1={IconAddGreen}
                    icon2={IconAddWhite}
                    onClick={() => handleAddBankInfo()}
                    height='45px'
                  />
                </div>
              </div>
            )}
          </div>

          <div className='w-full mt-[45px]'>
            <Radio
              data={SpendingMethodList[1]}
              checkedId={paymentMethod}
              onChange={(item: any) => handleChangeValue(item)}
            />
            {paymentMethod === 1 && (
              <div className='flex justify-end'>
                <div className={styles.greenArea}>
                  <p className='font-primary-light text-sm'>
                    &#8220;Please send a voided check to
                    <br />
                    <br />
                    <span className='font-green-color'>
                      Aiuto LLC
                      <br />
                      NYC - 261 Madison, 9th Floor,
                      <br />
                      New York, NY 10016.
                    </span>
                    <br />
                    <br />
                    We'll reach out to you once we've received your voided check.
                    <br />
                    <br />
                    Alternatively, for immediate financing, please use the&nbsp;
                    <strong>ACH bank transfer</strong> option above.&#8221;
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className='w-full flex justify-center pt-[30px]'>
            <div className='w-full max-w-[318px]'>
              <Button
                title={
                  paymentMethod === -1 || paymentMethod === 0
                    ? 'Continue'
                    : 'Yes, I will send a voided check'
                }
                hasArrow
                fullWidth
                height='58px'
                onClick={() => navigate('/dashboard/terms-conditions')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpendingMethod;
