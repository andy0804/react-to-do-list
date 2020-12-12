import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import ListItems from "./ListItem";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);
function App() {
  let [currentItem, setCurrentItem] = useState({ text: "", key: "" });
  let [tasks, setTasks] = useState([]);
  const addTaskHandler = (e) => {
    e.preventDefault();
    if (currentItem.text) {
      console.log(tasks);
      tasks.push(currentItem);
      setTasks([...tasks]);
      setCurrentItem({ text: "", key: "" });
    }
  };

  const deleteItemHandler = (item) => {
    const updatedList = tasks.filter((i) => i.key !== item);
    setTasks([...updatedList]);
  };

  const editItemHandler = (item, value) => {
    const index = tasks.findIndex((i) => i.key == item);
    tasks[index].text = value;
    setTasks([...tasks]);
  };

  return (
    <div className="App">
      <header>
        <form onSubmit={(e) => addTaskHandler(e)} id="form-list">
          <input
            onChange={(e) =>
              setCurrentItem({ text: e.target.value, key: Date.now() })
            }
            value={currentItem.text}
            type="text"
            placeholder="Enter Text"
          />
          <button type="submit"> Add</button>
        </form>
      </header>
      <ListItems
        editItem={editItemHandler}
        deleteItem={deleteItemHandler}
        items={tasks}
      ></ListItems>
      {/* <ul>
        {tasks.map((element, index) => {
          return (
            <li key={index}>
              <div>{element.text}</div>
            </li>
          );
        })}
      </ul> */}
    </div>
  );
}

export default App;
