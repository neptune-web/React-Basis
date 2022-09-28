import APICall from './ApiCalls';
import APIEndPoint from './ApiEndPoints';
import {
  getAuthToken as getAuthTokenFromCookies,
  getRefreshToken,
  removeAuthToken,
  removeRefreshToken,
  setAuthToken,
  setRefreshToken,
} from './authTokenUtils';
import { encryptedStorage } from './encryptedStorage';

class APIMiddleWare {
  static fetchingRefreshToken = false;

  static performLogout(): void {
    encryptedStorage.removeItem('user_uuid');
    encryptedStorage.removeItem('registration_id');
    removeAuthToken();
    removeRefreshToken();

    window.history.pushState({}, 'Sign In', '/signin');
    window.location.reload();
  }

  static async getAuthToken(): Promise<string> {
    const authToken = getAuthTokenFromCookies();

    if (authToken) {
      return authToken;
    }

    const refreshToken = getRefreshToken();
    if (refreshToken && !APIMiddleWare.fetchingRefreshToken) {
      APIMiddleWare.fetchingRefreshToken = true;

      const refreshResponse = await APICall.performApiCall({
        apiEndPoint: APIEndPoint.REFRESH_TOKEN,
        body: {
          user_uuid: encryptedStorage.getItem('user_uuid'),
          refresh_token: refreshToken,
        },
      }).catch((_) => {
        APIMiddleWare.fetchingRefreshToken = false;
        APIMiddleWare.performLogout();
      });

      APIMiddleWare.fetchingRefreshToken = false;

      if (refreshResponse.status === 'success' && refreshResponse.data.user) {
        setAuthToken(refreshResponse.data.access_token);
        setRefreshToken(
          refreshResponse.data.refresh_token,
          encryptedStorage.getItem('is_remember_me')
        );

        return refreshResponse.data.access_token;
      }
    }

    if (!APIMiddleWare.fetchingRefreshToken) {
      APIMiddleWare.performLogout();
    }

    return '';
  }
}

export default APIMiddleWare;
