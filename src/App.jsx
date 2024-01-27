import './App.css'
import React, { useState } from "react";
import arrayOfTasks from "./Data.js"
import Task from "./Task"

export default function App() {
  const [tasks, setTasks] = useState(arrayOfTasks)

  const onDeleteTask = (taskId) => {setTasks(tasks.filter(task => task.id !== taskId))}


  const taskElements = tasks.map(task => <Task key={task.id} task={task} onDeleteTask={onDeleteTask}/>)

  return (<main>
    <header><h1>TODO List</h1>
  </header> {taskElements}</main>)

}
