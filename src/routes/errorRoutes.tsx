import { Error404 as Error404View, Error505 as Error505View } from '../views';

export const ErrorRoutes = (): {
  path: string;
  element: JSX.Element;
}[] => [
  { path: '*', element: <Error404View /> },

  { path: '/error-505', element: <Error505View /> },
];
