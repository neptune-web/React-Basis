import React, { useEffect, useState } from 'react';

// third party components
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Loan, LoanState } from 'redux/reducers/loansState';

// storybook components
import { CardValueDetail } from 'stories/Card/CardValueDetail';
import ValueDetailList from 'stories/assets/json/value-detail.json';
import BaseLoader from 'components/baseLoader';
import { Tab } from 'stories/Tab';
import { TableMerchantDashboard } from 'stories/Table/TableMerchantDashboard';
import { ModalInputTypeDecline } from 'stories/Modal/ModalInputTypeDecline';
import { InputSearchbox } from '../../../stories/Input/InputSearchbox';

// styles
import styles from './index.module.scss';

const Dashboard = () => {
  const viewport = useSelector((state: any) => state.device.viewport);
  const loansState = useSelector((state: any) => state.loans as LoanState);

  const [searchKeyword, setSearchKeyword] = useState('');
  const [open, setOpen] = useState(false);

  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    success = false,
    loading = false,
    error,
    totalOutStanding,
    activeLoans,
    dashboardRepayments,
  } = loansState;

  // useEffect(() => {
  //   if (!success && !loading && !error) {
  //     const userUuid = encryptedStorage.getItem('user_uuid');

  //     if (userUuid) {
  //       const requestBody = {
  //         // user_uuid: userUuid,
  //         user_uuid: 'TestUserUUID-1',
  //       };

  //       dispatch(fetchUserLoans(requestBody) as any);
  //     }
  //   }
  // }, [success, loading, error, dispatch]);

  // const [step, setStep] = useState(0);

  //  tab variables and functions
  const tabList = [
    { label: 'All' },
    { label: 'Invited' },
    { label: 'Initiated' },
    { label: 'Completed' },
    { label: 'Cancelled' },
    { label: 'Queued' },
    { label: 'Transfered' },
  ];
  const [activeTab, setActiveTab] = useState(0);
  const handleSelectTab = (index: number) => {
    setActiveTab(index);
  };

  const handleAction = (action: string) => {
    if (action === 'Cancel Loan') {
      setOpen(true);
    } else {
      navigate('/merchant/dashboard/issue-refund');
    }
  };

  const handleApplyClick = (clicked: boolean) => {
    setOpen(clicked);
  };

  const handleCancleClick = (clicked: boolean) => {
    setOpen(clicked);
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
      <div className='w-full flex flex-wrap'>
        <div className='w-full flex'>
          <h3 className='font-secondary-bold text-xl'>Welcome&nbsp;</h3>
          <h3 className='font-secondary-bold font-green-color text-xl'>Merchant</h3>
        </div>
      </div>
      <div className='w-full grid grid-cols-12 gap-5 my-8'>
        {ValueDetailList.map((item, index) => (
          <div className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3' key={index}>
            <CardValueDetail value={item.value} detail={item.detail} />
          </div>
        ))}
      </div>
      <div className='w-full flex flex-wrap'>
        <div className='w-full flex'>
          <h3 className='font-secondary-bold text-xl'>Loans</h3>
        </div>
      </div>
      <div className='w-full flex flex-wrap'>
        <div className='w-full flex mt-5 mr-5 mb-[29px] justify-between'>
          <InputSearchbox
            placeholder='Search'
            getValue={(value: string) => setSearchKeyword(value)}
            value={searchKeyword}
          />
          <div>
            <Tab
              tabList={tabList}
              activeTab={activeTab}
              selectTab={(index: number) => handleSelectTab(index)}
            />
          </div>
        </div>
      </div>
      {activeTab === 0 && (
        <TableMerchantDashboard
          // data={data}
          filter={searchKeyword}
          onClickActionButton={(item) => handleAction(item.action)}
        />
      )}
      {activeTab === 1 && (
        <TableMerchantDashboard
          // data={data}
          filter={searchKeyword}
          onClickActionButton={(item) => handleAction(item.action)}
        />
      )}

      {activeTab === 2 && (
        <TableMerchantDashboard
          // data={data}
          filter={searchKeyword}
          onClickActionButton={(item) => handleAction(item.action)}
        />
      )}
      {activeTab === 3 && (
        <TableMerchantDashboard
          // data={data}
          filter={searchKeyword}
          onClickActionButton={(item) => handleAction(item.action)}
        />
      )}

      {activeTab === 4 && (
        <TableMerchantDashboard
          // data={data}
          filter={searchKeyword}
          onClickActionButton={(item) => handleAction(item.action)}
        />
      )}
      {activeTab === 5 && (
        <TableMerchantDashboard
          // data={data}
          filter={searchKeyword}
          onClickActionButton={(item) => handleAction(item.action)}
        />
      )}
      {activeTab === 6 && (
        <TableMerchantDashboard
          // data={data}
          filter={searchKeyword}
          onClickActionButton={(item) => handleAction(item.action)}
        />
      )}
      <ModalInputTypeDecline
        open={open}
        onOkClick={() => handleApplyClick(false)}
        onCancelClick={() => handleCancleClick(false)}
      />
    </div>
  ) : (
    <div className={styles.mobileContainer}>
      <div className='w-full flex flex-wrap'>
        <div className='w-full flex'>
          <h3 className='font-secondary-bold text-xl'>Welcome&nbsp;</h3>
          <h3 className='font-secondary-bold font-green-color text-xl'>Merchant</h3>
        </div>
      </div>
      <div className='w-full flex justify-around my-11'>
        <div>
          <div className='font-secondary-bold font-green-color text-xl text-center'>$9,000.00</div>
          <div className='font-primary-regular font-primary-color text-xs text-center'>
            Amount received from basis
          </div>
        </div>
        <div>
          <div className='font-secondary-bold font-green-color text-xl text-center'>36</div>
          <div className='font-primary-regular font-primary-color text-xs text-center'>
            Number of loans issued
          </div>
        </div>
      </div>
      <div className='font-secondary-bold text-xl'>Loans</div>
      <div className='w-full my-7'>
        <InputSearchbox
          placeholder='Search'
          getValue={(value: string) => setSearchKeyword(value)}
          value={searchKeyword}
        />
      </div>
      <div className='overflow-x-auto'>
        <Tab
          tabList={tabList}
          activeTab={activeTab}
          selectTab={(index: number) => handleSelectTab(index)}
        />
      </div>
      <div className='w-full overflow-x-auto'>
        {activeTab === 0 && (
          <TableMerchantDashboard
            // data={data}
            filter={searchKeyword}
            onClickActionButton={(item) => handleAction(item.action)}
          />
        )}
        {activeTab === 1 && (
          <TableMerchantDashboard
            // data={data}
            filter={searchKeyword}
            onClickActionButton={(item) => handleAction(item.action)}
          />
        )}

        {activeTab === 2 && (
          <TableMerchantDashboard
            // data={data}
            filter={searchKeyword}
            onClickActionButton={(item) => handleAction(item.action)}
          />
        )}
        {activeTab === 3 && (
          <TableMerchantDashboard
            // data={data}
            filter={searchKeyword}
            onClickActionButton={(item) => handleAction(item.action)}
          />
        )}

        {activeTab === 4 && (
          <TableMerchantDashboard
            // data={data}
            filter={searchKeyword}
            onClickActionButton={(item) => handleAction(item.action)}
          />
        )}
        {activeTab === 5 && (
          <TableMerchantDashboard
            // data={data}
            filter={searchKeyword}
            onClickActionButton={(item) => handleAction(item.action)}
          />
        )}
        {activeTab === 6 && (
          <TableMerchantDashboard
            // data={data}
            filter={searchKeyword}
            onClickActionButton={(item) => handleAction(item.action)}
          />
        )}
      </div>
      <ModalInputTypeDecline
        open={open}
        onOkClick={() => handleApplyClick(false)}
        onCancelClick={() => handleCancleClick(false)}
      />
    </div>
  );
};

export default Dashboard;
