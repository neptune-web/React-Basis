export const validateName = (name: string) => {
  return String(name)
    .toLowerCase()
    .match(/^[a-zA-Z\s]*$/);
};

export const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const validatePassword = (password: string) => {
  return String(password).match(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
  );
};

export const validateUpperCasePassword = (password: string) => {
  return String(password).match(/^(?=.*[A-Z])/);
};

export const validateLowerCasePassword = (password: string) => {
  return String(password).match(/^(?=.*[a-z])/);
};

export const validateNumberCasePassword = (password: string) => {
  return String(password).match(/^(?=.*\d)/);
};

export const validateSpecialCasePassword = (password: string) => {
  return String(password).match(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/);
};

export const validatePostalCode = (code: string) => {
  return String(code).match(/(^\d{5}$)|(^\d{5}-\d{4}$)/);
};

export const ONE_SECOND = 1000;
export const ONE_MINUTE = ONE_SECOND * 60;
export const ONE_HOUR = ONE_MINUTE * 60;
export const ONE_DAY = ONE_HOUR * 24;
