import React from 'react'
import './Footer.scss'
import logo from '../../Assets/imglogo.png'

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer-content">
        <div className="footer-section-about">
          <img src={logo} alt="facc logo" className="home_facclogo" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
        </div>
        <div className="footer-section-links"> Useful links</div>
        <div className="footer-section-contact-form">Contact form</div>
      </div>
      <div className="footer-copyright">
        &copy; Frisco African Culture Club | Designed by Melvin Towo
      </div>
    </div>
    
  )
}

export default Footer