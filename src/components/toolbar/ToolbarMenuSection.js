import React from 'react';

import './ToolbarMenuSection.scss';

function ToolbarMenuSection(props) {
  const { title, children } = props;

  return (
    <div className="toolbar-menu-section">
      {title && (
        <h4 className="toolbar-menu-section__title">
          {title}
        </h4>
      )}
      {children}
    </div>
  );
}

export default ToolbarMenuSection;
