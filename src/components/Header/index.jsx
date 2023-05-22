import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/index.css';
import logo from '../../assets/logo.png';
 
function Header() {
    return (
        <nav className='nav-bar'>
            <div>
                <span className='logo-title'>K</span>
                <img src={logo} alt="logo" className='logo'/>
                <span className='logo-title'>sa</span>
            </div>
            <div className='nav-links'>
                <Link to="/" className="nav-link">Accueil</Link>
                <Link to="/About" className="nav-link">A Propos</Link>
            </div>
        </nav>
    )
}

export default Header