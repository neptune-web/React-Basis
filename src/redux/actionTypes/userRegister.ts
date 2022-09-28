import { UserDetails } from '../reducers/userState';

export enum ActionType {
  FETCH_USER_DETAILS_PENDING = 'FETCH_USER_DETAILS_PENDING',
  FETCH_USER_DETAILS_SUCCESS = 'FETCH_USER_DETAILS_SUCCESS',
  FETCH_USER_DETAILS_FAIL = 'FETCH_USER_DETAILS_FAIL',
}

interface ActionPending {
  type: ActionType.FETCH_USER_DETAILS_PENDING;
}

interface ActionSuccess {
  type: ActionType.FETCH_USER_DETAILS_SUCCESS;
  payload: UserDetails;
}

interface ActionFail {
  type: ActionType.FETCH_USER_DETAILS_FAIL;
  payload: string;
}

export type Action = ActionPending | ActionSuccess | ActionFail;
