import React from 'react';

// storybook components
import { LinkText } from 'stories/LinkText';

// third party components
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// custom components
import { JoinUsButton } from 'stories/Button/JoinUsButton';

// images and icons
import PatientContainedIcon from 'stories/assets/icons/Icon_JoinUs_Contained_Patient.svg';
import PatientOutlinedIcon from 'stories/assets/icons/Icon_JoinUs_Outlined_Patient.svg';
import MerchantContainedIcon from 'stories/assets/icons/Icon_JoinUs_Contained_Merchant.svg';
import MerchantOutlinedIcon from 'stories/assets/icons/Icon_JoinUs_Outlined_Merchant.svg';

// styles
import { encryptedStorage } from 'services/encryptedStorage';
import styles from './JoinUsSection.module.scss';

const JoinUsSection = () => {
  const navigate = useNavigate();

  const viewport = useSelector((state: any) => state.device.viewport);

  const handleClickSignin = () => {
    navigate('/signin');
  };

  const handleClickPatient = () => {
    encryptedStorage.setItem('type', JSON.stringify('patient'));
    navigate('/signup');
  };

  const handleClickMerchant = () => {
    encryptedStorage.setItem('type', JSON.stringify('merchant'));
    navigate('/signup');
  };

  return (
    <div className={styles.container}>
      {viewport !== 'mobile' && (
        <div className='flex justify-end mt-[43px] mr-[49px]'>
          <LinkText
            label1='Already have an account?'
            label2='Sign In'
            handleClickLink={handleClickSignin}
          />
        </div>
      )}
      <div className={styles.contentArea}>
        <div className={`flex ${viewport !== 'mobile' ? '' : 'justify-center'}`}>
          <h3 className='text-[32px] font-secondary'>
            {viewport !== 'mobile' ? 'Join' : `Let's Get`}&nbsp;
          </h3>
          <h3 className='text-[32px] font-secondary-bold font-green-color'>
            {viewport !== 'mobile' ? 'Us!' : 'Started'}
          </h3>
        </div>
        <div
          className={`${viewport !== 'mobile' ? 'text-left' : 'text-center'} font-grey-color mt-4`}
        >
          To use Basis, please tell us what type of account you'll need
        </div>
        <div className={styles.buttonArea}>
          <JoinUsButton
            onClick={handleClickPatient}
            containedIcon={PatientContainedIcon}
            outlinedIcon={PatientOutlinedIcon}
            title='Patient'
            description="I'm looking for financing to help pay a bill"
          />
          <JoinUsButton
            onClick={handleClickMerchant}
            containedIcon={MerchantContainedIcon}
            outlinedIcon={MerchantOutlinedIcon}
            title='Merchant'
            description="I'm a provider that wants to offer basis to my patients"
          />
        </div>
        {viewport === 'mobile' && (
          <div className='w-full flex justify-center mt-6 mb-12'>
            <LinkText
              label1='Already have an account?'
              label2='Sign In'
              handleClickLink={handleClickSignin}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default JoinUsSection;
