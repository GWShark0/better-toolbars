import React, { useState } from 'react';
import ToolbarMenu from './ToolbarMenu';
import ToolbarMenuSection from './ToolbarMenuSection';
import ToolbarMenuRow from './ToolbarMenuRow';
import Range from '../Range';
import Value from '../Value';
import Icon from '../Icon';

function ToolbarBorderMenu() {
  const [thickness, setThickness] = useState(0);
  const [opacity, setOpacity] = useState(85);

  return (
    <ToolbarMenu>
      <ToolbarMenuSection title="Border Thickness">
        <ToolbarMenuRow>
          <Icon name="expand-vertical" />
          <Range
            value={thickness}
            max={50}
            onChange={event => setThickness(event.target.valueAsNumber)}
          />
          <Value>
            {thickness}
          </Value>
        </ToolbarMenuRow>
      </ToolbarMenuSection>
      <ToolbarMenuSection title="Border Color">
        <ToolbarMenuRow>
          <Icon name="circle" />
          <Range
            value={opacity}
            onChange={event => setOpacity(event.target.valueAsNumber)}
          />
          <Value>
            {opacity}
          </Value>
        </ToolbarMenuRow>
      </ToolbarMenuSection>
    </ToolbarMenu>
  )
}

export default ToolbarBorderMenu;
