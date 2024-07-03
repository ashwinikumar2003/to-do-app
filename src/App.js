import React, { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState("")

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }])
      setTask("")
    }
  }

  const toggleCompletion = (index) => {
    const newTasks = [...tasks]
    newTasks[index].completed = !newTasks[index].completed
    setTasks(newTasks)
  }

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index)
    setTasks(newTasks)
  }

  return (
    <div className="app">
      <h1>Todo List</h1>
      <div className="input-container">
        <input 
          type="text" 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            <input 
              type="checkbox" 
              checked={task.completed} 
              onChange={() => toggleCompletion(index)} 
            />
            <span>{task.text}</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
