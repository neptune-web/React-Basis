import { AppRoute } from 'routes';
import MerchantHomeLayout from '../layout/merchant';

import {
  SignUpCongrats as SignUpCongratsView,
  SignUpVerify as SignUpVerifyView,
  TermsAndConditions as TermsAndConditionsView,
  SetupProfile as SetupProfileView,
  SetupVerify as SetupVerifyView,
  MerchantDashboard as MerchantDashboardView,
  DashboardPatientProfile as DashboardPatientProfileView,
  IssueRefund as IssueRefundView,
  IssueRefundSuccess as IssueRefundSuccessView,
  IssueRefundFail as IssueRefundFailView,
  Statements as StatementsView,
  InvitePatients as InvitePatientsView,
  MerchantSettings as MerchantSettingsView,
  SetUpCongrats as SetUpCongratsView,
} from '../views';

export const MerchantRoutes = (): AppRoute[] => [
  { path: '/signup-verify', element: <SignUpVerifyView /> },

  { path: '/signup/congrats', element: <SignUpCongratsView /> },

  { path: '/setup/congrats', element: <SetUpCongratsView /> },

  { path: '/terms-conditions', element: <TermsAndConditionsView /> },

  { path: '/setup-profile', element: <SetupProfileView /> },

  { path: '/setup-verify', element: <SetupVerifyView /> },

  {
    path: '/merchant/dashboard',
    element: <MerchantDashboardView />,
    layoutComponent: MerchantHomeLayout,
  },
  {
    path: '/merchant/dashboard/patient-profile',
    element: <DashboardPatientProfileView />,
    layoutComponent: MerchantHomeLayout,
  },
  {
    path: '/merchant/dashboard/issue-refund',
    element: <IssueRefundView />,
    layoutComponent: MerchantHomeLayout,
  },
  {
    path: '/merchant/dashboard/issue-refund/success',
    element: <IssueRefundSuccessView />,
    layoutComponent: MerchantHomeLayout,
  },
  {
    path: '/merchant/dashboard/issue-refund/fail',
    element: <IssueRefundFailView />,
    layoutComponent: MerchantHomeLayout,
  },
  {
    path: '/merchant/statements',
    element: <StatementsView />,
    layoutComponent: MerchantHomeLayout,
  },
  {
    path: '/merchant/invite-patients',
    element: <InvitePatientsView />,
    layoutComponent: MerchantHomeLayout,
  },
  {
    path: '/merchant/settings',
    element: <MerchantSettingsView />,
    layoutComponent: MerchantHomeLayout,
  },
];
