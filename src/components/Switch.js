import React from 'react';
import classNames from 'classnames';

import './Switch.scss';

function Switch(props) {
  const { className, ...rest } = props;
  const classes = classNames('switch', className);

  return (
    <div className={classes}>
      <input className="switch__input" type="checkbox" {...rest} />
      <span className="switch__decorator" />
    </div>
  );
}

export default Switch;
