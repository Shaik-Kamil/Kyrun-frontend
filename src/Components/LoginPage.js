import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegistrationModal from './RegistrationModal';
import '../CSS/LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Perform login/authentication logic here
    try {
      // Assuming successful login, navigate to MakeProfile component
      navigate('/makeProfile');
    } catch (error) {
      console.error(error);
    }
  };

  const handleRegistrationClick = () => {
    // Show the registration modal
    setShowRegistrationModal(true);
  };

  const handleRegistrationClose = () => {
    // Hide the registration modal
    setShowRegistrationModal(false);
  };

  return (
    <div className="login-page"> {/* Apply the "login-page" class */}
      <div>
        {/* <Link to="/">Home</Link> */}
      </div>
      <form onSubmit={handleFormSubmit}>
        <h1>Log In</h1>
        <div className="field">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your Email Address"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="field">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Log In</button>
      </form>
      <p>
        Don't have an account?{' '}
        <button onClick={handleRegistrationClick}>Register</button>
      </p>
      {showRegistrationModal && (
        <RegistrationModal onClose={handleRegistrationClose} />
      )}
    </div>
  );
};

export default LoginPage;
