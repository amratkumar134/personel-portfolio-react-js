import React from 'react'
import './Intro.css'
import Github from '../../src/img/github.png';
import LinkedIn from '../../src/img/linkedin.png';
import Instagram from '../../src/img/instagram.png';
import Vector2 from "../../src/img/Vector2.png";
import amrat from "../../src/img/amrat.png";


const Intro = () => {
  return (
    <div className='intro'>
        <div className="i-left">
            <div className="i-name">
                <span>Hey! I Am</span>
                <span>Amrat Kumar</span>
                <span>Frontend Developer</span>
            </div>
            <button className="button i-button">Hire me</button>
            <div className="i-icons">
                <img src={Github} alt="" />
                <img src={LinkedIn} alt="" />
                <img src={Instagram} alt="" />
            </div>
        </div>
        
        <div className="i-right">
        
                <img src={Vector2}  alt="" />
                <img src={amrat}  style={{width:'50%', height:'50%'}} alt="" />
                

        </div>

    </div>
  )
}

export default Intro