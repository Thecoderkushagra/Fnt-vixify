import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

export const loginUser = (loginData) => {
  return axios.post(`${API_BASE_URL}/log-status/login`, loginData);
};

export const signupUser = (signupnData) => {
  return axios.post(`${API_BASE_URL}/public/login`, signupnData);
};