import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// import { GiRunningShoe } from 'react-icons/gi';
import '../CSS/LandingNav.css';

const NavBar = () => {
  const { id } = useParams();
  const [click, setClick] = useState(false);

  return (
    <>
      <nav className="landingNav">
        {/* Running Shoe Icon */}
        {/* <div className="running-icon">
          <GiRunningShoe /> */}
        <div className='menu-icon'>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        {/* </div> */}
        <div className="landingNav-container">
          <h2>
            <Link to="/">Home</Link>
          </h2>
          <h2>
            <Link to="/login">Login / Register</Link>
          </h2>
          <h2>
            <Link to={`/userprofile/3`}>Profile</Link>
          </h2>
          <h2>
            <Link to="/groups">Groups</Link>
          </h2>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
