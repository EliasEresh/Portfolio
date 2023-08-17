import React from 'react';
import '../../style/index.css';
import linkedinLogo from '../../assets/linkedin-logo.png';
import githubLogo from '../../assets/github-logo.png';
import gmailLogo from '../../assets/gmail-logo.png';

function Footer() {
  return (
    <footer id="footer" className='footer'>
      <div className="contact-container">
        <h3 className="footer-title">Contact</h3>
        <div className="contact-links">
          <a href="https://fr.linkedin.com/in/elias-lasrifi" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" className='contact-logo'/>
          </a>
          <a href="https://github.com/EliasEresh" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub" className='contact-logo'/>
          </a>
          <a href="mailto:lasrifielias@gmail.com">
            <img src={gmailLogo} alt="Gmail" className='contact-logo'/>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
