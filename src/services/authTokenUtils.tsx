import JwtDecode from 'jwt-decode';
import Cookies from 'universal-cookie';
import { ONE_DAY, ONE_MINUTE } from 'utils';
import { CookieKeys } from 'utils/commonEnums';

export const setAuthToken = (authToken: string): void => {
  const cookies = new Cookies();

  const decoded = JwtDecode(authToken);

  if (decoded) {
    const expiryAt: Date = new Date(new Date().getTime() + 15 * ONE_MINUTE);

    cookies.set(CookieKeys.AUTH_TOKEN, authToken, {
      path: '/',
      expires: expiryAt,
      sameSite: true,
    });
  }
};

export const getAuthToken = (): string | undefined => new Cookies().get(CookieKeys.AUTH_TOKEN);

export const removeAuthToken = (): void =>
  new Cookies().remove(CookieKeys.AUTH_TOKEN, {
    path: '/',
    sameSite: true,
  });

export const setRefreshToken = (refreshToken: string, isRememberMe?: boolean): void => {
  const cookies = new Cookies();

  const decoded = JwtDecode(refreshToken);

  if (decoded) {
    // Expiry Time as 15 days minus one minute
    const expiryAt: Date = new Date(
      new Date().getTime() + (isRememberMe ? 15 : 1) * ONE_DAY - ONE_MINUTE
    );

    cookies.set(CookieKeys.REFRESH_TOKEN, refreshToken, {
      path: '/',
      expires: expiryAt,
      sameSite: true,
    });
  }
};

export const getRefreshToken = (): string | undefined =>
  new Cookies().get(CookieKeys.REFRESH_TOKEN);

export const removeRefreshToken = (): void =>
  new Cookies().remove(CookieKeys.REFRESH_TOKEN, {
    path: '/',
    sameSite: true,
  });
