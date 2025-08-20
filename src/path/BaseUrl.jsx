import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';
const tokennn = localStorage.getItem('jwtToken')

export const loginUser = (loginData) => {
  return axios.post(`${API_BASE_URL}/public/login`, loginData);
};

export const signupUser = (signupnData) => {
  return axios.post(`${API_BASE_URL}/public/signup`, signupnData);
};

export const varifyOtp = (otpData) => {
  return axios.post(`${API_BASE_URL}/public/varify-otp`, otpData);
};

export const onlineUser = () => {
  return axios.get(`${API_BASE_URL}/user-changes/onlineUser`,{
    headers:{
      Authorization: `Bearer ${tokennn}`
    }
  })
}