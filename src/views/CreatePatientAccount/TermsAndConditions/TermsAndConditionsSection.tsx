import React, { useEffect, useRef, useState } from 'react';

// storybook components
import { StepLabel } from 'stories/StepLabel';
import { ScrollContentArea } from 'stories/ScrollContentArea';
import { Button } from 'stories/Button';
import { Stepper } from 'stories/Stepper';
import { Image } from 'stories/Image';

// third party componentss
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// lotties
import SuccessfulIcon from 'stories/assets/lotties/successful-icon.json';

// json data
import terms01Json from 'stories/assets/json/terms-01.json';
import terms02Json from 'stories/assets/json/terms-02.json';
import terms03Json from 'stories/assets/json/terms-03.json';

// styles
import { acceptTermsAndConditions } from 'redux/actionCreators/userRegistration';
import { encryptedStorage } from 'services/encryptedStorage';
import styles from './TermsAndConditionsSection.module.scss';

export const TermsAndConditionsSection = () => {
  const navigate = useNavigate();

  const viewport = useSelector((state: any) => state.device.viewport);
  const dispatch = useDispatch();

  const [currentStep, setCurrentStep] = useState(1);
  const [readState, setReadState] = useState(true);

  const [content, setContent] = useState(terms01Json);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const registrationId = encryptedStorage.getItem('registration_id');
    const userUuid = encryptedStorage.getItem('user_uuid');

    if (!userUuid || !registrationId) {
      navigate('/signin');
    }
  }, []);

  const handleClickContiune = async () => {
    const registrationId = encryptedStorage.getItem('registration_id');
    const userUuid = encryptedStorage.getItem('user_uuid');

    const userData = {
      user_uuid: userUuid,
      registration_id: registrationId,
    };

    setIsLoading(true);

    const data = await dispatch(acceptTermsAndConditions(userData) as any);

    setIsLoading(false);

    if (data.status === 'success' && data.data.user_uuid) {
      navigate('/dashboard');
    } else {
      // TODO do something here to show error dialog
    }
  };

  const listInnerRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;

      if (scrollTop + clientHeight >= scrollHeight - 16) {
        setReadState(false);
      } else {
        setReadState(true);
      }
    }
  };

  useEffect(() => {
    switch (currentStep) {
      case 1:
        setContent(terms01Json);
        break;
      case 2:
        setContent(terms02Json);
        break;
      case 3:
        setContent(terms03Json);
        break;
      default:
        setContent(terms01Json);
        break;
    }
  }, [currentStep]);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.scrollIntoView();
    }
  }, [content]);

  return currentStep !== 4 ? (
    <div className={viewport !== 'mobile' ? styles.container : styles.m_container}>
      {viewport !== 'mobile' && (
        <div className='w-full flex justify-end'>
          <StepLabel stepLabel='STEP 03/03' stepTitle='Terms & Conditions' />
        </div>
      )}
      <div className='relative flex flex-wrap justify-center w-full'>
        <h3 className='text-[32px] font-secondary'>Terms &&nbsp;</h3>
        <h3 className='text-[32px] font-secondary-bold font-green-color'>Conditions!</h3>
      </div>
      <div className='w-full lg:w-[431px] flex justify-center text-left lg:text-center font-grey-color mb-6'>
        For the purpose of industry regulation, you are required to read & accept our Terms &
        conditions.
      </div>
      {viewport === 'mobile' && (
        <div className={styles.stepArea}>
          <StepLabel stepLabel='STEP 03/03' stepTitle='Terms & Conditions' />
          <div className='divider mt-7 mb-4' />
        </div>
      )}

      {/* content part */}
      <div className={styles.scrollContentArea}>
        <div className={styles.scrollContentRealArea} onScroll={onScroll} ref={listInnerRef}>
          <div ref={titleRef}>
            <ScrollContentArea data={content} />
          </div>
        </div>
      </div>
      {/* stepper part */}
      <div className={styles.stepperArea}>
        <Stepper currentStep={currentStep} readState={readState} />
      </div>
      {/* button part */}
      <div className='flex justify-center w-full mt-8 w-[334px]'>
        <Button
          title='Accept & Continue'
          hasArrow
          fullWidth
          disabled={readState}
          onClick={() => {
            setCurrentStep(currentStep + 1);
            setReadState(true);
          }}
        />
      </div>
    </div>
  ) : (
    <div className={styles.container}>
      <Image
        src={SuccessfulIcon}
        width={viewport === 'mobile' ? 249 : 344}
        height={viewport === 'mobile' ? 249 : 344}
      />
      <div className='w-full flex flex-wrap justify-center items-center text-center'>
        <h3
          className={`${
            viewport !== 'mobile' ? 'text-[32px]' : 'text-[24px]'
          } font-secondary-bold font-green-color`}
        >
          Congratulations!
        </h3>
        <h3 className={`${viewport !== 'mobile' ? 'text-[32px]' : 'text-[24px]'} font-secondary`}>
          &nbsp;Your profile is complete!
        </h3>
      </div>
      <div className='w-full flex justify-center w-[334px]'>
        <Button
          title='Continue'
          hasArrow
          fullWidth
          onClick={() => handleClickContiune()}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};
