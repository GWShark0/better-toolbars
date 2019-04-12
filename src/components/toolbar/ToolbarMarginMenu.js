import React, { useState } from 'react';
import ToolbarMenu from './ToolbarMenu';
import ToolbarMenuSection from './ToolbarMenuSection';
import ToolbarMenuRow from './ToolbarMenuRow';
import Range from '../Range';
import Value from '../Value';
import Icon from '../Icon';

function ToolbarMarginMenu() {
  const [top, setTop] = useState(30);
  const [right, setRight] = useState(20);
  const [bottom, setBottom] = useState(30);
  const [left, setLeft] = useState(20);

  return (
    <ToolbarMenu>
      <ToolbarMenuSection title="Margin">
        <ToolbarMenuRow>
          <Icon name="margin-top" size="sm" />
          <Range
            value={top}
            max={50}
            onChange={event => setTop(event.target.valueAsNumber)}
          />
          <Value>
            {top}
          </Value>
        </ToolbarMenuRow>
        <ToolbarMenuRow>
          <Icon name="margin-right" size="sm" />
          <Range
            value={right}
            max={50}
            onChange={event => setRight(event.target.valueAsNumber)}
          />
          <Value>
            {right}
          </Value>
        </ToolbarMenuRow>
        <ToolbarMenuRow>
          <Icon name="margin-bottom" size="sm" />
          <Range
            value={bottom}
            max={50}
            onChange={event => setBottom(event.target.valueAsNumber)}
          />
          <Value>
            {bottom}
          </Value>
        </ToolbarMenuRow>
        <ToolbarMenuRow>
          <Icon name="margin-left" size="sm" />
          <Range
            value={left}
            max={50}
            onChange={event => setLeft(event.target.valueAsNumber)}
          />
          <Value>
            {left}
          </Value>
        </ToolbarMenuRow>
      </ToolbarMenuSection>
    </ToolbarMenu>
  )
}

export default ToolbarMarginMenu;
