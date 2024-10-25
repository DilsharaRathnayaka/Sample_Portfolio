import React from 'react';
import './works.css';
import { motion } from "framer-motion";
import Portfolio1 from '../../assets/portfolio-1.jpg';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import { Link } from 'react-router-dom';



const Works = () => {
  return (
    <section id = 'works'>
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and creating a strong online presence.</span>
      
      <div className="project-container">
        {/* Medi Care Card */}
        <div className="project-card">
        <Link to="https://github.com/Hasindu30/Brandspark-fe">
          <motion.div whileHover={{ scale: 1.2 }} className="card">
            <button className="link-button">
              <img className="card-img" src={Portfolio1} alt="" />
            </button>
            <div className="card-content">
              <button className="link-button">
                <h5 className="card-title">Brandspark</h5>
              </button>
              <p className="card-subtitle">ReactJS | Express+Node JS | MongoDB | Ongoing</p>
              <p className="card-description">
                Brandspark is a AI based brand promotion application.
              </p>
            </div>
          </motion.div>
          </Link>
        </div>

        {/* Portfolio Card */}
        <div className="project-card">
        <Link to="https://github.com/DilsharaRathnayaka/Sample_Portfolio">
          <motion.div whileHover={{ scale: 1.2 }} className="card">
            <button className="link-button">
              <img className="card-img" src={Portfolio2} alt="" />
            </button>
            <div className="card-content">
              <button className="link-button">
                <h5 className="card-title">Portfolio</h5>
              </button>
              <p className="card-subtitle">ReactJS | CSS | Tailwind CSS | Individual</p>
              <p className="card-description">
                A Responsive Web Application for a personal portfolio.
              </p>
            </div>
          </motion.div>
          </Link>
        </div>

        {/* SmartLib Card */}
        <div className="project-card">
        <Link to="https://github.com/DilsharaRathnayaka/Library_Management_System">
          <motion.div whileHover={{ scale: 1.2 }} className="card">
            <button className="link-button">
              <img className="card-img" src={Portfolio3} alt="" />
            </button>
            <div className="card-content">
              <button className="link-button">
                <h5 className="card-title">SmartLib</h5>
              </button>
              <p className="card-subtitle">ReactJS | CSS | Tailwind CSS | Group | Ongoing</p>
              <p className="card-description">
              E-library system for efficient book management and user traking.
              </p>
            </div>
          </motion.div>
          </Link>
        </div>

        {/* Doctor Appointment Card */}
        <div className="project-card">
          <Link to="https://github.com/DilsharaRathnayaka/TravelWebsite">
          <motion.div whileHover={{ scale: 1.2 }} className="card">
            <button className="link-button">
              <img className="card-img" src={Portfolio4} alt="" />
            </button>
            <div className="card-content">
              <button className="link-button">
                <h5 className="card-title">Travel Web</h5>
              </button>
              <p className="card-subtitle">HTML | CSS | JavaScript | Individual</p>
              <p className="card-description">
              Developed a travel information website featuring destination highlights.
              </p>
            </div>
          </motion.div>
          </Link>
        </div>
      </div>
    
      
    </section>
  )
}

export default Works;