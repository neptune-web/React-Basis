import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// storybook components
import { InputName } from 'stories/Input/InputName';
import { InputPhone } from 'stories/Input/InputPhone';
import { Button } from 'stories/Button';
import { InputPassword } from 'stories/Input/InputPassword';
import { Tab } from 'stories/Tab';

// third party components
import { State } from 'country-state-city';
import 'react-calendar/dist/Calendar.css';
import 'react-phone-input-2/lib/style.css';
import { useNavigate } from 'react-router-dom';

// custom functions
import { validateName, validatePassword, validatePostalCode } from 'utils';

// styles
import BaseLoader from 'components/baseLoader';
import _ from 'lodash';
import { UserDetails, UserState } from 'redux/reducers/userState';
import { encryptedStorage } from 'services/encryptedStorage';
import { showSuccessDialog } from 'redux/actionCreators/showDialogs';
import { AccordionPersonalProfile } from 'stories/Accordion/AccordionPersonalProfile';
import PersonalInfoList from 'stories/assets/json/personal-profile.json';
import styles from './index.module.scss';

// string constants
import { StringConstatnts } from '../../../utils/stringConstants';

import {
  fetchUserPersonalDetails,
  updatePassword,
  updateUserPersonalDetails,
} from '../../../redux/actionCreators/userRegistration';

