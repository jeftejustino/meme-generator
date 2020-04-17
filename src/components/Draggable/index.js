import React, { useState, useEffect, useRef } from 'react';
import propTypes from 'prop-types';

import { Container } from './styles';

export default function Draggable({ option, onChange }) {
  const [dragging, setDragging] = useState(false);
  // const [pos1, setPos1] = useState(0);
  // const [pos2, setPos2] = useState(0);
  // const [pos3, setPos3] = useState(0);
  // const [pos4, setPos4] = useState(0);
  let pos1 = 0;
  let pos2 = 0;
  let pos3 = 0;
  let pos4 = 0;
  const dragRef = useRef(null);

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    // set the element's new position:
    dragRef.current.style.top = `${dragRef.current.offsetTop - pos2}px`;
    dragRef.current.style.left = `${dragRef.current.offsetLeft - pos1}px`;

    onChange({
      ...option,
      top: dragRef.current.offsetTop - pos2,
      left: dragRef.current.offsetLeft - pos1,
    });
  }

  function closeDragElement() {
    setDragging(false);
    document.onmousemove = null;
    document.onmouseup = null;
  }

  useEffect(() => {
    dragRef.current.onmousedown = e => {
      setDragging(true);
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmousemove = elementDrag;
      document.onmouseup = closeDragElement;
    };
  });

  return (
    <Container className="draggable" option={option} ref={dragRef}>
      {option.text}
    </Container>
  );
}

Draggable.propDefault = {
  option: propTypes.object.isRequired,
  onChange: propTypes.func.isRequired,
};
