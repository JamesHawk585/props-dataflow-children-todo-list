import "./App.css";
import React, { useEffect, useState } from "react";
import Task from "./Task";
import Card from "./Card/Card.jsx";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5555/arrayOfTasks")
      .then((r) => r.json())
      .then(setTasks);
  }, []);

  // console.log("tasks in App.jsx: ", tasks);

  const taskElements = tasks.map((task) => {
    return <Task key={task.id} task={task} />;
  });

  // console.log("taskElements:", taskElements);


  return (
    <main>
      <header>
        <h1>TODO List</h1>
      </header>
      {taskElements}
    </main>
  );
}
