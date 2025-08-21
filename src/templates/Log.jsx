import { useState } from 'react';
import { useSignup } from '../service/Signupservice';
import { useAuth } from '../service/LogService';
import logo from '../resources/logovexify.png';
import '../static/Log.css';

const Log = () => {

  const [activeTab, setActiveTab] = useState('login');
  const switchTab = (tabName) => {
    setActiveTab(tabName);
  };

  const { loginData, handleLoginChange, handleLoginSubmit } = useAuth();
  const { signupData, handleSignupChange, handleSignupSubmit } = useSignup();


  return (

    <div className='main-body'>
      <div className='tag-line'>
        <h1><i>Vixify</i></h1>
        <span>
          <p>Distance dosen't matter here <br />
            Connect to your loved once with vixify...</p>
        </span>
      </div>

      <div className="auth-container">
        <div className="tabs">
          <button
            className={`tab ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => switchTab('login')}
          >
            Login
          </button>
          <button
            className={`tab ${activeTab === 'register' ? 'active' : ''}`}
            onClick={() => switchTab('register')}
          >
            Register
          </button>
        </div>

        <div className="image-container">
          <img src={logo} alt="logo" />
        </div>

        {activeTab === 'login' && (
          <div id="login-form" className="form-container">
            <h2>Login</h2>
            <form id="login"
              onSubmit={handleLoginSubmit}
            >
              <div className="form-group">
                <label htmlFor="userName">Username</label>
                <input
                  type="text"
                  id="userName"
                  value={loginData.userName}
                  onChange={handleLoginChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  required
                />
              </div>
              <button type="submit">Login</button>
            </form>
          </div>
        )}

        {activeTab === 'register' && (
          <div id="register-form" className="form-container">
            <h2>Register</h2>
            <form id="register"
              onSubmit={handleSignupSubmit}
            >
              <div className="form-group">
                <label htmlFor="register-username">Username</label>
                <input
                  type="text"
                  id="register-username"
                  name="userName"
                  value={signupData.userName}
                  onChange={handleSignupChange}
                  required />
              </div>
              <div className="form-group">
                <label htmlFor="register-email">Email</label>
                <input
                  type="email"
                  id="register-email"
                  name="email"
                  value={signupData.email}
                  onChange={handleSignupChange}
                  required />
              </div>
              <div className="form-group">
                <label htmlFor="register-password">Password</label>
                <input
                  type="password"
                  id="register-password"
                  name="password"
                  value={signupData.password}
                  onChange={handleSignupChange}
                  required />
              </div>
              <button type="submit">Register</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Log;
