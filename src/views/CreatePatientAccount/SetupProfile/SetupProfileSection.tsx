import { useEffect, useState } from 'react';

// storybook components
import { ButtonBack } from 'stories/Button/ButtonBack';
import { StepLabel } from 'stories/StepLabel';
import { InputName } from 'stories/Input/InputName';
import { InputBirthday } from 'stories/Input/InputBirthday';
import { InputAddress } from 'stories/Input/InputAddress';
import { SelectSuburb } from 'stories/Select/SelectSuburb';
import { SelectState } from 'stories/Select/SelectState';
import { InputPostalCode } from 'stories/Input/InputPostalCode';
import { InputPhone } from 'stories/Input/InputPhone';
import { Select } from 'stories/Select/Select';
import { Button } from 'stories/Button';
import { InputAddress1 } from 'stories/InputAddress1';

// third party components
import { useNavigate } from 'react-router-dom';
import { City, State } from 'country-state-city';
import 'react-calendar/dist/Calendar.css';
import 'react-phone-input-2/lib/style.css';
import { useSelector, useDispatch } from 'react-redux';

// custom functions
import { validateName, validatePostalCode } from 'utils';

// json data
import GenderList from 'stories/assets/json/gender.json';

// styles
import { UserState } from 'redux/reducers/userState';
import _ from 'lodash';
import { GenderLabel } from 'utils/commonEnums';
import { encryptedStorage } from 'services/encryptedStorage';
import moment from 'moment';
import styles from './SetupProfileSection.module.scss';

import {
  fetchUserPersonalDetails,
  userPersonalInfo,
} from '../../../redux/actionCreators/userRegistration';

