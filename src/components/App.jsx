import React, { useState } from "react";
import TodoItem from "./TodoItem";

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  const [goingOver40, setGoingOver40] = useState(false);

  function handleChange(event) {
    const { value } = event.target;
    setItem(value);
    if (value.length > 40) {
      setGoingOver40(true);
    } else {
      setGoingOver40(false);
    }
  }

  function addItem() {
    if (
      !(
        item === "" ||
        item.trim() === "" ||
        item === undefined ||
        item.length === 0
      )
    ) {
      setList((prevValue) => {
        return [...prevValue, item];
      });
      setItem("");
    } else {
      alert("Thats empty!");
    }
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          onChange={handleChange}
          value={item}
          style={goingOver40 ? { color: "red" } : { color: "black" }}
        />
        <span class="text"></span>

        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((todoItem) => (
            <TodoItem text={todoItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
