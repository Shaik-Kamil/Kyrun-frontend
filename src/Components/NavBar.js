import React from 'react';
import { Link } from 'react-router-dom';
// import SignUp from './SignUp';

const NavBar = ({ children }) => {
  return (
    <NavBar>
      <h2>
        <Link to="/users">Find users</Link>
      </h2>
      {/* <div className="container">{children}</div> */}
    </NavBar>
  );
};

export default NavBar;
