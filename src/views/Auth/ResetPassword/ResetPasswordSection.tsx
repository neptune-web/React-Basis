import React, { useEffect, useState } from 'react';
// storybook components
import { ButtonBack } from 'stories/Button/ButtonBack';
import { Button } from 'stories/Button';
import { InputVerificationCode } from 'stories/Input/InputVerificationCode';
import { InputPassword } from 'stories/Input/InputPassword';
import { Status, StatusCheckbox } from 'stories/StatusCheckbox';

// third party components
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// custom functions
import {
  validatePassword,
  validateUpperCasePassword,
  validateLowerCasePassword,
  validateSpecialCasePassword,
  validateNumberCasePassword,
} from 'utils';

// styles
import { forgotPasswordVerifyCode } from 'redux/actionCreators/userRegistration';
import styles from './ResetPasswordSection.module.scss';

const ResetPasswordSection = () => {
  const navigate = useNavigate();

  const viewport = useSelector((state: any) => state.device.viewport);

  const userInfo = useSelector((state: any) => state.userResetPassword.user);
  const dispatch = useDispatch();
  // code
  const [code, setCode] = useState('');
  const [codeValidate, setCodeValidate] = useState({ count: 0, success: true, type: '' });

  const [verificationCodeError, setverificationCodeError] = useState('');

  // code validate
  const handleCodeValidate = () => {
    setverificationCodeError('');
    if (codeValidate.count !== 0) {
      if (code === '') {
        setCodeValidate({ count: 1, success: false, type: 'required' });
        // } else if (code !== '123456') {
        //   setCodeValidate({ count: 1, success: false, type: 'pattern' });
      } else {
        setCodeValidate({ count: 1, success: true, type: '' });
      }
    } else {
      setCodeValidate({ count: 1, success: true, type: 'required' });
    }
  };
  useEffect(() => {
    handleCodeValidate();
  }, [code]);

  // password
  const [password, setPassword] = useState('');
  const [passwordValidate, setPasswordValidate] = useState({
    count: 0,
    success: true,
    type: '',
  });

  const [upperCaseValidate, setUpperCaseValidate] = useState(false);
  const [lowerCaseValidate, setLowerCaseValidate] = useState(false);
  const [numberCaseValidate, setNumberCaseValidate] = useState(false);
  const [specialCaseValidate, setSpecialCaseValidate] = useState(false);

  // passowrd validate
  const handlePasswordValidate = () => {
    if (passwordValidate.count !== 0) {
      if (password === '') {
        setPasswordValidate({ count: 1, success: false, type: 'required' });
      } else if (!validatePassword(password)) {
        setPasswordValidate({ count: 1, success: false, type: 'pattern' });
      } else {
        setPasswordValidate({ count: 1, success: true, type: '' });
      }

      // uppercase
      if (!validateUpperCasePassword(password)) {
        setUpperCaseValidate(false);
      } else {
        setUpperCaseValidate(true);
      }
      // lowercase
      if (!validateLowerCasePassword(password)) {
        setLowerCaseValidate(false);
      } else {
        setLowerCaseValidate(true);
      }
      // specialcase
      if (!validateSpecialCasePassword(password)) {
        setSpecialCaseValidate(false);
      } else {
        setSpecialCaseValidate(true);
      }
      // numbercase
      if (!validateNumberCasePassword(password)) {
        setNumberCaseValidate(false);
      } else {
        setNumberCaseValidate(true);
      }
    } else {
      setPasswordValidate({ count: 1, success: true, type: 'required' });
    }
  };
  useEffect(() => {
    handlePasswordValidate();
  }, [password]);

  const handleClickBack = () => {
    navigate(-1);
  };

  const [isLoading, setIsLoading] = useState(false);
  const handleContinue = async () => {
    if (
      codeValidate.count === 1 &&
      codeValidate.success &&
      codeValidate.type === '' &&
      passwordValidate.count === 1 &&
      passwordValidate.success &&
      passwordValidate.type === ''
    ) {
      const userPasswordInfo = {
        email: userInfo.email,
        new_password: password,
        verification_id: userInfo.verification_id,
        verification_code: code,
      };

      setIsLoading(true);

      const data = await dispatch(forgotPasswordVerifyCode(userPasswordInfo) as any);

      setIsLoading(false);

      if (data.status === 'success' && data.data.verification_status === 'correct') {
        navigate('/reset-password/congrats');
      } else if (data.status === 'success' && data.data.verification_status === 'incorrect') {
        setverificationCodeError('Verification code is incorrect. Please try again!');
      } else if (data.status === 'failed') {
        setverificationCodeError(data.error_message);
      }
    } else {
      handleCodeValidate();
      handlePasswordValidate();
    }
  };

  return (
    <div className={styles.container}>
      {viewport !== 'mobile' && (
        <div className='absolute top-[76px] left-[60px]'>
          <ButtonBack onClick={() => handleClickBack()} />
        </div>
      )}
      <div className={styles.formContainer}>
        <div
          className={`flex flex-wrap mt-10 mb-2 ${viewport === 'mobile' ? 'justify-center' : ''}`}
        >
          <h3 className='text-[32px] font-secondary'>Reset&nbsp;</h3>
          <h3 className='text-[32px] font-secondary-bold font-green-color'>Password</h3>
        </div>
        <div
          className={`${viewport === 'desktop' ? 'text-left' : 'text-center'} font-grey-color mb-6`}
        >
          Please enter the verification code & create a new password.
        </div>

        {verificationCodeError !== '' && (
          <div className='font-red-color' style={{ fontSize: '14px', paddingBottom: '10px' }}>
            {verificationCodeError}
          </div>
        )}
        <div className='divider mb-[10px]' />
        <div>
          <InputVerificationCode
            label='Verification Code'
            code={code}
            codeValidate={codeValidate}
            getCode={(value: string) => setCode(value)}
          />
          <InputPassword
            label='Create password*'
            placeholder='Enter password'
            password={password}
            passwordValidate={passwordValidate}
            getPassword={(event: any) => setPassword(event.target.value)}
          />
          <div className={styles.passwordGuideContainer}>
            <StatusCheckbox
              status={upperCaseValidate === true ? Status.CHECKED : Status.CROSSED}
              label='Uppercase character (ABCD)'
            />
            <StatusCheckbox
              status={lowerCaseValidate === true ? Status.CHECKED : Status.CROSSED}
              label='Lowercase character (abcd)'
            />
            <StatusCheckbox
              status={specialCaseValidate === true ? Status.CHECKED : Status.CROSSED}
              label='Special character (!@#$)'
            />
            <StatusCheckbox
              status={numberCaseValidate === true ? Status.CHECKED : Status.CROSSED}
              label='Numeric character (0123)'
            />
          </div>
          <div className='form-control pb-10'>
            <Button
              title='Reset Password'
              fullWidth
              onClick={() => handleContinue()}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordSection;
