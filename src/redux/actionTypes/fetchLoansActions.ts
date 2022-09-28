import { Loan } from 'redux/reducers/loansState';

export enum FetchLoansActionType {
  FETCH_LOAN_PENDING = 'FETCH_LOAN_PENDING',
  FETCH_LOAN_SUCCESS = 'FETCH_LOAN_SUCCESS',
  FETCH_LOAN_FAIL = 'FETCH_LOAN_FAIL',
}

interface ActionPending {
  type: FetchLoansActionType.FETCH_LOAN_PENDING;
}

interface ActionSuccess {
  type: FetchLoansActionType.FETCH_LOAN_SUCCESS;
  payload: Array<Loan>;
}

interface ActionFail {
  type: FetchLoansActionType.FETCH_LOAN_FAIL;
  payload: string;
}

export type FetchLoansAction = ActionPending | ActionSuccess | ActionFail;
