import React from 'react';
import './navbar.css';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className = "navbar">
        <span className ="Develop">Develop By Nethmini</span>
        <div className= "desktopMenu">
            <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} className = "desktopMenuListItem">Home</Link>
            <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-50} duration={500} className = "desktopMenuListItem">About</Link>
            <Link activeClass='active' to="works" spy={true} smooth={true} offset={-50} duration={500} className = "desktopMenuListItem">Portfolio</Link>
            <Link activeClass='active' to="contact" spy={true} smooth={true} offset={-50} duration={500} className = "desktopMenuListItem">Contact</Link>
        </div>
      
        

        <button className = "desktopMenuBtn">
        <img src = { contactImg } alt="" className ="desktopMenuImg"/>
        <a href="/Nethmini Dilshara's CV.pdf" download="Nethmini" className='DesktopMenuBtnTxt'><b>Resume</b></a></button>
      
    </nav>
  )
}

export default Navbar;