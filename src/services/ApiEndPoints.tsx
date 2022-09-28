import { ApiHttpMethod } from 'utils/commonEnums';

const EndPoints = {
  SIGN_UP: '/customers/v1/auth/signup',
  CUSTOMER_SIGN_IN: '/authn/v1/customer/signin',
  MERCHANT_SIGN_IN: '/authn/v1/merchant/signin',
  REFRESH_TOKEN: '/authn/v1/user/refresh',
  FORGOT_PASS_GENERATE_CODE: '/customers/v1/reset/password/generate-code',
  FORGOT_PASS_VERIFY_CODE: '/customers/v1/reset/password/verify-code',

  GET_REGISTRATION_STATUS: (userUUID: string) => `/customers/v1/registration/status/${userUUID}`,
  GENERATE_CODE: '/customers/v1/registration/generate-code',
  VERIFY_CODE: '/customers/v1/registration/verify-code',
  SAVE_PERSONAL_PROFILE: 'customers/v1/registration/save-personal-information',
  ACCEPT_TERMS: '/customers/v1/registration/accept-terms-and-conditions',
  GET_PERSONAL_INFO: (userUUID: string) => `/customers/v1/personal-information/${userUUID}`,
  UPDATE_PERSONAL_INFO: '/customers/v1/settings/update/personal-information',
  FETCH_LOANS: '/loans/v1/repayment',
  UPDATE_PASSWORD: '/customers/v1/settings/update/password',
  SIGN_OUT: '/authn/v1/user/signout',
};

class APIEndPoint {
  endPointUrl: string;

  needsAuthorisation: boolean;

  httpMethod: ApiHttpMethod;

  private constructor(endPoint: string, needsAuthorisation: boolean, httpMethod: ApiHttpMethod) {
    this.endPointUrl = endPoint;
    this.needsAuthorisation = needsAuthorisation;
    this.httpMethod = httpMethod;
  }

  /** -------------------------------------------------------> End Points not required to authorise <-------------------------------------------------------------------- */

  static get SIGN_UP(): APIEndPoint {
    return new APIEndPoint(EndPoints.SIGN_UP, false, ApiHttpMethod.POST);
  }

  static get CUSTOMER_SIGN_IN(): APIEndPoint {
    return new APIEndPoint(EndPoints.CUSTOMER_SIGN_IN, false, ApiHttpMethod.POST);
  }

  static get MERCHANT_SIGN_IN(): APIEndPoint {
    return new APIEndPoint(EndPoints.MERCHANT_SIGN_IN, false, ApiHttpMethod.POST);
  }

  static get REFRESH_TOKEN(): APIEndPoint {
    return new APIEndPoint(EndPoints.REFRESH_TOKEN, false, ApiHttpMethod.POST);
  }

  static get FORGOT_PASS_GENERATE_CODE(): APIEndPoint {
    return new APIEndPoint(EndPoints.FORGOT_PASS_GENERATE_CODE, false, ApiHttpMethod.POST);
  }

  static get FORGOT_PASS_VERIFY_CODE(): APIEndPoint {
    return new APIEndPoint(EndPoints.FORGOT_PASS_VERIFY_CODE, false, ApiHttpMethod.POST);
  }

  /** -------------------------------------------------------> End Points required to authorise <-------------------------------------------------------------------- */

  static GET_REGISTRATION_STATUS(userUUID: string): APIEndPoint {
    return new APIEndPoint(EndPoints.GET_REGISTRATION_STATUS(userUUID), true, ApiHttpMethod.POST);
  }

  static get GENERATE_CODE(): APIEndPoint {
    return new APIEndPoint(EndPoints.GENERATE_CODE, true, ApiHttpMethod.POST);
  }

  static get VERIFY_CODE(): APIEndPoint {
    return new APIEndPoint(EndPoints.VERIFY_CODE, true, ApiHttpMethod.POST);
  }

  static get SAVE_PERSONAL_PROFILE(): APIEndPoint {
    return new APIEndPoint(EndPoints.SAVE_PERSONAL_PROFILE, true, ApiHttpMethod.POST);
  }

  static get ACCEPT_TERMS(): APIEndPoint {
    return new APIEndPoint(EndPoints.ACCEPT_TERMS, true, ApiHttpMethod.POST);
  }

  static GET_PERSONAL_INFO(userUUID: string): APIEndPoint {
    return new APIEndPoint(EndPoints.GET_PERSONAL_INFO(userUUID), true, ApiHttpMethod.POST);
  }

  static get UPDATE_PERSONAL_INFO(): APIEndPoint {
    return new APIEndPoint(EndPoints.UPDATE_PERSONAL_INFO, true, ApiHttpMethod.POST);
  }

  static get FETCH_LOANS(): APIEndPoint {
    return new APIEndPoint(EndPoints.FETCH_LOANS, true, ApiHttpMethod.POST);
  }

  static get UPDATE_PASSWORD(): APIEndPoint {
    return new APIEndPoint(EndPoints.UPDATE_PASSWORD, true, ApiHttpMethod.POST);
  }

  static get SIGN_OUT(): APIEndPoint {
    return new APIEndPoint(EndPoints.SIGN_OUT, true, ApiHttpMethod.POST);
  }
}

export default APIEndPoint;
