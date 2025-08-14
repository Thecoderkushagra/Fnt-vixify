import '../static/Log.css';

const Otp = () => {

    return (

        <div className='main-body'>
            <div className="auth-container">
                <div className="form-container">
                    <h2>Varify OTP</h2>
                    <form id="varify">
                        <div className="form-group">
                            <label htmlFor="register-username">Enter OTP here</label>
                            <input type="text" required />
                        </div>
                        <button type="submit">Varify</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Otp;