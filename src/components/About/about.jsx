import React from 'react';
import '../../style/index.css';

function About() {
    return (
        <section id="about">
            <div className="about">
                <h2 className="about-title">A propos</h2>
                <p className="about-text">
                    Après des études de droit privé à l’université Panthéon-Sorbonne à l’issue desquelles j’ai obtenu une licence, ainsi qu’une expérience dans le domaine juridique, je me suis réorienté dans le domaine de l’informatique, du développement et de la programmation.
                </p>
                <p className="about-text">
                    Les métiers du droit m’ont inculqué une discipline et une passion pour la rigueur qui m’ont considérablement apporté. Toutefois, l’aspect créatif des métiers de l’informatique, et plus précisément le code et la programmation, la rigueur exigée sont des caractéristiques qui m’ont toujours intéressées et que les métiers du droit ne me permettaient pas de réaliser. La programmation allie l’inventivité et l’organisation, permettant de créer tout en maintenant une discipline. Aussi n’ai-je pu que me trouver dans mon élément dans le monde du développement.
                </p>
                <p className="about-text">
                    Après une formation de développeur web, j’ai acquis suffisamment de connaissances et d’expérience pour mettre en pratique ma passion et mes compétences.
                </p>
                <h3 className="about-title">Expérience</h3>
                <ul className="about-list">
                    <li>2010-2016 : Etudes de droit</li>
                    <li>2016-2022 : Pratique du droit</li>
                    <li>2022-2023 : Formation au développement via OpenClassrooms</li>
                </ul>
            </div>
        </section>
    );
}

export default About;
