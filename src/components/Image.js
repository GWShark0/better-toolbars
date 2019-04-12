import React from 'react';
import lake from '../assets/lake.jpg';

import './Image.scss';

function Image(props) {
  return (
    <img
      className="image"
      src={lake}
      alt="lake"
      {...props}
    />
  );
}

export default Image;
