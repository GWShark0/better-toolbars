import React from 'react';
import classNames from 'classnames';

import './Icon.scss';

function Icon(props) {
  const { name, size, className, ...rest } = props;
  const classes = classNames(
    'icon',
    `icon-${name}`,
    size && `icon--${size}`,
    className,
  );

  return (
    <svg className={classes} {...rest}>
      <use xlinkHref={`sprite.svg#${name}`} />
    </svg>
  );
}

export default Icon;
