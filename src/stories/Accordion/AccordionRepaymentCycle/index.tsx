import React, { useState } from 'react';

// styles
import styles from './index.module.scss';

interface JsonObject {
  id: number;
  billAmount: string;
  repayIn: string;
}

interface AccordionRepaymentCycleProps {
  data: JsonObject[];
}

export const AccordionRepaymentCycle: React.FC<AccordionRepaymentCycleProps> = (props) => {
  const { data } = props;
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.greenBar} />
      <div className={styles.content}>
        <div
          className='w-full flex justify-between items-center'
          role='button'
          onClick={() => setOpen(!open)}
          onKeyDown={() => setOpen(!open)}
          tabIndex={0}
        >
          <div className='font-secondary-bold text-lg ml-8'>What is the repayment cycle?</div>
          <svg
            width='12'
            height='8'
            viewBox='-2.5 -5 75 60'
            preserveAspectRatio='none'
            className={`cursor-pointer transition duration-150 ease-in-out ${
              open ? 'transform rotate-180' : ''
            }`}
          >
            <path
              d='M0,0 l35,50 l35,-50'
              fill='none'
              stroke='black'
              strokeLinecap='round'
              strokeWidth='15'
            />
          </svg>
        </div>
        <div
          className={`${styles.accordionContent} ${open ? styles.fullHeight : styles.zeroHeight}`}
        >
          <table className='whitespace-normal w-full table-auto mt-5'>
            <thead>
              <tr className='font-primary-semibold font-primary-blue-color text-base'>
                <th className='pl-8 text-start'>Bill Amount</th>
                <th className='text-start'>Repay In</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className={`font-primary-regular font-grey-color text-base h-10 ${
                    index === 0 ? styles.active : styles.inActive
                  }`}
                >
                  <td className='pl-8'>{item.billAmount}</td>
                  <td>{item.repayIn}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
