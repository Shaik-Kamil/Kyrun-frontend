import React from 'react';
import axios from "axios";
import { useNavigate } from "react";
import { Link, useParams } from "react-router-dom";
import logo from '../images/LOGO.png'
import '../CSS/NavBar.css'
const API = process.env.REACT_APP_API_URL
// import Login from '../Pages/Login';
// import LoginPage from './LoginPage';


const NavBar = ({ userId }) => {
    const { id } = useParams();
    // const navigate = useNavigate()

    // const addProfile = (userId) => {
    //     axios
    //       .post(`${API}/users`, id)
    //       .then(
    //         () => {
    //           navigate(`/userprofile/${id}`);
    //         },
    //         (error) => console.error(error)
    //       )
    //       .catch((c) => console.warn("catch", c));
    // };

    return (
        <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav" style={{paddingBottom: '2px', paddingTop: '2px'}}>
            <div class="container px-4 px-lg-5" >
                <Link to='/' className='logo'><img src={logo} className='logo' style={{
                            height: '80px', width: '80px' }}/></Link>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Navigation
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item" style={{
                        padding: '10px'}}><Link to='/login'>Login</Link></li>
                        <li class="nav-item" style={{
                        padding: '10px'}}><Link to='/groups'>Groups</Link></li>
                        <li class="nav-item" style={{
                        padding: '10px'}}><Link to={`/userprofile/${userId}`}>Profile</Link></li>
                        <li class="nav-item" style={{
                        padding: '10px'}}><Link to={`/runningroutes/`}>Routes</Link></li>
                        <li class="nav-item" style={{
                        padding: '10px'}}><Link to={`/about/`}>Devs</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;