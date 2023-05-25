import React from 'react';
import { useLocation } from 'react-router-dom';
import imgBanner from '../../assets/imgbanner.png';
import imgAbout from '../../assets/imgabout.png';

export default function Banner() {
  const location = useLocation();

  return (
    <section className="banner">
      {location.pathname === '/' ? ( 
        <div className="banner-image-container">
          <img className="banner-image" src={imgBanner} alt="Banner" />
          <div className="banner-text-container">
            <p className="banner-text">Chez vous, partout et ailleurs</p>
          </div>
        </div>
      ) : (
        <img className="banner-image-about" src={imgAbout} alt="About" />
      )}
    </section>
  );
}
