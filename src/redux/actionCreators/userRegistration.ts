import _, { isArray } from 'lodash';
import { Dispatch } from 'redux';
import { ForgotAction, ForgotActionType } from 'redux/actionTypes/userResetPassword';
import { ResetPasswordData } from 'redux/reducers/userResetPassword';
import { AddressInfo, ContactInfo, UserDetails } from 'redux/reducers/userState';
import APICall from 'services/ApiCalls';
import APIEndPoint from 'services/ApiEndPoints';
import { setAuthToken, setRefreshToken } from 'services/authTokenUtils';
import { encryptedStorage } from 'services/encryptedStorage';
import { Action, ActionType } from '../actionTypes/userRegister';
import { showErrorDialog } from './showDialogs';

export const userGenerateCode = (userInfo: object) => async (dispatch: Dispatch<Action>) => {
  try {
    const data = await APICall.performApiCall({
      apiEndPoint: APIEndPoint.GENERATE_CODE,
      body: userInfo,
    });

    if (data.status === 'failed') {
      dispatch(showErrorDialog(data.error_message) as any);
    }

    return data;
  } catch (error: any) {
    dispatch(showErrorDialog(error.message) as any);
  }
};

export const userVerifyCode = (userInfo: object) => async (dispatch: Dispatch<Action>) => {
  try {
    const data = await APICall.performApiCall({
      apiEndPoint: APIEndPoint.VERIFY_CODE,
      body: userInfo,
    });

    if (data.status === 'failed') {
      dispatch(showErrorDialog(data.error_message) as any);
    }

    return data;
  } catch (error: any) {
    dispatch(showErrorDialog(error.message) as any);
  }
};

export const userRegister = (userInfo: object) => async (dispatch: Dispatch<Action>) => {
  try {
    const data = await APICall.performApiCall({
      apiEndPoint: APIEndPoint.SIGN_UP,
      body: userInfo,
    });

    if (data.status === 'failed') {
      dispatch(showErrorDialog(data.error_message) as any);
    } else if (data.status === 'success' && data.data.user_uuid !== '') {
      encryptedStorage.setItem('registration_id', data.data.registration_id);
    }

    return data;
  } catch (error: any) {
    dispatch(showErrorDialog(error.message) as any);
  }
};

export const userPersonalInfo = (profileInfo: object) => async (dispatch: Dispatch<Action>) => {
  try {
    const data = await APICall.performApiCall({
      apiEndPoint: APIEndPoint.SAVE_PERSONAL_PROFILE,
      body: profileInfo,
    });

    if (data.status === 'failed') {
      dispatch(showErrorDialog(data.error_message) as any);
    }

    return data;
  } catch (error: any) {
    dispatch(showErrorDialog(error.message) as any);
  }
};

export const acceptTermsAndConditions =
  (userData: object) => async (dispatch: Dispatch<Action>) => {
    try {
      const data = await APICall.performApiCall({
        apiEndPoint: APIEndPoint.ACCEPT_TERMS,
        body: userData,
      });

      if (data.status === 'failed') {
        dispatch(showErrorDialog(data.error_message) as any);
      }

      return data;
    } catch (error: any) {
      dispatch(showErrorDialog(error.message) as any);
    }
  };

export const userLogin =
  (userInfo: {
    email: string;
    password: string;
    type: 'customer' | 'merchant';
    is_remember_me: boolean;
  }) =>
  async (dispatch: Dispatch<Action>) => {
    try {
      const data = await APICall.performApiCall({
        apiEndPoint: APIEndPoint.CUSTOMER_SIGN_IN,
        body: userInfo,
      });

      if (data.status === 'failed') {
        dispatch(showErrorDialog(data.error_message) as any);
      } else if (data.status === 'success' && data.data.user) {
        setAuthToken(data.data.access_token);
        setRefreshToken(data.data.refresh_token, userInfo && userInfo.is_remember_me);
        encryptedStorage.setItem('user_uuid', data.data.user.user_uuid);
        encryptedStorage.setItem('is_remember_me', userInfo && userInfo.is_remember_me);
      }

      return data;
    } catch (error: any) {
      dispatch(showErrorDialog(error.message) as any);
    }
  };

export const getUserRegistrationStatus =
  (userUUID: string) => async (dispatch: Dispatch<Action>) => {
    try {
      const data = await APICall.performApiCall({
        apiEndPoint: APIEndPoint.GET_REGISTRATION_STATUS(userUUID),
      });

      if (data.status === 'failed') {
        dispatch(showErrorDialog(data.error_message) as any);
      } else if (data.status === 'success' && data.data.user_uuid !== '') {
        encryptedStorage.setItem('registration_id', data.data.registration.registration_id);
      }

      return data;
    } catch (error: any) {
      dispatch(showErrorDialog(error.message) as any);
    }
  };

