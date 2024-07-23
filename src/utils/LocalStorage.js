const preferenceKeys = {
    userProfile: `userProfile`,
    authToken: `authToken`,
    deviceToken: `DeviceToken`,
  };
  
  export const setProfile = (userDetails) => {
    localStorage.setItem(preferenceKeys.userProfile, JSON.stringify(userDetails));
  };
  export const getProfile = () => {
    return JSON.parse(localStorage.getItem(preferenceKeys.userProfile) || {});
  };
  
  export const setToken = (authToken) => {
    localStorage.setItem(preferenceKeys.authToken, authToken);
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
  
  export const clearStorage = () => {
    localStorage.clear();
  };
  