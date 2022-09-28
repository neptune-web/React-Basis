import React, { useState } from 'react';

// storybook components
import { RadioGroup } from '../../Radio/RadioGroup';
import { InputGreenLabelName } from '../../Input/InputGreenLabelName';
import { InputGreenLabelCardNumber } from '../../Input/InputGreenLabelCardNumber';
import { InputGreenLabelDate } from '../../Input/InputGreenLabelDate';
import { InputGreenLabelCardSecurityCode } from '../../Input/InputGreenLabelCardSecurityCode';
import { ButtonLinkText } from '../../Button/ButtonLinkText';
import { CardBank } from '../CardBank';
import { ButtonOutlineIconLabel } from '../../Button/ButtonOutlineIconLabel';

// images and icons
import RadioButtonGreenIcon from '../../assets/icons/Icon_Radio_Button_Green.svg';
import VisaIcon from '../../assets/icons/Icon_Visa.svg';
import DiscoverIcon from '../../assets/icons/Icon_Discover.svg';
import MaestroIcon from '../../assets/icons/Icon_Maestro.svg';
import MastercardIcon from '../../assets/icons/Icon_Mastercard.svg';
import LockGreenIcon from '../../assets/icons/Icon_Lock_Green.svg';
import IconAddGreen from '../../assets/icons/Icon_Add_Green.svg';
import IconAddWhite from '../../assets/icons/Icon_Add_White.svg';

// json
import BankInfoList from '../../assets/json/bank-info.json';

// styles
import styles from './index.module.scss';

interface PaymentMethodListProps {
  id: number;
  label: string;
  value: string;
}

interface BankInfoPropsArray {
  id: number;
  cardName: string;
  cardNumber: string;
  userName: string;
  type: string;
  checked: boolean;
  backgroundColor: string;
}

interface CardSelectPaymentMethodProps {
  paymentMethodList: PaymentMethodListProps[];
  selectedPaymentMethodID: number;
  onChangePaymentMethod: (item: any) => void;
}

export const CardSelectPaymentMethod: React.FC<CardSelectPaymentMethodProps> = (props) => {
  const { paymentMethodList, selectedPaymentMethodID, onChangePaymentMethod } = props;

  const [userName, setUserName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cardSecurityCode, setCardSecurityCode] = useState('');

  const [bankInfo, setBankInfo] = useState<BankInfoPropsArray[]>(BankInfoList);

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

  return (
    <div className={styles.container}>
      <div className='w-full font-primary-semibold text-md'>Payment Method</div>
      <div className='w-full flex flex-wrap justify-start mt-5 ml-4'>
        <RadioGroup
          data={paymentMethodList}
          checkedId={selectedPaymentMethodID}
          onChange={(item: any) => onChangePaymentMethod(item)}
        />
      </div>
      {selectedPaymentMethodID === 0 && (
        <div className='w-full flex flex-wrap'>
          <div className='w-full font-primary-regular font-primary-blue-color text-xs mt-5 ml-4'>
            <i>Note: Additional 3% fee is charged for card payments</i>
          </div>
          <div className='w-full mt-[18px]'>
            <div className={styles.card}>
              <div className='w-full flex flex-wrap justify-between items-center gap-5'>
                <div className='flex gap-2'>
                  <img src={RadioButtonGreenIcon} alt='' />
                  <div className='font-primary-semibold text-md'>Pay with Credit / Debit Card</div>
                </div>
                <div className='flex gap-[5px]'>
                  <img src={VisaIcon} alt='' />
                  <img src={DiscoverIcon} alt='' />
                  <img src={MaestroIcon} alt='' />
                  <img src={MastercardIcon} alt='' />
                </div>
              </div>
              <div className='w-full mt-2'>
                <InputGreenLabelName
                  label='Full Name'
                  placeholder='Enter you name'
                  name={userName}
                  getName={(value) => setUserName(value)}
                />
              </div>
              <div className='w-full grid grid-cols-12 mt-6 gap-[18px]'>
                <div className='col-span-12 lg:col-span-6'>
                  <InputGreenLabelCardNumber
                    label='Card number'
                    placeholder='Enter card number'
                    cardNumber={cardNumber}
                    getCardNumber={(value) => setCardNumber(value)}
                  />
                </div>
                <div className='col-span-12 lg:col-span-6'>
                  <InputGreenLabelDate
                    label='Expiration Date'
                    placeholder='MM/YY'
                    date={expirationDate}
                    getDate={(value) => setExpirationDate(value)}
                  />
                </div>
              </div>
              <div className='w-full grid grid-cols-12 gap-[18px] mt-2 items-center'>
                <div className='col-span-12 lg:col-span-6'>
                  <InputGreenLabelCardSecurityCode
                    label='Card Security Code'
                    placeholder='Enter code'
                    cardSecurityCode={cardSecurityCode}
                    getCardSecurityCode={(value) => setCardSecurityCode(value)}
                  />
                </div>
                <div className='col-span-12 lg:col-span-6'>
                  <ButtonLinkText label='What is this?' onClick={() => {}} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedPaymentMethodID === 1 && (
        <div className='w-full flex flex-wrap'>
          <div className='font-primary-medium text-sm mt-[34px]'>Associated Accounts</div>
          <div className='w-full flex flex-wrap justify-center gap-[14px] mt-[38px]'>
            {bankInfo.map((item, index) => (
              <CardBank data={item} key={index} onClick={(id: number) => handleSelectBank(id)} />
            ))}
          </div>
          <div className='w-full flex justify-center'>
            <div className='w-full max-w-[138px] mt-[38px]'>
              <ButtonOutlineIconLabel
                title='Add New'
                icon1={IconAddGreen}
                icon2={IconAddWhite}
                onClick={() => handleAddBankInfo()}
                height='45px'
              />
            </div>
          </div>
        </div>
      )}
      <div className='w-full flex items-center gap-[10px] mt-5'>
        <img src={LockGreenIcon} alt='' />
        <div className='font-primary-regular font-grey-color text-xs'>
          We protect your payment information using encryption to provide bank-level security.
        </div>
      </div>
    </div>
  );
};
