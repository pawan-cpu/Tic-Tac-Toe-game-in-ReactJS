import React from 'react';
import './Cell.css';
import classNames from 'classnames';

export const Cell = (props) => {

  const cellcontentclasses = classNames({
    'cell-content':true,
    populated:props.value
  });

  const cellclasses = classNames({
    'cell':true,
    winner:props.canHighlight
  });

  return (
    <button className={cellclasses} onClick={props.onClick} >
        <span className={cellcontentclasses}>{props.value}</span>
    </button>
  );
}
