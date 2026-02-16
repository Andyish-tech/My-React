import React, { useState } from 'react'
import './App.css'


export default function App() {
  const[tasks,setTask]= useState([])
  const[input,setInput]=useState('')

  function AddTask(){
    const currentTask=[...tasks, {id:Math.random(),name: input, checked:true}]
    setTask(currentTask);
    setInput("");
  }
  function Delete(id){
    const ask= window.confirm("Are you sure you want to delete Task")
    if(ask){
      const newTask = tasks.filter(task => task.id !== id);
      setTask(newTask)
    }else{
      return null
    }
  }

  function chec(id){
    const newtask
  }
  return (
    <div className='Container'>
      <div className="input">
        <h1>Todo</h1>
        <input type="text" value={input} placeholder='New task' onChange={(e)=> {setInput(e.target.value)}}/><button onClick={AddTask}>Add</button>
      </div>
      {
        tasks.map(task => (
        <div className="tasks">
        <div className="task-chec">
          <input type="checkbox" />
          <p>{task.name}</p>
        </div>
        <button onClick={()=> Delete(task.id)} >Delete</button>
      </div>
        ))
      }
    </div>
  )
}
