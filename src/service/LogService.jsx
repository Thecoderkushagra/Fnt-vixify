import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser, signupUser } from '../path/BaseUrl';

export const useAuth = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    userName: '',
    password: ''
  });

  const handleLoginChange = (e) => {
    const { id, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    loginUser(loginData)
      .then((response) => {
        const token = response.data.token;
        if (token) {
          localStorage.setItem('jwtToken', token);
          console.log('Login successful! JWT:', token);
          alert("Login successful!");
          navigate('/home');
        } else {
          alert("Login failed: No token received");
        }
      })
      .catch((error) => {
        console.error('Login failed:', error.response || error.message);
        alert("Login failed. Check credentials.");
      });
  };

  return {
    loginData,
    handleLoginChange,
    handleLoginSubmit
  };
};
