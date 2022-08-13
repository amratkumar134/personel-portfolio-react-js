import React from 'react'
import './Services.css'
import HeartEmoji from '../../src/img/heartemoji.png';
import Glasses from '../../src/img/glasses.png';
import Humble from '../../src/img/humble.png';
import Card from './Card';
import Resume from './Resume.pdf'


const Services = () => {
 

  return (
    <div className="Services">
        <div className="awesome">
          <span>My Awesome</span>
          <span>Services</span>
          <spane>I am amrat kumar frontend web developer 
             <br />
             these are my services that i provide you.</spane>

        <a href={Resume} download>
        <button className="button s-button">Download CV</button>
        </a>
        
        <div className="blur s-blurl" style={{background:"#ABF1FF94"}}></div>
        </div>
    
    <div className="cards">
      <div

       style={{left:'13rem'}}>
      <Card
      emoji={HeartEmoji}
      heading={'DESIGN'}
      detail={"FIGMA,PHOTOSHOP,CANVA,ADOBE XD"}
      />
      </div>
      <div 
       style={{top:"17rem", left:'2rem'}}>
      <Card
      emoji={Glasses}
      heading={'DEVELOPER'}
      detail={"HTML,CSS,JAVASCRIPT,REACT JS"}
      />
      </div>
      <div style={{top:"17rem", left:'22rem'}}>
      <Card
      emoji={Humble}
      heading={'UI/UX'}
      detail={""}
      />
      </div>

    </div>
    </div>
  )
}

export default Services