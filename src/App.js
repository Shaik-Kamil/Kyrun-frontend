import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ReactModal from 'react-modal';
import Edit from './Pages/Edit';
import FourOFour from './Pages/FourOFour';
import Home from './Pages/Home';
import Index from './Pages/Index';
import Login from './Pages/Login';
import New from './Pages/New';
import Show from './Pages/Show';
// import axios from 'axios';
import './App.css';
import logo from '../src/LOGO NO BG.png';
import './CSS/LoginPage.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Index />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/register" element={<Register />} /> */}
          {/* <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route> */}
          {/* <Route element={<RestrictedRoutes />}>
            <Route path="/register" element={<Register />} />
            // <Route path="/login" element={<Login />} />
          </Route> */}
          <Route path="/users/new" element={<New />} />
          <Route path="/users/:id" element={<Show />} />
          <Route path="/users/:id/edit" element={<Edit />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>

        <img src={logo} alt="Logo" />
      </div>
    </Router>
  );
}

export default App;
