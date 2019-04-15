import React, { useState } from 'react';
import Icon from '../Icon';
import Range from '../Range';
import Switch from '../Switch';
import ToolbarBackgroundViewer from './ToolbarBackgroundViewer';
import ToolbarMenu from './ToolbarMenu';
import ToolbarMenuSection from './ToolbarMenuSection';
import ToolbarMenuRow from './ToolbarMenuRow';
import Num, { conformNumber } from '../Num';

function ToolbarBackgroundMenu() {
  const [backgroundEnabled, setBackgroundEnabled] = useState(false);
  const [opacity, setOpacity] = useState(85);
  const [radius, setRadius] = useState(0);
  const [padding, setPadding] = useState(0);

  return (
    <ToolbarMenu>
      <ToolbarMenuSection>
        <label>
          <Switch
            checked={backgroundEnabled}
            onChange={event => setBackgroundEnabled(event.target.checked)}
          />
          {'Background Image'}
        </label>
      </ToolbarMenuSection>
      {backgroundEnabled && <ToolbarBackgroundViewer />}
      <ToolbarMenuSection title="Color">
        <ToolbarMenuRow>
          <Icon id="circle" />
          <Range
            value={opacity}
            onChange={event => setOpacity(event.target.valueAsNumber)}
          />
          <Num
            value={opacity}
            onChange={event => setOpacity(conformNumber(event.target.valueAsNumber))}
          />
        </ToolbarMenuRow>
      </ToolbarMenuSection>
      <ToolbarMenuSection title="Corner Radius">
        <ToolbarMenuRow>
          <Icon id="corner-rounded" />
          <Range
            max={10}
            value={radius}
            onChange={event => setRadius(event.target.valueAsNumber)}
          />
          <Num
            max={10}
            value={radius}
            onChange={event => setRadius(conformNumber(event.target.valueAsNumber, 10))}
          />
        </ToolbarMenuRow>
      </ToolbarMenuSection>
      <ToolbarMenuSection title="Distance From Edge">
        <ToolbarMenuRow>
          <Icon id="padding" />
          <Range
            max={50}
            value={padding}
            onChange={event => setPadding(event.target.valueAsNumber)}
          />
          <Num
            max={50}
            value={padding}
            onChange={event => setPadding(conformNumber(event.target.valueAsNumber, 50))}
          />
        </ToolbarMenuRow>
      </ToolbarMenuSection>
    </ToolbarMenu>
  );
}

export default ToolbarBackgroundMenu;
