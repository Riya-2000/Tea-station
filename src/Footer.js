import React from 'react'
import {FaFacebookSquare, FaTwitter, FaInstagram} from 'react-icons/fa'
import './Footer.css'
const Footer = () => {
  return(
  <footer>
    <div className="social">
      <FaFacebookSquare className="icons"/>
      <FaTwitter className="icons"/>
      <FaInstagram className="icons"/>
    </div>
    <p className="p9">&copy; 2019 <span>TEA STATION</span>. ALL RIGHTS RESERVED</p>
  </footer>
  );
}

export default Footer