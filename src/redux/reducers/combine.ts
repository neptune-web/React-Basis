import { combineReducers } from 'redux';
import deviceStateReducer from './deviceState';
import userStateReducer from './userState';
import userResetPasswordReducer from './userResetPassword';
import loanStateReducer from './loansState';
import dialogStateReducer from './dialogState';

const reducers = combineReducers({
  device: deviceStateReducer,
  userInfo: userStateReducer,
  userResetPassword: userResetPasswordReducer,
  loans: loanStateReducer,
  dialogs: dialogStateReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
