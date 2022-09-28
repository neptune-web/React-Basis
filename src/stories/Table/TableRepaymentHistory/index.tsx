import React, { useEffect, useState } from 'react';

// images and icons
import { Repayment } from 'redux/reducers/loansState';
import { RepaymentStatusLabel } from '../../../utils/commonEnums';
import IconLeftArrow from '../../assets/icons/Icon_Left_Arrow.svg';
import IconRightArrow from '../../assets/icons/Icon_Right_Arrow.svg';

// storybook components
import { IconButton } from '../../Button/IconButton';
import { Chip } from '../../Chip';
import { OutlineButton } from '../../Button/OutlineButton';
import { Modal } from '../../Modal';

// styles
import styles from './index.module.scss';

interface TableRepaymentHistoryProps {
  loanId: string;
  data: Repayment[];
  onClickActionButton?: (item: any) => void;
}

export const TableRepaymentHistory: React.FC<TableRepaymentHistoryProps> = (props) => {
  const { data, onClickActionButton = () => {}, loanId } = props;

  const [showModal, setShowModal] = useState(false);

  const [total, setTotal] = useState(0);
  const rowCount = 10;
  const [tableData, setTableData] = useState(data);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setPageCount(Math.ceil(data.length / rowCount));
    setTotal(data.length);
    setTableData(data.slice(currentPage * rowCount, currentPage * rowCount + rowCount));
    // }
  }, [data, pageCount, currentPage]);

  return (
    <div className='w-full'>
      <table className='w-full table-auto'>
        <thead>
          <tr
            className={`font-primary-regular text-xs text-center font-grey-color ${styles.tableHeader}`}
          >
            <th className='px-2'>Loan ID</th>
            <th className='px-2'>Deduction Amount</th>
            <th className='px-2'>Dedcution Date</th>
            <th className='px-2'>Repayment Method</th>
            <th className='px-2'>Status</th>
            <th className='px-2'>Action</th>
          </tr>
          <tr className='h-2' />
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr
              key={index}
              className={`font-primary-regular text-xs text-center ${styles.cellItem}`}
            >
              <td className='px-2'>{loanId}</td>
              <td className='px-2'>${(item.deductionAmount / 100).toFixed(2)}</td>
              <td className='px-2'>
                {item.deductionDate.toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })}
              </td>
              <td className='px-2'>{item.repaymentMethod}</td>
              <td className='px-2 h-14 flex justify-center items-center'>
                <Chip status={item.status} label={RepaymentStatusLabel(item.status)} />
              </td>
              <td className='px-2'>
                <div className='w-full flex justify-center items-center'>
                  <div className='w-20'>
                    <OutlineButton
                      title='View Details'
                      fullWidth
                      onClick={() => setShowModal(true)}
                      size='h22'
                    />
                  </div>
                </div>
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
      <Modal open={showModal} close={(bool: boolean) => setShowModal(bool)} />
    </div>
  );
};
