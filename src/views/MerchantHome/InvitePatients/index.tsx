import React, { useEffect, useState } from 'react';

// third party components
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Loan, LoanState } from 'redux/reducers/loansState';

// storybook components
import BaseLoader from 'components/baseLoader';
import { CardPatientNotification } from 'stories/Card/CardPatientNotification';
import NotificationList from 'stories/assets/json/patients-notifications.json';
import { OutlineButton } from 'stories/Button/OutlineButton';
import { ButtonBack } from 'stories/Button/ButtonBack';
import { InputEmailInvitePatient } from 'stories/Input/InputEmailInvitePatient';
import { InputPhoneInvitePatient } from 'stories/Input/InputPhoneInvitePatient';

// string constants
import { StringConstatnts } from 'utils/stringConstants';

// styles
import styles from './index.module.scss';

const InvitePatients = () => {
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
      <div className='w-full flex flex-l justify-between'>
        <div className='text-xl font-primary-blue-color font-secondary-bold'>
          {StringConstatnts.INVITE_PATIENTS}
        </div>
        <div>
          <ButtonBack onClick={() => navigate('/merchant/invite-patients')} viewport={viewport} />
        </div>
      </div>
      <div className='w-full flex gap-6 lg:gap-[83px] mt-[35px]'>
        <div className={styles.card}>
          <div className='font-primary-medium font-primary-black-color text-center text-lg'>
            {StringConstatnts.INVITE_PATIENT_TO_BASIS}
          </div>
          <div className='font-primary-regular font-primary-black-color text-center text-sm mx-[22px] my-[19px]'>
            {StringConstatnts.INVITE_PATIENT_INFO}
          </div>
          <div className={styles.division}>&nbsp;</div>
          <div className='ml-[25px] mt-8'>
            <InputEmailInvitePatient
              label='Email'
              email={email}
              emailValidate={emailValidate}
              getEmail={(event: any) => setEmail(event.target.value)}
              size='h40'
            />
          </div>
          <div className='font-secondary-regular font-grey-color text-center text-xs mt-7'>
            & / Or
          </div>
          <div className='ml-[25px] mt-7'>
            <InputPhoneInvitePatient
              label='Phone Number'
              phone=''
              phoneValidate={phoneValidate}
              getPhone={(value: string) => getPhone(value)}
              size='h40'
            />
          </div>
          <div className='ml-[25px] mt-[47px] mb-[35px] mr-[25px]'>
            <OutlineButton
              title='Invite Patient'
              onClick={() => onClick()}
              fullWidth
              height='50px'
              fontSize='16px'
            />
          </div>
          <div className={styles.division}>&nbsp;</div>
          <div className='ml-[25px] mt-[29px] mb-[30px] mr-[27px] text-sm font-primary-color font-primary-regular'>
            <a className='font-primary-blue-color font-primary-bold' href=''>
              {StringConstatnts.CLICK_HERE}
            </a>
            {StringConstatnts.CLICK_HERE_INFO}
          </div>
        </div>
        <div className='flex flex-l h-fit flex-wrap'>
          <div className='w-full text-xl font-primary-blue-color font-secondary-bold'>
            {StringConstatnts.NOTIFICATIONS}
          </div>
          <div className='w-full flex flex-wrap gap-[3px] mt-[37px]'>
            {NotificationList.map((item, index) => (
              <div className='w-full' key={index}>
                <CardPatientNotification
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
      <div className='w-full flex justify-between'>
        <div className='text-xl font-primary-blue-color font-secondary-bold'>
          {StringConstatnts.INVITE_PATIENTS}
        </div>
        <div className='mr-4'>
          <ButtonBack onClick={() => navigate('/merchant/invite-patients')} viewport={viewport} />
        </div>
      </div>
      <div className='w-full gap-[126px] mt-[38px]'>
        <div className={styles.cardMobile}>
          <div className='font-secondary-regular font-primary-black-color text-center text-lg'>
            {StringConstatnts.INVITE_PATIENT_TO_BASIS}
          </div>
          <div className='font-secondary-regular font-primary-black-color text-center text-sm mx-[22px] my-[19px]'>
            {StringConstatnts.INVITE_PATIENT_INFO}
          </div>
          <div className={styles.division}>&nbsp;</div>
          <div className='ml-[25px] mt-8'>
            <InputEmailInvitePatient
              label='Email'
              email={email}
              emailValidate={emailValidate}
              getEmail={(event: any) => setEmail(event.target.value)}
              size='h40'
            />
          </div>
          <div className='font-secondary-regular font-grey-color text-center text-xs mt-7'>
            & / Or
          </div>
          <div className='ml-[25px] mt-7'>
            <InputPhoneInvitePatient
              label='Phone Number'
              phone=''
              phoneValidate={phoneValidate}
              getPhone={(value: string) => getPhone(value)}
              size='h40'
            />
          </div>
          <div className='ml-[25px] mt-[47px] mb-[35px] mr-[25px]'>
            <OutlineButton
              title='Invite Patient'
              onClick={() => onClick()}
              fullWidth
              height='50px'
              fontSize='16px'
            />
          </div>
          <div className={styles.division}>&nbsp;</div>
          <div className='ml-[25px] mt-[29px] mb-[30px] mr-[27px] text-sm font-primary-color  font-secondary-bold'>
            <a className='font-primary-blue-color' href=''>
              {StringConstatnts.CLICK_HERE}
            </a>
            {StringConstatnts.CLICK_HERE_INFO}
          </div>
        </div>
        <div className='flex flex-wrap'>
          <div className='w-full text-xl font-primary-blue-color font-secondary-bold'>
            {StringConstatnts.NOTIFICATIONS}
          </div>
          <div className='w-full flex flex-wrap gap-[3px] mt-[37px]'>
            {NotificationList.map((item, index) => (
              <div className='w-full' key={index}>
                <CardPatientNotification
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
  );
};

export default InvitePatients;
