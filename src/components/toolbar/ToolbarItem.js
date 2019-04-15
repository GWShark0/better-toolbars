import React from 'react';
import classNames from 'classnames';

import './ToolbarItem.scss';

function ToolbarItem(props) {
  const { active, className, icon, inline, ...rest } = props;
  const classes = classNames(
    'toolbar-item',
    inline && 'toolbar-item--inline',
    active && 'toolbar-item--active',
    className,
  );

  return (
    <button className={classes} {...rest} />
  )
}

export default ToolbarItem;
