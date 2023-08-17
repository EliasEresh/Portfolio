import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
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
                {/* Use the Link component for internal navigation */}
                <Link to="/#projects" className="nav-link">projets</Link>
                <Link to="/#skills" className="nav-link">Compétences</Link>
                <Link to="/#about" className="nav-link">A propos</Link>
                <Link to="/#footer" className="nav-link">Contact</Link>
            </div>
        </nav>
    )
}

export default Header;
