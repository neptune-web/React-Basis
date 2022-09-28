import React, { useEffect, useState } from 'react';

// storybook components
import { Image } from 'stories/Image';

// third party components
import ReactInputVerificationCode from 'react-input-verification-code';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// lotties
import VerifyMobileNumber from 'stories/assets/lotties/verify-mobile-number.json';

// styles
import { userGenerateCode, userVerifyCode } from 'redux/actionCreators/userRegistration';
import _ from 'lodash';
import { encryptedStorage } from 'services/encryptedStorage';
import BaseLoader from 'components/baseLoader';
import { UserState } from 'redux/reducers/userState';
import styles from './index.module.scss';

const SetupVerify = () => {
  const navigate = useNavigate();
  const { viewport } = useSelector((state: any) => state.device.viewport);
  const { userDetails } = useSelector((state: any) => state.userInfo as UserState);

  const [pinError, setPinError] = useState(false);

  const [pin, setPin] = useState('      ');
  const [verificationId, setVerificationId] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const registrationId = encryptedStorage.getItem('registration_id');
    const userUuid = encryptedStorage.getItem('user_uuid');

    const generateMobileVerificationCode = async () => {
      const userGeneralEmailCode = {
        user_uuid: userUuid,
        registration_id: registrationId,
        contact_type: 'phone',
      };

      const userGenerateCodeData = await dispatch(userGenerateCode(userGeneralEmailCode) as any);

      if (userGenerateCodeData && userGenerateCodeData.status === 'success') {
        setVerificationId(userGenerateCodeData.data.verification_id);
      }
    };

    if (!userUuid || !registrationId) {
      navigate('/signin');
    } else {
      generateMobileVerificationCode();
    }
  }, [dispatch, navigate]);

  const changeCode = (value: string) => {
    setPin(value);
  };

  const handleVerification = async () => {
    const registrationId = encryptedStorage.getItem('registration_id');
    const userUuid = encryptedStorage.getItem('user_uuid');

    const userData = {
      user_uuid: userUuid,
      registration_id: registrationId,
      verification_id: verificationId,
      contact_type: 'phone',
      verification_code: pin,
    };

    const userdata = await dispatch(userVerifyCode(userData) as any);

    if (userdata.data.verification_status === 'incorrect') {
      setPinError(true);
    } else {
      navigate('/setup/congrats');
    }
  };

  useEffect(() => {
    if (pin) {
      const spaceRemovedPin = pin.replace(' ', '');

      if (spaceRemovedPin.length === 6) {
        setPinError(false);
        handleVerification();
      }
    }
  }, [pin]);

  if (!verificationId) {
    return (
      <div className='h-full w-full flex justify-center items-center'>
        <BaseLoader />
      </div>
    );
  }

  const getUserMobile = (): string => {
    if (userDetails && userDetails.contact_information) {
      for (const contactInfo of userDetails.contact_information) {
        if (contactInfo.contact_type === 'phone') {
          return contactInfo.contact_value;
        }
      }
    }

    return '';
  };

  return (
    <div className={styles.container}>
      {/* <BackgroundLarge /> */}
      <div className={styles.modal}>
        <Image
          src={VerifyMobileNumber}
          width={viewport === 'mobile' ? 249 : 342}
          height={viewport === 'mobile' ? 249 : 342}
        />
        <div className='w-full flex justify-center'>
          <div className={styles.codeArea}>
            <ReactInputVerificationCode
              autoFocus
              length={6}
              onChange={(value: string) => changeCode(value)}
              value={pin}
            />
            {pinError && (
              <div className='w-full text-right font-red-color text-xs mt-2'>
                Incorrect Code. Please try again!
              </div>
            )}
          </div>
        </div>
        <div className={styles.titleArea}>
          <h3 className='text-[32px] font-secondary'>Verify your&nbsp;</h3>
          <h3 className='text-[32px] font-secondary-bold font-green-color'>Cell Phone Number</h3>
        </div>
        <div className='text-center font-grey-color'>
          {`We have texted a code to ${getUserMobile()}. Please enter it here.`}
        </div>
        <div className={styles.textArea}>
          <div>
            <span className='font-primary-regular font-grey-color'>
              Want to use a different phone number?&nbsp;
            </span>
            <span
              role='button'
              tabIndex={0}
              className='font-primary-semibold font-green-color cursor-pointer'
              onClick={() => navigate(-1)}
              onKeyDown={() => navigate(-1)}
            >
              Click Here
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupVerify;
