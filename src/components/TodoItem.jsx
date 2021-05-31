import React, { useState } from "react";

function TodoItem(props) {
  const [click, setClick] = useState(false);

  function handleClick(event) {
    const { value } = event.target;
    setClick((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div onClick={handleClick}>
      <li
        style={
          click
            ? { textDecoration: "line-through" }
            : { textDecoration: "underline" }
        }
      >
        {props.text}
      </li>
    </div>
  );
}

export default TodoItem;
