import React, { useState } from 'react';
import ToolbarMenu from './ToolbarMenu';
import ToolbarMenuSection from './ToolbarMenuSection';
import ToolbarMenuRow from './ToolbarMenuRow';
import Range from '../Range';
import Num, { conformNumber } from '../Num';
import Icon from '../Icon';

function ToolbarBorderMenu() {
  const [thickness, setThickness] = useState(0);
  const [opacity, setOpacity] = useState(85);

  return (
    <ToolbarMenu>
      <ToolbarMenuSection title="Border Thickness">
        <ToolbarMenuRow>
          <Icon id="expand-vertical" />
          <Range
            max={50}
            value={thickness}
            onChange={event => setThickness(event.target.valueAsNumber)}
          />
          <Num
            max={50}
            value={thickness}
            onChange={event => setThickness(conformNumber(event.target.valueAsNumber, 50))}
          />
        </ToolbarMenuRow>
      </ToolbarMenuSection>
      <ToolbarMenuSection title="Border Color">
        <ToolbarMenuRow>
          <Icon id="circle" />
          <Range
            value={opacity}
            onChange={event => setOpacity(event.target.valueAsNumber)}
          />
          <Num
            value={opacity}
            onChange={event => setOpacity(conformNumber(event.target.valueAsNumber, 100))}
          />
        </ToolbarMenuRow>
      </ToolbarMenuSection>
    </ToolbarMenu>
  )
}

export default ToolbarBorderMenu;
