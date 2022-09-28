import { Gender } from 'utils/commonEnums';
import { Action, ActionType } from '../actionTypes/userRegister';

export interface AddressInfo {
  address_line_1: string;
  address_line_2: string;
  city: string;
  state_code: string;
  zip_code: string;
}

export interface ContactInfo {
  contact_type: string;
  contact_value: string;
  is_active: boolean;
  is_primary: boolean;
  is_verified: boolean;
}

export interface UserDetails {
  date_of_birth?: Date;
  gender: Gender;
  first_name: string;
  middle_name: string;
  last_name: string;
  address?: AddressInfo;
  contact_information?: ContactInfo[];

  userType: 'customer' | 'merchant';
}

export interface UserState {
  userDetails: UserDetails;

  userDetailsLoading: boolean;
  userDetailsError: string | null;
  userDetailsSuccess: boolean;
}

const initialState = {
  userDetails: {} as UserDetails,

  userDetailsLoading: false,
  userDetailsError: null,
  userDetailsSuccess: false,
};

const userStateReducer = (state: UserState = initialState, action: Action): UserState => {
  switch (action.type) {
    case ActionType.FETCH_USER_DETAILS_PENDING:
      return {
        userDetails: { ...state.userDetails },

        userDetailsLoading: true,
        userDetailsError: null,
        userDetailsSuccess: false,
      };

    case ActionType.FETCH_USER_DETAILS_SUCCESS:
      return {
        userDetails: { ...state.userDetails, ...(action.payload || {}) },

        userDetailsLoading: false,
        userDetailsError: null,
        userDetailsSuccess: true,
      };
    case ActionType.FETCH_USER_DETAILS_FAIL:
      return {
        userDetails: { ...state.userDetails },

        userDetailsLoading: false,
        userDetailsError: action.payload,
        userDetailsSuccess: false,
      };

    default:
      return state;
  }
};

export default userStateReducer;
