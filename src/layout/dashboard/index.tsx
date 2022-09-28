import React, { ReactNode, useEffect } from 'react';

// third party components
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// storybook components
import { NavMenu } from 'stories/NavMenu';
import { DashboardHeader } from 'stories/Header/DashboardHeader';

// custom components

// styles
import { UserState } from 'redux/reducers/userState';
import { fetchUserPersonalDetails } from 'redux/actionCreators/userRegistration';
import { encryptedStorage } from 'services/encryptedStorage';
import styles from './index.module.scss';

interface DashboardLayoutProps {
  children: ReactNode | ReactNode[];
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
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
      <DashboardHeader
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

export default DashboardLayout;
