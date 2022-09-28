import React, { useEffect, useState } from 'react';

// third party components
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Loan, LoanState } from 'redux/reducers/loansState';

// storybook components
import BaseLoader from 'components/baseLoader';
import { CardPatientHistory } from 'stories/Card/CardPatientHistory';
import PatientHistoryList from 'stories/assets/json/patient-history.json';
import PatientProfileInfo from 'stories/assets/json/patient-profile.json';
import { OutlineButton } from 'stories/Button/OutlineButton';
import { ButtonBack } from 'stories/Button/ButtonBack';
import { InputEmailInvitePatient } from 'stories/Input/InputEmailInvitePatient';
import { InputPhoneInvitePatient } from 'stories/Input/InputPhoneInvitePatient';
import { CardPatientProfile } from 'stories/Card/CardPatientProfile';
import { Tab } from 'stories/Tab';

// string constants
import { StringConstatnts } from '../../../../utils/stringConstants';

// styles
import styles from './index.module.scss';

const DashboardPatientProfile = () => {
  const viewport = useSelector((state: any) => state.device.viewport);
  const loansState = useSelector((state: any) => state.loans as LoanState);

  const [searchKeyword, setSearchKeyword] = useState('');
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const {
    success = false,
    loading = false,
    error,
    totalOutStanding,
    activeLoans,
    dashboardRepayments,
  } = loansState;

  const [email, setEmail] = useState('');
  const [emailValidate, setEmailValidate] = useState({
    count: 0,
    success: true,
    type: '',
  });

  // phone

  const [phone, setPhone] = useState('');
  const [phoneValidate, setPhoneValidate] = useState({
    count: 0,
    success: true,
    type: '',
  });

  const getPhone = (value: string) => {
    setPhone(value);
  };

  // tab list
  const [tabList, setTabList] = useState([
    { label: 'Overview' },
    { label: 'BAS1002' },
    { label: 'BAS1003' },
    { label: 'BAS1004' },
    { label: 'BAS1005' },
    { label: 'BAS1006' },
    { label: 'BAS1007' },
  ]);

  const [activeTab, setActiveTab] = useState(0);

  const handleSelectTab = (index: number) => {
    setActiveTab(index);
  };

  const onClick = () => {};
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

  if (loading) {
    return (
      <div className='h-full w-full flex justify-center items-center'>
        <BaseLoader />
      </div>
    );
  }

  return viewport !== 'mobile' ? (
    <div className={styles.container}>
      <div className='w-full flex relative'>
        <div className='absolute top-1 left-0'>
          <ButtonBack onClick={() => navigate('/merchant/dashboard')} viewport={viewport} />
        </div>
        <div className='w-full text-center text-xl font-primary-blue-color font-secondary-bold'>
          {StringConstatnts.PATIENT_PROFILE}
        </div>
      </div>
      <div className='w-full flex gap-6 lg:gap-[36px]'>
        <div className='w-full max-w-[247px] h-fit flex flex-wrap'>
          <div className='w-full font-secondary-bold font-primary-color text-xl mt-[61px] mb-5 ml-5'>
            {StringConstatnts.DETAILS}
          </div>
          <CardPatientProfile
            name={PatientProfileInfo.name}
            birthday={PatientProfileInfo.birthday}
            address={PatientProfileInfo.address}
            phoneNumber={PatientProfileInfo.phoneNumber}
            email={PatientProfileInfo.email}
            createdDate={PatientProfileInfo.createdDate}
          />
        </div>
        <div className='flex flex-wrap' style={{ width: 'calc(100% - 283px)' }}>
          <div className='w-full font-secondary-bold font-primary-color text-xl mt-[61px] mb-5 ml-[36px]'>
            {StringConstatnts.HISTORY}
          </div>
          <div className='w-full mb-6 pl-[36px]'>
            <Tab
              tabList={tabList}
              activeTab={activeTab}
              selectTab={(index: number) => handleSelectTab(index)}
            />
          </div>
          <div className={styles.division} style={{ marginLeft: '36px' }} />
          {activeTab !== 0 && (
            <div className='w-full ml-[36px]'>
              <div className='w-full flex justify-between my-5'>
                <div>
                  <div className='row-span-1 col-span-1 font-primary-medium font-primary-blue-color text-center text-xs'>
                    {StringConstatnts.LOAN_ID}
                  </div>
                  <div className='row-span-2 col-span-1 font-primary-medium font-primary-color text-center text-sm'>
                    {StringConstatnts.BAS1002}
                  </div>
                </div>
                <div>
                  <div className='row-span-1 col-span-2 font-primary-medium font-primary-blue-color text-center text-xs'>
                    {StringConstatnts.INVITATION_DATE}
                  </div>
                  <div className='row-span-2 col-span-2 font-primary-medium font-primary-color text-center text-sm'>
                    01/01/2001
                  </div>
                </div>
                <div>
                  <div className='row-span-1 col-span-3 font-primary-medium font-primary-blue-color text-center text-xs'>
                    {StringConstatnts.LOAN_STATUS}
                  </div>
                  <div className='row-span-2 col-span-3 font-primary-medium font-primary-color text-center text-sm'>
                    In Payment
                  </div>
                </div>
                <div>
                  <div className='row-span-1 col-span-4 font-primary-medium font-primary-blue-color text-center text-xs'>
                    {StringConstatnts.LOAN_AMOUNT}
                  </div>
                  <div className='row-span-2 col-span-4 font-primary-medium font-primary-color text-center text-sm'>
                    $1000.00
                  </div>
                </div>
                <div>
                  <div className='row-span-1 col-span-5 font-primary-medium font-primary-blue-color text-center text-xs'>
                    {StringConstatnts.LOAN_COMPLETION_DATE}
                  </div>
                  <div className='row-span-2 col-span-5 font-primary-medium font-primary-color text-center text-sm'>
                    01/01/2002
                  </div>
                </div>
              </div>
              <div className={styles.division} />
            </div>
          )}
          <div className={styles.cardArea}>
            {PatientHistoryList.map((item, index) => (
              <div className='w-full ' key={index}>
                <CardPatientHistory
                  title={item.title}
                  detail={item.detail}
                  dateInfo={item.dateInfo}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className={styles.mobileContainer}>
      <div>
        <ButtonBack onClick={() => navigate('/merchant/dashboard')} viewport={viewport} />
      </div>
      <div className='w-full text-center text-2xl font-primary-blue-color font-secondary-bold mt-[21px] mb-[42px]'>
        {StringConstatnts.PATIENT_PROFILE}
      </div>
      <div className='w-full'>
        <div className='font-secondary-bold font-primary-color text-xl mb-5'>
          {StringConstatnts.DETAILS}
        </div>
        <CardPatientProfile
          name={PatientProfileInfo.name}
          birthday={PatientProfileInfo.birthday}
          address={PatientProfileInfo.address}
          phoneNumber={PatientProfileInfo.phoneNumber}
          email={PatientProfileInfo.email}
          createdDate={PatientProfileInfo.createdDate}
        />
        <div className='flex h-fit flex-wrap'>
          <div className='w-full font-secondary-bold font-primary-color text-xl ml-[9px] mt-[42px] mb-[23px]'>
            {StringConstatnts.HISTORY}
          </div>
          <div className='w-full mb-6'>
            <Tab
              tabList={tabList}
              activeTab={activeTab}
              selectTab={(index: number) => handleSelectTab(index)}
            />
          </div>
          <div className={`${styles.division} -mx-[18px]`} style={{ width: 'calc(100% + 36px' }} />
          {activeTab !== 0 && (
            <div className='w-full'>
              <div className='w-full flex justify-between px-[18px] my-7'>
                <div className='block'>
                  <div className='block'>
                    <div className='font-primary-medium font-primary-blue-color text-xs'>
                      {StringConstatnts.LOAN_ID}
                    </div>
                    <div className='font-primary-medium font-primary-color text-sm'>
                      {StringConstatnts.BAS1002}
                    </div>
                  </div>
                  <div className='block mt-1'>
                    <div className='font-primary-medium font-primary-blue-color text-xs'>
                      {StringConstatnts.LOAN_STATUS}
                    </div>
                    <div className='font-primary-medium font-primary-color text-sm'>In Payment</div>
                  </div>
                  <div className='block mt-1'>
                    <div className='font-primary-medium font-primary-blue-color text-xs'>
                      {StringConstatnts.LOAN_COMPLETION_DATE}
                    </div>
                    <div className='font-primary-medium font-primary-color text-sm'>01/01/2002</div>
                  </div>
                </div>
                <div className='block h-fit'>
                  <div className='block'>
                    <div className='row-span-1 col-span-2 font-primary-medium font-primary-blue-color text-xs'>
                      {StringConstatnts.INVITATION_DATE}
                    </div>
                    <div className='row-span-2 col-span-2 font-primary-medium font-primary-color text-sm'>
                      01/01/2001
                    </div>
                  </div>
                  <div className='block mt-1'>
                    <div className='row-span-1 col-span-4 font-primary-medium font-primary-blue-color text-xs'>
                      {StringConstatnts.LOAN_AMOUNT}
                    </div>
                    <div className='row-span-2 col-span-4 font-primary-medium font-primary-color text-sm'>
                      $1000.00
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`${styles.division} -mx-[18px]`}
                style={{ width: 'calc(100% + 36px' }}
              />
            </div>
          )}
          <div className='w-full flex flex-wrap gap-[3px] mt-[37px]'>
            {PatientHistoryList.map((item, index) => (
              <CardPatientHistory
                title={item.title}
                detail={item.detail}
                dateInfo={item.dateInfo}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPatientProfile;
