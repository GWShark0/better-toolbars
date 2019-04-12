import React, { useState } from 'react';
import Icon from '../Icon';
import Range from '../Range';
import Switch from '../Switch';
import ToolbarBackgroundViewer from './ToolbarBackgroundViewer';
import ToolbarMenu from './ToolbarMenu';
import ToolbarMenuSection from './ToolbarMenuSection';
import ToolbarMenuRow from './ToolbarMenuRow';
import Value from '../Value';

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
          <Value>
            {opacity}
          </Value>
        </ToolbarMenuRow>
      </ToolbarMenuSection>
      <ToolbarMenuSection title="Corner Radius">
        <ToolbarMenuRow>
          <Icon id="corner-rounded" />
          <Range
            value={radius}
            max={10}
            onChange={event => setRadius(event.target.valueAsNumber)}
          />
          <Value>
            {radius}
          </Value>
        </ToolbarMenuRow>
      </ToolbarMenuSection>
      <ToolbarMenuSection title="Distance From Edge">
        <ToolbarMenuRow>
          <Icon id="padding" />
          <Range
            value={padding}
            max={50}
            onChange={event => setPadding(event.target.valueAsNumber)}
          />
          <Value>
            {padding}
          </Value>
        </ToolbarMenuRow>
      </ToolbarMenuSection>
    </ToolbarMenu>
  );
}

export default ToolbarBackgroundMenu;
