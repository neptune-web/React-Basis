import { AppRoute } from 'routes';
import DashboardLayout from '../layout/dashboard';

import {
  SignUpCongrats as SignUpCongratsView,
  SignUpVerify as SignUpVerifyView,
  TermsAndConditions as TermsAndConditionsView,
  SetupProfile as SetupProfileView,
  SetupVerify as SetupVerifyView,
  Dashboard as DashboardView,
  DashboardRepayments as DashboardRepaymentsView,
  DashboardLoans as DashboardLoansView,
  DashboardLoansRepayment as DashboardLoansRepaymentView,
  DashboardCalculator as DashboardCalculatorView,
  DashboardSettings as DashboardSettingsView,
  SetUpCongrats as SetUpCongratsView,
  DashboardSettingsVerify as DashboardSettingsVerifyView,
  DashboardSpendingAmount as DashboardSpendingAmountView,
  DashboardRepaymentAmount as DashboardRepaymentAmountView,
  DashboardSpendingMethod as DashboardSpendingMethodView,
  DashboardTermsAndConditions as DashboardTermsAndConditionsView,
  DashboardPayNow as DashboardPayNowView,
  DashboardPayProcess as DashboardPayProcessView,
  DashboardPayProcessSuccess as DashboardPayProcessSuccessView,
  DashboardPayProcessFailure as DashboardPayProcessFailureView,
  DashboardPayNowSuccess as DashboardPayNowSuccessView,
  DashboardPayNowFailure as DashboardPayNowFailureView,
} from '../views';

export const CustomerRoutes = (): AppRoute[] => [
  { path: '/signup-verify', element: <SignUpVerifyView /> },

  { path: '/signup/congrats', element: <SignUpCongratsView /> },

  { path: '/setup/congrats', element: <SetUpCongratsView /> },

  { path: '/terms-conditions', element: <TermsAndConditionsView /> },

  { path: '/setup-profile', element: <SetupProfileView /> },

  { path: '/setup-verify', element: <SetupVerifyView /> },

  {
    path: '/dashboard',
    element: <DashboardView />,
    layoutComponent: DashboardLayout,
  },

  {
    path: '/dashboard/spending-amount',
    element: <DashboardSpendingAmountView />,
    layoutComponent: DashboardLayout,
  },
  {
    path: '/dashboard/repayment-amount',
    element: <DashboardRepaymentAmountView />,
    layoutComponent: DashboardLayout,
  },
  {
    path: '/dashboard/spending-method',
    element: <DashboardSpendingMethodView />,
    layoutComponent: DashboardLayout,
  },
  {
    path: '/dashboard/terms-conditions',
    element: <DashboardTermsAndConditionsView />,
    layoutComponent: DashboardLayout,
  },

  {
    path: '/dashboard/repayments',
    element: <DashboardRepaymentsView />,
    layoutComponent: DashboardLayout,
  },

  {
    path: '/dashboard/loans',
    element: <DashboardLoansView />,
    layoutComponent: DashboardLayout,
  },

  {
    path: '/dashboard/loans/repayment',
    element: <DashboardLoansRepaymentView />,
    layoutComponent: DashboardLayout,
  },

  {
    path: '/dashboard/calculator',
    element: <DashboardCalculatorView />,
    layoutComponent: DashboardLayout,
  },

  {
    path: '/dashboard/settings',
    element: <DashboardSettingsView />,
    layoutComponent: DashboardLayout,
  },

  {
    path: '/dashboard/settings/verify',
    element: <DashboardSettingsVerifyView />,
    layoutComponent: DashboardLayout,
  },

  {
    path: '/dashboard/pay-now',
    element: <DashboardPayNowView />,
    layoutComponent: DashboardLayout,
  },
  {
    path: '/dashboard/pay-now/pay-process',
    element: <DashboardPayProcessView />,
    layoutComponent: DashboardLayout,
  },
  {
    path: '/dashboard/pay-now/pay-process-success',
    element: <DashboardPayProcessSuccessView />,
    layoutComponent: DashboardLayout,
  },
  {
    path: '/dashboard/pay-now/pay-process-failure',
    element: <DashboardPayProcessFailureView />,
    layoutComponent: DashboardLayout,
  },
  {
    path: '/dashboard/pay-now/success',
    element: <DashboardPayNowSuccessView />,
    layoutComponent: DashboardLayout,
  },
  {
    path: '/dashboard/pay-now/failure',
    element: <DashboardPayNowFailureView />,
    layoutComponent: DashboardLayout,
  },
];
