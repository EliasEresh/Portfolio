import React from 'react';
import '../../style/index.css';
import htmlLogo from '../../assets/html.png'; 
import cssLogo from '../../assets/css.png';
import javascriptLogo from '../../assets/javascript.png'; 
import reactLogo from '../../assets/react.png';
import reduxLogo from '../../assets/redux.png';
import gitLogo from '../../assets/git.png';
import figmaLogo from '../../assets/figma.png';
import photoshopLogo from '../../assets/photoshop.png';


function Skills() {
    return (
        <section id="skills" className="skills">
            <div className="skills-content">
                <h2 className="skills-title">Compétences technologiques</h2>
                <div className="skills-images">
                    <div className="skills-row">
                        <img src={htmlLogo} alt="HTML" className="skill-image" />
                        <img src={cssLogo} alt="CSS" className="skill-image" />
                    </div>
                    <div className="skills-row">
                        <img src={javascriptLogo} alt="JavaScript" className="skill-image" />
                        <img src={reactLogo} alt="React" className="skill-image" />
                        <img src={reduxLogo} alt="Redux" className="skill-image" />
                    </div>
                    <div className="skills-row">
                        <img src={gitLogo} alt="Git" className="skill-image" />
                        <img src={figmaLogo} alt="Figma" className="skill-image" />
                        <img src={photoshopLogo} alt="Photoshop" className="skill-image" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
