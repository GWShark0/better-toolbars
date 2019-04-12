import React from 'react';
import Icon from '../Icon';

import './ToolbarAlignmentSelector.scss';

function ToolbarAlignmentSelector(props) {
  const { alignment, setAlignment } = props;

  return (
    <>
      <label>
        <input
          className="toolbar-alignment-option"
          type="radio"
          name="alignment"
          value="top"
          checked={alignment === 'top'}
          onChange={event => setAlignment(event.target.value)}
        />
        <Icon className="toolbar-alignment-icon" id="align-top" />
      </label>
      <label>
        <input
          className="toolbar-alignment-option"
          type="radio"
          name="alignment"
          value="middle"
          checked={alignment === 'middle'}
          onChange={event => setAlignment(event.target.value)}
        />
        <Icon className="toolbar-alignment-icon" id="align-middle" />
      </label>
      <label>
        <input
          className="toolbar-alignment-option"
          type="radio"
          name="alignment"
          value="bottom"
          checked={alignment === 'bottom'}
          onChange={event => setAlignment(event.target.value)}
        />
        <Icon className="toolbar-alignment-icon" id="align-bottom" />
      </label>
    </>
  );
}

export default ToolbarAlignmentSelector;
