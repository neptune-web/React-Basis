import React, { useState } from 'react';
import { ajvResolver } from '@hookform/resolvers/ajv';

// storybook components
import { Checkbox } from 'stories/Checkbox';
import { Button } from 'stories/Button';
import { LinkText } from 'stories/LinkText';

// third party components
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// custom functions
import { InputEmail2 } from 'stories/Input/InputEmail2';
import { Controller, useForm } from 'react-hook-form';
import { InputPassword2 } from 'stories/Input/InputPassword2';
import {
  fetchUserPersonalDetails,
  getUserRegistrationStatus,
  userLogin,
} from '../../../redux/actionCreators/userRegistration';

// styles
import styles from './SignInSection.module.scss';
import SignInSchema from '../../../formSchemas/signInSchema.json';

interface FormValues {
  email: string;
  password: string;
}

const SignInSection = () => {
  const { handleSubmit, control } = useForm<FormValues>({
    resolver: ajvResolver(SignInSchema),
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const navigate = useNavigate();

  const viewport = useSelector((state: any) => state.device.viewport);

  const dispatch = useDispatch();

  const [rememberMe, setRememberMe] = useState(false);

  const handleClickSignup = () => {
    navigate('/signup');
  };

  const handleClickForgotPassword = () => {
    navigate('/forgot-password');
  };

  // passowrd validate
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (data: FormValues) => {
    setIsLoading(true);

    const userSignInData = await dispatch(
      userLogin({
        email: data.email,
        password: data.password,
        type: 'customer',
        is_remember_me: rememberMe,
      }) as any
    );

    if (userSignInData && userSignInData.status === 'success') {
      const registrationStatusData = await dispatch(
        getUserRegistrationStatus(userSignInData.data.user.user_uuid) as any
      );

      if (registrationStatusData && registrationStatusData.status === 'success') {
        await dispatch(fetchUserPersonalDetails(userSignInData.data.user.user_uuid) as any);

        switch (registrationStatusData.data.registration.current_stage) {
          case 'email_verification':
            navigate('/signup-verify');
            break;
          case 'personal_information':
            navigate('/setup-profile');
            break;
          case 'phone_verification':
            navigate('/setup-verify');
            break;
          case 'terms_and_conditions':
            navigate('/terms-conditions');
            break;
          default:
            navigate('/dashboard');
            break;
        }
      }
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)} className={styles.container}>
      <div className={styles.contentArea}>
        <div className={`flex ${viewport !== 'mobile' ? '' : 'justify-center'}`}>
          <h3 className='text-[32px] font-secondary-bold mt-2 mb-2'>Login into&nbsp;</h3>
          <h3 className='text-[32px] font-secondary-bold font-green-color mt-2 mb-2'>Basis!</h3>
        </div>
        <div
          className={`${viewport === 'desktop' ? 'text-left' : 'text-center'} font-grey-color mb-6`}
        >
          Please enter your login details to access your account
        </div>
        {/* {emailError && <div className='font-red-color text-sm pt-[10px]'>{emailError}</div>} */}
        {viewport !== 'mobile' && <div className='divider mb-12' />}
        <div className='w-full flex flex-wrap justify-center items-center'>
          <Controller
            control={control}
            name='email'
            render={({ field: { value, ...rest }, fieldState: { isTouched, error } }) => {
              const errorMessage =
                isTouched && value?.length === 0 ? 'Email is required' : error?.message;

              return (
                <InputEmail2
                  label='Email address'
                  size={viewport === 'mobile' ? 'h54' : ''}
                  errorMessage={errorMessage}
                  {...rest}
                />
              );
            }}
          />

          <Controller
            control={control}
            name='password'
            render={({ field: { value, ...rest }, fieldState: { isTouched, error } }) => {
              const errorMessage =
                isTouched && value?.length === 0 ? 'Password is required' : error?.message;

              return (
                <InputPassword2
                  label='Password'
                  placeholder='Enter password'
                  size={viewport === 'mobile' ? 'h54' : ''}
                  errorMessage={errorMessage}
                  {...rest}
                />
              );
            }}
          />
          <div className='w-full flex justify-end font-grey-color'>
            <span
              role='button'
              tabIndex={0}
              onClick={handleClickForgotPassword}
              onKeyDown={handleClickForgotPassword}
              className='cursor-pointer'
            >
              Forgot Password?
            </span>
          </div>
          <div className={`w-full flex justify-center ${viewport === 'mobile' ? 'mt-7' : 'mt-16'}`}>
            <Checkbox label='Remember me' onChange={setRememberMe} />
          </div>
          <div className={`w-full ${viewport === 'mobile' ? 'mt-7' : 'mt-9'}`}>
            <Button
              title='Login'
              fullWidth
              // onClick={() => handleLogin()}
              size={viewport === 'mobile' ? 'h54' : ''}
              isLoading={isLoading}
            />
          </div>
          <div className={`w-full flex justify-center ${viewport === 'mobile' ? 'my-7' : 'my-16'}`}>
            <LinkText
              label1='New to Basis?'
              label2='Sign Up Here'
              handleClickLink={handleClickSignup}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignInSection;
