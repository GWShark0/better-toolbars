import React from 'react';
import classNames from 'classnames';

import './Icon.scss';

function Icon(props) {
  const { id, size, className, ...rest } = props;
  const classes = classNames(
    'icon',
    `icon-${id}`,
    size && `icon--${size}`,
    className,
  );

  return (
    <svg className={classes} {...rest}>
      <use xlinkHref={`#${id}`} />
    </svg>
  );
}

export default Icon;
