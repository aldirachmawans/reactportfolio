import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Aldi</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/aldi.suradiwiria" target='_blank'><BsFacebook /></a>
        <a href="https://www.instagram.com/aldirachmawans/" target='_blank'><FaInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Aldi Portfolio Website. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer