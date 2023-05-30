import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser, selectRegisterUserState } from '../../redux/slices/registerSlice.js';
import { toast } from 'react-toastify';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const token = localStorage.getItem('token');

  const user = useSelector((state) => state.register.user);

  const { success, error } = useSelector(selectRegisterUserState);


  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (token && success) {
      navigate('/');
      toast.success(`Welcome ${user.name}!`);
    } else {
      navigate('/register');
      toast.error(error);
    }
  }, [token, navigate, success, user.name, error]);


  const handleNameChange = (e) => {
  setName(e.target.value);
  setErrors([]);
  }

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

  const validationErrors = validate(name, email, password);
  setErrors(validationErrors);

    if (validationErrors.length === 0) {
      console.log('Name:', name);
      console.log('Email:', email);

      const registerPayload = {
        name: name,
        email: email,
        password: password,
      };

      dispatch(registerUser(registerPayload));
    }
  };

  const validate = (name, email, password) => {
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

  if (name.trim() === '') {
    errors.push('Name cannot be empty');
  }

  return errors;
  };

  return (
    <div className="">
      <div className="image">
        <div className="image-overlay">
          <div className="image-overlay-content">
            <h1 className="register-title">Sign Up</h1>
            <p className='register-paragraph'>Hello there! Sign up and start <br /> managing your system</p>
           <form className="register-form" onSubmit={handleSubmit}>
             <input type="text" placeholder="John Doe" className="register-input" value={name} onChange={
              handleNameChange
             } />

              <input type="text" placeholder="email@microverse.com" className="register-input" value={email} onChange={
                handleEmailChange
              } />

              <input type="password" placeholder="***************" className="register-input" value={password}
                onChange={handlePasswordChange} />

              {errors.length > 0 && (
                <div className="register-error-container">
                  {errors.map((error, index) => (
                    <p key={index} className="register-error">{error}</p>
                ))}
                </div>
              )}

              <button className="register-button">Register</button>
            </form>

            <div className="register-footer">
              <p className="register-footer-text">Already have an account? <a href="#" className="register-footer-link">
                <Link to='/login'>Sign In</Link>
              </a></p>
              </div>

            </div>
        </div>
      </div>

    </div>
  );
}

export default Register;
