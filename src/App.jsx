import React, { useState } from "react";
import "./App.css";
import Form from "./Components/form";
import ApiFetch from "./Components/ApiFetch";
import Counter from "./Components/Counter";
import Todo from "./Components/Todo";

const App = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  function handleSubmit() {
    if(task.trim()===""){
      return
    }
    setTaskList([...taskList, task]);
    setTask("");
  }

  return (
    <>
      <h2>Todo</h2>

      <input
        type="text"
        value={task}
        placeholder="Enter your list "
        onChange={(e) => {
          setTask(e.target.value)
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {taskList.map((num,index) => (
          <li key={index} >{num}</li>
        ))}
      </ul>
     <Form/>
     <ApiFetch/>
     <Counter/>
     <Todo/>
    </>
  );
};

export default App;
