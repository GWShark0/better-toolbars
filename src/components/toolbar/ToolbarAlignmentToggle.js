import React, { useState } from 'react';

import './ToolbarAlignmentToggle.scss';

function ToolbarAlignmentToggle() {
  const [alignment, setAlignment] = useState('top');

  const handleClick = () => {
    if (alignment === 'top') {
      setAlignment('middle');
    } else if (alignment === 'middle') {
      setAlignment('bottom');
    } else {
      setAlignment('top');
    }
  }

  return (
    <div
      className={`toolbar-alignment-toggle ${alignment}`}
      onClick={() => handleClick()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20px"
        height="20px"
        viewBox="0 0 20 20"
      >
        <path d="M18.5 0h-17C.7 0 0 .7 0 1.5v17c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5v-17c0-.8-.7-1.5-1.5-1.5zm.5 18.5c0 .3-.2.5-.5.5h-17a.5.5 0 0 1-.5-.5v-17c0-.3.2-.5.5-.5h17c.3 0 .5.2.5.5v17z" />
        <path id="align-bar" d="M18 5c0 .6-.5 1-1 1H3a1 1 0 0 1-1-1V3c0-.6.5-1 1-1h14c.6 0 1 .5 1 1v2z" />
      </svg>
    </div>
  );
}

export default ToolbarAlignmentToggle;