export const forgotPasswordGenerateCode =
  (email: object) => async (dispatch: Dispatch<ForgotAction>) => {
    dispatch({
      type: ForgotActionType.POST_USER_FORGOT_PENDING,
    });
    try {
      const data = await APICall.performApiCall({
        apiEndPoint: APIEndPoint.FORGOT_PASS_GENERATE_CODE,
        body: email,
      });

      if (data.status === 'failed') {
        dispatch({
          type: ForgotActionType.POST_USER_FORGOT_FAIL,
          payload: data.error_message,
        });
        dispatch(showErrorDialog(data.error_message) as any);
      } else if (data.status === 'success') {
        dispatch({
          type: ForgotActionType.POST_USER_FORGOT_SUCCESS,
          payload: {
            email: data.data.email,
            verification_id: data.data.verification_id,
          } as ResetPasswordData,
        });
      }

      return data;
    } catch (error: any) {
      dispatch({
        type: ForgotActionType.POST_USER_FORGOT_FAIL,
        payload: error.message,
      });
      dispatch(showErrorDialog(error.message) as any);
    }
  };

export const forgotPasswordVerifyCode =
  (userPasswordInfo: object) => async (dispatch: Dispatch<ForgotAction>) => {
    dispatch({
      type: ForgotActionType.POST_USER_FORGOT_PENDING,
    });
    try {
      const data = await APICall.performApiCall({
        apiEndPoint: APIEndPoint.FORGOT_PASS_VERIFY_CODE,
        body: userPasswordInfo,
      });

      if (data.status === 'failed') {
        dispatch({
          type: ForgotActionType.POST_USER_FORGOT_FAIL,
          payload: data.error_message,
        });
        dispatch(showErrorDialog(data.error_message) as any);
      } else if (data.status === 'success') {
        dispatch({
          type: ForgotActionType.POST_USER_FORGOT_SUCCESS,
          payload: data,
        });
      }

      return data;
    } catch (error: any) {
      dispatch({
        type: ForgotActionType.POST_USER_FORGOT_FAIL,
        payload: error.message,
      });
      dispatch(showErrorDialog(error.message) as any);
    }
  };

const getAddressInfoFromAPIData = (address: any): AddressInfo | undefined => {
  if (address && !_.isEmpty(address)) {
    return {
      address_line_1: address.address_line_1,
      address_line_2: address.address_line_2,
      city: address.city,
      state_code: address.state_code,
      zip_code: address.zip_code,
    };
  }
};

const getContactInfoFromAPIData = (contactInformation: any): ContactInfo[] | undefined => {
  if (contactInformation && isArray(contactInformation)) {
    return [...contactInformation].map(
      (item): ContactInfo => ({
        contact_type: item.contact_type,
        contact_value: item.contact_value,
        is_active: item.is_active,
        is_primary: item.is_primary,
        is_verified: item.is_verified,
      })
    );
  }
};

export const fetchUserPersonalDetails =
  (userUUID: string) => async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FETCH_USER_DETAILS_PENDING,
    });

    try {
      const data = await APICall.performApiCall({
        apiEndPoint: APIEndPoint.GET_PERSONAL_INFO(userUUID),
      });

      if (data.status === 'failed') {
        dispatch({
          type: ActionType.FETCH_USER_DETAILS_FAIL,
          payload: data.error_message,
        });
        dispatch(showErrorDialog(data.error_message) as any);
      } else if (data.status === 'success' && data.data.user_uuid !== '') {
        dispatch({
          type: ActionType.FETCH_USER_DETAILS_SUCCESS,
          payload: {
            date_of_birth: data.data.date_of_birth ? new Date(data.data.date_of_birth) : undefined,
            gender: data.data.gender,
            first_name: data.data.first_name,
            middle_name: data.data.middle_name,
            last_name: data.data.last_name,
            address: getAddressInfoFromAPIData(data.data.address),
            contact_information: getContactInfoFromAPIData(data.data.contact_information),

            userType: 'customer', // TODO change this hardcoded value to what is sent over API
          } as UserDetails,
        });

        return data;
      }
    } catch (error: any) {
      dispatch({
        type: ActionType.FETCH_USER_DETAILS_FAIL,
        payload: error.message,
      });

      dispatch(showErrorDialog(error.message) as any);
    }
  };

export const updateUserPersonalDetails =
  (profileInfo: any) => async (dispatch: Dispatch<Action>) => {
    try {
      const data = await APICall.performApiCall({
        apiEndPoint: APIEndPoint.UPDATE_PERSONAL_INFO,
        body: profileInfo,
      });

      if (data.status === 'failed') {
        dispatch({
          type: ActionType.FETCH_USER_DETAILS_FAIL,
          payload: data.error_message,
        });
        dispatch(showErrorDialog(data.error_message) as any);
      }

      return data;
    } catch (error: any) {
      dispatch(showErrorDialog(error.message) as any);
    }
  };

export const updatePassword = (requestBody: any) => async (dispatch: Dispatch<Action>) => {
  try {
    const data = await APICall.performApiCall({
      apiEndPoint: APIEndPoint.UPDATE_PASSWORD,
      body: requestBody,
    });

    if (data.status === 'failed') {
      dispatch(showErrorDialog(data.error_message) as any);
    }

    return data;
  } catch (error: any) {
    dispatch(showErrorDialog(error.message) as any);
  }
};

export const userSignOut = () => async (dispatch: Dispatch) => {
  try {
    const data = await APICall.performApiCall({
      apiEndPoint: APIEndPoint.SIGN_OUT,
    });

    if (data.status === 'failed') {
      dispatch(showErrorDialog(data.error_message) as any);
    }

    return data;
  } catch (error: any) {
    dispatch(showErrorDialog(error.message) as any);
  }
};
