import http from "./httpService";

const LOCAL_STORAGE_OTP_DATA = "otpData";

export const generateOtp = (data) => {
  return http.post("/otp/via-sms/generate", data);
};

export const verifyOtp = (data, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return http.post("/otp/via-sms/verify", data, config);
};

export const saveOtpData = (otpData) => {
  localStorage.setItem(LOCAL_STORAGE_OTP_DATA, JSON.stringify(otpData));
};

export const getOtpData = () => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_OTP_DATA)) || false;
};

export const removeOtpData = () => {
  localStorage.removeItem(LOCAL_STORAGE_OTP_DATA);
};
