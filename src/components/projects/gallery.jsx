import React from 'react';
import '../../style/index.css';
import NinaCarducci from '../../assets/ninaCarducci.png'; 
import Ohmyfood from '../../assets/Ohmyfood.png'; 

function Projects() {
    return (
        <section className="projects" id='projects'>
            <div className="projects-content">
                <h2 className="projects-title">Projets</h2>
                <div className="project-box">
                    <div className="project-info">
                        <h3 className="project-title">Nina Carducci - Photographie</h3>
                        <p className="project-text">
                            J’ai pris en charge, dans ce projet, la mise en place de performances accrues en Search Engine Optimization, améliorant la visibilité du site auprès de ses potentiels clients.
                        </p>
                    </div>
                    <a href="https://eliaseresh.github.io/NinaCarducci/" target="_blank" rel="noopener noreferrer" className='link-preview'>
                        <img src={NinaCarducci} alt="NinaCarducci" className="project-preview" />
                    </a>
                    
                </div>
                <div className="project-box">
                    <div className="project-info">
                        <h3 className="project-title">Ohmyfood - Site de Restauration</h3>
                        <p className="project-text">
                            Dans ce projet, j’ai mis en pratique mes compétences de développement en HTML tout en approfondissant mes connaissances en design via un CSS dynamique agrémenté d’animations, rendant l’interface vivante, claire et accessible à l’utilisateur.
                        </p>
                    </div>
                    <a href="https://eliaseresh.github.io/Ohmyfood/" target="_blank" rel="noopener noreferrer" className='link-preview'>
                        <img src={Ohmyfood} alt="Ohmyfood" className="project-preview" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Projects;
