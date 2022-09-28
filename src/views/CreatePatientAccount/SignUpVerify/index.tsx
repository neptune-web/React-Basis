import React, { useState, useEffect } from 'react';

// storybook components
import { Image } from 'stories/Image';
import { ButtonLinkText } from 'stories/Button/ButtonLinkText';

// third party components
import { useNavigate } from 'react-router-dom';
import ReactInputVerificationCode from 'react-input-verification-code';
import { useSelector, useDispatch } from 'react-redux';

// lotties
import VerifyEmailAddress from 'stories/assets/lotties/verify-email-address.json';

// styles
import { userGenerateCode, userVerifyCode } from 'redux/actionCreators/userRegistration';
import BaseLoader from 'components/baseLoader';
import { encryptedStorage } from 'services/encryptedStorage';
import { UserState } from 'redux/reducers/userState';
import styles from './index.module.scss';

const SignUpVerify = () => {
  const viewport = useSelector((state: any) => state.device.viewport);
  const { userDetails } = useSelector((state: any) => state.userInfo as UserState);

  const [pinError, setPinError] = useState(false);

  const [pin, setPin] = useState('      ');
  const [verificationId, setVerificationId] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const generateEmailVerificationCode = async () => {
    const registrationId = encryptedStorage.getItem('registration_id');
    const userUuid = encryptedStorage.getItem('user_uuid');

    const userGeneralEmailCode = {
      user_uuid: userUuid,
      registration_id: registrationId,
      contact_type: 'email',
    };

    const userGenerateCodeData = await dispatch(userGenerateCode(userGeneralEmailCode) as any);

    if (userGenerateCodeData && userGenerateCodeData.status === 'success') {
      setVerificationId(userGenerateCodeData.data.verification_id);
    }
  };

  useEffect(() => {
    const registrationId = encryptedStorage.getItem('registration_id');
    const userUuid = encryptedStorage.getItem('user_uuid');

    if (!userUuid || !registrationId) {
      navigate('/signin');
    } else {
      generateEmailVerificationCode();
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
      contact_type: 'email',
      verification_code: pin,
    };

    const verifyCodeDate = await dispatch(userVerifyCode(userData) as any);

    if (verifyCodeDate.data.verification_status === 'incorrect') {
      setPinError(true);
    } else {
      navigate('/signup/congrats');
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

  const [isResendingCode, setIsResendingCode] = useState(false);
  const [isResendingCodeSend, setIsResendingCodeSend] = useState(false);

  const onPressResendCode = async () => {
    setIsResendingCode(true);

    await generateEmailVerificationCode();

    setIsResendingCode(false);
    setIsResendingCodeSend(true);

    // setTimeout(() => setIsResendingCodeSend(false), 5000);
  };

  if (!verificationId) {
    return (
      <div className='h-full w-full flex justify-center items-center'>
        <BaseLoader />
      </div>
    );
  }

  const getUserEmail = (): string => {
    if (userDetails && userDetails.contact_information) {
      for (const contactInfo of userDetails.contact_information) {
        if (contactInfo.contact_type === 'email') {
          return contactInfo.contact_value;
        }
      }
    }

    return '';
  };

  return (
    <div className={styles.container}>
      <div className={styles.signUpModal}>
        <Image
          src={VerifyEmailAddress}
          width={viewport === 'mobile' ? 272 : 426}
          height={viewport === 'mobile' ? 208 : 364}
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
          <h3 className='text-[32px] font-secondary'>
            {isResendingCodeSend ? 'Code' : 'Verify your'}&nbsp;
          </h3>
          <h3 className='text-[32px] font-secondary-bold font-green-color'>
            {isResendingCodeSend ? 'Resent ' : 'Email Address'}
          </h3>
        </div>
        <div className='w-full text-center font-grey-color'>
          {`We have ${
            isResendingCodeSend ? 're' : ''
          }sent a code to ${getUserEmail()}. Please enter it here.`}
        </div>
        <div className='w-full flex justify-center mt-9'>
          {isResendingCode ? (
            <BaseLoader height={24} width={60} />
          ) : (
            <ButtonLinkText label='Resend Code' onClick={onPressResendCode} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUpVerify;
