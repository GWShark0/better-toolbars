import React, { useState } from 'react';
import ToolbarMenu from './ToolbarMenu';
import ToolbarMenuSection from './ToolbarMenuSection';
import ToolbarMenuRow from './ToolbarMenuRow';
import Range from '../Range';
import Num, { conformNumber } from '../Num';
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
          <Icon id="margin-top" size="sm" />
          <Range
            max={50}
            value={top}
            onChange={event => setTop(event.target.valueAsNumber)}
          />
          <Num
            max={50}
            value={top}
            onChange={event => setTop(conformNumber(event.target.valueAsNumber, 50))}
          />
        </ToolbarMenuRow>
        <ToolbarMenuRow>
          <Icon id="margin-right" size="sm" />
          <Range
            max={50}
            value={right}
            onChange={event => setRight(event.target.valueAsNumber)}
          />
          <Num
            max={50}
            value={right}
            onChange={event => setRight(conformNumber(event.target.valueAsNumber, 50))}
          />
        </ToolbarMenuRow>
        <ToolbarMenuRow>
          <Icon id="margin-bottom" size="sm" />
          <Range
            max={50}
            value={bottom}
            onChange={event => setBottom(event.target.valueAsNumber)}
          />
          <Num
            max={50}
            value={bottom}
            onChange={event => setBottom(conformNumber(event.target.valueAsNumber, 50))}
          />
        </ToolbarMenuRow>
        <ToolbarMenuRow>
          <Icon id="margin-left" size="sm" />
          <Range
            max={50}
            value={left}
            onChange={event => setLeft(event.target.valueAsNumber)}
          />
          <Num
            max={50}
            value={left}
            onChange={event => setLeft(conformNumber(event.target.valueAsNumber, 50))}
          />
        </ToolbarMenuRow>
      </ToolbarMenuSection>
    </ToolbarMenu>
  )
}

export default ToolbarMarginMenu;
