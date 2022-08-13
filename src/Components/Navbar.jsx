import React from 'react'
import './Navbar.css'
import {Link} from "react-scroll"

const Navbar = () => {
  return (
    <div className='Main' id="Navbar">
        <div className='left'>
            <div className='name'>
            Amrat 
            </div>
            
        </div>
        
        <div className='Right'>
            <div className='list'>
                <ul style={{listStyleType:'none'}}>
                    <li>
                    <Link activeClass="active" to="Navbar"  smooth={true}>
                        Home
                        </Link></li>
                    <li>
                    <Link activeClass="active" to="Services"  smooth={true}>
                        Services
                        </Link></li>
                    <li>
                    <Link activeClass="active" to="Experience"  smooth={true}>
                        Experience
                        </Link></li>
                    <li>
                    <Link activeClass="active" to="Portfolio"  smooth={true}>
                        Projects
                        </Link></li>
                </ul>
            </div>
            <button className='button n-button'>
            <Link activeClass="active" to="Contact"  smooth={true}>
                Contact us
                </Link>
            </button>
        </div>

    </div>
  )
}

export default Navbar