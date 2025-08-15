import '../static/Log.css';
import { useOtp } from '../service/OtpService';

const Otp = () => {
    const { otp, handleOtpChange, handleOtpSubmit } = useOtp();

    return (
        <div className='main-body'>
            <div className="auth-container">
                <div className="form-container">
                    <h2>Verify OTP</h2>
                    <form id="verify" onSubmit={handleOtpSubmit}>
                        <div className="form-group">
                            <label htmlFor="otp-input">Enter OTP here</label>
                            <input
                                id="otp-input"
                                type="text"
                                value={otp}
                                onChange={handleOtpChange}
                                required
                            />
                        </div>
                        <button type="submit">Verify</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Otp;
