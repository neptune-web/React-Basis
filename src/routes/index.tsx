import BaseLoader from 'components/baseLoader';
import React, { ReactNode, useEffect, useState } from 'react';

// third party components
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { fetchUserPersonalDetails } from 'redux/actionCreators/userRegistration';

// custom components
import { UserState } from 'redux/reducers/userState';
import APICall from 'services/ApiCalls';
import APIEndPoint from 'services/ApiEndPoints';
import { getRefreshToken } from 'services/authTokenUtils';
import { encryptedStorage } from 'services/encryptedStorage';
import { AuthenticationRoutes } from './authenticationRoutes';
import { CustomerRoutes } from './customerRoutes';
import { ErrorRoutes } from './errorRoutes';
import { MerchantRoutes } from './merchantRoutes';

interface ApplicationRoutesProps {
  viewport: string;
}

export interface AppRoute {
  path: string;
  element: JSX.Element;
  layoutComponent?: ({ children }: { children: ReactNode | ReactNode[] }) => JSX.Element;
}

const ApplicationRoutes = (props: ApplicationRoutesProps) => {
  const { viewport } = props;

  const { userDetails } = useSelector((state: any) => state.userInfo as UserState);

  const dispatch = useDispatch();

  const [initialScreen, setInitialScreen] = useState<string>();
  const [isLoading, setIsLoading] = useState(true);

  dispatch({ type: 'set', viewport });

  const isCustomer = userDetails && userDetails.userType === 'customer';
  const isMerchant = userDetails && userDetails.userType === 'merchant';

  // -------------temp value for merchant dev---------
  // const isCustomer = false;
  // const isMerchant = true;

  const getApplicationRoutes = (): JSX.Element[] => {
    const routes: AppRoute[] = [
      ...AuthenticationRoutes(),
      ...ErrorRoutes(),
      ...(isCustomer ? CustomerRoutes() : []),
      ...(isMerchant ? MerchantRoutes() : []),
    ];

    return routes.map((route) => {
      const { path, element } = route;

      return (
        <Route
          path={path}
          element={
            route.layoutComponent ? (
              <route.layoutComponent>{element}</route.layoutComponent>
            ) : (
              element
            )
          }
        />
      );
    });
  };

  useEffect(() => {
    const registrationId = encryptedStorage.getItem('registration_id');
    const userUuid = encryptedStorage.getItem('user_uuid');

    const refreshToken = getRefreshToken();

    const getUserRegistrationData = async () => {
      setIsLoading(true);

      try {
        const registrationStatusData = await APICall.performApiCall({
          apiEndPoint: APIEndPoint.GET_REGISTRATION_STATUS(userUuid),
        });

        if (
          registrationStatusData.status === 'success' &&
          registrationStatusData.data.user_uuid !== ''
        ) {
          await dispatch(fetchUserPersonalDetails(userUuid) as any);

          switch (registrationStatusData.data.registration.current_stage) {
            case 'email_verification':
              setInitialScreen('/signup-verify');
              break;
            case 'personal_information':
              setInitialScreen('/setup-profile');
              break;
            case 'phone_verification':
              setInitialScreen('/setup-verify');
              break;
            case 'terms_and_conditions':
              setInitialScreen('/terms-conditions');
              break;
            case 'registration_complete':
              setInitialScreen('/dashboard');
              break;
            default:
              setInitialScreen('/dashboard');
              break;
          }
        } else {
          setInitialScreen('/signin');
        }
      } catch (error: any) {
        // setInitialScreen('/signin');
        window.history.pushState({}, 'Sign In', '/signin');
      }

      setIsLoading(false);
    };

    if (refreshToken && userUuid && registrationId) {
      getUserRegistrationData();
    } else {
      setIsLoading(false);
      // setInitialScreen('/signin');
      window.history.pushState({}, 'Sign In', '/signin');
    }
  }, []);

  if (/* isLoading */ false) {
    return (
      <div
        className='flex w-full justify-center items-center'
        style={{ height: window.innerHeight }}
      >
        <BaseLoader />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to={initialScreen || '/signin'} replace />} />

        {getApplicationRoutes()}
      </Routes>
    </BrowserRouter>
  );
};

export default ApplicationRoutes;
