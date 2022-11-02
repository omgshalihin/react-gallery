import React from 'react';
import safeLogo from './safeLogo.png';
import './Navbar.css';

const Navbar = () => (
  <div className="navbar">
    <img className="logo" src={safeLogo} alt="logo" srcSet="" />
  </div>
);

export default Navbar;
