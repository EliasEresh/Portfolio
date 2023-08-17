import React from 'react';
import { Link } from 'react-router-dom';
import '../style/index.css';

function Error() {
    return (
        <div className='error-main'>
           <p className='error-display'>404</p>
           <p className='error-message'>Oups!La page que vous demandez n'existe pas.</p>
           <Link to="/" className="nav-link" id='nav-return' >Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error