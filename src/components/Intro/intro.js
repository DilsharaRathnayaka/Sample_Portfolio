import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';
import { AiOutlineGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

const Intro = () => {
  return (
    <section id = "intro">
        <div className = "introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm  <span className="introName">Nethmini Dilshara</span> <br />
            <Typewriter options={{
             strings: ['Mobile App Developer', 'Web Developer', 'UI/UX Designer'],
             autoStart: true,
             loop: true,
            }}
            /></span>
            <p className="introPara">Undergraduate, BScHons(IS), Faculty of Computing,<br/> Sabaragamuwa University of Sri Lanka</p>
            <Link><button className="btn"><img src={btnImg} alt="Hire" className="btnImg" />Hire Me</button></Link>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'Left', marginTop: '2px' }}>
            <a href="https://github.com/DilsharaRathnayaka" target="_blank" rel="noopener noreferrer">
            <AiOutlineGithub size={30} style={{ color: 'white' }} />
            </a>
            <a href="www.linkedin.com/in/rmnd-rathnayaka" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin size={30} style={{ color: 'white' }} />
            </a>
            <a href="mailto:nethminidilshara748@gmail.com">
            <AiOutlineMail size={30} style={{ color: 'white' }} />
            </a>
    </div>
            
          
        </div>
        <img src = { bg } alt="Profile" className="bg"/>
    </section>
  )
}

export default Intro;