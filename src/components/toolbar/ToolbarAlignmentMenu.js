import React, { useState } from 'react';
import ToolbarAlignmentSelector from './ToolbarAlignmentSelector';
import ToolbarMenu from './ToolbarMenu';
import ToolbarMenuSection from './ToolbarMenuSection';


import './ToolbarAlignmentMenu.scss';

function ToolbarAlignmentMenu() {
  const [alignment, setAlignment] = useState('middle');

  return (
    <ToolbarMenu className="toolbar-alignment-menu">
      <ToolbarMenuSection title="Alignment">
        <ToolbarAlignmentSelector
          alignment={alignment}
          setAlignment={setAlignment}
        />
      </ToolbarMenuSection>
    </ToolbarMenu>
  )
}

export default ToolbarAlignmentMenu;
