import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom';
import EditUser from './Pages/EditUser';
import FourOFour from './Pages/FourOFour';
import Home from './Pages/Home';
import Index from './Pages/Index';
import LoginPage from './Components/LoginPage';
import Groups from './Components/Groups';
import Show from './Pages/Show';
import NavBar from './Components/NavBar';
import NewGroup from './Pages/NewGroup';
import './client/src/chat.css';
import './App.css';
import './CSS/LandingNav.css';
import './CSS/LoginPage.css';
import EditGroup from './Components/EditGroup';
import AboutUs from './Pages/AboutUs';
import Shaik from './Components/Shaik';
import Yianna from './Components/Yianna';
import Richie from './Components/Richie';
import Melanie from './Components/Melanie';
import Becky from './Components/Becky';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
    // Show the registration modal
    setRegistrationModalIsOpen(true);
  };

  const handleRegistration = (username, password) => {
    // Make API call to register user
    setIsLoggedIn(true);
    setUsername('');
    setPassword('');
  };

  const [registrationModalIsOpen, setRegistrationModalIsOpen] = useState(false);

  const closeRegistrationModal = () => {
    setRegistrationModalIsOpen(false);
  };

  return (
    <div className="App">
      <Router>
        <NavBar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <Routes>
          {/* Landing Page  */}
          <Route path="/" element={<Home />} />
          {/* User Dashboard */}
          <Route path="/userprofile/:id" element={<Index />} />
          {/* Edit Your Own Profile  */}
          <Route path="/userprofile/edit" element={<EditUser />} />
          {/* Login / Register Page  */}
          <Route
            path="/login"
            element={
              <LoginPage
                username={username}
                password={password}
                setUsername={setUsername}
                setPassword={setPassword}
                handleLogin={handleLogin}
              />
            }
          />
          {/* Create A Group  */}
          <Route path="/groups/new" element={<NewGroup />} />
          {/* Edit Group  */}
          <Route path="/groups/:id/edit" element={<EditGroup />} />
          {/* Individual Group Page  */}
          <Route exact path="/groups/:id" element={<Show />} />
          {/* List of All Groups  */}
          <Route path="/groups" element={<Groups />} />
          {/* Error Page  */}
          <Route path="/About" element={<AboutUs />} />
          <Route path="Shaik" element={<Shaik />} />
          <Route path="Yianna" element={<Yianna />} />
          <Route path="Richie" element={<Richie />} />
          <Route path="Melanie" element={<Melanie />} />
          <Route path="Becky" element={<Becky />} />
          <Route path="*" element={<FourOFour />} />
</Routes>
</Router>
</div>
);
}

export default App;