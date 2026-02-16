import React, { useEffect, useState } from 'react'
import './App.css'


export default function App() {
  const[tasks,setTask]= useState(JSON.parse(localStorage.getItem('tasks')) || [])
  const[input,setInput]=useState('')
  const[search, setSearch]=useState("")

  useEffect(()=>{
    if(tasks.length>0){
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
  },[tasks])

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
    const newTask= [...tasks].map(t=> t.id ==id ? {...t, checked:!t.checked} : t)
    setTask(newTask)
  }

  const filteredTasks=tasks.filter((t)=>t.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className='Container'>
      <div className="input">
        <h1>Todo</h1>
        <input type="text" value={input} placeholder='New task' onChange={(e)=> {setInput(e.target.value)}}/><button onClick={AddTask}>Add</button>
      </div>
      <div className="search">
        <input type="text" onChange={(e)=>setSearch(e.target.value)}/>
      </div>
      {
        filteredTasks.map(task => (
        <div className="tasks">
        <div className="task-chec">
          <input type="checkbox" onChange={()=> chec(task.id)} checked={task.checked}/>
          <p>{task.name}</p>
        </div>
        <button onClick={()=> Delete(task.id)} >Delete</button>
      </div>
        ))
      }
    </div>
  )
}
