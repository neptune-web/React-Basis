import React, { useEffect, useState } from 'react';

// images and icons
import IconLeftArrow from '../../assets/icons/Icon_Left_Arrow.svg';
import IconRightArrow from '../../assets/icons/Icon_Right_Arrow.svg';

// storybook components
import { IconButton } from '../../Button/IconButton';
import { Chip } from '../../Chip';
import { OutlineButton } from '../../Button/OutlineButton';
import { Tab } from '../../Tab';
import { ModalChangeRepaymentDate } from '../../Modal/ModalChangeRepaymentDate';
import { ModalDeductionSuccess } from '../../Modal/ModalDeductionSuccess';
import { ModalDeductionFailure } from '../../Modal/ModalDeductionFailure';

// styles
import styles from './index.module.scss';

interface RepaymentLedgerDataProps {
  id: number;
  loanId: string;
  deductionAmount: number;
  deductionDate: string;
  repaymentMethod: string;
  status: string;
  action: boolean;
}

interface TableRepaymentLedgerProps {
  data: RepaymentLedgerDataProps[];
  onClick?: (path: string) => void;
  viewport: string;
}

export const TableRepaymentLedger: React.FC<TableRepaymentLedgerProps> = (props) => {
  const { data, onClick = () => {}, viewport } = props;

  const [showModalChangeRepaymentDate, setShowModalChangeRepaymentDate] = useState(false);
  const [showModalDeductionSuccess, setShowModalDeductionSuccess] = useState(false);
  const [showModalDeductionFailure, setShowModalDeductionFailure] = useState(false);

  const [total, setTotal] = useState(0);
  const rowCount = 8;
  const [tableData, setTableData] = useState(data);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  // tab variables and functions
  const tabList = [
    { label: 'All' },
    { label: 'Upcoming' },
    { label: 'Future' },
    { label: 'Missed' },
    { label: 'Repaid' },
  ];
  const [activeTab, setActiveTab] = useState(0);
  const handleSelectTab = (index: number) => {
    setActiveTab(index);
  };
  const [list, setList] = useState<RepaymentLedgerDataProps[]>([]);

  useEffect(() => {
    setPageCount(Math.ceil(list.length / rowCount));
    setTotal(list.length);
    setTableData(list.slice(currentPage * rowCount, currentPage * rowCount + rowCount));
  }, [list, pageCount, currentPage]);

  useEffect(() => {
    let array = [];
    setPageCount(0);
    setCurrentPage(0);
    switch (activeTab) {
      case 0:
        setList(data);
        break;
      case 1:
        array = data.filter((item) => item.status === 'Upcoming');
        setList(array);
        break;
      case 2:
        array = data.filter((item) => item.status === 'Future');
        setList(array);
        break;
      case 3:
        array = data.filter((item) => item.status === 'Missed');
        setList(array);
        break;
      case 4:
        array = data.filter((item) => item.status === 'Repaid');
        setList(array);
        break;
      default:
        break;
    }
  }, [activeTab]);

  return (
    <div className='w-full'>
      <div className='w-full flex justify-between items-center'>
        <div>
          <Tab
            tabList={tabList}
            activeTab={activeTab}
            selectTab={(index: number) => handleSelectTab(index)}
          />
        </div>
        <div className='flex justify-end items-center w-auto h-10 px-3 rounded-lg'>
          <IconButton
            icon={IconLeftArrow}
            disabled={currentPage === 0}
            onClick={() => setCurrentPage(currentPage - 1)}
          />
          <div className='flex mx-2 whitespace-nowrap'>
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
      <table className='w-full table-auto'>
        <thead>
          <tr
            className={`font-primary-regular text-xs text-center font-grey-color ${styles.tableHeader}`}
          >
            <th className='px-2'>Loan ID</th>
            <th className='px-2'>Deduction Amount</th>
            <th className='px-2'>Deduction Date</th>
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
              <td className='px-2'>{item.loanId}</td>
              <td className='px-2'>{item.deductionAmount}</td>
              <td className='px-2'>{item.deductionDate}</td>
              <td className='px-2'>{item.repaymentMethod}</td>
              <td className='px-2 h-14 flex justify-center items-center'>
                <Chip status={item.status} label={item.status} />
              </td>
              <td className='px-2'>
                <div className='w-full flex justify-center items-center'>
                  <div>
                    <OutlineButton
                      title={item.status === 'Upcoming' ? 'Change Repayment Date' : 'View Details'}
                      fullWidth
                      onClick={() =>
                        item.status === 'Upcoming'
                          ? setShowModalChangeRepaymentDate(true)
                          : item.status === 'Repaid'
                          ? setShowModalDeductionSuccess(true)
                          : item.status === 'Missed'
                          ? setShowModalDeductionFailure(true)
                          : {}
                      }
                      size='h22'
                    />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ModalChangeRepaymentDate
        open={showModalChangeRepaymentDate}
        close={(bool: boolean) => setShowModalChangeRepaymentDate(bool)}
        onClick={() => setShowModalChangeRepaymentDate(false)}
      />
      <ModalDeductionSuccess
        open={showModalDeductionSuccess}
        close={(bool: boolean) => setShowModalDeductionSuccess(bool)}
        onClick={() => setShowModalDeductionSuccess(false)}
        viewport={viewport}
      />
      <ModalDeductionFailure
        open={showModalDeductionFailure}
        close={(bool: boolean) => setShowModalDeductionFailure(bool)}
        onClick={() => {
          setShowModalDeductionFailure(false);
          onClick('/dashboard/pay-now');
        }}
        viewport={viewport}
      />
    </div>
  );
};
