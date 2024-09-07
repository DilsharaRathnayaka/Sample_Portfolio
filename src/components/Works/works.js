import React from 'react';
import './works.css';
import { motion } from "framer-motion";
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';


const Works = () => {
  return (
    <section id = 'works'>
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and creating a strong online presence.</span>
      
      <div className="project-container">
        {/* Medi Care Card */}
        <div className="project-card">
          <motion.div whileHover={{ scale: 1.2 }} className="card">
            <button className="link-button">
              <img className="card-img" src={Portfolio1} alt="Medi Care" />
            </button>
            <div className="card-content">
              <button className="link-button">
                <h5 className="card-title">Medi Care</h5>
              </button>
              <p className="card-subtitle">Angular | ASP .NET | Group | Ongoing</p>
              <p className="card-description">
                Medicare is a Centralized Patient Details System. It is a responsive web-based application.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Portfolio Card */}
        <div className="project-card">
          <motion.div whileHover={{ scale: 1.2 }} className="card">
            <button className="link-button">
              <img className="card-img" src={Portfolio2} alt="Portfolio" />
            </button>
            <div className="card-content">
              <button className="link-button">
                <h5 className="card-title">Portfolio</h5>
              </button>
              <p className="card-subtitle">NextJS | Tailwind CSS | Individual</p>
              <p className="card-description">
                A Responsive Web Application for a personal portfolio.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Tiny Care Card */}
        <div className="project-card">
          <motion.div whileHover={{ scale: 1.2 }} className="card">
            <button className="link-button">
              <img className="card-img" src={Portfolio3} alt="Tiny Care" />
            </button>
            <div className="card-content">
              <button className="link-button">
                <h5 className="card-title">Tiny Care</h5>
              </button>
              <p className="card-subtitle">Flutter | Laravel | Individual | Ongoing</p>
              <p className="card-description">
                This is a Mobile application for baby health care with amazing UI.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Doctor Appointment Card */}
        <div className="project-card">
          <motion.div whileHover={{ scale: 1.2 }} className="card">
            <button className="link-button">
              <img className="card-img" src={Portfolio4} alt="Doctor Appointment" />
            </button>
            <div className="card-content">
              <button className="link-button">
                <h5 className="card-title">Doctor Appointment</h5>
              </button>
              <p className="card-subtitle">Flutter | Laravel | Individual | Ongoing</p>
              <p className="card-description">
                This is a Mobile application for doctor appointments using Laravel Backend.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    
      <button className="workBtn">See More</button>
    </section>
  )
}

export default Works;