import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { varifyOtp } from '../path/BaseUrl';

export const useOtp = () => {
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();

    const handleOtpChange = (e) => {
        setOtp(e.target.value);
    };

    const handleOtpSubmit = (e) => {
        e.preventDefault();

        const user = localStorage.getItem('userOtp'); 
        const payload = { otp, user };

        varifyOtp(payload)
            .then((response) => {
                console.log('OTP Response:', response);
                if (response.status === 200) {
                    alert(response.data); 
                    navigate('/');
                }
            })
            .catch((error) => {
                console.error('OTP Verification Error:', error.response || error.message);
                alert("OTP Verification Failed");
            });
    };

    return {
        otp,
        handleOtpChange,
        handleOtpSubmit
    };
};
