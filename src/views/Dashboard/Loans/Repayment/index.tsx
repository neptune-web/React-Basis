import React, { useEffect, useState } from 'react';

// storybook components
import { ButtonBack } from 'stories/Button/ButtonBack';
import { Tab } from 'stories/Tab';
import { ProviderDetailCard } from 'stories/Card/ProviderDetailCard';
import { LoanDetailCard } from 'stories/Card/LoanDetailCard';
import { RepaymentDetailCard } from 'stories/Card/RepaymentDetailCard';
import { TableRepaymentHistory } from 'stories/Table/TableRepaymentHistory';
import { Select } from 'stories/Select/Select';

// third party components
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

// json
import { Loan } from 'redux/reducers/loansState';
import { RepaymentCycleLabel } from 'utils/commonEnums';
import { fetchUserLoans } from 'redux/actionCreators/fetchLoans';
import _ from 'lodash';
import BaseLoader from 'components/baseLoader';
import { encryptedStorage } from 'services/encryptedStorage';
import LoanRepaymentTypeList from '../../../../stories/assets/json/loans-repayment-type.json';

// styles
import styles from './index.module.scss';

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const LoansRepayment = () => {
  const navigate = useNavigate();
  const viewport = useSelector((state: any) => state.device.viewport);
  const loansState = useSelector((state: any) => state.loans);

  const dispatch = useDispatch();
  const query = useQuery();
  const loanId = query.get('id');

  const handleClickBack = () => {
    navigate(-1);
  };

  const [loanDetails, setLoanDetails] = useState({} as Loan);

  useEffect(() => {
    const { success = false, loading = false, error } = loansState;

    if (!success && !loading && !error) {
      const userUuid = encryptedStorage.getItem('user_uuid');

      if (userUuid) {
        const requestBody = {
          // user_uuid: userUuid,
          user_uuid: 'TestUserUUID-1',
        };

        dispatch(fetchUserLoans(requestBody) as any);
      }
    } else if (success) {
      const getCurrentLoan = (): Loan => {
        const { loans = [] } = loansState;

        return loans.find((loan: any) => String(loan.id) === loanId);
      };

      const currentLoan = getCurrentLoan();

      if (currentLoan) {
        setLoanDetails(currentLoan);
      }
    }
  }, [loansState, loanId, dispatch]);

  // tab part
  const tabList = [{ label: 'Overview' }, { label: 'Repayment History' }];

  const [activeTab, setActiveTab] = useState(0);

  const handleSelectTab = (index: number) => {
    setActiveTab(index);
  };

  const contactInfo = { email: 'Abbytoothcare@gmail.com', phone: '123456789, 987654321' };

  const [loanRepaymentType, setLoanRepaymentType] = useState(LoanRepaymentTypeList[0]);
  const [loanRepaymentTypeValidate, setLoanRepaymentTypeValidate] = useState({ success: true });

  const getLoanRepaymentType = (value: any) => {
    setLoanRepaymentTypeValidate({ success: true });
    setLoanRepaymentType(value);
    setActiveTab(value.id);
  };

  const { loading = false } = loansState;

  if (_.isEmpty(loanDetails)) {
    if (loading) {
      return (
        <div className='h-full w-full flex justify-center items-center'>
          <BaseLoader />
        </div>
      );
    }

    return (
      <div className='h-full w-full flex justify-center items-center font-secondary-bold whitespace-nowrap text-lg pr-4'>
        No Loan Found with ID: {loanId}
      </div>
    );
  }

  return viewport !== 'mobile' ? (
    <div className={styles.container}>
      <div className='w-full flex justify-between items-center mb-[42px]'>
        <ButtonBack onClick={() => handleClickBack()} />
        {/* title part */}
        <div className='font-secondary-bold font-primary-blue-color text-2xl'>In Repayment</div>
        <div />
      </div>
      <div className='w-full font-secondary-bold text-lg'>{loanDetails.loanId}</div>
      <div className='w-full mt-10 -ml-4'>
        <Tab
          tabList={tabList}
          activeTab={activeTab}
          selectTab={(index: number) => handleSelectTab(index)}
        />
      </div>
      {activeTab === 0 && (
        <div className='mt-[42px] grid grid-cols-12 md:gap-x-[22px]'>
          <div className='col-span-12 lg:col-span-4'>
            <ProviderDetailCard
              name='Abby Tooth Care'
              address='1901 Thornridge Cir. Shiloh, Hawaii 81063'
              contactInfo={contactInfo}
            />
          </div>
          <div className='col-span-12 lg:col-span-4'>
            <LoanDetailCard
              loanID={loanDetails.loanId}
              loanIssueDate={loanDetails.loanIssueDate.toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
              loanedAmount={loanDetails.loanAmount}
              balance={loanDetails.outstanding}
              onClickViewTila={() => {}}
            />
          </div>
          <div className='col-span-12 lg:col-span-4'>
            <RepaymentDetailCard
              frequency={RepaymentCycleLabel(loanDetails.repaymentCycle)}
              method='Via Bank Account'
              date='3 of each month'
              deduction={loanDetails.numberOfDeductions}
              account='Chase 1234'
              onClick={() => {}}
            />
          </div>
        </div>
      )}
      {activeTab === 1 && (
        <div className='w-full mt-[42px]'>
          <TableRepaymentHistory
            loanId={loanDetails.loanId}
            data={loanDetails.repayments}
            onClickActionButton={(item) => {}}
          />
        </div>
      )}
    </div>
  ) : (
    <div className={styles.mobileContainer}>
      <div className='w-full flex justify-between items-center'>
        <div className='w-full font-secondary-bold whitespace-nowrap text-lg pr-4'>
          Loan View - BAS1001
        </div>
        <Select
          list={LoanRepaymentTypeList}
          label=''
          placeholder='Select loan Repayment type'
          select={loanRepaymentType}
          validate={loanRepaymentTypeValidate}
          getSelect={(value: any) => getLoanRepaymentType(value)}
          size='h40'
        />
      </div>
      {activeTab === 0 && (
        <div className='mt-6 grid grid-cols-12 md:gap-x-[22px]'>
          <div className='col-span-12 lg:col-span-4'>
            <ProviderDetailCard
              name='Abby Tooth Care'
              address='1901 Thornridge Cir. Shiloh, Hawaii 81063'
              contactInfo={contactInfo}
            />
          </div>
          <div className='col-span-12 lg:col-span-4'>
            <LoanDetailCard
              loanID={loanDetails.loanId}
              loanIssueDate={loanDetails.loanIssueDate.toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
              loanedAmount={loanDetails.loanAmount}
              balance={loanDetails.outstanding}
              onClickViewTila={() => {}}
            />
          </div>
          <div className='col-span-12 lg:col-span-4'>
            <RepaymentDetailCard
              frequency={RepaymentCycleLabel(loanDetails.repaymentCycle)}
              method='Via Bank Account'
              date='3 of each month'
              deduction={10}
              account='Chase 1234'
              onClick={() => {}}
            />
          </div>
        </div>
      )}
      {activeTab === 1 && (
        <div className='w-full mt-6'>
          <TableRepaymentHistory
            loanId={loanDetails.loanId}
            data={loanDetails.repayments}
            onClickActionButton={(item) => {}}
          />
        </div>
      )}
    </div>
  );
};

export default LoansRepayment;
