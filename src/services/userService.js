import http from "./httpService";

const LOCAL_STORAGE_AUTH_KEY = "authState";

export const saveUserData = (userData) => {
  localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, JSON.stringify(userData));
};

export const getUserData = () => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH_KEY)) || false;
};

export const removeUserData = () => {
  localStorage.removeItem(LOCAL_STORAGE_AUTH_KEY);
};

export const getAllUsers = (token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return http.get("/users/", config);
};
