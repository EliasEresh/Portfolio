import React from 'react';
import '../../style/index.css';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import imgBanner from '../../assets/imgbanner.png';

export default function Banner() {
  const [aboutPage, setAboutPage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/about') {
      setAboutPage(true);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <section className={aboutPage ? 'banner-about' : 'banner'}>
      {!aboutPage && (
        <div className="banner-image-container">
        <img className="banner-image" src={imgBanner} alt="Banner" />
        <div className="banner-text-container">
          <p className="banner-text">Chez vous, partout et ailleurs</p>
        </div>
      </div>
    )}
    </section>
  );
}
