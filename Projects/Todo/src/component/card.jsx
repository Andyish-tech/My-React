import React from 'react'

export default function Card({title, description}) {
  return (
    <div className='bg-gray-100 p-20 w-70 h-70 m-10 rounded-xl'>
        <div className='bord'>
            <h2 className='text-blue-600 text-5xl'>{title}</h2>
            <p className='text-gray-500'>{description}</p>
        </div>
    </div>
  )
}

