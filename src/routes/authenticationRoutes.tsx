import { AppRoute } from 'routes';
import {
  JoinUs as JoinUsView,
  SignUp as SignUpView,
  SignIn as SignInView,
  ForgotPassword as ForgotPasswordView,
  ForgotPasswordReset as ForgotPasswordResetView,
  ResetPassword as ResetPasswordView,
  ResetPasswordCongrats as ResetPasswordCongratsView,
} from '../views';

export const AuthenticationRoutes = (): AppRoute[] => [
  //   { path: '/joinus', element: <JoinUsView /> },

  { path: '/signup', element: <SignUpView /> },

  { path: '/signin', element: <SignInView /> },

  { path: '/forgot-password', element: <ForgotPasswordView /> },

  { path: '/forgot-password/reset', element: <ForgotPasswordResetView /> },

  { path: '/reset-password', element: <ResetPasswordView /> },

  { path: '/reset-password/congrats', element: <ResetPasswordCongratsView /> },
];
