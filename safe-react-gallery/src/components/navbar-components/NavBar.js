import React from 'react';
import safeLogo from '../../pictures/safeLogo.png';
import './NavBar.css';

const NavBar = () => (
  <div className="navbar">
    <img className="logo" src={safeLogo} alt="logo" srcSet="" />
  </div>
);

export default NavBar;
