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

export const signupUser = (data) => {
  return http.post("/users/register", data);
};

export const loginUser = (data) => {
  return http.post("/users/login", data);
};

export const getAllUsers = (token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return http.get("/users/", config);
};

export const deleteUserById = (token, userId) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return http.delete("/users/" + userId, config);
};

export const getUserById = (token, userId) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return http.get("/users/" + userId, config);
};

export const getNumberOfUsers = (token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return http.get("/users/number-of-users", config);
};
