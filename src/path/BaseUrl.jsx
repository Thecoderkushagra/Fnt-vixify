import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

export const loginUser = (loginData) => {
  return axios.post(`${API_BASE_URL}/public/login`, loginData);
};

export const signupUser = (signupnData) => {
  return axios.post(`${API_BASE_URL}/public/signup`, signupnData);
};

export const varifyOtp = (otpData) => {
  return axios.post(`${API_BASE_URL}/public/varify-otp`, otpData);
};