import { FetchLoansAction, FetchLoansActionType } from 'redux/actionTypes/fetchLoansActions';
import { LoanStatus, RepaymentCycle, RepaymentStatus } from 'utils/commonEnums';

export interface Repayment {
  deductionAmount: number;
  deductionDate: Date;
  repaymentMethod: string;
  status: RepaymentStatus;
}

export interface Loan {
  id: string;
  loanId: string;
  loanIssueDate: Date;
  provider: string;
  loanAmount: number;
  status: LoanStatus;
  outstanding: number;
  estEndDate: Date;
  repaymentAccount: string;
  repaymentCycle: RepaymentCycle;
  numberOfDeductions: number;

  repayments: Repayment[];
}

export interface LoanState {
  loans: Loan[];
  loading: boolean;
  error?: string;
  success: boolean;
  totalOutStanding: number;
  activeLoans: number;
  dashboardRepayments: Repayment[];
}

const initialState = {
  loans: Array<Loan>(0),
  loading: false,
  error: undefined,
  success: false,
  totalOutStanding: 0,
  activeLoans: 0,
  dashboardRepayments: Array<Repayment>(0),
};

const getDashboardData = (
  userLoans: Loan[]
): { totalOutstanding: number; activeLoans: number; dashboardRepayments: Repayment[] } => {
  let totalOutstanding = 0;
  let activeLoans = 0;
  const dashboardRepayments = new Array<Repayment>();

  userLoans.forEach((loan) => {
    totalOutstanding += loan.outstanding;
    activeLoans += loan.outstanding > 0 ? 1 : 0;

    dashboardRepayments.push(...loan.repayments);
  });

  dashboardRepayments.filter(
    (repayment) => repayment.deductionDate.getTime() >= new Date().getTime()
  );

  dashboardRepayments.sort(
    (repayment1, repayment2) =>
      repayment1.deductionDate.getTime() - repayment2.deductionDate.getTime()
  );

  return { totalOutstanding, activeLoans, dashboardRepayments };
};

const loanStateReducer = (state: LoanState = initialState, action: FetchLoansAction): LoanState => {
  switch (action.type) {
    case FetchLoansActionType.FETCH_LOAN_PENDING:
      return {
        loans: Array<Loan>(0),
        loading: true,
        error: undefined,
        success: false,
        totalOutStanding: 0,
        activeLoans: 0,
        dashboardRepayments: Array<Repayment>(0),
      };
    case FetchLoansActionType.FETCH_LOAN_SUCCESS:
      return {
        loans: action.payload,
        loading: false,
        error: undefined,
        success: true,
        totalOutStanding: getDashboardData(action.payload).totalOutstanding,
        activeLoans: getDashboardData(action.payload).activeLoans,
        dashboardRepayments: getDashboardData(action.payload).dashboardRepayments,
      };
    case FetchLoansActionType.FETCH_LOAN_FAIL:
      return {
        loans: Array<Loan>(0),
        loading: false,
        error: action.payload,
        success: false,
        totalOutStanding: 0,
        activeLoans: 0,
        dashboardRepayments: Array<Repayment>(0),
      };

    default:
      return state;
  }
};

export default loanStateReducer;
