import React from 'react'
import './App.css'

export default function App() {
  return (
    <div className='Container'>
      <div className="input">
        <h1>Todo</h1>
        <input type="text" placeholder='New task'/><button>Add</button>
      </div>
      <div className="tasks">
        <input type="checkbox" />
        <p></p>
        <button >Delete</button>
      </div>
    </div>
  )
}
