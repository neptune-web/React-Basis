import React from 'react';

// storybook components
import { Radio } from '../../Radio';
import { Input } from '../../Input/Input';

// styles
import styles from './index.module.scss';

interface RadioObject {
  id: number;
  label: string;
  value: string;
}

interface JSONObject {
  id: number;
  loanID: string;
  outstandingBalance: number;
  repaymentAmount: number;
  repaymentEndDate: string;
}

interface CardPayNowProps {
  data: JSONObject;
  checkedId: number;
  onSelect: (id: number) => void;
  onChange: (value: string) => void;
}

export const CardPayNow: React.FC<CardPayNowProps> = (props) => {
  const { data, checkedId, onSelect, onChange } = props;

  return (
    <div className={styles.container}>
      <div className='w-full flex justify-between items-center'>
        <div className='font-primary-bold text-md mt-2'>{data.loanID}</div>
        <div className='max-w-[20px] max-h-[20px]'>
          <Radio
            data={{ id: data.id, label: '', value: '' }}
            checkedId={checkedId}
            onChange={(item: RadioObject) => onSelect(item.id)}
          />
        </div>
      </div>

      <div className='w-full flex flex-wrap gap-[22px] my-[34px]'>
        <div className='w-full flex justify-between items-center'>
          <div className='font-primary-regular text-sm'>Outstanding Balance</div>
          <div className='font-primary-bold font-green-color text-sm'>
            ${data.outstandingBalance.toFixed(2)}
          </div>
        </div>
        <div className='w-full flex justify-between items-center'>
          <div className='font-primary-regular text-sm'>Repayment Amount</div>
          <div className='font-primary-bold font-green-color text-sm'>
            ${data.repaymentAmount.toFixed(2)}
          </div>
        </div>
        <div className='w-full flex justify-between items-center'>
          <div className='font-primary-regular text-sm'>Repayment End Date</div>
          <div className='font-primary-bold font-primary-blue-color text-sm'>
            {data.repaymentEndDate}
          </div>
        </div>
      </div>

      {data.id === checkedId && (
        <div className='w-full flex flex-wrap'>
          <div className='w-full font-primary-regular text-sm mb-6'>
            How much would you like to repay?
          </div>
          <div className='max-w-[196px]'>
            <Input
              placeholder='aaa'
              value={`$${data.repaymentAmount}`}
              onChange={(value: string) => onChange(value.substring(1))}
              height='54px'
            />
          </div>
        </div>
      )}
    </div>
  );
};
