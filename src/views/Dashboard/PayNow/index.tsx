import React, { useEffect, useState } from 'react';

// third party components
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// stories components
import { ButtonBack } from 'stories/Button/ButtonBack';
import { CardPayNow } from 'stories/Card/CardPayNow';
import { CardLoanSummary } from 'stories/Card/CardLoanSummary';

// json
import PayNowList from 'stories/assets/json/pay-now-list.json';

// styles
import styles from './index.module.scss';

interface JSONObject {
  id: number;
  loanID: string;
  outstandingBalance: number;
  repaymentAmount: number;
  repaymentEndDate: string;
}

const PayNow = () => {
  const navigate = useNavigate();

  const viewport = useSelector((state: any) => state.device.viewport);

  const handleClickBack = () => {
    navigate(-1);
  };

  const [payNowList, setPayNowList] = useState<JSONObject[][]>([[]]);
  useEffect(() => {
    const newList: JSONObject[][] = [];
    let tempItem: JSONObject[] = [];
    switch (viewport) {
      case 'desktop':
        PayNowList.forEach((item, index) => {
          tempItem.push(item);
          if (index % 3 === 2) {
            newList.push(tempItem);
            tempItem = [];
          }
        });
        if (tempItem.length > 0) newList.push(tempItem);
        setPayNowList(newList);
        break;
      case 'ipad':
        PayNowList.forEach((item, index) => {
          tempItem.push(item);
          if (index % 2 === 1) {
            newList.push(tempItem);
            tempItem = [];
          }
        });
        if (tempItem.length > 0) newList.push(tempItem);
        setPayNowList(newList);
        break;
      case 'mobile':
        PayNowList.forEach((item, index) => {
          tempItem.push(item);
          if (index % 1 === 0) {
            newList.push(tempItem);
            tempItem = [];
          }
        });
        if (tempItem.length > 0) newList.push(tempItem);
        setPayNowList(newList);
        break;
      default:
        break;
    }
  }, [viewport]);

  const [checkedId, setCheckedId] = useState(-1);
  const [selected, setSelected] = useState({ row: -1, col: -1 });
  const [selectedItem, setSelectedItem] = useState<JSONObject | undefined>(undefined);

  useEffect(() => {
    payNowList.forEach((item, index) => {
      item.forEach((elem, idx) => {
        if (elem.id === checkedId) {
          setSelected({ row: index, col: idx });
          setSelectedItem(payNowList[index][idx]);
        }
      });
    });
  }, [checkedId, viewport]);

  const handleChangeValue = (value: string) => {
    const array = [...payNowList];
    array.forEach((item, index) => {
      item.forEach((elem, idx) => {
        if (index === selected.row && idx === selected.col) {
          array[index][idx].repaymentAmount = Number(value);
        }
      });
    });
    setPayNowList(array);
  };

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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis scelerisque volutpat augue
        mauris. Posuere mi morbi proin mauris. Ullamcorper congue neque dui lobortis purus.
      </div>
      <div className='divider mt-[38px] mb-[55px]' />
      <div className='w-full flex flex-wrap'>
        {payNowList.map((item, index) => (
          <div className='grid grid-cols-12 flex flex-wrap gap-0 md:gap-8 mt-4 lg:mt-8' key={index}>
            {item.map((elem, idx) => (
              <div className='col-span-12 md:col-span-6 lg:col-span-4' key={idx}>
                <CardPayNow
                  key={idx}
                  data={elem}
                  checkedId={checkedId}
                  onSelect={(id: any) => setCheckedId(id)}
                  onChange={(value: string) => handleChangeValue(value)}
                />
              </div>
            ))}
            {selectedItem !== undefined && index === selected.row && (
              <div className='col-span-12 my-10'>
                <CardLoanSummary
                  outstandingBalance={selectedItem.outstandingBalance}
                  repaymentsRemaining={9}
                  repaymentAmount={selectedItem.repaymentAmount}
                  nextRepaymentDate='5 Mar, 2022'
                  onClick={() => navigate('/dashboard/pay-now/pay-process')}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PayNow;
