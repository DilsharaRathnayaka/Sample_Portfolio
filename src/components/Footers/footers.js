import React from 'react';
import './footers.css';
import { AiOutlineGithub, AiFillLinkedin, AiOutlineWhatsApp } from 'react-icons/ai'; // Import icons

const Footers = () => {
  return (
    <footer className="contact-footer">
          <div className="contact-info">
            <h3 className="contact-title">Contact me for more details</h3>
            <p className="contact-description">Designed & Built by Nethmini Dilshara</p>
            <p className="contact-copyright">
              Copyright © 2024 develop By Nethmini. All rights reserved.
            </p>
          </div>
          <div className="social-icons">
            {/* Social Media Links */}
            <a
              href="https://github.com/DilsharaRathnayaka"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="social-icon"
            >
              <AiOutlineGithub />
            </a>
            <a
              href="http://linkedin.com/in/rmnd-rathnayaka"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="social-icon"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://wa.me/94741381394"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Contact"
              className="social-icon"
            >
              <AiOutlineWhatsApp />
            </a>
          </div>
        </footer>
  )
}

export default Footers;