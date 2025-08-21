import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

export const loginUser = (loginData) => {
  return axios.post(`${API_BASE_URL}/public/login`, loginData);
};

export const signupUser = (signupData) => {
  return axios.post(`${API_BASE_URL}/public/signup`, signupData);
};

export const varifyOtp = (otpData) => {
  return axios.post(`${API_BASE_URL}/public/varify-otp`, otpData);
};

export const logoutUrl = () => {
  const token = localStorage.getItem('jwtToken');
  return axios.post(`${API_BASE_URL}/user-changes/logout`, {},
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

export const onlineUser = () => {
  const token = localStorage.getItem('jwtToken');
  return axios.get(`${API_BASE_URL}/user-changes/onlineUser`, {
    headers: { Authorization: `Bearer ${token}` }
  });
};
