import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id = "intro">
        <div className = "introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm  <span className="introName">Nethmini Dilshara</span> <br />UI/UX Designer</span>
            <p className="introPara">Undergraduate, BScHons(IS), Faculty of Computing,<br/> Sabaragamuwa University of Sri Lanka</p>
            <Link><button className="btn"><img src={btnImg} alt="Hire" className="btnImg" />Hire Me</button></Link>
        </div>
        <img src = { bg } alt="Profile" className="bg"/>
    </section>
  )
}

export default Intro;