import { Dispatch } from 'redux';
import { Loan, Repayment } from 'redux/reducers/loansState';
import APICall from 'services/ApiCalls';
import APIEndPoint from 'services/ApiEndPoints';
import { FetchLoansAction, FetchLoansActionType } from '../actionTypes/fetchLoansActions';

const getRepaymentsList = (repayments: any[]): Repayment[] => {
  const repaymentsArray = Array<Repayment>(0);

  for (const repaymentObj of repayments) {
    const deductionDate = new Date(repaymentObj.installment_date);

    const repayment = {
      deductionAmount: repaymentObj.principal + repaymentObj.additional_principal,
      deductionDate,
      repaymentMethod: 'Via Bank Account',
      status: repaymentObj.status,
    } as Repayment;

    repaymentsArray.push(repayment);
  }

  return repaymentsArray;
};

const generateLoansArrayFromAPIResponse = (userLoans: any[]): Loan[] => {
  const loanArray = Array<Loan>(0);

  for (const loanObj of userLoans) {
    const loanIssueDate = new Date(loanObj.created_at);
    let estEndDate = new Date(loanObj.created_at);
    estEndDate = new Date(estEndDate.setMonth(estEndDate.getMonth() + 4));

    const loan = {
      id: loanObj.id,
      loanId: loanObj.loan_id,
      loanIssueDate,
      provider: 'ABC Dental Health',
      loanAmount: loanObj.principal,
      status: loanObj.status,
      outstanding:
        loanObj.outstanding_principal + loanObj.outstanding_penalty + loanObj.outstanding_interest,
      estEndDate,
      repaymentAccount: 'Chase 1234',
      repaymentCycle: loanObj.repayment_cycle,
      numberOfDeductions: loanObj.total_installments,

      repayments: getRepaymentsList(loanObj.repayments),
    } as Loan;

    loanArray.push(loan);
  }

  return loanArray;
};

export const fetchUserLoans =
  (requestBody: object) => async (dispatch: Dispatch<FetchLoansAction>) => {
    dispatch({
      type: FetchLoansActionType.FETCH_LOAN_PENDING,
    });

    try {
      const data = await APICall.performApiCall({
        apiEndPoint: APIEndPoint.FETCH_LOANS,
        body: requestBody,
      });

      if (data.status === 'failed') {
        dispatch({
          type: FetchLoansActionType.FETCH_LOAN_FAIL,
          payload: data.error_message,
        });
      } else if (data.status === 'success' && data.data.user_uuid !== '') {
        // console.log('loanData-->', data.user_loans);
        dispatch({
          type: FetchLoansActionType.FETCH_LOAN_SUCCESS,
          payload: generateLoansArrayFromAPIResponse(data.data.user_loans),
        });
      }
    } catch (error: any) {
      dispatch({
        type: FetchLoansActionType.FETCH_LOAN_FAIL,
        payload: error.message,
      });
    }
  };
