import http from "./httpService";

const LOCAL_STORAGE_RESET_PASS_DATA = "resetPassData";

export const resetPass = (data, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return http.post("/user/reset-pass", data, config);
};

export const saveResetPassData = (resetPassData) => {
  localStorage.setItem(
    LOCAL_STORAGE_RESET_PASS_DATA,
    JSON.stringify(resetPassData)
  );
};

export const getResetPassData = () => {
  return (
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_RESET_PASS_DATA)) || false
  );
};

export const removeResetPassData = () => {
  localStorage.removeItem(LOCAL_STORAGE_RESET_PASS_DATA);
};
