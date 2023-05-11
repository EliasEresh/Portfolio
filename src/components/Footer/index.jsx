import React from 'react';
import '../../style/index.css';
import logo from '../../assets/logofooter.png';

function Footer() {
  return (
    <footer className='footer'>
      <div>
          <span className='logo-title-footer'>K</span>
          <img src={logo} alt="logo" className='logo-footer'/>
          <span className='logo-title-footer'>sa</span>
      </div>
      <p className='footer-text'>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