const SetupProfile = () => {
  const navigate = useNavigate();

  const viewport = useSelector((state: any) => state.device.viewport);
  const { userDetails, userDetailsSuccess, userDetailsLoading, userDetailsError } = useSelector(
    (state: any) => state.userInfo as UserState
  );
  const dispatch = useDispatch();

  const [validate, setValidate] = useState(false);

  const handleClickBack = () => {
    navigate(-1);
  };

  // current step variables and functions
  const [currentStep, setCurrentStep] = useState(1);

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
  const [birthday, setBirthday] = useState<Date>();
  const [birthdayValidate, setBirthdayValidate] = useState(false);
  const [birthdayCount, setBirthdayCount] = useState(0);

  const selectBirthday = (value: Date) => {
    setBirthdayCount(1);
    setBirthday(value);
  };

  const handleBirthdayValidate = () => {
    const diffInYears = (date2: Date, date1: Date) => {
      let diff = (date2.getTime() - date1.getTime()) / 1000;
      diff /= 60 * 60 * 24;

      return Math.abs(Math.floor(diff / 365.25));
    };

    if (birthdayCount !== 0 && birthday) {
      if (diffInYears(today, birthday) < 18) {
        setBirthdayValidate(false);
      } else {
        setBirthdayValidate(true);
      }
    }
  };

  useEffect(() => {
    handleBirthdayValidate();
  }, [birthday]);

  // address
  const [address, setAddress] = useState<any>('');
  const [addressValidate, setAddressValidate] = useState(true);
  const [addressCount, setAddressCount] = useState(0);
  const getAddress = (value: any) => {
    setAddressCount(1);
    setAddress(value);
  };

  // address
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine1Validate, setAddressLine1Validate] = useState({
    count: 0,
    success: true,
    type: '',
  });

  // address
  const [addressLine2, setAddressLine2] = useState('');
  const [addressLine2Validate, setAddressLine2Validate] = useState({
    count: 0,
    success: true,
    type: '',
  });

  // address1 validate
  const handleAddressLine1Validate = () => {
    if (addressLine1Validate.count !== 0) {
      if (addressLine1 === '') {
        setAddressLine1Validate({ count: 1, success: false, type: 'required' });
      } else {
        setAddressLine1Validate({ count: 1, success: true, type: '' });
      }
    } else {
      setAddressLine1Validate({ count: 1, success: true, type: 'required' });
    }
  };

  useEffect(() => {
    handleAddressLine1Validate();
  }, [addressLine1]);

  // address2 validate
  // const handleAddressLine2Validate = () => {
  //   if (addressLine2Validate.count !== 0) {
  //     if (addressLine2 === '') {
  //       setAddressLine2Validate({ count: 1, success: false, type: 'required' });
  //     } else {
  //       setAddressLine2Validate({ count: 1, success: true, type: '' });
  //     }
  //   } else {
  //     setAddressLine2Validate({ count: 1, success: true, type: 'required' });
  //   }
  // };

  // useEffect(() => {
  //   handleAddressLine2Validate();
  // }, [addressLine2]);

  // postal code
  const [postalCode, setPostalCode] = useState('');
  const [postalCodeValidate, setPostalcodeValidate] = useState({
    count: 0,
    success: true,
    type: '',
  });

  // state
  const [state, setState] = useState({ value: '', label: '', isoCode: '' });
  const [stateValidate, setStateValidate] = useState({ count: 0, success: true });
  const getState = (value: any) => {
    setState(value);
  };

  // suburb
  const [suburb, setSuburb] = useState({ value: '', label: '' });
  const [suburbValidate, setSuburbValidate] = useState({ count: 0, success: true });
  const getSuburb = (value: any) => {
    setSuburb(value);
  };

  const handleAddressValidate = () => {
    if (addressCount === 1) {
      if (address === undefined || JSON.stringify(address) === JSON.stringify({})) {
        setAddressValidate(false);
      } else if (
        address.address_components === undefined ||
        address.address_components.length === 0
      ) {
        setAddressValidate(false);
      } else {
        let addressStreetNumber = '';
        let addressRoute = '';
        let neighborhood = '';
        let locality = '';
        let sublocality = '';
        let addressCity = '';
        let addressState = '';
        let addressStateISO = '';
        let addressPostalCode = '';

        for (const comp of address.address_components) {
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

          if ([...(comp.types || [])].find((item) => item === 'sublocality')) {
            sublocality = comp.long_name;
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

        setAddressLine1((addressStreetNumber ? `${addressStreetNumber} ` : '') + addressRoute);

        // setAddressLine2((neighborhood ? `${neighborhood}, ` : '') + locality);

        setSuburb({ value: sublocality || locality, label: sublocality || locality });

        setState({ value: addressState, label: addressState, isoCode: addressStateISO });

        setPostalCode(addressPostalCode);

        setAddressValidate(true);
      }
    }
  };
  useEffect(() => {
    handleAddressValidate();
  }, [address, addressCount]);

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
      } else if (phone.length !== 10) {
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

  // gender
  const [gender, setGender] = useState({} as { value: string; label: string });
  const [genderValidate, setGenderValidate] = useState({ count: 0, success: false });

  const getGender = (value: any) => {
    setGender(value);
  };

  const handleGenderValidate = () => {
    if (genderValidate.count !== 0) {
      if (
        gender.value &&
        gender.value !== '' &&
        gender.label &&
        gender.label !== '' &&
        GenderList.find((item) => gender.value === item.value && gender.label === item.label)
      ) {
        setGenderValidate({ count: 1, success: true });
      } else {
        setGenderValidate({ count: 1, success: false });
      }
    } else {
      setGenderValidate({ count: 1, success: true });
    }
  };
  useEffect(() => {
    handleGenderValidate();
  }, [gender]);

  useEffect(() => {
    if (
      firstNameValidate.count === 1 &&
      firstNameValidate.success &&
      firstNameValidate.type === '' &&
      lastNameValidate.count === 1 &&
      lastNameValidate.success &&
      lastNameValidate.type === '' &&
      birthdayValidate &&
      birthdayCount === 1 &&
      genderValidate &&
      addressLine1Validate.count === 1 &&
      addressLine1Validate.success &&
      addressLine1Validate.type === '' &&
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
    genderValidate,
    addressLine1Validate,
    stateValidate,
    suburbValidate,
    postalCodeValidate,
    phoneValidate,
  ]);

  const [isLoading, setIsLoading] = useState(false);

  const handleCountinue = async () => {
    if (currentStep === 1) {
      if (
        firstNameValidate.count === 1 &&
        firstNameValidate.success &&
        firstNameValidate.type === '' &&
        lastNameValidate.count === 1 &&
        lastNameValidate.success &&
        lastNameValidate.type === '' &&
        birthdayValidate &&
        birthdayCount === 1
      ) {
        setCurrentStep(2);
      } else {
        setBirthdayCount(1);
        handleFirstNameValidate();
        handleLastNameValidate();
        handleBirthdayValidate();
        handleGenderValidate();
      }
    } else if (currentStep === 2) {
      if (validate) {
        const registrationId = encryptedStorage.getItem('registration_id');
        const userUuid = encryptedStorage.getItem('user_uuid');

        if (userUuid && registrationId) {
          const profileInfo = {
            user_uuid: userUuid,
            registration_id: registrationId,
            personal_information: {
              first_name: firstName,
              last_name: lastName,
              middle_name: '',
              date_of_birth: moment(birthday).format('YYYY-MM-DD'),
              address_line_1: addressLine1,
              address_line_2: addressLine2,
              city: suburb.value,
              state_code: state.isoCode,
              zip_code: postalCode,
              phone_number: phone,
              gender: gender.value,
            },
          };

          setIsLoading(true);

          const response = await dispatch(userPersonalInfo(profileInfo) as any);

          dispatch(fetchUserPersonalDetails(userUuid) as any);

          setIsLoading(false);

          if (response.status === 'success') {
            navigate('/setup-verify');
          }
        } else {
          navigate('/signin');
        }
      } else {
        setBirthdayCount(1);
        setAddressCount(1);
        handleFirstNameValidate();
        handleLastNameValidate();
        handleBirthdayValidate();
        handleGenderValidate();
        handleAddressValidate();
        handleSuburbValidate();
        handleStateValidate();
        handlePostalCodeValidate();
        handlePhoneValidate();
        handleAddressLine1Validate();
        // handleAddressLine2Validate();
      }
    }
  };

  const setUserDetailsFromAPI = () => {
    if (userDetails.date_of_birth) {
      setBirthday(userDetails.date_of_birth);
    }

    if (userDetails.gender) {
      setGender({
        label: GenderLabel(userDetails.gender),
        value: userDetails.gender,
      });
    }

    if (userDetails.first_name) {
      setFirstName(userDetails.first_name);
    }

    if (userDetails.last_name) {
      setLastName(userDetails.last_name);
    }

    if (userDetails.address) {
      setAddressLine1(userDetails.address.address_line_1);
      setAddressLine2(userDetails.address.address_line_2);
      if (userDetails.address.city) {
        setSuburb({
          label: userDetails.address.city,
          value: userDetails.address.city,
        });
      }

      if (userDetails.address.state_code) {
        const stateValue = State.getStateByCode(userDetails.address.state_code);
        if (stateValue) {
          setState({
            value: stateValue.name ? stateValue.name : '',
            label: stateValue.name ? stateValue.name : '',
            isoCode: stateValue?.isoCode,
          });
        }
      }

      setPostalCode(userDetails.address.zip_code);

      setAddressValidate(true);
    }

    const contactInfo = userDetails.contact_information || [];

    [...(contactInfo || [])].forEach((contact) => {
      if (contact && contact.contact_type === 'phone') {
        setPhone(contact.contact_value);
      }
    });
  };

  useEffect(() => {
    const registrationId = encryptedStorage.getItem('registration_id');
    const userUuid = encryptedStorage.getItem('user_uuid');

    if (!userUuid || !registrationId) {
      navigate('/signin');
    }
  }, [navigate]);

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
      dispatch(fetchUserPersonalDetails(userUuid) as any);
    } else if (userDetailsSuccess) {
      setUserDetailsFromAPI();
    }
  }, [userDetailsSuccess, userDetailsLoading, userDetailsError, dispatch]);

  return (
    <div className={styles.container}>
      {viewport !== 'mobile' && (
        <div className={styles.infoContainer}>
          <ButtonBack onClick={() => handleClickBack()} />
          <StepLabel stepLabel='STEP 02/03' stepTitle='Personal Info' />
        </div>
      )}
      <div className={styles.formContainer}>
        <div className='flex flex-wrap w-full mt-2'>
          <h3 className='text-[32px] font-secondary'>Setup Your&nbsp;</h3>
          <h3 className='text-[32px] font-secondary-bold font-green-color'>Profile</h3>
        </div>
        <div className='flex flex-wrap w-full mt-[10px] font-grey-color'>
          For the purpose of industry regulation, your details are required.
        </div>
        {viewport === 'mobile' && (
          <div className={styles.stepArea}>
            <StepLabel stepLabel='STEP 02/03' stepTitle='Personal Info' />
          </div>
        )}
        <div className='divider mt-[26px] mb-[74px]' />
        <div className='flex w-full justify-center'>
          <div className={styles.formContainer}>
            {/* step 1 part */}
            {currentStep === 1 && (
              <div className='w-full'>
                {/* user name part */}
                <div className='w-full'>
                  <InputName
                    label='First Name'
                    placeholder='Enter your first name'
                    getName={(value: string) => setFirstName(value)}
                    name={firstName}
                    nameValidate={firstNameValidate}
                  />
                </div>
                <div className='w-full'>
                  <InputName
                    label='Last Name'
                    placeholder='Enter your last name'
                    getName={(value: string) => setLastName(value)}
                    name={lastName}
                    nameValidate={lastNameValidate}
                  />
                </div>
                {/* birthday part */}
                <div className='w-full'>
                  <InputBirthday
                    label='Date of Birth*'
                    birthday={birthday}
                    birthdayValidate={birthdayValidate || birthdayCount === 0}
                    selectBirthday={(value: any) => selectBirthday(value)}
                  />
                </div>
                {/* gender part */}
                <div className='w-full'>
                  <Select
                    list={GenderList}
                    label='Sex*'
                    placeholder='Select your sex'
                    select={gender}
                    validate={genderValidate}
                    getSelect={(value: any) => getGender(value)}
                    errorMessage='Gender is required!'
                  />
                </div>
              </div>
            )}
            {/* step 2 part */}
            {currentStep === 2 && (
              <div className='w-full'>
                {/* address part */}
                <div className='w-full'>
                  <InputAddress
                    label='Address line 1'
                    address={address}
                    addressValidate={addressValidate}
                    getAddress={(value: any) => getAddress(value)}
                  />
                </div>
                {/* address line1 part */}
                {/* <div className='w-full'>
                  <InputAddress1
                    label='Address line 1'
                    placeholder='Enter your address'
                    getName={(value: string) => setAddressLine1(value)}
                    name={addressLine1}
                    nameValidate={addressLine1Validate}
                    errorMessage='Address line 1 is required'
                  />
                </div> */}
                {/* address line2 part */}
                <div className='w-full'>
                  <InputAddress1
                    label='Address line 2'
                    placeholder='Enter your address'
                    getName={(value: string) => setAddressLine2(value)}
                    name={addressLine2}
                    nameValidate={addressLine2Validate}
                    errorMessage='Address line 2 is required'
                  />
                </div>
                {/* Suburb* part */}
                <div className='w-full'>
                  <SelectSuburb
                    list={City.getCitiesOfState('US', state.isoCode)}
                    label='City*'
                    suburb={suburb}
                    suburbValidate={suburbValidate}
                    getSuburb={(value: any) => getSuburb(value)}
                  />
                </div>
                {/* state part */}
                <div className='w-full'>
                  <SelectState
                    list={State.getStatesOfCountry('US')}
                    label='State*'
                    state={state}
                    stateValidate={stateValidate}
                    getState={(value: any) => getState(value)}
                  />
                </div>
                {/* code part */}
                <div className='w-full'>
                  <InputPostalCode
                    label='Postal Code*'
                    postalCode={postalCode}
                    postalCodeValidate={postalCodeValidate}
                    getPostalCode={(value: string) => setPostalCode(value)}
                  />
                </div>
                {/* mobile part */}
                <div className='w-full'>
                  <InputPhone
                    label='Mobile Number*'
                    phone={phone}
                    phoneValidate={phoneValidate}
                    getPhone={(value: string) => getPhone(value)}
                  />
                </div>
              </div>
            )}

            {/* button part */}
            <div className='w-full mt-9' />
            {/* button part */}
            <div className='w-full mt-9'>
              <Button
                title='Continue'
                hasArrow
                fullWidth
                onClick={() => handleCountinue()}
                isLoading={isLoading}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupProfile;
