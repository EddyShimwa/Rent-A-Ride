import './Login.css'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, selectLoginUserState, selectLoginUser } from '../../redux/slices/loginSlice.js';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  // const token = localStorage.getItem('token');

  const user = useSelector(selectLoginUser);

  const { success, error } = useSelector(selectLoginUserState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (success) {
      navigate('/');
      toast.success(`Welcome ${user.name}!`);
    } else {
      navigate('/login');
      toast.error(error);
    }
  }, [navigate, success, user.name, error]);

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

      const loginPayload = {
        email: email,
        password: password,
      }

      console.log('Login Payload:', loginPayload);
      dispatch(loginUser(loginPayload));
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
              <input type="text" placeholder="email@microverse.com" className="login-input"
                value={email}
                onChange={
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
              <p className="login-footer-text">Don&rsquo;t have an account? <a href="#" className="login-footer-link">
                <Link to='/register'>Sign Up</Link>
              </a></p>
            </div>

            </div>
        </div>
      </div>

    </div>
  );
}

export default Login;

