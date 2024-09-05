import React from 'react';
import './navbar.css';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className = "navbar">
        <span className ="Develop">Develop By Nethmini</span>
        <div className= "desktopMenu">
            <Link className = "desktopMenuListItem">Home</Link>
            <Link className = "desktopMenuListItem">About</Link>
            <Link className = "desktopMenuListItem">Portfolio</Link>
            <Link className = "desktopMenuListItem">Clients</Link>
        </div>
      
        <a
          href="https://drive.google.com/" download={'Nethmini CV'}
        >
        <button className = "desktopMenuBtn">
        <img src = { contactImg } alt="" className ="desktopMenuImg"/>Resume</button>
        </a>
      
    </nav>
  )
}

export default Navbar;