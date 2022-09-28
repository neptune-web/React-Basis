import React, { useEffect, useState } from 'react';

// storybook components
import { BackgroundLarge } from 'stories/BackgroundLarge';
import { Button } from 'stories/Button';
import { Image } from 'stories/Image';

// third party components
import ReactInputVerificationCode from 'react-input-verification-code';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// lotties
import VerifyMobileNumber from 'stories/assets/lotties/verify-mobile-number.json';

// styles
import { userVerifyCode } from 'redux/actionCreators/userRegistration';
import { encryptedStorage } from 'services/encryptedStorage';
import styles from './index.module.scss';

const SettingsVerify = () => {
  const navigate = useNavigate();
  const viewport = useSelector((state: any) => state.device.viewport);

  const dispatch = useDispatch();

  const [pinError, setPinError] = useState(false);

  const [pin, setPin] = useState('      ');
  const [verification, setVerification] = useState(false);
  const [verificationId, setVerificationId] = useState();

  const changeCode = (value: string) => {
    setPin(value);
  };

  useEffect(() => {
    if (pin) {
      setPinError(false);
      setVerification(true);
    }
    // }
  }, [pin]);

  const [isLoading, setIsLoading] = useState(false);

  const handleContinue = async () => {
    const userUuid = encryptedStorage.getItem('user_uuid');

    if (verification) {
      const userData = {
        user_uuid: userUuid,
        verification_id: verificationId,
        verification_code: pin,
      };

      // setIsLoading(true);

      // const data = await dispatch(userVerifyCode(userData) as any);

      // setIsLoading(false);

      // if (data.data.verification_status === 'incorrect') {
      //   setPinError(true);
      // } else {
      //   navigate('/dashboard/settings');
      // }
    }
  };

  return (
    <div className={styles.container}>
      <BackgroundLarge />
      <div className={styles.modal}>
        <Image
          src={VerifyMobileNumber}
          width={viewport === 'mobile' ? 249 : 342}
          height={viewport === 'mobile' ? 249 : 342}
        />
        <div className={styles.titleArea}>
          <h3 className='text-[32px] font-secondary'>
            {verification ? 'Verification' : 'Verify your'}&nbsp;
          </h3>
          <h3 className='text-[32px] font-secondary-bold font-green-color'>
            {verification ? 'Successful!' : 'Mobile Number'}
          </h3>
        </div>
        <div className='text-center font-grey-color'>
          Please provide the verification code received via text message below
        </div>
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
        <div className='flex justify-center w-full pt-[14px]'>
          <Button
            title='Continue'
            hasArrow
            fullWidth
            disabled={!verification}
            onClick={() => handleContinue()}
            isLoading={isLoading}
          />
        </div>
        <div className={styles.textArea}>
          <div>
            <span className='font-primary-regular font-grey-color'>
              Want to change number?&nbsp;
            </span>
            <span
              role='button'
              tabIndex={0}
              className='font-primary-semibold font-green-color cursor-pointer'
              onClick={() => {}}
              onKeyDown={() => navigate('/terms-conditions')}
            >
              Click Here
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsVerify;
