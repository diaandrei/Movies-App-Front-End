const preferenceKeys = {
  userProfile: `userProfile`,
  authToken: `authToken`,
  deviceToken: `DeviceToken`,
  isAdmin: "isAdmin",
  userName: "userName",
};

export const setProfile = (userDetails) => {
  localStorage.setItem(preferenceKeys.userProfile, JSON.stringify(userDetails));
};
export const getProfile = () => {
  return JSON.parse(localStorage.getItem(preferenceKeys.userProfile) || {});
};

export const setUserName = (name) => {
  localStorage.setItem(preferenceKeys.userName, name);
};

export const getUserName = () => {
  return localStorage.getItem(preferenceKeys.userName) || "";
};

export const setToken = (authToken) => {
  localStorage.setItem(preferenceKeys.authToken, authToken);
};

export const setIsAdmin = (item) => {
  localStorage.setItem(preferenceKeys.isAdmin, item);
};

export const setDeviceToken_ = (token) => {
  localStorage.setItem(preferenceKeys.deviceToken, token);
};
export const getDeviceToken_ = () => {
  return localStorage.getItem(preferenceKeys.deviceToken) || "";
};
export const getToken = () => {
  return localStorage.getItem(preferenceKeys.authToken) || "";
};

export const getIsAdmin = () => {
  return localStorage.getItem(preferenceKeys.isAdmin) || "";
};

export const clearStorage = () => {
  localStorage.clear();
};
