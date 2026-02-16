import React, { useState } from 'react'
import './App.css'


export default function App() {
  const[tasks,setTask]= useState([])
  const[input,setInput]=useState('')

  function AddTask(){
    const currentTask=[...tasks, {id:math.random(),name: input, checked:true}]
    setTask(currentTask);
    setInput("");
  }
  return (
    <div className='Container'>
      <div className="input">
        <h1>Todo</h1>
        <input type="text" value={input} placeholder='New task' onChange={(e)=> setInput(e.target.value)}/><button onClick={AddTask}>Add</button>
      </div>
      {
        tasks.map(task => (
        <div className="tasks">
        <div className="task-chec">
          <input type="checkbox" />
          <p>{task.name}</p>
        </div>
        <button >Delete</button>
      </div>
        ))
      }
    </div>
  )
}
