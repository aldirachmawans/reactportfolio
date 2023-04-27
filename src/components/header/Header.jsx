import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/meremove.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I Am</h5>
        <h1>Aldi Rachmawan Suradiwiria</h1>
        <h5 className="text light">Web Developer</h5>
        
        <CTA />

        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header