import React from 'react';
import '../../style/index.css';
import logo from '../../assets/logo-main.png';
 
function Header() {
    return (
        <nav className='nav-bar'>
            <div className='nav-bar-first'>
                <img src={logo} alt="logo" className='logo'/>
                <span className='logo-title'>Elias Eresh</span>
            </div>
            <div className='nav-links'>
                <a href="#projects" className="nav-link">projets</a>
                <a href="#skills" className="nav-link">Compétences</a>
                <a href="#about" className="nav-link">A propos</a>
                <a href="#footer" className="nav-link">Contact</a>
            </div>
        </nav>
    )
}

export default Header