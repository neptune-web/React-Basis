import { ForgotAction, ForgotActionType } from '../actionTypes/userResetPassword';

export interface ResetPasswordData {
  email?: string;
  verification_id?: string;
  expiry_time?: string;
}

interface State {
  user: ResetPasswordData;
  loading: boolean;
  error: string | null;
}

const initialState = {
  user: {} as ResetPasswordData,
  loading: false,
  error: null,
};

const userResetPasswordReducer = (state: State = initialState, action: ForgotAction): State => {
  switch (action.type) {
    case ForgotActionType.POST_USER_FORGOT_PENDING:
      return {
        loading: true,
        user: {} as ResetPasswordData,
        error: null,
      };
    case ForgotActionType.POST_USER_FORGOT_SUCCESS:
      return {
        loading: false,
        user: {
          ...state.user,
          ...(action.payload || {}),
        },
        error: null,
      };
    case ForgotActionType.POST_USER_FORGOT_FAIL:
      return {
        loading: false,
        error: action.payload,
        user: {} as ResetPasswordData,
      };
    default:
      return state;
  }
};

export default userResetPasswordReducer;
