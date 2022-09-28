import React, { useEffect, useState } from 'react';

// third party components
import { GoogleMap, LoadScript } from '@react-google-maps/api';

// stories components
import { ButtonBack } from '../../Button/ButtonBack';
import { IconButton } from '../../Button/IconButton';

// images and icons
import UserGreyIcon from '../../assets/icons/Icon_User_Grey.svg';
import AddressGreyIcon from '../../assets/icons/Icon_Address_Grey.svg';
import MobileGreyIcon from '../../assets/icons/Icon_Mobile_Grey.svg';
import USFlagIcon from '../../assets/icons/Icon_US_Flag.svg';

import UpArrwoWhiteIcon from '../../assets/icons/Icon_Up_Arrow_White.svg';
import DownArrwoWhiteIcon from '../../assets/icons/Icon_Down_Arrow_White.svg';

// styles
import styles from './index.module.scss';

interface JSONObject {
  lat: number;
  lng: number;
}

interface CardAddressProps {
  center: JSONObject;
  viewport: string;
  onClick?: () => void;
}

export const CardAddress: React.FC<CardAddressProps> = (props) => {
  const { center, viewport, onClick = () => {} } = props;

  const containerStyle = {
    width: '336px',
    height: '263px',
    borderRadius: '14px',
  };

  const mobileContainerStyle = {
    width: '332px',
    height: '175px',
    borderRadius: '14px',
  };

  const [googleMapsApiKey, setGoogleMapsApiKey] = useState('');

  useEffect(() => {
    if (googleMapsApiKey === '') {
      setGoogleMapsApiKey(process.env.REACT_APP_GOOGLE_MAP_API_KEY || '');
    }
  }, []);

  // mobile part
  const [openMap, setOpenMap] = useState(false);

  return viewport !== 'mobile' ? (
    <div className={styles.addressCard}>
      <div className={styles.greenArea}>
        <div className='w-full flex justify-center font-secondary-bold font-white-color text-[44px]'>
          $850
        </div>
        <div className='w-full flex justify-center font-primary-regular font-white-color text-sm'>
          Available Basis Limit
        </div>
        <div className='w-full absolute top-[163px] left-0 flex justify-center'>
          {googleMapsApiKey !== '' && (
            <LoadScript googleMapsApiKey={googleMapsApiKey}>
              <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
                {/* Child components, such as markers, info windows, etc. */}
                <></>
              </GoogleMap>
            </LoadScript>
          )}
        </div>
      </div>
      <div className='w-full flex justify-center font-primary-regular font-white-color text-sm mt-[120px]'>
        <i>Provider Location</i>
      </div>
      <div className='px-[44px] mt-12'>
        <table className='table-auto'>
          <tbody>
            <tr className='w-full flex items-start'>
              <td className='w-[100px]'>
                <div className='w-full flex justify-start items-center'>
                  <img src={UserGreyIcon} alt='' />
                  <div className='font-primary-regular font-grey-color text-sm ml-2'>Name:</div>
                </div>
              </td>
              <td>
                <div className='font-primary-regular font-white-color text-sm leading-6'>
                  Lorem Ipsum
                </div>
              </td>
            </tr>
            <tr className='w-full flex items-start mt-7'>
              <td className='w-[100px]'>
                <div className='w-full flex justify-start items-center'>
                  <img src={AddressGreyIcon} alt='' />
                  <div className='font-primary-regular font-grey-color text-sm ml-2'>Address:</div>
                </div>
              </td>
              <td className='flex-1'>
                <div className='flex flex-wrap font-primary-regular font-white-color text-sm whitespace-normal leading-6'>
                  2715 Ash Dr. San Jose, South Dakota 83475
                </div>
              </td>
            </tr>
            <tr className='w-full flex items-start mt-7'>
              <td className='w-[100px]'>
                <div className='w-full flex justify-start items-center'>
                  <img src={MobileGreyIcon} alt='' />
                  <div className='font-primary-regular font-grey-color text-sm ml-2'>Contact:</div>
                </div>
              </td>
              <td className='flex flex-1 mb-16'>
                <img src={USFlagIcon} alt='' />
                <div className='ml-[10px] flex items-center font-primary-regular font-white-color text-sm leading-6'>
                  1+ <div className={styles.divider} /> 123456789
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    <div className='w-full'>
      <div className={`w-full grid grid-cols-5 items-center h-[54px] ${styles.darkGreenArea}`}>
        <div className='col-span-2'>
          <ButtonBack onClick={() => onClick()} viewport={viewport} />
        </div>
        <div className='col-span-1 flex justify-center'>
          <IconButton
            icon={openMap ? UpArrwoWhiteIcon : DownArrwoWhiteIcon}
            backgroundColor='transparent'
            onClick={() => setOpenMap(!openMap)}
          />
        </div>
        <div className='col-span-2 flex justify-end font-primary-regular font-white-color text-sm'>
          <i>Provider Location</i>
        </div>
      </div>
      {googleMapsApiKey !== '' && (
        <LoadScript googleMapsApiKey={googleMapsApiKey}>
          {openMap && (
            <div className='w-full flex flex-wrap justify-center'>
              <div className={`w-full flex justify-center pb-[27px] ${styles.darkGreenArea}`}>
                <GoogleMap mapContainerStyle={mobileContainerStyle} center={center} zoom={12}>
                  {/* Child components, such as markers, info windows, etc. */}
                  <></>
                </GoogleMap>
              </div>

              <div className='mt-[17px] mx-12 w-full '>
                <table className='table-auto'>
                  <tbody>
                    <tr className='w-full flex items-start'>
                      <td className='w-[100px]'>
                        <div className='w-full flex justify-start items-center'>
                          <img src={UserGreyIcon} alt='' />
                          <div className='font-primary-regular font-grey-color text-sm ml-2'>
                            Name:
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className='font-primary-regular text-sm leading-6'>Lorem Ipsum</div>
                      </td>
                    </tr>
                    <tr className='w-full flex items-start mt-5'>
                      <td className='w-[100px]'>
                        <div className='w-full flex justify-start items-center'>
                          <img src={AddressGreyIcon} alt='' />
                          <div className='font-primary-regular font-grey-color text-sm ml-2'>
                            Address:
                          </div>
                        </div>
                      </td>
                      <td className='flex-1'>
                        <div className='flex flex-wrap font-primary-regular text-sm whitespace-normal leading-6'>
                          2715 Ash Dr. San Jose, South Dakota 83475
                        </div>
                      </td>
                    </tr>
                    <tr className='w-full flex items-start mt-5'>
                      <td className='w-[100px]'>
                        <div className='w-full flex justify-start items-center'>
                          <img src={MobileGreyIcon} alt='' />
                          <div className='font-primary-regular font-grey-color text-sm ml-2'>
                            Contact:
                          </div>
                        </div>
                      </td>
                      <td className='flex flex-1'>
                        <img src={USFlagIcon} alt='' />
                        <div className='ml-[10px] flex items-center font-primary-regular text-sm leading-6'>
                          1+ <div className={styles.divider} /> 123456789
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </LoadScript>
      )}
      <div className='w-full flex justify-center font-secondary-bold font-green-color text-[32px] mt-[42px]'>
        $850
      </div>
      <div className='w-full flex justify-center font-primary-regular text-sm'>
        Available Basis Limit
      </div>
    </div>
  );
};
