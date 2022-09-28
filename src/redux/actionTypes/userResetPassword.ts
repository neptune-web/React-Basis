import { ResetPasswordData } from 'redux/reducers/userResetPassword';

export enum ForgotActionType {
  POST_USER_FORGOT_PENDING = 'POST_USER_FORGOT_PENDING',
  POST_USER_FORGOT_SUCCESS = 'POST_USER_FORGOT_SUCCESS',
  POST_USER_FORGOT_FAIL = 'POST_USER_FORGOT_FAIL',
}

interface ActionForgotPending {
  type: ForgotActionType.POST_USER_FORGOT_PENDING;
}

interface ActionForgotSuccess {
  type: ForgotActionType.POST_USER_FORGOT_SUCCESS;
  payload: ResetPasswordData;
}

interface ActionForgotFail {
  type: ForgotActionType.POST_USER_FORGOT_FAIL;
  payload: string;
}

export type ForgotAction = ActionForgotPending | ActionForgotSuccess | ActionForgotFail;
