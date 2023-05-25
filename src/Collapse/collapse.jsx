import '..//style/index.css';

import React, { useState } from 'react';
import arrow from '..//assets/arrow.png';
import arrowDown from '../assets/arrowdown.png';

export default function Collapse({ title, content }) {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="collapse">
      <h3 className='collapse-title' onClick={() => setToggle(!toggle)}>
        {title}
        <img
          className="arrow"
          src={toggle ? arrow : arrowDown}
          alt="show content"
        />
      </h3>
      <div className={toggle ? 'collapse-show' : 'collapse-hidden'}>
        {Array.isArray(content) ? (
          content.map((item, index) => (
            <p key={index} className="collapse-paragraph">
              {item}
            </p>
          ))
        ) : (
          <p className="collapse-paragraph">{content}</p>
        )}
      </div>
    </div>
  );
  
}