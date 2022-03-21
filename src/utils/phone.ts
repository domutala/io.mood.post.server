import * as libphonenumber from "libphonenumber-js";

export const isValid = (phoneNumebr: string) => {
  try {
    const e = libphonenumber.parsePhoneNumber(phoneNumebr);
    return e.isValid();
  } catch (error) {
    return false;
  }
};

export const countryCode = (phoneNumebr: string) => {
  try {
    const e = libphonenumber.parsePhoneNumber(phoneNumebr);
    return e.isValid() ? e.countryCallingCode.toString() : undefined;
  } catch (error) {
    return undefined;
  }
};

export const format = (phoneNumebr: string, international = false) => {
  try {
    const e = libphonenumber.parsePhoneNumber(phoneNumebr);

    if (!e.isValid()) {
      return "";
    }

    if (international) {
      return e.formatInternational();
    }

    return e.formatNational();
  } catch (error) {
    return "";
  }
};
