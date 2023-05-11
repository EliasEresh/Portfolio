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
          src={toggle ? arrowDown : arrow}
          alt="show content"
        />
      </h3>
      <div className={toggle ? 'collapse-show' : 'collapse-hidden'}>
        {Array.isArray(content)
          ? content.map((item, index) => <p key={index}>{item}</p>)
          : content}
      </div>
    </div>
  );
}