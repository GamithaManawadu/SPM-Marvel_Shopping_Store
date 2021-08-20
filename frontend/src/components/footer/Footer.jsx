import React from "react";
import { Link, Redirect } from "react-router-dom";

import './footer.css';

import FooterLogo from "../../assets/images/favicon.png";

const Footer = () => {
	return (
		<div className='footer-container'>

<div className="footer-logo" color="gold">
            <Link to='/' >
              MARVEL | FASHION
              
            </Link>
          </div>
      
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            
            <h2><Link to="/blogs">Blogs</Link></h2>
						
						
          </div>
          
        </div>
        <div className='footer-link-wrapper'>
          
          <div className='footer-link-items'>
            
            <h2><Link to="/products">Products</Link></h2>
            
          </div>
        </div>

		<div className='footer-link-wrapper'>
          
          <div className='footer-link-items'>
            
            <h2><Link to="/about">About Us</Link></h2>
            
          </div>
        </div>

		<div className='footer-link-wrapper'>
          
          <div className='footer-link-items'>
            
            <h2><Link to="/contact">Contact</Link></h2>
            
          </div>
        </div>

      </div>
      <section className='social-media'>
        
          <center>
          <small className='website-rights'>MARVEL FASHION © 2021</small>
		  </center>
          
      </section>
    </div>
  );
}
export default Footer;
