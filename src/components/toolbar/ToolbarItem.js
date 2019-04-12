import React from 'react';
import classNames from 'classnames';
import Icon from '../Icon';

import './ToolbarItem.scss';

function ToolbarItem(props) {
  const { active, icon, ...rest } = props;
  const className = classNames(
    'toolbar-item',
    active && 'toolbar-item--active'
  );

  return (
    <button className={className} {...rest}>
      <Icon id={icon} />
    </button>
  )
}

export default ToolbarItem;
