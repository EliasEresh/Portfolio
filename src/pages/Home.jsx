import React from 'react';
import '../style/index.css';
import Gallery from '../components/projects/gallery.jsx';
import About from '../components/About/about.jsx';
import Skills from '../components/Skills/skills.jsx';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        // Use the navigate function to navigate to a different route
        navigate('/some-route');
    };

    return (
        <div>
            <div className="intro">
                <h2 className="intro-title">Front-End Développeur</h2>
                <p className="intro-paragraph">
                    Juriste reconverti dans les métiers du numérique, je m’attelle désormais à développer et designer des sites, apte au freelance et au travail en entreprise.
                </p>
                <button onClick={handleButtonClick}>Go to Another Page</button>
            </div>
            <Gallery />
            <Skills />
            <About />
        </div>
    )
}

export default Home;
