import React, { useEffect, useState } from 'react';

// images and icons
import { Loan } from 'redux/reducers/loansState';
import { LoanStatus, LoanStatusLabel } from '../../../utils/commonEnums';
import IconLeftArrow from '../../assets/icons/Icon_Left_Arrow.svg';
import IconRightArrow from '../../assets/icons/Icon_Right_Arrow.svg';
import IconRightArrowGreen from '../../assets/icons/Icon_Right_Arrow_Green.svg';

// storybook components
import { IconButton } from '../../Button/IconButton';
import { Chip } from '../../Chip';
import { OutlineIconButton } from '../../Button/OutlineIconButton';

// styles
import styles from './index.module.scss';

interface TableLoansProps {
  data: Loan[];
  filter: string;
  onClickActionButton?: (item: any) => void;
}

export const TableLoans: React.FC<TableLoansProps> = (props) => {
  const { data, filter, onClickActionButton = () => {} } = props;

  const [total, setTotal] = useState(0);
  const rowCount = 10;
  const [tableData, setTableData] = useState(data);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (filter === 'all') {
      setTotal(data.length);
      setPageCount(Math.ceil(data.length / rowCount));
      setTableData(data.slice(currentPage * rowCount, currentPage * rowCount + rowCount));
    } else if (filter === 'repaid') {
      const array = data.filter((item) => item.status === LoanStatus.REPAID);
      setPageCount(Math.ceil(array.length / rowCount));
      setTotal(array.length);
      setTableData(array.slice(currentPage * rowCount, currentPage * rowCount + rowCount));
    }
  }, [data, filter, pageCount, currentPage]);

  return (
    <div className='w-full'>
      <table className='w-full table-auto'>
        <thead>
          <tr
            className={`font-primary-regular text-xs text-center font-grey-color ${styles.tableHeader}`}
          >
            <th className='px-2'>Loan Issue Date</th>
            <th className='px-2'>Loan ID</th>
            <th className='px-2'>Provider</th>
            <th className='px-2'>Loan Amount</th>
            <th className='px-2'>Status</th>
            <th className='px-2'>Outstanding</th>
            <th className='px-2'>Est. End Date</th>
            <th className='px-2'>Repayment Account</th>
            <th className='px-2 font-white-color'>Actions</th>
          </tr>
          <tr className='h-2' />
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr
              key={index}
              className={`font-primary-regular text-xs text-center ${styles.cellItem}`}
            >
              <td className='px-2'>
                {item.loanIssueDate.toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })}
              </td>
              <td className='px-2'>{item.loanId}</td>
              <td className='px-2'>{item.provider}</td>
              <td className='px-2'>${(item.loanAmount / 100).toFixed(2)}</td>
              <td className='px-2 h-14 flex justify-center items-center'>
                <Chip status={item.status} label={LoanStatusLabel(item.status)} />
              </td>
              <td className='px-2'>${(item.outstanding / 100).toFixed(2)}</td>
              <td className='px-2'>
                {item.estEndDate.toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })}
              </td>
              <td className='px-2'>{item.repaymentAccount}</td>
              <td className='px-2 font-white-color'>
                <OutlineIconButton
                  icon={IconRightArrowGreen}
                  onClick={() => onClickActionButton(item)}
                  outlineColor='#0ACE5F'
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
              {currentPage * rowCount + rowCount > total
                ? total
                : currentPage * rowCount + rowCount}
            </div>
            &nbsp;of {total}
          </div>
          <IconButton
            icon={IconRightArrow}
            disabled={pageCount === currentPage + 1}
            onClick={() => setCurrentPage(currentPage + 1)}
          />
        </div>
      </div>
    </div>
  );
};
