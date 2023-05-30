import './Login.css'
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrors([]);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrors([]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate(email, password);
    setErrors(validationErrors);

    if (validationErrors.length === 0) {
      console.log('Email:', email);
      console.log('Password:', password);
    }
  };

  const validate = (email, password) => {
    const errors = [];

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.push('Invalid email address');
    }

    if (email.trim() === '') {
      errors.push('Email cannot be empty');
    }

    if (password.trim() === '') {
      errors.push('Password cannot be empty');
    }

    return errors;
  };

  return (
    <div className="">
      <div className="image">
        <div className="image-overlay">
          <div className="image-overlay-content">
            <h1 className="login-title">Sign In</h1>
            <p className='login-paragraph'>Hello there! Sign in and start <br /> managing your system</p>
            <form className="login-form" onSubmit={handleSubmit}>
              <input type="text" placeholder="email@microverse.com" className="login-input" value={email} onChange={
                handleEmailChange
              } />
              <input type="password" placeholder="***************" className="login-input" value={password}
                onChange={handlePasswordChange} />

              {errors.length > 0 && (
                <div className="login-error-container">
                  {errors.map((error, index) => (
                    <p key={index} className="login-error">{error}</p>
                ))}
                </div>
              )}

              <button className="login-button">Login</button>
            </form>

            <div className="login-footer">
              <p className="login-footer-text">Don&rsquo;t have an account? <a href="#" className="login-footer-link">Sign Up</a></p>
              </div>

            </div>
        </div>
      </div>

    </div>
  );
}

export default Login;

