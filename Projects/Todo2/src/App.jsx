import React, { useEffect, useState } from 'react'



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
    <div className='flex p-25 justify-center items-center flex-col '>
      <div className="">
        <h1 className='text-center font-bold text-2xl '>Todo</h1>
        <input type="text" className="h-12.5 w-lg border-2 border-gray-300 rounded-sm p-5 " value={input} placeholder='New task' onChange={(e)=> {setInput(e.target.value)}}/>
        <button className='w-20 h-12.5 rounded-sm font-bold bg-blue-600 ml-2' onClick={AddTask}>Add</button>
      </div>
      <div className="flex mt-8 gap-2.5 ">
        <input className="h-10 w-48 border-gray-700 rounded-sm " type="text" onChange={(e)=>setSearch(e.target.value)}/>
      </div>
      {
        filteredTasks.map(task => (
        <div className="flex text-center mt-10 justify-between w-lg border-2 border-gray-300 rounded-sm p-5">
        <div className="flex items-center gap-2.5">
          <input type="checkbox" onChange={()=> chec(task.id)} checked={task.checked}/>
          <p>{task.name}</p>
        </div>
        <button className='text-red-600' onClick={()=> Delete(task.id)} >Delete</button>
      </div>
        ))
      }
    </div>
  )
}
