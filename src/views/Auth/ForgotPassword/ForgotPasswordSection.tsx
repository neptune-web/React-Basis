import React, { useEffect, useState } from 'react';

// storybook components
import { ButtonBack } from 'stories/Button/ButtonBack';
import { InputEmail } from 'stories/Input/InputEmail';
import { Button } from 'stories/Button';

// third party components
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// custom functions
import { validateEmail } from 'utils';
import { forgotPasswordGenerateCode } from '../../../redux/actionCreators/userRegistration';

// styles
import styles from './ForgotPasswordSection.module.scss';

const ForgotPasswordSection = () => {
  const navigate = useNavigate();

  const viewport = useSelector((state: any) => state.device.viewport);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [emailValidate, setEmailValidate] = useState({
    count: 0,
    success: true,
    type: '',
  });

  const handleClickBack = () => {
    navigate(-1);
  };

  // email validate
  const handleEmailValidate = () => {
    if (emailValidate.count !== 0) {
      if (email === '') {
        setEmailValidate({ count: 1, success: false, type: 'required' });
      } else if (!validateEmail(email)) {
        setEmailValidate({ count: 1, success: false, type: 'pattern' });
      } else {
        setEmailValidate({ count: 1, success: true, type: '' });
      }
    } else {
      setEmailValidate({ count: 1, success: true, type: 'required' });
    }
  };
  useEffect(() => {
    handleEmailValidate();
  }, [email]);

  const [isLoading, setIsLoading] = useState(false);
  const handleContinue = async () => {
    if (emailValidate.success && emailValidate.count === 1 && emailValidate.type === '') {
      const emailAddress = { email };

      setIsLoading(true);

      const forgotPasswordData = await dispatch(forgotPasswordGenerateCode(emailAddress) as any);

      setIsLoading(false);

      if (forgotPasswordData && forgotPasswordData.status === 'success') {
        navigate('/forgot-password/reset');
      }
    } else {
      handleEmailValidate();
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
        <div className={`flex ${viewport !== 'mobile' ? '' : 'justify-center'}`}>
          <h3 className='text-[32px] font-secondary'>Forgot&nbsp;</h3>
          <h3 className='text-[32px] font-secondary-bold font-green-color'>Password?</h3>
        </div>
        <div
          className={`flex font-grey-color mt-4 mb-6 ${viewport !== 'mobile' ? '' : 'text-center'}`}
        >
          Please enter your email address in order to receive a password reset link
        </div>
        {viewport !== 'mobile' && <div className='divider mt-[22px] mb-[44px]' />}
        <div>
          <InputEmail
            label='Email address*'
            email={email}
            emailValidate={emailValidate}
            getEmail={(event: any) => setEmail(event.target.value)}
            size={viewport === 'mobile' ? 'h54' : ''}
          />
        </div>
        <div className={styles.buttonArea}>
          <Button
            title='Send The Password Reset Email'
            fullWidth
            onClick={() => handleContinue()}
            size={viewport === 'mobile' ? 'h54' : ''}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordSection;
