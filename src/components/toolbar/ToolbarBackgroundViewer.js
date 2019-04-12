import React from 'react';
import Icon from '../Icon';
import lake from '../../assets/lake.jpg';

import './ToolbarBackgroundViewer.scss';

function ToolbarBackgroundViewer() {
  return (
    <div className="toolbar-background-viewer">
      <div className="toolbar-background-viewer__preview">
        <img src={lake} alt="preview" />
      </div>
      <div className="toolbar-background-viewer__controls">
        <button className="toolbar-background-viewer__button">
          <Icon
            className="toolbar-background-viewer__icon"
            id="image"
            size="sm"
          />
          {'Change'}
        </button>
        <button className="toolbar-background-viewer__button">
          <Icon
            className="toolbar-background-viewer__icon"
            id="crop"
            size="sm"
          />
          {'Crop'}
        </button>
      </div>
    </div>
  );
}

export default ToolbarBackgroundViewer;
