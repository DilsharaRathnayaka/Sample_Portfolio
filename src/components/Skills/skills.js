import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">
            I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. 
            I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, React, and JavaScript.
        </span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText"> {/* Corrected className */}
                    <h2>UI/UX Design</h2>
                    <p>I am a skilled UI/UX Developer with a passion for creating visually stunning and user-friendly. My expertise lies in using industry-standard design tools such as Figma, Photoshop</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText"> {/* Corrected className */}
                    <h2>Web Developer</h2>
                    <p>As a skilled web developer, I specialize in creating dynamic and user-friendly websites that engage and captivate users. With expertise in front-end, ensuring responsive designs.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Mobile App Developer</h2>
                    <p>I am a Mobile App Developer proficient in creating cross-platform mobile applications using Flutter.</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Skills;
