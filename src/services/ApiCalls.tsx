import axios, { AxiosResponse } from 'axios';
import APIEndPoint from './ApiEndPoints';
import APIMiddleWare from './ApiMiddleware';

class APICall {
  static performApiCall = async ({
    apiEndPoint,
    additionalHeader = {},
    body,
  }: {
    apiEndPoint: APIEndPoint;
    additionalHeader?: object;
    body?: object;
  }): Promise<any> => {
    let headers = {
      ...additionalHeader,
    };

    if (apiEndPoint.needsAuthorisation) {
      const authToken = await APIMiddleWare.getAuthToken();

      headers = { ...headers, Authorization: `Bearer ${authToken}` };
    }

    return new Promise((resolve, reject) => {
      axios({
        method: apiEndPoint.httpMethod,
        baseURL: process.env.REACT_APP_API_URL,
        url: apiEndPoint.endPointUrl,
        headers,
        data: body,
        withCredentials: true,
      })
        .then((response: AxiosResponse) => resolve(response.data))
        .catch((error) => reject(error));
    });
  };
}

export default APICall;
