import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import RegistrationModal from './RegistrationModal';
import '../CSS/LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [profile, setProfile] = useState(null);

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

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Fetch user profile data from the backend
        const response = await axios.get('/api/profile');
        setProfile(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, []);

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

      {profile && (
        <div className="profile">
          <h2>User Profile</h2>
          <p>Name: {profile.first_name} {profile.last_name}</p>
          <p>Email: {profile.email}</p>
          {/* Render other profile data as needed */}
        </div>
      )}
    </div>
  );
};

export default LoginPage;


// const handleFormSubmit = async (event) => {
//   event.preventDefault();

//   try {
//     // Perform login/authentication logic here
//     const response = await axios.get('/api/login', {
//       params: {
//         email: email,
//         password: password
//       }
//     });

//     // Assuming successful login, navigate to MakeProfile component
//     navigate('/makeProfile');
//   } catch (error) {
//     console.error(error);
//   }
// };