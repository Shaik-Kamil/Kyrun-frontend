import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactModal from 'react-modal';
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
// import LoginPage from './Components/Login';
import New from "./Pages/New";
import Show from "./Pages/Show";
import NavBar from "./Components/NavBar";
import axios from "axios";
import "./App.css";
import logo from '../src/LOGO NO BG.png';
import './CSS/LoginPage.css';

import "react-toastify/dist/ReactToastify.css";
import {
  Switch,
  Redirect
} from "react-router-dom";

import Login from "./Components/Login";
import Register from "./Components/Register";
import Dashboard from "./Components/Dashboard";

// toast.configure();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registrationModalIsOpen, setRegistrationModalIsOpen] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    // Make API call to log in user
    setIsLoggedIn(true);
    setUsername('');
    setPassword('');
  };

  const handleLogout = (event) => {
    event.preventDefault();
    // Make API call to log out user
    setIsLoggedIn(false);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    // Perform registration logic here
    // You can make an API call to register the user or handle the registration process locally
    // For demonstration purposes, I'll assume you have an API endpoint to register the user

    // Example API call to register the user
    axios
      .post('/users/register', { username, password })
      .then((response) => {
        // Registration successful
        setIsLoggedIn(true);
        setUsername('');
        setPassword('');
        setRegistrationModalIsOpen(false); // Close the registration modal after successful registration
      })
      .catch((error) => {
        // Registration failed
        console.log(error);
        // Handle the error, display error message, etc.
      });
  };

  const closeRegistrationModal = () => {
    setRegistrationModalIsOpen(false);
  };

  return (
    <div className="App">
      <Router>
        <NavBar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Index />} />
          <Route path="/login" element={<Login
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
            handleLogin={handleLogin}
            logo={logo}
          />} />
          <Route path="/register" element={<Register
            isOpen={registrationModalIsOpen}
            onClose={closeRegistrationModal}
            handleRegistration={handleRegister}
          />} />
          <Route path="/users/new" element={<New />} />
          <Route exact path="/users/:id" element={<Show />} />
          <Route path="/users/:id/edit" element={<Edit />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </Router>

      <img src={logo} alt="Logo" />

      {!isLoggedIn && (
        <button onClick={() => setRegistrationModalIsOpen(true)}>Register</button>
      )}
    </div>
  );
}

export default App;
