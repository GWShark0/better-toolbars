import React from 'react';

import './Range.scss';

function Range(props) {
  return (
    <input className="range" type="range" {...props} />
  );
}

export default Range;
