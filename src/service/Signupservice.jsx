import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signupUser } from '../path/BaseUrl';

export const useSignup = () => {
    const navigate = useNavigate();

    const [signupData, setSignupData] = useState({
        userName: '',
        email: '',
        password: ''
    });

    const handleSignupChange = (e) => {
        const { name, value } = e.target;
        setSignupData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        signupUser(signupData)
            .then((response) => {
                console.log(response)
                if (response.status === 200) {
                    localStorage.setItem('userOtp',signupData.userName)
                    alert(response.data);
                    navigate('/varify')
                }
            })
            .catch((error) => {
                console.error('SignUp Error:', error.response || error.message);
                alert("Signup Fail!!")
            })
    };

    return {
        signupData,
        handleSignupChange,
        handleSignupSubmit
    };
};