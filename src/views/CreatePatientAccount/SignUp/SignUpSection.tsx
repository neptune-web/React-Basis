import React, { useState } from 'react';

// storybook components
import { ButtonBack } from 'stories/Button/ButtonBack';
import { StepLabel } from 'stories/StepLabel';
import { Status, StatusCheckbox } from 'stories/StatusCheckbox';
import { Button } from 'stories/Button';
import { LinkText } from 'stories/LinkText';

// third party components
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// custom functions
import {
  validateUpperCasePassword,
  validateLowerCasePassword,
  validateSpecialCasePassword,
  validateNumberCasePassword,
} from 'utils';

import { Checkbox } from 'stories/Checkbox';
import { Controller, useForm } from 'react-hook-form';
import { ajvResolver } from '@hookform/resolvers/ajv';
import { InputEmail2 } from 'stories/Input/InputEmail2';
import { InputPassword2 } from 'stories/Input/InputPassword2';
import { useTypedSelector } from '../../../hooks/useTypeSelector';
import {
  fetchUserPersonalDetails,
  userLogin,
  userRegister,
} from '../../../redux/actionCreators/userRegistration';

// styles
import styles from './SignUpSection.module.scss';

import SignUpSchema from '../../../formSchemas/signUpSchema.json';

interface FormValues {
  email: string;
  password: string;
}

const SignUpSection = () => {
  const { handleSubmit, control, watch } = useForm<FormValues>({
    resolver: ajvResolver(SignUpSchema),
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { password } = watch();

  const navigate = useNavigate();

  const viewport = useTypedSelector((state: any) => state.device.viewport);
  const dispatch = useDispatch();

  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const upperCaseValidate = !!validateUpperCasePassword(password)?.length;
  const lowerCaseValidate = !!validateLowerCasePassword(password)?.length;
  const specialCaseValidate = !!validateSpecialCasePassword(password)?.length;
  const numberCaseValidate = !!validateNumberCasePassword(password)?.length;

  const handleClickBack = () => {
    navigate(-1);
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleClickSignUp = async (data: FormValues) => {
    if (upperCaseValidate && lowerCaseValidate && specialCaseValidate && numberCaseValidate) {
      const authInfo = {
        email: data.email,
        password: data.password,
      };

      setIsLoading(true);

      const userRegisterData = await dispatch(userRegister(authInfo) as any);

      if (userRegisterData && userRegisterData.status === 'success') {
        const userSignInData = await dispatch(
          userLogin({
            email: authInfo.email,
            password: authInfo.password,
            type: 'customer',
            is_remember_me: false,
          }) as any
        );

        if (userSignInData && userSignInData.status === 'success') {
          await dispatch(fetchUserPersonalDetails(userSignInData.data.user.user_uuid) as any);

          navigate('/signup-verify');
        }
      }

      setIsLoading(false);
    }
  };

  const handleClickSignin = () => {
    navigate('/signin');
  };

  return (
    <form onSubmit={handleSubmit(handleClickSignUp)} className={styles.container}>
      <div className={styles.container}>
        {viewport !== 'mobile' && (
          <div className={styles.infoContainer}>
            <ButtonBack onClick={() => handleClickBack()} />
            <StepLabel stepLabel='STEP 01/03' stepTitle='Email Address' />
          </div>
        )}
        <div className={styles.formContainer}>
          <div className='flex flex-wrap mt-2'>
            <h3 className='text-[32px] font-secondary'>Register&nbsp;</h3>
            <h3 className='text-[32px] font-secondary-bold font-green-color'>
              Individual Account!
            </h3>
          </div>
          <div className='text-left font-grey-color mt-3 mb-6'>
            For the purpose of industry regulation, your details are required.
          </div>
          {viewport === 'mobile' && (
            <div className='w-full mt-10 mb-5'>
              <StepLabel stepLabel='STEP 01/03' stepTitle='Email Address' />
            </div>
          )}
          {/* {emailError && <div className='font-red-color text-sm pt-[10px]'>{emailError}</div>} */}
          <div className={`divider ${viewport === 'mobile' ? 'mb-5' : 'mb-12'}`} />
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
                    label='Create password*'
                    placeholder='Enter password'
                    size={viewport === 'mobile' ? 'h54' : ''}
                    errorMessage={errorMessage}
                    {...rest}
                  />
                );
              }}
            />
            <div className='w-full mt-4'>
              <StatusCheckbox
                status={upperCaseValidate ? Status.CHECKED : Status.CROSSED}
                label='Uppercase character (ABCD)'
              />
              <StatusCheckbox
                status={lowerCaseValidate ? Status.CHECKED : Status.CROSSED}
                label='Lowercase character (abcd)'
              />
              <StatusCheckbox
                status={specialCaseValidate ? Status.CHECKED : Status.CROSSED}
                label='Special character (!@#$)'
              />
              <StatusCheckbox
                status={numberCaseValidate ? Status.CHECKED : Status.CROSSED}
                label='Numeric character (0123)'
              />
            </div>

            <div className={`${viewport === 'mobile' ? 'mt-12' : 'mt-[88px]'}`}>
              <Checkbox
                label='I agree to terms & conditions'
                onChange={(value) => setAgreedToTerms(value)}
              />
            </div>
            <div className='w-full mt-[32px]'>
              <Button
                title='Register Account'
                fullWidth
                disabled={!agreedToTerms}
                // onClick={() => handleClickSignUp()}
                size={viewport === 'mobile' ? 'h54' : ''}
                isLoading={isLoading}
              />
            </div>
            <div
              className={`w-full flex justify-center ${
                viewport === 'mobile' ? 'mt-6 mb-4' : 'mt-12'
              }`}
            >
              <LinkText
                label1='Already have an account?'
                label2='Sign In'
                handleClickLink={handleClickSignin}
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUpSection;
