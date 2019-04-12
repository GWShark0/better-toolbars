import React from 'react';
import classNames from 'classnames';

import './ToolbarMenu.scss';

function ToolbarMenu(props) {
  const { className, ...rest } = props;
  const classes = classNames('toolbar-menu', className);

  return (
    <div className={classes} {...rest} />
  )
}

export default ToolbarMenu;