const Settings = () => {
  const navigate = useNavigate();
  const viewport = useSelector((state: any) => state.device.viewport);

  const { userDetails, userDetailsLoading, userDetailsSuccess, userDetailsError } = useSelector(
    (state: any) => state.userInfo as UserState
  );

  const dispatch = useDispatch();

  const [validate, setValidate] = useState(false);
  // first name
  const [firstName, setFirstName] = useState('');
  const [firstNameValidate, setFirstNameValidate] = useState({
    count: 0,
    success: true,
    type: '',
  });

  // firstName validate
  const handleFirstNameValidate = () => {
    if (firstNameValidate.count !== 0) {
      if (firstName === '') {
        setFirstNameValidate({ count: 1, success: false, type: 'required' });
      } else if (!validateName(firstName)) {
        setFirstNameValidate({ count: 1, success: false, type: 'pattern' });
      } else {
        setFirstNameValidate({ count: 1, success: true, type: '' });
      }
    } else {
      setFirstNameValidate({ count: 1, success: true, type: 'required' });
    }
  };
  useEffect(() => {
    handleFirstNameValidate();
  }, [firstName]);

  // last name
  const [lastName, setLastName] = useState('');
  const [lastNameValidate, setLastNameValidate] = useState({
    count: 0,
    success: true,
    type: '',
  });

  // lastName validate
  const handleLastNameValidate = () => {
    if (lastNameValidate.count !== 0) {
      if (lastName === '') {
        setLastNameValidate({ count: 1, success: false, type: 'required' });
      } else if (!validateName(lastName)) {
        setLastNameValidate({ count: 1, success: false, type: 'pattern' });
      } else {
        setLastNameValidate({ count: 1, success: true, type: '' });
      }
    } else {
      setLastNameValidate({ count: 1, success: true, type: 'required' });
    }
  };
  useEffect(() => {
    handleLastNameValidate();
  }, [lastName]);

  // birthday
  const today = new Date();
  const [birthday, setBirthday] = useState(new Date());
  const [birthdayValidate, setBirthdayValidate] = useState(true);
  const [birthdayCount, setBirthdayCount] = useState(0);

  const selectBirthday = (value: Date) => {
    setBirthdayCount(1);
    setBirthday(value);
  };

  const handleBirthdayValidate = () => {
    if (birthdayCount === 1) {
      if (today.getFullYear() - birthday.getFullYear() < 18) {
        setBirthdayValidate(false);
      } else {
        setBirthdayValidate(true);
      }
    }
  };
  useEffect(() => {
    handleBirthdayValidate();
  }, [birthday, birthdayCount]);

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

  const handlePhoneValidate = () => {
    if (phoneValidate.count !== 0) {
      if (phone === '') {
        setPhoneValidate({ count: 1, success: false, type: 'required' });
      } else if (phone.length !== 11) {
        setPhoneValidate({ count: 1, success: false, type: 'pattern' });
      } else {
        setPhoneValidate({ count: 1, success: true, type: '' });
      }
    } else {
      setPhoneValidate({ count: 1, success: true, type: 'required' });
    }
  };
  useEffect(() => {
    handlePhoneValidate();
  }, [phone]);

  // address 01
  const [address01, setAddress01] = useState<any>({});
  const [address01Validate, setAddress01Validate] = useState(true);
  const [address01Count, setAddress01Count] = useState(0);

  const handleAddress01Validate = () => {
    if (address01Count === 1) {
      if (address01 === undefined || JSON.stringify(address01) === JSON.stringify({})) {
        setAddress01Validate(false);
        // } else if (address01.formatted_address === undefined) {
        //   setAddress01Validate(false);
      } else {
        setAddress01Validate(true);
      }
    }
  };

  const [address02, setAddress02] = useState<any>({});
  const [address02Validate, setAddress02Validate] = useState({
    count: 0,
    success: true,
    type: '',
  });
  const [address02Count, setAddress02Count] = useState(0);
  const getAddress02 = (value: any) => {
    setAddress02Count(1);
    setAddress02(value);
  };

  const handleAddress02Validate = () => {
    if (address02Count === 1) {
      if (address02 === undefined || JSON.stringify(address02) === JSON.stringify({})) {
        setAddress02Validate({
          count: 1,
          success: false,
          type: '',
        });
        // } else if (address02.formatted_address === undefined) {
        //   setAddress02Validate(false);
      } else {
        setAddress02Validate({
          count: 1,
          success: true,
          type: '',
        });
      }
    }
  };

  useEffect(() => {
    handleAddress01Validate();
  }, [address01, address01Count]);

  useEffect(() => {
    handleAddress02Validate();
  }, [address02, address02Count]);

  // state
  const [state, setState] = useState({ value: '', label: '', isoCode: '' });
  const [stateValidate, setStateValidate] = useState({ count: 0, success: true });
  const getState = (value: any) => {
    setState(value);
  };

  // state validate
  const handleStateValidate = () => {
    if (stateValidate.count !== 0) {
      if (state.value === '' || state.label === '') {
        setStateValidate({ count: 1, success: false });
      } else {
        setStateValidate({ count: 1, success: true });
      }
    } else {
      setStateValidate({ count: 1, success: true });
    }
  };
  useEffect(() => {
    handleStateValidate();
  }, [state]);

  // suburb
  const [suburb, setSuburb] = useState({ value: '', label: '' });
  const [suburbValidate, setSuburbValidate] = useState({ count: 0, success: true });
  const getSuburb = (value: any) => {
    setSuburb(value);
  };

  // suburb validate
  const handleSuburbValidate = () => {
    if (suburbValidate.count !== 0) {
      if (suburb.value === '' || suburb.label === '') {
        setSuburbValidate({ count: 1, success: false });
      } else {
        setSuburbValidate({ count: 1, success: true });
      }
    } else {
      setSuburbValidate({ count: 1, success: true });
    }
  };
  useEffect(() => {
    handleSuburbValidate();
  }, [suburb]);

  // postal code
  const [postalCode, setPostalCode] = useState('');
  const [postalCodeValidate, setPostalcodeValidate] = useState({
    count: 0,
    success: true,
    type: '',
  });

  // postalCode validate
  const handlePostalCodeValidate = () => {
    if (postalCodeValidate.count !== 0) {
      if (postalCode === '') {
        setPostalcodeValidate({ count: 1, success: false, type: 'required' });
      } else if (!validatePostalCode(postalCode)) {
        setPostalcodeValidate({ count: 1, success: false, type: 'pattern' });
      } else {
        setPostalcodeValidate({ count: 1, success: true, type: '' });
      }
    } else {
      setPostalcodeValidate({ count: 1, success: true, type: 'required' });
    }
  };
  useEffect(() => {
    handlePostalCodeValidate();
  }, [postalCode]);

  const fillAddressFields = (value: any) => {
    if (
      value !== undefined &&
      !_.isEmpty(value) &&
      value.address_components !== undefined &&
      value.address_components.length > 0
    ) {
      let addressStreetNumber = '';
      let addressRoute = '';
      let neighborhood = '';
      let locality = '';
      let addressCity = '';
      let addressState = '';
      let addressStateISO = '';
      let addressPostalCode = '';

      for (const comp of value.address_components) {
        if ([...(comp.types || [])].find((item) => item === 'street_number')) {
          addressStreetNumber = comp.long_name;
        }

        if ([...(comp.types || [])].find((item) => item === 'route')) {
          addressRoute = comp.long_name;
        }

        if ([...(comp.types || [])].find((item) => item === 'neighborhood')) {
          neighborhood = comp.long_name;
        }

        if ([...(comp.types || [])].find((item) => item === 'locality')) {
          locality = comp.long_name;
        }

        if ([...(comp.types || [])].find((item) => item === 'administrative_area_level_2')) {
          addressCity = comp.long_name;
        }

        if ([...(comp.types || [])].find((item) => item === 'administrative_area_level_1')) {
          addressState = comp.long_name;
          addressStateISO = comp.short_name;
        }

        if ([...(comp.types || [])].find((item) => item === 'postal_code')) {
          addressPostalCode = comp.long_name;
        }
      }

      setAddress01Count(1);

      setAddress01((addressStreetNumber ? `${addressStreetNumber} ` : '') + addressRoute);

      setAddress02((neighborhood ? `${neighborhood}, ` : '') + locality);

      setSuburb({ value: addressCity, label: addressCity });

      setState({ value: addressState, label: addressState, isoCode: addressStateISO });

      setPostalCode(addressPostalCode);
    }
  };

  const [fetchedUserInfo, setFetchedUserInfo] = useState(false);

  const setUserDetailsFromAPIData = (userData: UserDetails) => {
    setLastName(userData.last_name);
    setFirstName(userData.first_name);

    if (userData.date_of_birth) {
      setBirthday(userData.date_of_birth);
    }

    if (userData.date_of_birth) {
      setBirthday(userData.date_of_birth);
    }

    if (userData.address) {
      setAddress01(userData.address.address_line_1);
      setAddress02(userData.address.address_line_2);

      const stateValue = State.getStateByCode(userData.address.state_code);
      if (stateValue) {
        setState({
          value: stateValue.name ? stateValue.name : '',
          label: stateValue.name ? stateValue.name : '',
          isoCode: stateValue?.isoCode,
        });

        setSuburb({
          label: userData.address.city,
          value: userData.address.city,
        });
      }

      setPostalCode(userData.address.zip_code);
    }

    const contactInfo = userData.contact_information || [];

    [...(contactInfo || [])].forEach((contact) => {
      if (contact && contact.contact_type === 'phone') {
        setPhone(contact.contact_value);
      }
    });

    setFetchedUserInfo(true);
  };

  const fetchUserInfo = async () => {
    const userUuid = encryptedStorage.getItem('user_uuid');

    const res = await dispatch(fetchUserPersonalDetails(userUuid) as any);

    if (res && res.data && !_.isEmpty(res.data)) {
      setUserDetailsFromAPIData(res.data);
    }
  };

  useEffect(() => {
    const registrationId = encryptedStorage.getItem('registration_id');
    const userUuid = encryptedStorage.getItem('user_uuid');

    if (
      userUuid &&
      registrationId &&
      !userDetailsSuccess &&
      !userDetailsLoading &&
      !userDetailsError
    ) {
      fetchUserInfo();
    } else if (userDetailsSuccess) {
      setUserDetailsFromAPIData(userDetails);
    }
  }, [userDetailsSuccess, userDetailsLoading, userDetailsError, dispatch]);

  useEffect(() => {
    if (
      firstNameValidate.count === 1 &&
      firstNameValidate.success &&
      firstNameValidate.type === '' &&
      lastNameValidate.count === 1 &&
      lastNameValidate.success &&
      lastNameValidate.type === '' &&
      birthdayValidate &&
      // birthdayCount === 1 &&
      address01Validate &&
      // address01Count === 1 &&
      address02Validate &&
      // address02Count === 1 &&
      stateValidate.success &&
      suburbValidate.success &&
      postalCodeValidate.count === 1 &&
      postalCodeValidate.success &&
      postalCodeValidate.type === '' &&
      phoneValidate.count === 1 &&
      phoneValidate.success &&
      phoneValidate.type === ''
    ) {
      setValidate(true);
    } else {
      setValidate(false);
    }
  }, [
    firstNameValidate,
    lastNameValidate,
    birthdayValidate,
    birthdayCount,
    address01Validate,
    address01Count,
    stateValidate,
    suburbValidate,
    postalCodeValidate,
    phoneValidate,
  ]);

  const [isLoading, setIsLoading] = useState(false);

  const performUpdateProfileAPICall = async () => {
    const userUuid = encryptedStorage.getItem('user_uuid');

    const profileInfo = {
      user_uuid: userUuid,
      updated_personal_information: {
        first_name: firstName,
        last_name: lastName,
        middle_name: '',
        date_of_birth: birthday,
        address_line_1: address01,
        address_line_2: address02,
        city: suburb.value,
        state_code: state.isoCode,
        zip_code: postalCode,
        phone_number: phone,
      },
    };

    setIsLoading(true);

    const response = await dispatch(updateUserPersonalDetails(profileInfo) as any);

    setIsLoading(false);
  };

  const handleUpdateProfile = () => {
    if (validate) {
      if (userDetails) {
        const { contact_information: contactInfo = [] } = userDetails;
        let mobile = '';

        [...(contactInfo || [])].forEach((contactInfo) => {
          if (contactInfo && contactInfo.contact_type === 'phone') {
            mobile = contactInfo.contact_value;
          }
        });

        if (mobile && mobile !== phone) {
          performUpdateProfileAPICall();
        } else {
          performUpdateProfileAPICall();
        }
      }
    } else {
      setBirthdayCount(1);
      setAddress01Count(1);
      setAddress02Count(1);
      handleFirstNameValidate();
      handleLastNameValidate();
      handleBirthdayValidate();
      handleAddress01Validate();
      handleAddress02Validate();
      handleSuburbValidate();
      handleStateValidate();
      handlePostalCodeValidate();
      handlePhoneValidate();
    }
  };

  // change password part
  // password
  const [currentPassword, setCurrentPassword] = useState('');
  const [currentPasswordValidate, setCurrentPasswordValidate] = useState({
    count: 0,
    success: true,
    type: '',
  });
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordValidate, setNewPasswordValidate] = useState({
    count: 0,
    success: true,
    type: '',
  });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordValidate, setConfirmPasswordValidate] = useState({
    count: 0,
    success: true,
    type: '',
  });

  // current password validate
  const handleCurrentPasswordValidate = () => {
    if (currentPasswordValidate.count !== 0) {
      if (currentPassword === '') {
        setCurrentPasswordValidate({ count: 1, success: false, type: 'required' });
      } else if (!validatePassword(currentPassword)) {
        setCurrentPasswordValidate({ count: 1, success: false, type: 'pattern' });
      } else {
        setCurrentPasswordValidate({ count: 1, success: true, type: '' });
      }
    } else {
      setCurrentPasswordValidate({ count: 1, success: true, type: 'required' });
    }
  };
  useEffect(() => {
    handleCurrentPasswordValidate();
  }, [currentPassword]);

  // new password validate
  const handleNewPasswordValidate = () => {
    if (newPasswordValidate.count !== 0) {
      if (newPassword === '') {
        setNewPasswordValidate({ count: 1, success: false, type: 'required' });
      } else if (!validatePassword(newPassword)) {
        setNewPasswordValidate({ count: 1, success: false, type: 'pattern' });
      } else if (confirmPassword !== '' && newPassword !== confirmPassword) {
        setNewPasswordValidate({ count: 1, success: false, type: 'notMatched' });
      } else {
        setNewPasswordValidate({ count: 1, success: true, type: '' });
      }
    } else {
      setNewPasswordValidate({ count: 1, success: true, type: 'required' });
    }
  };
  useEffect(() => {
    handleNewPasswordValidate();
  }, [newPassword]);

  // current password validate
  const handleConfirmPasswordValidate = () => {
    if (confirmPasswordValidate.count !== 0) {
      if (confirmPassword === '') {
        setConfirmPasswordValidate({ count: 1, success: false, type: 'required' });
      } else if (!validatePassword(confirmPassword)) {
        setConfirmPasswordValidate({ count: 1, success: false, type: 'pattern' });
      } else if (newPassword !== confirmPassword) {
        setConfirmPasswordValidate({ count: 1, success: false, type: 'notMatched' });
      } else {
        setConfirmPasswordValidate({ count: 1, success: true, type: '' });
      }
    } else {
      setConfirmPasswordValidate({ count: 1, success: true, type: 'required' });
    }
  };
  useEffect(() => {
    handleNewPasswordValidate();
    handleConfirmPasswordValidate();
  }, [confirmPassword]);

  useEffect(() => {
    if (currentPassword !== '') {
      setCurrentPasswordValidate({ count: 1, success: true, type: '' });
    }
  }, [currentPassword]);

  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);

  const handleUpdatePassword = async () => {
    const userUuid = encryptedStorage.getItem('user_uuid');

    if (
      currentPasswordValidate.count === 1 &&
      currentPasswordValidate.success === true &&
      currentPasswordValidate.type === '' &&
      newPasswordValidate.count === 1 &&
      newPasswordValidate.success === true &&
      newPasswordValidate.type === '' &&
      confirmPasswordValidate.count === 1 &&
      confirmPasswordValidate.success === true &&
      confirmPasswordValidate.type === ''
    ) {
      const requestBody = {
        user_uuid: userUuid,
        current_password: currentPassword,
        new_password: newPassword,
      };

      setIsUpdatingPassword(true);

      const updatePasswordData = await dispatch(updatePassword(requestBody) as any);

      setIsUpdatingPassword(false);

      if (updatePasswordData && updatePasswordData.status === 'success') {
        dispatch(showSuccessDialog('Password is updated successfully') as any);

        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
        setCurrentPasswordValidate({
          count: 0,
          success: true,
          type: '',
        });
        setNewPasswordValidate({
          count: 0,
          success: true,
          type: '',
        });
        setConfirmPasswordValidate({
          count: 0,
          success: true,
          type: '',
        });
      }
    }
  };

  // mobile part
  const [tabList, setTabList] = useState([
    { label: 'Organization Profile' },
    { label: 'My Profile' },
    { label: 'Change Password' },
  ]);

  const [activeTab, setActiveTab] = useState(0);

  const handleSelectTab = (index: number) => {
    setActiveTab(index);
  };

  if (/*  !fetchedUserInfo  */ false) {
    return (
      <div className='h-full w-full flex justify-center items-center'>
        <BaseLoader />
      </div>
    );
  }

  return viewport === 'desktop' ? (
    <div className={styles.container}>
      <div className='text-2xl font-primary-blue-color font-secondary-bold mb-8'>
        {StringConstatnts.MERCHANT_SETTINGS}
      </div>
      <div className='w-full flex gap-7'>
        <div className={styles.card}>
          <div className='font-primary-medium text-center text-lg mb-8'>
            {StringConstatnts.MY_ORGANIZATION_PROFILE}
          </div>
          <div className={styles.division} />
          {PersonalInfoList.map((item, index) => (
            <div className='gap-4' key={index}>
              <AccordionPersonalProfile data={item} />
            </div>
          ))}
        </div>
        <div className='flex flex-wrap justify-center items-center gap-5'>
          <div className='w-full bg-white pt-7 px-8 pb-[19px] rounded-lg'>
            <div className='w-full text-center font-primary-medium text-lg'>
              {StringConstatnts.UPDATE_MY_INFORMATION}
            </div>
            <div className='w-full text-center font-primary-light text-sm mt-3 mb-6'>
              {StringConstatnts.EMAIL_ADDRESS}:Loremipsum@auto.com
            </div>
            <div className={styles.division} />
            <div className='grid grid-cols-2 gap-5 mt-7'>
              <div className=''>
                <InputName
                  label='First Name'
                  placeholder='Enter your first name'
                  getName={(value: string) => setFirstName(value)}
                  name={firstName}
                  nameValidate={firstNameValidate}
                  size='h40'
                />
              </div>
              <div className=''>
                <InputName
                  label='Last Name'
                  placeholder='Enter your last name'
                  getName={(value: string) => setLastName(value)}
                  name={lastName}
                  nameValidate={lastNameValidate}
                  size='h40'
                />
              </div>
            </div>
            <div className='w-full mb-9'>
              <InputPhone
                label='Phone Number (Displayed to Patients)'
                phone={phone}
                phoneValidate={phoneValidate}
                getPhone={(value: string) => getPhone(value)}
                size='h40'
              />
            </div>
            <div className='w-full flex justify-end'>
              <Button
                title='Submit'
                onClick={() => handleUpdateProfile()}
                size='h40'
                isLoading={isLoading}
              />
            </div>
          </div>
          <div className='w-full bg-white px-[34px] py-7 rounded-lg'>
            <div className='w-full text-center font-primary-medium text-lg'>
              {StringConstatnts.CHANGE_PASSWORD}
            </div>
            <div className='w-full text-center font-primary-light text-sm mt-3 mb-6'>
              {StringConstatnts.CHANGE_PASSWORD_DETAIL}
            </div>
            <div className={styles.division} />
            <div className='w-full mt-9'>
              <InputPassword
                label='Current Password'
                placeholder='Enter password'
                password={currentPassword}
                passwordValidate={currentPasswordValidate}
                getPassword={(event: any) => setCurrentPassword(event.target.value)}
                size='h40'
              />
            </div>
            <div className='w-full'>
              <InputPassword
                label='New Password'
                placeholder='Enter your new password'
                password={newPassword}
                passwordValidate={newPasswordValidate}
                getPassword={(event: any) => setNewPassword(event.target.value)}
                size='h40'
              />
            </div>
            <div className='w-full'>
              <InputPassword
                label='Confirm Password'
                placeholder='Enter your new password'
                password={confirmPassword}
                passwordValidate={confirmPasswordValidate}
                getPassword={(event: any) => setConfirmPassword(event.target.value)}
                size='h40'
              />
            </div>
            <div className='w-full mt-9 flex justify-end'>
              <Button
                title='Submit'
                onClick={() => handleUpdatePassword()}
                size='h40'
                isLoading={isUpdatingPassword}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className={styles.mobileContainer}>
      <div className='text-xl font-primary-blue-color font-secondary-bold ml-6 mt-[38px] mb-11'>
        {StringConstatnts.MERCHANT_SETTINGS}
      </div>
      <Tab
        tabList={tabList}
        activeTab={activeTab}
        selectTab={(index: number) => handleSelectTab(index)}
      />
      {activeTab === 0 && (
        <div className={styles.card}>
          <div className='font-primary-medium text-center text-lg mb-8'>
            {StringConstatnts.MY_ORGANIZATION_PROFILE}
          </div>
          <div className={styles.division} />
          {PersonalInfoList.map((item, index) => (
            <div key={index}>
              <AccordionPersonalProfile data={item} />
            </div>
          ))}
        </div>
      )}
      {activeTab === 1 && (
        <div className='bg-white pt-7 px-8 pb-[19px] rounded-lg'>
          <div className='w-full text-center font-primary-medium text-lg'>
            {StringConstatnts.UPDATE_MY_INFORMATION}
          </div>
          <div className='w-full text-center font-primary-light text-sm mt-3 mb-6'>
            {StringConstatnts.EMAIL_ADDRESS}:Loremipsum@auto.com
          </div>
          <div className={styles.division} />
          <div>
            <div className='w-full mt-7'>
              <InputName
                label='First Name'
                placeholder='Enter your first name'
                getName={(value: string) => setFirstName(value)}
                name={firstName}
                nameValidate={firstNameValidate}
                size='h40'
              />
            </div>
            <div className='w-full'>
              <InputName
                label='Last Name'
                placeholder='Enter your last name'
                getName={(value: string) => setLastName(value)}
                name={lastName}
                nameValidate={lastNameValidate}
                size='h40'
              />
            </div>
            <div className='w-full mb-9'>
              <InputPhone
                label='Phone Number (Displayed to Patients)'
                phone={phone}
                phoneValidate={phoneValidate}
                getPhone={(value: string) => getPhone(value)}
                size='h40'
              />
            </div>
          </div>
          <div className='w-full flex justify-end'>
            <Button
              title='Submit'
              onClick={() => handleUpdateProfile()}
              size='h40'
              isLoading={isLoading}
            />
          </div>
        </div>
      )}
      {activeTab === 2 && (
        <div className='bg-white px-[34px] py-7 rounded-lg'>
          <div className='w-full text-center font-primary-medium text-lg'>
            {StringConstatnts.CHANGE_PASSWORD}
          </div>
          <div className='w-full text-center font-primary-light text-sm mt-3 mb-6'>
            {StringConstatnts.CHANGE_PASSWORD_DETAIL}
          </div>
          <div className={styles.division} />
          <div className='w-full mt-9'>
            <InputPassword
              label='Current Password'
              placeholder='Enter password'
              password={currentPassword}
              passwordValidate={currentPasswordValidate}
              getPassword={(event: any) => setCurrentPassword(event.target.value)}
              size='h40'
            />
          </div>
          <div className='w-full'>
            <InputPassword
              label='New Password'
              placeholder='Enter your new password'
              password={newPassword}
              passwordValidate={newPasswordValidate}
              getPassword={(event: any) => setNewPassword(event.target.value)}
              size='h40'
            />
          </div>
          <div className='w-full'>
            <InputPassword
              label='Confirm Password'
              placeholder='Enter your new password'
              password={confirmPassword}
              passwordValidate={confirmPasswordValidate}
              getPassword={(event: any) => setConfirmPassword(event.target.value)}
              size='h40'
            />
          </div>
          <div className='w-full mt-9 flex justify-end'>
            <Button
              title='Submit'
              onClick={() => handleUpdatePassword()}
              size='h40'
              isLoading={isUpdatingPassword}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
