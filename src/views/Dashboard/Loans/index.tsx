import React, { useEffect, useState } from 'react';

// storybook components
import { Tab } from 'stories/Tab';
import { TableLoans } from 'stories/Table/TableLoans';
import { Select } from 'stories/Select/Select';

// third party components
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// json
import { fetchUserLoans } from 'redux/actionCreators/fetchLoans';
import { Loan } from 'redux/reducers/loansState';
import BaseLoader from 'components/baseLoader';
import { encryptedStorage } from 'services/encryptedStorage';
import LoansTypeList from '../../../stories/assets/json/loans-type.json';

// styles
import styles from './index.module.scss';

const Loans = () => {
  const navigate = useNavigate();
  const viewport = useSelector((state: any) => state.device.viewport);
  const loansState = useSelector((state: any) => state.loans);

  const dispatch = useDispatch();

  const { success = false, loading = false, error } = loansState;

  const loans = loansState.loans as Loan[];

  useEffect(() => {
    if (!success && !loading && !error) {
      const userUuid = encryptedStorage.getItem('user_uuid');

      if (userUuid) {
        const requestBody = {
          // user_uuid: userUuid,
          user_uuid: 'TestUserUUID-1',
        };

        dispatch(fetchUserLoans(requestBody) as any);
      }
    }
  }, [success, loading, error, dispatch]);

  // tab part
  const tabList = [{ label: 'All Loans' }, { label: 'Repaid' }];

  const [activeTab, setActiveTab] = useState(0);

  const handleSelectTab = (index: number) => {
    setActiveTab(index);
  };

  const [loansType, setLoansType] = useState(LoansTypeList[0]);
  const [loansTypeValidate, setLoansTypeValidate] = useState({ success: true });

  const getLoansType = (value: any) => {
    setLoansTypeValidate({ success: true });
    setLoansType(value);
    setActiveTab(value.id);
  };

  if (loading) {
    return (
      <div className='h-full w-full flex justify-center items-center'>
        <BaseLoader />
      </div>
    );
  }

  return viewport !== 'mobile' ? (
    <div className={styles.container}>
      <div className='w-full flex justify-between items-center mb-[35px]'>
        {/* <ButtonBack onClick={() => handleClickBack()} /> */}
        <div />
        {/* title part */}
        <div className='font-secondary-bold text-lg'>Loans</div>
        {/* tab part */}
        <div className='-mr-4'>
          <Tab
            tabList={tabList}
            activeTab={activeTab}
            selectTab={(index: number) => handleSelectTab(index)}
          />
        </div>
      </div>
      {activeTab === 0 && (
        <TableLoans
          data={loans}
          filter='all'
          onClickActionButton={(item) => navigate(`/dashboard/loans/repayment?id=${item.id}`)}
        />
      )}
      {activeTab === 1 && (
        <TableLoans
          data={loans}
          filter='repaid'
          onClickActionButton={(item) => navigate(`/dashboard/loans/repayment?id=${item.id}`)}
        />
      )}
    </div>
  ) : (
    <div className={styles.mobileContainer}>
      <div className='w-full flex justify-between items-center mb-[35px]'>
        <div className='font-secondary-bold text-lg'>Loans</div>
        <div>
          <Select
            list={LoansTypeList}
            label=''
            placeholder='Select loans type'
            select={loansType}
            validate={loansTypeValidate}
            getSelect={(value: any) => getLoansType(value)}
            size='h40'
          />
        </div>
      </div>
      {activeTab === 0 && (
        <TableLoans
          data={loans}
          filter='all'
          onClickActionButton={(item) => navigate(`/dashboard/loans/repayment?id=${item.id}`)}
        />
      )}
      {activeTab === 1 && (
        <TableLoans
          data={loans}
          filter='repaid'
          onClickActionButton={(item) => navigate(`/dashboard/loans/repayment?id=${item.id}`)}
        />
      )}
    </div>
  );
};

export default Loans;
