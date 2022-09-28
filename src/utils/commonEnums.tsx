export enum LoanStatus {
  REPAYMENT = 'repayment',
  REPAID = 'repaid',
  CANCELLED = 'cancelled',
  DEFAULT = 'default',
  REFUNDED = 'refunded',
  DELINQUENT = 'delinquent',
}

export const LoanStatusLabel = (status: LoanStatus): string => {
  switch (status) {
    case LoanStatus.REPAYMENT:
      return 'Pending';
    case LoanStatus.REPAID:
      return 'Repaid';
    case LoanStatus.CANCELLED:
      return 'Cancelled';
    case LoanStatus.DEFAULT:
      return 'Defaulted';
    case LoanStatus.DELINQUENT:
      return 'Incomplete';

    default:
      return '';
  }
};

export enum RepaymentStatus {
  UPCOMING = 'upcoming',
  PROCESSING = 'processing',
  FAILED = 'failed',
  CANCELLED = 'cancelled',
  SUCCESSFUL = 'successful',
}

export const RepaymentStatusLabel = (status: RepaymentStatus): string => {
  switch (status) {
    case RepaymentStatus.UPCOMING:
      return 'Upcoming';
    case RepaymentStatus.PROCESSING:
      return 'Processing';
    case RepaymentStatus.FAILED:
      return 'Failed';
    case RepaymentStatus.CANCELLED:
      return 'Cancelled';
    case RepaymentStatus.SUCCESSFUL:
      return 'Successful';

    default:
      return '';
  }
};

export enum RepaymentCycle {
  BI_WEEKLY = 'bi_weekly',
  SEMI_MONTHLY = 'semi_monthly',
  MONTHLY = 'monthly',
}

export const RepaymentCycleLabel = (repaymentCycle: RepaymentCycle): string => {
  switch (repaymentCycle) {
    case RepaymentCycle.BI_WEEKLY:
      return 'Bi Weekly';
    case RepaymentCycle.SEMI_MONTHLY:
      return 'Semi Monthly';
    case RepaymentCycle.MONTHLY:
      return 'Monthly';

    default:
      return '';
  }
};

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}

export const GenderLabel = (gender: Gender): string => {
  switch (gender) {
    case Gender.MALE:
      return 'Male';
    case Gender.FEMALE:
      return 'Female';
    case Gender.OTHER:
      return 'Other';
    default:
      return '';
  }
};
export enum MerchantDashboardStatus {
  INVITED = 'invited',
  ISSUED = 'issued',
  TRANSFERED = 'transfered',
  COMPLETED = 'completed',
  INITIATED = 'initiated',
  QUEUED = 'queued',
}

export const MerchantDashboardStatusLabel = (
  merchantDashboardStatus: MerchantDashboardStatus
): string => {
  switch (merchantDashboardStatus) {
    case MerchantDashboardStatus.INVITED:
      return 'Invited';
    case MerchantDashboardStatus.ISSUED:
      return 'Issued';
    case MerchantDashboardStatus.TRANSFERED:
      return 'Transfered';
    case MerchantDashboardStatus.COMPLETED:
      return 'Completed';
    case MerchantDashboardStatus.INITIATED:
      return 'Initiated';
    case MerchantDashboardStatus.QUEUED:
      return 'Queued';
    default:
      return '';
  }
};

export enum ApiHttpMethod {
  GET = 'get',
  POST = 'post',
}

export enum CookieKeys {
  AUTH_TOKEN = 'authToken',
  REFRESH_TOKEN = 'refreshToken',
}
