import React, { useEffect, useState } from 'react';

// images and icons
import { Loan } from 'redux/reducers/loansState';
import { ButtonDeclineLinkText } from 'stories/Button/ButtonDeclineLinkText';
import IconLeftArrow from '../../assets/icons/Icon_Left_Arrow.svg';
import IconRightArrow from '../../assets/icons/Icon_Right_Arrow.svg';
import IconUserBlue from '../../assets/icons/Icon_User_Blue.svg';

// storybook components
import { IconButton } from '../../Button/IconButton';

// json
import MerchantDashboardList from '../../assets/json/merchant-dashboard-data.json';

// styles
import styles from './index.module.scss';

interface TableMerchantDashboardProps {
  // data: any[];
  filter: string;
  onClickActionButton?: (item: any) => void;
}

export const TableMerchantDashboard: React.FC<TableMerchantDashboardProps> = (props) => {
  // const { data, filter, onClickActionButton = () => {} } = props;
  const { filter, onClickActionButton = (item: any) => {} } = props;

  let data = MerchantDashboardList;
  const [list, setList] = useState(data);
  const [count, setCount] = useState(8);
  const [total, setTotal] = useState(data.length);
  const [disabled, setDisabled] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    data = data.filter((item) => {
      return item.loanId.includes(filter) || item.patientName.includes(filter);
    });
    setList(data);
    setTotal(data.length);
    if (count >= data.length) {
      setCount(data.length);
    } else {
      setCount(8);
    }
    if (currentPage * count + count > total) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [filter, currentPage]);

  // useEffect(() => {
  //   if (filter === 'all') {
  //     setTotal(data.length);
  //     setPageCount(Math.ceil(data.length / rowCount));
  //     setTableData(data.slice(currentPage * rowCount, currentPage * rowCount + rowCount));
  //   } else if (filter === 'repaid') {
  //     const array = data.filter((item) => item.status === LoanStatus.REPAID);
  //     setPageCount(Math.ceil(array.length / rowCount));
  //     setTotal(array.length);
  //     setTableData(array.slice(currentPage * rowCount, currentPage * rowCount + rowCount));
  //   }
  // }, [data, filter, pageCount, currentPage]);
  return (
    <div className='w-full'>
      <table className='w-full table-auto'>
        <thead>
          <tr className={`font-primary text-xs text-center font-grey-color ${styles.tableHeader}`}>
            <th className='px-2'>Loan ID</th>
            <th className='px-2'>Patient Name</th>
            <th className='px-2'>Financing Amount</th>
            <th className='px-2'>Status</th>
            <th className='px-2'>Status Date</th>
            <th className='px-2'>Action</th>
          </tr>
          <tr className='h-2' />
        </thead>
        <tbody>
          {list.slice(currentPage * count, currentPage * count + count).map((item, index) => (
            <tr key={index} className={`font-primary text-xs text-center ${styles.cellItem}`}>
              <td className='px-2 font-primary-blue-color'>
                <a href='/merchant/dashboard/patient-profile'>{item.loanId}</a>
              </td>
              <td className='px-2 font-primary-blue-color justify-center items-center'>
                <img className='inline-block' src={IconUserBlue} alt='' />
                <a className='ml-[18px]' href='/merchant/dashboard/patient-profile'>
                  {item.patientName}
                </a>
              </td>
              <td className='px-2 font-green-color'>${(item.financingAmount / 100).toFixed(2)}</td>
              {item.status === 'Completed' ? (
                <td className='px-2 h-14 flex font-green-color justify-center items-center'>
                  {/* <Chip status={item.status} label={item.status} /> */}
                  {item.status}
                </td>
              ) : (
                <td className='px-2 h-14 flex font-primary-blue-color justify-center items-center'>
                  {/* <Chip status={item.status} label={item.status} /> */}
                  {item.status}
                </td>
              )}
              <td className='px-2'>
                {new Date(item.statusDate).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })}
              </td>
              <td className='px-2'>
                <ButtonDeclineLinkText
                  onClick={() => onClickActionButton(item)}
                  label={item.action}
                  color='#0C1B80'
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='w-full flex justify-end items-center'>
        <div className='flex justify-end items-center bg-white mt-[49px] w-auto h-10 px-3 rounded-lg'>
          <IconButton
            icon={IconLeftArrow}
            disabled={currentPage === 0}
            onClick={() => setCurrentPage(currentPage - 1)}
          />
          <div className='flex mx-2'>
            <div className='font-green-color'>
              {currentPage * count + count > total ? total : currentPage * count + count}
            </div>
            &nbsp;of {total}
          </div>
          <IconButton
            icon={IconRightArrow}
            disabled={disabled}
            onClick={() => setCurrentPage(currentPage + 1)}
          />
        </div>
      </div>
    </div>
  );
};
