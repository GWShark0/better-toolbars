import React from 'react';
import clamp from 'lodash/clamp';

import './Num.scss';

export function conformNumber(value = 0, ...args) {
  if (Number.isNaN(value)) return 0;
  return clamp(value, ...args);
}

function Num(props) {
  const { value, ...rest } = props;

  return (
    <input
      className="number"
      type="number"
      value={Number(value).toString()}
      {...rest}
    />
  );
}

Num.defaultProps = {
  value: 0,
};

export default Num;
