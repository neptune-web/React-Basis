import React, { ReactNode, useEffect } from 'react';

// third party components
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UserState } from 'redux/reducers/userState';
import { fetchUserPersonalDetails } from 'redux/actionCreators/userRegistration';
import { encryptedStorage } from 'services/encryptedStorage';

// storybook components
import { NavMenu } from 'stories/NavMenu';
import { MerchantHeader } from 'stories/Header/MerchantHeader';

// custom components

// styles
import styles from './index.module.scss';

interface MerchantLayoutProps {
  children: ReactNode | ReactNode[];
}

const MerchantLayout = ({ children }: MerchantLayoutProps) => {
  const viewport = useSelector((state: any) => state.device.viewport);
  const { userDetailsSuccess, userDetailsLoading, userDetailsError } = useSelector(
    (state: any) => state.userInfo as UserState
  );
  const dispatch = useDispatch();

  const location = useLocation();
  const navigate = useNavigate();

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
    }
  }, [userDetailsSuccess, userDetailsLoading, userDetailsError, dispatch]);

  return (
    <div className='w-full'>
      <MerchantHeader
        viewport={viewport}
        pathname={location.pathname}
        gotoPath={(path: string) => navigate(path)}
      />
      <div className={`${styles.background_content} w-full flex`}>
        {viewport === 'desktop' && (
          <NavMenu
            viewport={viewport}
            pathname={location.pathname}
            gotoPath={(path: string) => navigate(path)}
          />
        )}
        <div className={styles.container}>{children}</div>
      </div>
    </div>
  );
};

export default MerchantLayout;
