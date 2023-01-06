import React from 'react';

function Cell(props) {
  return (

    <div onClick={props.onClick} className={props.className}>
      <div className={props.isActive?"true":undefined}>
      {props.children}
      </div>
    </div>
  );
}

export default Cell;
